import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white bg-cyan-950 flex justify-between p-4">
      <Link href="/" className="contents">
        <Image
          src="/cinema-logo.png"
          alt="Cinema"
          width={70}
          height={100}
        />
      </Link>

      <nav className="m-1">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/login">
              <div className="hover:bg-sky-600 transition rounded p-2">
                <p>Entre ou <br /> Cadastre-se</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}