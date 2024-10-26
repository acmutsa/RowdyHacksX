import { Suspense } from "react";
import UserScheduleView from "@/components/schedule/UserScheduleView";
import ScheduleTimeline from "../dash/schedule/schedule-timeline";
import Loading from "@/components/shared/Loading";
import { getAllEvents } from "db/functions";
import { headers } from "next/headers";
import { VERCEL_IP_TIMEZONE_HEADER_KEY } from "@/lib/constants";
import { getClientTimeZone } from "@/lib/utils/client/shared";
import { Badge } from "@/components/shadcn/ui/badge";
import c from "config";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import Navbar from "@/components/shared/Navbar";
export default async function Page() {
	const sched = await getAllEvents();

	const currentEvent = sched.filter((e) => {
		const currentTime = new Date();
		return e.startTime < currentTime && e.endTime > currentTime;
	})[0];
	const userTimeZoneHeaderKey = headers().get(VERCEL_IP_TIMEZONE_HEADER_KEY);
	const userTimeZone = getClientTimeZone(userTimeZoneHeaderKey);
	return (
		<>
			<Suspense fallback={<Skeleton className="h-16 w-screen" />}>
				<Navbar />
			</Suspense>
			<div className="mx-auto my-8 flex h-fit w-10/12 flex-wrap items-center justify-between gap-y-4 md:my-16 md:w-3/4">
				<h1 className="mx-auto w-fit text-center text-5xl font-black md:ml-0 md:text-8xl">
					Schedule
				</h1>
				<div className="h-full w-full rounded-md border border-muted p-4 md:w-fit">
					<h3 className="text-sm font-black">Current</h3>
					<div>
						<p>
							{currentEvent?.title || "No current events"}{" "}
							{currentEvent && (
								<Badge
									variant={"outline"}
									className="h-fit"
									style={{
										borderColor: (
											c.eventTypes as Record<
												string,
												string
											>
										)[currentEvent?.type],
									}}
								>
									<p className="text-sm">
										{currentEvent?.type}
									</p>
								</Badge>
							)}
						</p>
					</div>
				</div>
			</div>

			<Suspense fallback={<Loading />}>
				{/* <UserScheduleView /> */}
				<ScheduleTimeline schedule={sched} timezone={userTimeZone} />
			</Suspense>
		</>
	);
}

export const runtime = "edge";
export const revalidate = 60;
