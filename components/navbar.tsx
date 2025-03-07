import { ModeToggle } from './toggle';
import Link from 'next/link';
import { AudioLines } from 'lucide-react';

export const Navbar = () => {
    return <div className="flex justify-between p-3">
        <Link href="/">
            <div className="flex pt-1">
                <div className="mr-2 flex flex-col justify-center">
                    <AudioLines fill="orange"/>
                </div>
                <div className="text-xl font-bold">Groove<span className="text-orange-500 font-bold">Sync</span></div>
            </div>
        </Link>
        <div className="flex flex-col justify-center pr-3"> 
            <ModeToggle />
        </div>
    </div>
}
