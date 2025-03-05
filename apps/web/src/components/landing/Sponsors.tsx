import { SponsorItem } from "./SponsorItem";
import partners from "./partners.json";
type Partner = {
	name: string;
	logo: string;
	url: string;
	tier: string;
};
export async function Sponsors() {
	const partnerList: Partner[] = partners.partners as Partner[];

	const titleSponsors = partnerList.filter((p) => p.tier === "title");
	const otherSponsors = partnerList.filter((p) => p.tier !== "title");

	return (
		<section className="mt-20 font-oswald">
			<div className="rounded-xl px-8 py-10">
				<div className="mb-28 py-10">
					<h1 className="flex justify-center bg-gradient-to-b from-orange-600 via-yellow-300 to-orange-600 bg-clip-text text-center font-bttf text-4xl text-transparent sm:text-5xl md:text-6xl">
						a huge thanks to our rowdyhacks partners
					</h1>
				</div>

				{titleSponsors.length > 0 && (
					<div className="mb-16 flex flex-wrap justify-center gap-8">
						{titleSponsors.map(({ name, url, logo, tier }) => (
							<SponsorItem
								key={name}
								name={name}
								url={url}
								logo={logo}
								tier={tier}
							/>
						))}
					</div>
				)}

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{otherSponsors.map(({ name, url, logo, tier }) => (
						<SponsorItem
							key={name}
							name={name}
							url={url}
							logo={logo}
							tier={tier}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
