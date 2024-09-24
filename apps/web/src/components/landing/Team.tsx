"use client";
import React, { useState, useEffect } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../shadcn/ui/carousel";
import { Person } from "./Person"; // Import the Person interface
import TeamMember from "./TeamMember";
import teamData from "./team.json"; // Importing the JSON data directly
import { Oswald } from "next/font/google";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

// Generates the image link based on the first and last name
function CreateImgLink(firstname: string, lastname: string) {
	return `/img/landing/team/${firstname}_${lastname}.jpg`;
}

const CarouselDefault = () => {
	const [team, setTeam] = useState<Person[]>([]); // Use the Person type
	const [data_rendered, setData_rendered] = useState(false); // Set to false initially

	const plugin = React.useRef(
		Autoplay({ delay: 2500, stopOnInteraction: true }),
	);

	useEffect(() => {
		const formattedTeam = teamData.team.map((member: any) => ({
			...member,
			imgLink: CreateImgLink(member.fname, member.lname), // Generate the image link
		}));
		setTeam(formattedTeam); // Set the formatted team data
		setData_rendered(true); // Set data rendered to true after formatting
	}, []);

	return (
		<>
			{data_rendered ? (
				<Carousel
					opts={{ align: "end", loop: true }}
					// @ts-ignore
					plugins={[plugin.current]}
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
					className="hidden max-w-7xl items-center justify-center md:flex md:w-[75%] xl:w-[85%] 2xl:w-full 2xl:max-w-[92rem]"
				>
					<CarouselContent>
						{team.map((p, index) => (
							<CarouselItem
								key={index}
								className="pl-1 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
							>
								<TeamMember person={p} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="border-none bg-transparent hover:cursor-pointer" />
					<CarouselNext className="border-none bg-transparent hover:cursor-pointer" />
				</Carousel>
			) : (
				<div className="hidden md:flex md:justify-center">
					<h1 className="text-3xl text-[#FEF2E6]">Loading...</h1>
				</div>
			)}
		</>
	);
};

const MobileTeam = () => {
	const [team, setTeam] = useState<Person[]>([]); // Use the Person type
	const [data_rendered, setData_rendered] = useState(false); // Set to false initially

	useEffect(() => {
		const formattedTeam = teamData.team.map((member: any) => ({
			...member,
			imgLink: CreateImgLink(member.fname, member.lname), // Generate the image link
		}));
		setTeam(formattedTeam); // Set the formatted team data
		setData_rendered(true); // Set data rendered to true after formatting
	}, []);

	return (
		<>
			{data_rendered ? (
				<div className="flex w-full flex-col items-center justify-center md:hidden">
					<div className="no-scrollbar grid w-[85%] grid-flow-col grid-rows-2 overflow-x-auto overflow-y-hidden">
						{team.map((p, index) => (
							<TeamMember person={p} key={index} />
						))}
					</div>
					<div className="flex w-full items-center justify-center">
						<h1 className="[@media (min-width)] pr-3 text-xl text-[#FEF2E6] sm:pr-5 sm:text-2xl">
							More Organizers
						</h1>
						<ArrowRight
							className="arrow_animate h-8 w-8 self-center pt-1 sm:h-10 sm:w-10"
							color="#FEF2E6"
						/>
					</div>
				</div>
			) : (
				<div className="tetx-3xl text-[#FEF2E6] md:hidden">
					Loading...
				</div>
			)}
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
				<MobileTeam />
			</div>
		</section>
	);
}
