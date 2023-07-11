"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

export default function Page({ params }: { params: { id: string } }) {
  const language = "tr-TR";
  const colorFrom = 255;
  const [movie, setMovie] = useState();

  const fetchMovieDetails = async () => {
    const api = `https://api.themoviedb.org/3/movie/${params.id}?language=${language}}`;
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDcyZWM3YmY0ZDIyODlhNzg5NjI0MDFlMTAwYTYzMCIsInN1YiI6IjY0YTZkMGM2MDM5OGFiMDBjYTIwYTM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8a-78GFoi2BgxJp1jf_-_4hW5M6p5kG2oxNT4TQD4aE";
    const req = await axios
      .get(api, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <main className="min-h-screen justify-between bg-[#96c3ec] mt-[50px]">
      <div>
        <Image
          alt="movieBanner"
          width={0}
          height={0}
          sizes="100vw"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          className="w-full h-auto"
        />
        <div className="p-4">
          <div className="flex no-scrollbar overflow-x-auto mb-4 ">
            {movie?.genres.map((e, _i) => (
              <div
                key={_i}
                className="whitespace-nowrap px-4 me-2 bg-gray-500 rounded-full text-white"
              >
                {e.name}
              </div>
            ))}
          </div>

          <p className="text-white mb-4"> {movie?.title}</p>
          <div className="flex mb-2">
            <div className="col me-2 text-gray-500">
              <AiFillLike size={35} />
            </div>
            <div className="col text-white mt-2">{movie?.vote_count}</div>
          </div>
          <div className="flex mb-2">
            <div className="col me-2 text-gray-500">
              <RiMoneyDollarBoxFill size={35} />
            </div>
            <div className="col text-white mt-2">{movie?.budget}</div>
          </div>
          <div className="flex mb-2">
            <div className="col me-2 text-gray-500">
              <BsBookmarkStarFill size={35} />
            </div>
            <div className="col text-white me-2 mt-2">
              {movie?.vote_average.toString().replace(".", ",")}puan
            </div>
            <div className="col mt-2">
              <div className="flex space-x">
                {Array.from(
                  {
                    length:
                      (movie?.vote_average - (movie?.vote_average % 2)) / 2,
                  },
                  () => Math.floor(Math.random() * 2)
                ).map((e, _i) => (
                  <div key={_i}>
                    <HiStar className="mt-1" color="#fff" />
                  </div>
                ))}
                <div>
                  <HiStar
                    className={`mt-1`}
                    color={`rgb(${parseInt(
                      colorFrom * ((movie?.vote_average % 2) / 2)
                    )}, ${parseInt(
                      colorFrom * ((movie?.vote_average % 2) / 2)
                    )}, ${parseInt(
                      colorFrom * ((movie?.vote_average % 2) / 2)
                    )})`}
                  />
                </div>
                {Array.from(
                  {
                    length: Math.trunc((10 - movie?.vote_average) / 2),
                  },
                  () => Math.floor(Math.random() * 2)
                ).map((e, _i) => (
                  <div key={_i}>
                    <HiStar className="mt-1" color="#000" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="col me-2 text-gray-500">
              <BiSolidHomeHeart size={35} />
            </div>
            <div className="col text-white mt-2">
              populerlik {movie?.popularity}
            </div>
          </div>
          <p className="text-white text-justify mt-4">{movie?.overview}</p>
        </div>
      </div>
    </main>
  );
}
