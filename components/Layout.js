import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>
            <Header/>

            <div className=' min-w-screen py-6 px-6 bg-gray-50'>
            {children}
            </div>
           <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'SEVA-U Webpage',
    description: 'Find the best Market app in India',
    keywords: 'seva-u, pappu, vegetables, fruits in india'
}