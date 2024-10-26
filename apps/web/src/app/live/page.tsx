"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function LivePage() {
	const streamUrl =
		"https://82934cf9c8696bd2.mediapackage.us-east-1.amazonaws.com/out/v1/0909ac7915bf450da5267c52f49797cb/index.m3u8";

	const videoRef = useRef(null);

	useEffect(() => {
		// Initialize HLS only if supported
		if (Hls.isSupported()) {
			const hls = new Hls();
			hls.loadSource(streamUrl);
			hls.attachMedia(videoRef.current!);

			hls.on(Hls.Events.MANIFEST_PARSED, () => {
				// TODO: WILL FIX LATER
				// @ts-ignore
				videoRef.current.play();
			});

			return () => {
				hls.destroy();
			};
		} else {
			// @ts-ignore
			if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
				// For Safari browsers where HLS is natively supported
				// @ts-ignore
				videoRef.current.src = streamUrl;
				// @ts-ignore
				videoRef.current.play();
			}
		}
	}, [streamUrl]);

	return (
		<div>
			<video
				ref={videoRef}
				controls
				width="1920"
				height="1080"
				style={{ maxWidth: "100%" }}
			/>
		</div>
	);
}
