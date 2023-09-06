import Link from "next/link"
import Image from "next/image"
import {NavLinks} from "@/constants/index"
import AuthProviders from "./authproviders"
import { GetUser } from "@/lib/session"
const Navbar =  async () =>{
    const session = await GetUser()
    return (
     <nav className=" flexbetween navbar" >
<div className=" flex-1 flexStart gap-10">
    <Link href="/">
<Image 
src="logo.svg"
width={115}
height={45}
alt="flx"
/>
    </Link>
    <ul className=" xl:flex hidden text-small gap-7">
{NavLinks.map((link) =>(
    <Link href={link.href} key={link.key }>
        {link.text}
        </Link>
))}
    </ul>
</div>
<div className=" flexcentre gap-4">
{session?.user ? (
    <>
    { session?.user?.image &&(
    <Image 
    src={session?.user?.image}
    alt=""
    width={40}
    height={40}
    />
    )
}
<Link href="/create-project">
     Share work
     </Link>

    </>
):(
<AuthProviders/>
)}

</div>

     </nav>
    )
}
export default Navbar