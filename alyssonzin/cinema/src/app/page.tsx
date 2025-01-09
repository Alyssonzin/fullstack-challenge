import Image from "next/image";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../components/ui/carousel";

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
        <section className="flex justify-center mt-6 mb-6">
          <Carousel className="w-[80%]">
            <CarouselContent className="-ml-10">
              <CarouselItem className="pl-10 basis-1/6">
                <MovieCard></MovieCard>
              </CarouselItem>
              <CarouselItem className="pl-10 basis-1/6">
                <MovieCard></MovieCard>
              </CarouselItem>
              <CarouselItem className="pl-10 basis-1/6">
                <MovieCard></MovieCard>
              </CarouselItem>
              <CarouselItem className="pl-10 basis-1/6">
                <MovieCard></MovieCard>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>

    </div>
  );
}
