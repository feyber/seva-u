import Link from 'next/link'
import useDarkMode from "./useDarkMode";
import Image from 'next/image';

export default function Header() {
  const [colorTheme, setTheme] = useDarkMode();
    return (
    <header>
        <div className=' flex justify-center items-center'>
        <div className='absolute mb-12 text-white font-bold'>
          <h1>Please click on the Button Bellow from mobile to install app and get deals.</h1>
        </div>
        <div className=' absolute mt-16 flex '>
                <div className='flex m-1 w-36 h-12 bg-white rounded-full justify-center items-center'>
                    <div>
                    <Link href='/' passHref>
                    <Image src='googleplay.png'className='cursor-pointer' width={45} alt=''/>
                    </Link>
                    </div>
                    <div className='mr-2'>
                    <div className='text-xs'><p>GET IT ON</p></div>
                    <div className='text-sm'><p>Google Play</p></div>                     
                    </div>
                </div>
                <div className='flex m-1 w-36 h-12 bg-white rounded-full justify-center items-center'>
                    <div className='mr-2'>
                    <Link href='/' passHref>
                    <Image src='ios.png'className='cursor-pointer' width={35} alt=''/>
                    </Link>
                    </div>
                    <div className='mr-2'>
                    <div className='text-xs'><p>GET IN ON</p></div>
                    <div className='text-sm'><p>APP Store</p></div>                     
                    </div>
                </div>
            </div>
        <div className='flex flex-row container space-x-4 divide-gray-400 absolute max-w-4xl bottom-60 h-40 bg-gray-50 rounded shadow justify-center items-center hover:shadow-2xl duration-700'> 
        <div className='flex flex-col mx-auto'>
        <div>
        <h1 className='text-3xl font-bold text-blue-900'>Mannish Awesome Store</h1>
        </div>
        <div>
          <p className='text-blue-900 mb-2'> Best Fruits, Vegetables and Grocery</p>
        </div>
        <div className='flex flex-row mb-2'>
        <Image src='telp.png' width={20} className='mr-2' alt='' />
        <p className='text-blue-900'>Phone Number: +44 7425508676</p>
        </div>
        <div className='flex flex-row'>
        <Image src='location.png' width={20} className='mr-2'alt='' />
        <p className='text-blue-900'>(52 chiswick wharf, london) </p>
        </div>
        </div>
        <div className='mx-auto w-1/2 flex flex-row justify-center items-center'>
          <div className='container bg-gray-200 rounded-lg mr-2'>
          <Image src='bannervideo.png' width={350} alt=''/>
          </div>
          <div className='mr-2'>Please click on the download <Link href='/blog/test' passHref><a className='text-blue-500'>link</a></Link> from mobile to install app and get deals.</div>
        </div>
        </div>
        <Image src='fotomarket.png'className='cursor-pointer' alt=''/>
        
        </div>
        
    </header>
    )
}
