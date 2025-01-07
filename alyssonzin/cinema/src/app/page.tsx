import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="bg-zinc-600 flex justify-between p-4">
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

      <main>
        <h2>Em cartaz</h2>
        <section className="flex flex-wrap gap-5 mt-6 mb-6 pr-16 pl-16">

          <article className="border">
            <div>
              <Image
                src="/matrix.webp"
                alt="Matrix"
                width={200}
                height={200}
                className="bg-cover"
              />
            </div>
            <p>Matrix</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
          </article>

          <article className="border">
            <div>
              <Image
                src="/matrix.webp"
                alt="Matrix"
                width={200}
                height={200}
              />
            </div>
            <p>Matrix</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
          </article>

          <article className="border">
            <div>
              <Image
                src="/matrix.webp"
                alt="Matrix"
                width={200}
                height={200}
              />
            </div>
            <p>Matrix</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
          </article>

          <article className="border">
            <div>
              <Image
                src="/matrix.webp"
                alt="Matrix"
                width={200}
                height={200}
              />
            </div>
            <p>Matrix</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
          </article>

          <article className="border">
            <div>
              <Image
                src="/matrix.webp"
                alt="Matrix"
                width={200}
                height={200}
              />
            </div>
            <p>Matrix</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
          </article>

          <article className="border">
            <div>
              <Image
                src="/matrix.webp"
                alt="Matrix"
                width={200}
                height={200}
              />
            </div>
            <p>Matrix</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
          </article>

          <article className="border">
            <div>
              <Image
                src="/matrix.webp"
                alt="Matrix"
                width={200}
                height={200}
              />
            </div>
            <p>Matrix</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
          </article>

          <article className="border">
            <div>
              <Image
                src="/matrix.webp"
                alt="Matrix"
                width={200}
                height={200}
              />
            </div>
            <p>Matrix</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
          </article>
        </section>
      </main>

    </div>
  );
}
