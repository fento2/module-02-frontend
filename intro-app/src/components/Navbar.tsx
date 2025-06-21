import Link from "next/link";

function Navbar(){
    return (
        <nav id="navbar">
            <ul id="nav-menu">
                <li>
                <Link href="/">Home</Link>
                    </li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;