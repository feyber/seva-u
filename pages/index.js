import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'
import Link from 'next/link'


export default function Home({posts}) {
  return (
    <div className='mt-32 bg-gray-50'>
      <div className='mx-auto max-w-3xl flex'>
        {posts.map((post, index)=> (
         <Post key={index} post={post}/>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center mt-20'>
        <div><h1 className='text-xl text-blue-900'>Recommendations for you</h1></div>
        <div><p className='text-blue-900'>Big Deals For You!</p></div>
        <div className='mt-8 flex flex-row max-w-4xl'>
        <div className='mr-2 relative'>
                    <Link href='/' passHref>
                    <img src='banner4.png'className='cursor-pointer' width={369}/>
                    </Link>
            <div className='absolute container top-2 w-8 h-8 bg-white rounded-lg left-4'>
            <img src='favicon.ico'/>
            </div>
            <div className='absolute bottom-4 text-white left-2 font-thin'>Get Es.150 on First Rs.500 Order from App</div>
        </div>
        <div className='mr-2 relative'>
                    <Link href='/' passHref>
                    <img src='banner5.png'className='cursor-pointer' width={369}/>
                    </Link>
                    <div className='absolute container top-2 w-8 h-8 bg-white rounded-lg left-4'>
            <img src='favicon.ico'/>
            </div>
                    <div className='absolute bottom-4 text-white left-2 font-thin'>Get Es.150 on First Rs.500 Order from App</div>
        </div>
        <div className='mr-2 relative'>
                    <Link href='/' passHref>
                    <img src='banner6.png'className='cursor-pointer' width={369}/>
                    </Link>
                    <div className='absolute container top-2 w-8 h-8 bg-white rounded-lg left-4'>
            <img src='favicon.ico'/>
            </div>
                    <div className='absolute bottom-4 text-white left-2 font-thin'>Get Es.150 on First Rs.500 Order from App</div>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export async function getStaticProps(){
  // ambil file dari post folder
  const files = fs.readdirSync(path.join('posts'))

  // ambil slug dan frontmatter dari post
  const posts = files.map(filename => {
    //buat slug
    const slug = filename.replace('.md', '')

    //buat frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}