import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='flex flex-col items-center justify-center h-56 bg-gradient-to-r from-green-400 to-indigo-900' >
            <div className='text-white items-center justify-center flex flex-col'>
            <h1 className="text-2xl font-sans font-thin tracking-wider">Try Seva-U</h1>
            <h1 className='mx-auto text-justify tracking-wide text-lg font-extralight'>
            Download Seva-U for free, simple, Easy to use on iOS and Android.
            </h1>
            </div>
            <div className='mt-4 flex '>
                <div className='flex m-1 w-36 h-12 bg-white rounded-full justify-center items-center'>
                    <div>
                    <Link href='/' passHref>
                    <img src='googleplay.png'className='cursor-pointer' width={45}/>
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
                    <img src='ios.png'className='cursor-pointer' width={35}/>
                    </Link>
                    </div>
                    <div className='mr-2'>
                    <div className='text-xs'><p>GET IN ON</p></div>
                    <div className='text-sm'><p>APP Store</p></div>                     
                    </div>
                </div>
            </div>
        </footer>
    )
}