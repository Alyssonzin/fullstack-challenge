import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="text-white bg-zinc-600 flex justify-between p-4">
        <Link href="/" className="contents">
          <Image
            src="/cinema-logo.png"
            alt="Cinema"
            width={70}
            height={100}
          />
        </Link>

        <nav className="flex items-center m-4">
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}