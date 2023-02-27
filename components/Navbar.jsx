import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"

const Navbar = () => {
    return ( 
        <div className="flex justify-between p-8 items-center">
        <Link href={'./'}>
          <Image className="text-2xl" src={logo} height="100" width="250" alt="logo"/>
        </Link>
        <ul className="flex gap-20 px-4 text-xl font-semibold">
          <Link href={'./clans'} className="hover:underline">
            Clans
          </Link >
          <Link href={'./tournaments'} className="hover:underline">
            Tournaments
          </Link>
          <Link href={'./cards'} className="hover:underline">
            Cards
          </Link>
          <Link href={'./challenges'} className="hover:underline">
            Challenges
          </Link>
        </ul>
      </div>
     );
}
 
export default Navbar;