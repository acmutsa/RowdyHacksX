import ShinyLogo from "./ShinyLogo";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<main className="relative flex h-screen w-screen flex-col items-center justify-center">
			<div
				className={`z-20 mx-4 flex flex-col items-center space-y-3 md:flex-row md:space-y-0`}
			>
				<ShinyLogo />
				<h1 className="bg-gradient-to-b from-orange-600 via-yellow-300 to-orange-600 bg-clip-text p-5 pl-2 font-bttf text-5xl text-transparent sm:text-7xl lg:text-8xl">
					<span className="text-7xl sm:text-8xl md:text-[length:inherit]">
						{"HACK<"}
					</span>
					<br />
					{"&future>"}
				</h1>
			</div>
			<div
				className={
					"z-20 mx-2 mb-4 flex -translate-y-4 items-center text-center font-mono text-xl font-bold italic text-orange-400 md:mx-0 2xl:translate-x-[30px] 2xl:text-3xl"
				}
			>
				<p className={"text-md mb-[6px] mr-3 2xl:mb-[15px]"}>
					Presented by{" "}
				</p>
				<Image
					className={"w-[120px] 2xl:w-[220px]"}
					src={"/img/SWIVEL Knockout-w.svg"}
					alt={"Swivel Logo"}
					width={0}
					height={0}
				/>
			</div>
			<p className="z-20 mx-2 mb-4 text-center font-mono text-xl font-bold italic text-orange-400 md:mx-0 2xl:text-3xl">
				October 26th - 27th 2024
			</p>
			<h1 className="w-full text-center font-mono text-orange-400 md:text-lg">
				SAN PEDRO I, UTSA
			</h1>
			<div className="relative w-full duration-150 ease-in-out hover:scale-125">
				<Link href={"/register"}>
					<div className="relative mx-auto my-10 max-w-[250px] lg:max-w-[475px]">
						<div className="register-clip absolute z-[5] mx-auto flex h-[64px] w-full max-w-[500px] items-center justify-center bg-white hover:cursor-pointer">
							<h2 className="bg-gradient-to-b from-orange-600 via-yellow-300 to-orange-600 bg-clip-text px-2 font-bttf text-2xl text-transparent lg:mt-3 lg:text-5xl">
								register
							</h2>
						</div>
						<div className="register-clip absolute mx-auto flex h-[64px] w-full max-w-[500px] translate-y-2 items-center justify-center bg-orange-400 hover:cursor-pointer"></div>
						<div className="register-clip absolute mx-auto flex h-[64px] w-full max-w-[500px] translate-y-2 items-center justify-center bg-orange-400 hover:cursor-pointer"></div>
					</div>
				</Link>
			</div>
		</main>
	);
}

function Overlay() {
	return (
		<div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-screen select-none p-5 pt-16">
			<div className="relative h-full w-full">
				<p className="absolute bottom-0 left-0 w-full text-center font-mono text-orange-400">
					ROWDYHACKS X · SAN PEDRO I, UTSA
				</p>
			</div>
		</div>
	);
}
