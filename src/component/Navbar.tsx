import Link from "next/link";
import Image from "next/image";
import style from "@/styles/Navbar.module.css"

export default function Navbar () {
    return (
        <nav className={style.navbar}>
            <div className={style.logo}>
                <Image src={'/images/pokeball.png'} width={30} height={30} alt="pokeball" />
                <h1>PokeNext</h1>
            </div>
            <ul className={style.link_items}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    )
}