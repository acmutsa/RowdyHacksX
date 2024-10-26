import Image from "next/image";
import Link from "next/link";
import { Partner } from "@/lib/utils/shared/types";

const capitalize = (input: string) =>
	input.charAt(0).toUpperCase() + input.slice(1);

const tierColorMap = {
	title: "text-[#E817C6]",
	gold: "text-yellow-600",
	silver: "text-gray-400",
	bronze: "text-[#a97142]",
	partner: "text-[#17C6E8]",
} as const;

export function SponsorItem({ name, logo, tier, url }: Partner) {
	const textColor = tierColorMap[tier];
	const isTitle = tier === "title";

	return (
		<Link
			href={url}
			className={`group flex flex-col justify-center text-center ${
				isTitle ? "w-full max-w-2xl" : "w-full"
			}`}
		>
			<div>
				<div className="relative z-50 rounded-xl border-2 border-[#ea580c] bg-white transition-transform lg:group-hover:-translate-y-6">
					<div
						className={`flex items-center justify-center p-4 ${
							isTitle ? "h-96" : "h-60"
						}`}
					>
						<Image
							src={logo}
							height={isTitle ? 300 : 200}
							width={isTitle ? 300 : 200}
							alt={`${name}'s Logo`}
							className="object-contain"
						/>
					</div>
				</div>
				<div
					className={`invisible ${textColor} relative ${
						isTitle ? "bottom-32" : "bottom-20"
					} z-10 transition-all duration-200 ease-linear lg:group-hover:visible lg:group-hover:bottom-0`}
				>
					<h1
						className={`mb-2 font-semibold ${
							isTitle ? "text-6xl" : "text-2xl"
						}`}
					>
						{name}
					</h1>
					<h1 className={isTitle ? "text-4xl" : "text-xl"}>
						{capitalize(tier)} Sponsor
					</h1>
				</div>
			</div>
		</Link>
	);
}
