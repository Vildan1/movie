"use client";
import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";
import Navbar from "./components/Navbar";

interface Movie {
	id: number;
	title: string;
	vote_average: number;
	vote_count: number;
}

export default function Home() {
	const [movies, setMovies] = useState<Movie[]>([]);

	const language = "tr-TR";
	const page = "1";

	const fetchMovies = async () => {
		const api = `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`;
		const token =
			"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDcyZWM3YmY0ZDIyODlhNzg5NjI0MDFlMTAwYTYzMCIsInN1YiI6IjY0YTZkMGM2MDM5OGFiMDBjYTIwYTM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8a-78GFoi2BgxJp1jf_-_4hW5M6p5kG2oxNT4TQD4aE";
		const req = await axios
			.get(api, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) =>
				setMovies(bubbleSort(response.data.results.slice(0, 10)))
			)
			.catch((error) => console.log(error));
	};

	function bubbleSort(arr: any[]) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (arr[j + 1].vote_average < arr[j].vote_average) {
					[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				}
			}
		}
		return arr.reverse();
	}

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<>
			<Navbar screen={"home"} title={"MOVIEPARK"} isVisible={true} />
			<main className="bg-[#96c3ec] px-8 pt-2 relative">
				<div className="flex text-white justify-center text-base font-semibold">
					En Popüler İlk 10 Film Listesi
				</div>
				<div>
					{movies.map((e, _i) => (
						<Link key={_i} href={`/${e.id}`}>
							<div className="w-full border-solid border-b-2 border-gray-400 mt-4 text-base cursor-pointer	">
								<div className=" flex-col justify-center text-white mb-2 line-clamp-2 ">
									{_i + 1} - {e.title}
								</div>
								<div className="flex flex-row j w-full mb-2 text-base">
									<div className="flex mr-2">
										<AiFillLike
											size={16}
											className="mr-1 mt-0.5 text-gray-500"
										/>{" "}
										{e.vote_average.toString().replace(".", ",")}
									</div>
									<div className="flex">{e.vote_count} Oy</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</main>
		</>
	);
}
