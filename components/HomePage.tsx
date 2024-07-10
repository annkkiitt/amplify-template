import Image from 'next/image';
import HomePageImage from '../images/homePage.jpg'
import { Button } from "@/components/ui/button"
import Link from 'next/link';


const HomePage = ()=>{
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className="flex justify-between w-full max-w-screen-lg">
                <div className="p-4 flex flex-col justify-center gap-5">
                    <div className='text-5xl font-semibold text-[#45474B]'>
                        Welcome to Brief Brain
                    </div>

                    <div>
                        <Button>
                            <span className='text-md'><Link href='/brief'>Start briefing</Link></span>
                        </Button>
                    </div>
                </div>

                <div className="h-full w-96">
                    <Image src={HomePageImage} alt='Loading...' className='rounded-xl'/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;