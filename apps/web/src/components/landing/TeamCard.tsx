import { Card } from "@/components/shadcn/ui/card";
import Image from "next/image";
import {Github, Instagram, Linkedin} from "lucide-react";
import Link from "next/link";

type TeamCardProps  = {
    person: Person;
}

export default function TeamCard({person}: TeamCardProps) {

    let borderColor, mainColor, glowColor, textColor

    switch (person.team) {
        case "Director":
        case "Co-Director":
            borderColor = "linear-gradient(to bottom right, #EA580C, #FDE047, #EA580C)"
            mainColor = "#1E40AF"
            glowColor = "#4664D7"
            textColor = "white"
            break
        case "Logistics / PR":
        case "Logistics":
            borderColor = "linear-gradient(to bottom right, #629584, #243642, #629584)"
            mainColor = "#387478"
            glowColor = "#CBD9D0"
            textColor = "white"
            break
        case "Hacker Experience":
            borderColor = "linear-gradient(to bottom right, #7E60BF, #E4B1F0, #7E60BF)"
            mainColor = "#433878"
            glowColor = "#FFE1FF"
            textColor = "white"
            break
        case "Tech / Logistics":
        case "Tech":
            borderColor = "linear-gradient(to bottom right, #A0153E, #5D0E41, #A0153E)"
            mainColor = "#00224D"
            glowColor = "#FF204E"
            textColor = "white"
            break
        case "Media":
            borderColor = "linear-gradient(to bottom right, #B17457, #D8D2C2, #B17457)"
            mainColor = "#4A4947"
            glowColor = "#FAF7F0"
            textColor = "white"
            break
        case "Public Relations":
            borderColor = "linear-gradient(to bottom right, #D3EE98, #A0D683, #D3EE98)"
            mainColor = "#72BF78"
            glowColor = "#F3C623"
            textColor = "white"
            break
        case "Design":
            borderColor = "linear-gradient(to bottom right, #FFB0B0, #FFD09B, #FFB0B0)"
            mainColor = "#CB80AB"
            glowColor = "#FFECC8"
            textColor = "white"
            break
    }

    return (
        <>
            <div className={"group [perspective:1000px]"}>
                <div className={"relative transform-gpu [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]"} >
                    <div className={"absolute inset-0"}>
                        <Card className={"w-64 min-h-[400px] mx-auto flex flex-col justify-center relative drop-shadow-md"}
                            style={{backgroundImage: borderColor}}>
                            <div
                                className={"h-[365px] mx-4 flex flex-col content-end overflow-hidden border-4 rounded-md border-transparent relative]"}
                                style={{backgroundColor: mainColor}}>
                                <div
                                    className={"flex-none flex flex-row-reverse content-center justify-between gap-2 z-10 min-h-[36px] max-h-[36px]"}>
                                    <Image src={"/img/logo/rhbttf.svg"} alt={"logo"} width={30} height={0}
                                           className={"mr-1"}/>
                                    <h4
                                        className={`text-${person.nameSize}xl text-left font-oswald]`}
                                        style={{textShadow: `3px 3px 3px ${glowColor}`, color: textColor}}
                                    >
                                        {person.name}
                                    </h4>
                                </div>
                                <div className={"relative flex-col grow overflow-hidden border-4"}>
                                    <Image
                                        src={person.professionalPicture.link}
                                        alt={`${person.name} professional`}
                                        width={300} height={0}
                                        className={`bg-center object-cover w-full absolute rounded-md`}
                                        style={{
                                            scale: person.professionalPicture.zoom,
                                            translate: `${person.professionalPicture.x}px ${person.professionalPicture.y}px`
                                        }}
                                    />
                                </div>
                                <p className={"z-10 flex-none text-right text-3xl absolute bottom-4 right-4"}
                                   style={{textShadow: `3px 3px 3px ${glowColor}`}}>{person.team}</p>
                            </div>
                        </Card>
                    </div>
                    <div className={"absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]"}>
                        <Card className={"w-64 min-h-[400px] mx-auto flex flex-col justify-center relative drop-shadow-md"}
                              style={{backgroundImage: borderColor}}>
                            <div
                                className={"h-[365px] mx-4 flex flex-col content-end overflow-hidden border-4 rounded-md border-transparent relative"}
                                style={{backgroundColor: mainColor}}>
                                <div className={"flex-none flex flex-row-reverse content-center justify-between gap-2 z-10 min-h-[36px] max-h-[36px]"}>
                                    <Image src={"/img/logo/rhbttf.svg"} alt={"logo"} width={30} height={0}
                                           className={"mr-1"}/>
                                    <h4
                                        className={`text-${person.nameSize}xl text-left font-oswald`}
                                        style={{textShadow: `3px 3px 3px ${glowColor}`}}
                                    >
                                        {person.name}
                                    </h4>
                                </div>
                                <div className={"relative flex-col grow overflow-hidden border-4"}>
                                    <Image
                                        src={person.personalityPicture.link}
                                        alt={`${person.name} Personality`}
                                        width={300}
                                        height={0}
                                        className={`bg-center object-cover w-full absolute rounded-md`}
                                        style={{scale:person.personalityPicture.zoom,
                                                translate:`${person.personalityPicture.x}px ${person.personalityPicture.y}px`}}
                                    />
                                </div>
                                <div className={"z-10 flex-none text-center text-3xl absolute bottom-4 inset-x-0 flex flex-row justify-center gap-x-5"}>
                                    {person.linkedin ? <Link className={"shadow-2xl shadow-black p-1 rounded-md"} style={{backgroundColor: mainColor}} href={person.linkedin}><Linkedin/></Link> : null}
                                    {person.github   ? <Link className={"shadow-2xl shadow-black p-1 rounded-md"} style={{backgroundColor: mainColor}} href={person.github}><Github/></Link> : null}
                                    {person.personal ? <Link className={"shadow-2xl shadow-black p-1 rounded-md"} style={{backgroundColor: mainColor}} href={person.personal}><Instagram/></Link> : null}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}