"use client";
import React, { useState, useEffect } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../shadcn/ui/carousel";
import { Oswald } from "next/font/google";
import Autoplay from "embla-carousel-autoplay";
import TeamCard from "@/components/landing/TeamCard";
import axios from "axios";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

const CarouselDefault = () => {
	const [team, setTeam] = useState<Person[]>([]);
	const [loading, setLoading] = useState(true);

	const plugin = React.useRef(
		Autoplay({ delay: 2500, stopOnInteraction: true }),
	);

	// LOAD TEAM
	useEffect(() => {
		setLoading(true);
		axios.get<Team>("/team.json").then((res) => {
			setTeam(res.data.team)
		})
		setLoading(false);
	}, []);


	if (loading || team === undefined) return <div>Loading...</div>
	if (team.length === 0) return <div>No team members found.</div>

	return (
		<>
			<Carousel
				opts={{ align: "center", loop: true }}
				plugins={[plugin.current]}
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
				className={"w-full flex flex-row max-w-fit"}
			>
				<CarouselContent className={"-ml-1"}>
					{team.map((p, index) => (
						<CarouselItem
							key={index}
							className={"pl-1 min-h-[450px] basis-1/4 min-w-[450px]"}
						>
							<TeamCard person={p}/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="border-none bg-transparent hover:cursor-pointer mx-12" />
				<CarouselNext className="border-none bg-transparent hover:cursor-pointer mx-12" />
			</Carousel>
		</>
	);
};

export default function Team() {
	return (
		<section
			className={`${oswald.className} flex h-full w-full flex-col space-y-20 bg-cover bg-no-repeat pb-20`}
		>
			<div className="mx-auto flex w-full items-center justify-center">
				<h1 className="pt-10 text-center font-oswald text-xl font-bold italic text-[#FEF2E6] sm:text-3xl md:text-4xl lg:text-5xl">
					Meet The Team That Made RowdyHacks X Possible!
				</h1>
			</div>
			<div className="flex h-full w-full items-center justify-center">
				<CarouselDefault />
			</div>
		</section>
	);
}
