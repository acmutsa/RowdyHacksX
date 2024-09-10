export default function TrailerSection() {
    return (
        <section
            className={"w-full items-center flex justify-center min-h-[50vh] border-t-2 bg-white border-muted-foreground sm:p-8 p-1 py-8 md:px-10"}>
            <div>
                <h1 className={"font-bttf pl-0 pr-2 sm:text-4xl text-4xl bg-gradient-to-b from-orange-600 via-yellow-300 text-transparent bg-clip-text to-orange600 flex justify-center mb-4"}>trailer</h1>
                <div className={"sm:w-[600px] lg:w-[1200px]"}>
                    <div className={"sm:h-[315px] lg:h-[630px]"}>
                        <iframe
                            className={"rounded-lg border-blue-900 border-4 shadow-md w-full h-full"}
                            src="https://www.youtube.com/embed/zKyUaKhMSgQ?si=b164z-0mBg7F7yKV"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}