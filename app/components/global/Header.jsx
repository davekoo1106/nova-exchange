import Image from "next/image";
import Link from "next/link";
import { novaLogoBlack} from "../../assets";

export default function Header() {
    return (
        <nav className="">
            <div className="flex items-center justify-center">
                
                <Link href={'#'} className="ml-20">
                    <Image className="w-32" src={ novaLogoBlack }/>
                </Link>

                <div className="flex gap-5 justify-center items-center">
                    <ul className="flex justify-between items-center gap-5 m-3">
                        <Link href={'#'}>
                            <li className="">Portfolio</li>
                        </Link>
                        <Link href={'#'}>
                            <li className="">Trade</li>
                        </Link>
                        <Link href={'#'}>
                            <li className="">News</li>
                        </Link>
                    </ul>
                </div>

                <div className="">
                    <ul className="flex gap-5">
                        <Link href={'#'}>
                            <li className="bg-slate-300 p-2 rounded-full">Login</li>
                        </Link>

                        <Link href={'#'}>
                            <li className="bg-slate-300 p-2 rounded-full">Sign Up</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </nav>
    )
}