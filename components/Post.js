import Link from 'next/link'
import Image from 'next/image'

export default function Post({post}) {
    return (
        <div className='mx-auto w-8/12 p-4 rounded-lg shadow-sm border-2 mr-4 hover:shadow-lg'>
            <Image src={post.frontmatter.cover_image} alt='' />
            <div>Post on: {post.frontmatter.date}</div>
            <h3 className='text-xl font-bold'>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>

            
            <Link href={`/blog/${post.slug}`}>
                <a className='inline-block bg-blue-400 text-white border-0 py-2 px-4 rounded-md cursor-pointer text-base font-sans'>Read More</a>
            </Link>
            
        </div>
    )
}
