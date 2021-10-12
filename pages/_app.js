import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    
    <main className='container py-6 px-6 bg-gray-50'>
    <Component {...pageProps} />
    </main>
    </Layout>
  ) 
}

export default MyApp
