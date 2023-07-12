// @ts-nocheck
"use client";
import axios from "axios";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import { AiFillLike } from "react-icons/ai";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import Navbar from "../components/Navbar";

interface Movie {
	title: string;
	backdrop_path: string;
	genres: { name: string }[];
	vote_count: number;
	budget: number;
	vote_average: number;
	popularity: number;
	overview: string;
}

interface PageProps {
	params: { id: string };
}
export default function Page({ params }: PageProps) {
	const language = "tr-TR";
	const colorFrom = 255;
	const [movie, setMovie] = useState<Movie | null>(null);
	const textRef = useRef(null);
	const [isTextVisible, setIsTextVisible] = useState(true);

	const fetchMovieDetails = async () => {
		if (params.id) {
			const api = `https://api.themoviedb.org/3/movie/${params.id}?language=${language}}`;
			const token =
				"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDcyZWM3YmY0ZDIyODlhNzg5NjI0MDFlMTAwYTYzMCIsInN1YiI6IjY0YTZkMGM2MDM5OGFiMDBjYTIwYTM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8a-78GFoi2BgxJp1jf_-_4hW5M6p5kG2oxNT4TQD4aE";
			const req = await axios
				.get(api, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => setMovie(response.data))
				.catch((error) => console.log(error));
		}
	};

	useEffect(() => {
		fetchMovieDetails();
	}, [params.id]);

	useEffect(() => {
		const text: any = textRef.current;

		const handleVisible = (e: any) => {
			const [ea] = e;
			if (ea.isIntersecting) {
				setIsTextVisible(true);
			} else {
				setIsTextVisible(false);
			}
		};

		const observer = new IntersectionObserver(handleVisible);

		observer.observe(text);
		return () => {
			observer.unobserve(text);
		};
	}, []);

	const moneyFormat = (money: number | undefined): string => {
		if (money === 0 || money === undefined) {
			return "0";
		}

		let resultAsMillion = Math.floor(money / 1000000);

		if (resultAsMillion > 0) {
			return `${resultAsMillion} M`;
		}

		let resultAsTousand = Math.floor(money / 1000);

		return `${resultAsTousand} K`;
	};

	return (
		<>
			<Navbar
				screen={"details"}
				title={movie?.title}
				isVisible={isTextVisible}
			/>
			<main className="bg-[#96c3ec] h-auto min-h-screen">
				<div>
					{movie?.backdrop_path && (
						<Image
							alt="movieBanner"
							width={0}
							height={0}
							sizes="100vw"
							src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
							className="w-full h-auto"
						/>
					)}
					<div className="p-4">
						<div className="flex no-scrollbar overflow-x-auto mb-4 ">
							{movie?.genres.map((e, _i) => (
								<div
									id="title"
									key={_i}
									className="whitespace-nowrap px-4 me-2 bg-gray-500 rounded-full text-white"
								>
									{e.name}
								</div>
							))}
						</div>

						<p ref={textRef} className="text-white mb-4">
							{movie?.title}
						</p>
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
							<div className="col text-white mt-2">
								{moneyFormat(movie?.budget)}
							</div>
						</div>
						<div className="flex mb-2">
							<div className="col me-2 text-gray-500">
								<BsBookmarkStarFill size={35} />
							</div>
							<div className="col text-white me-2 mt-2">
								{movie?.vote_average?.toFixed(1).toString().replace(".", ",")}{" "}
								puan
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
											length: Math.trunc((10 - (movie?.vote_average ?? 0)) / 2),
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
								Populerlik {parseInt(movie?.popularity)}
							</div>
						</div>
						<p className="text-white text-justify mt-4">{movie?.overview}</p>
						{movie?.id == "569094" ? (
							<>
								<Image
									alt="movieBanner"
									width={0}
									height={0}
									sizes="100vw"
									src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
									className="w-full h-auto"
								/>
								<Image
									alt="movieBanner"
									width={0}
									height={0}
									sizes="100vw"
									src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
									className="w-full h-auto"
								/>
								<Image
									alt="movieBanner"
									width={0}
									height={0}
									sizes="100vw"
									src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
									className="w-full h-auto"
								/>
								<Image
									alt="movieBanner"
									width={0}
									height={0}
									sizes="100vw"
									src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
									className="w-full h-auto"
								/>
								<Image
									alt="movieBanner"
									width={0}
									height={0}
									sizes="100vw"
									src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
									className="w-full h-auto"
								/>
								<Image
									alt="movieBanner"
									width={0}
									height={0}
									sizes="100vw"
									src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
									className="w-full h-auto"
								/>
							</>
						) : null}
					</div>
				</div>
			</main>
		</>
	);
}
