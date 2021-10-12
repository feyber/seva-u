import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Image from 'next/image'

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
    return (
        <div className='mx-auto max-w-4xl mt-32'>
           <Link href='/'>
           <a className='inline-block bg-gray-100 hover:shadow text-black border-0 py-2 px-4 rounded-md cursor-pointer text-base font-sans mb-5'>Go Back</a>
           </Link>
           <div className='rounded-lg shadow-sm border-2 mr-4 hover:shadow-lg card-page py-4 px-7'>
        <h1 className='text-3xl my-3'>{title}</h1>
        <div className='mb-5 py-1 px-3 bg-gray-50'>Posted on {date}</div>
        <Image src={cover_image} alt='' className="rounded"/>
        <div className='mx-auto max-w-4xl text-xl font-bold my-3 text-justify p-2'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
  
    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }))
  
    return {
      paths,
      fallback: false,
    }
  }
  export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', slug + '.md'),
      'utf-8'
    )
  
    const { data: frontmatter, content } = matter(markdownWithMeta)
  
    return {
      props: {
        frontmatter,
        slug,
        content,
      },
    }
  }