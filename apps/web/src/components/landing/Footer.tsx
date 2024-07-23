"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Github } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "../shadcn/ui/dropdown-menu";

interface Props {
  className?: string;
}

interface LinkData {
  name: string;
  link: string;
}

function linkItem(name: string, link: string): LinkData {
  return { name, link };
}

// Maybe source this from the configuration file so that other hackathons can define their links in a more declarative way.
const dropdownItemMap = {
  Resources: [
    linkItem("Register", "/register"),
    linkItem("FAQ", "/faq"),
    linkItem("Code of Conduct", "/conduct"),
    linkItem("Contact Us", "/contact"),
    linkItem("ACM-W", "https://acmutsa.org/suborg_acmw/"),
    linkItem("ACM UTSA", "https://acmutsa.org/"),
  ],
  Links: [linkItem("Open Source", "https://acmutsa.org/")],
  "Other Hackathons": [
    linkItem("CodeQuantum", "/"),
    linkItem("RowdyDatathon", "/"),
    linkItem("TAMUHack", "/"),
    linkItem("WEHack", "/"),
    linkItem("HackUTD", "/"),
    linkItem("HackTX", "/"),
    linkItem("HackUNT", "/"),
    linkItem("HackUTA", "/"),
    linkItem("Hacklahoma", "/"),
  ],
};

export default function Footer() {
  const LinkSection = ({
    title,
    data,
  }: {
    title: string;
    data: LinkData[];
  }) => {
    const [small, setSmall] = useState(true);
    useEffect(() => {
      setSmall(window.innerWidth <= 1024);
      const windowSizeQuery = window.matchMedia("(max-width: 1024px)");
      const f = (e: MediaQueryListEvent) => setSmall(e.matches);

      windowSizeQuery.addEventListener("change", f);

      return () => windowSizeQuery.removeEventListener("change", f);
    }, []);

    if (small) {
      return (
        <div className="border-b-2 col-span-2 lg:col-span-1 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-md font-bold mx-auto">
              <h1>{title}</h1>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {data.map(({ name, link }) => (
                <DropdownMenuItem>
                  <Link
                    className="text-sm text-zinc-950 dark:text-zinc-400 block"
                    href={link}
                  >
                    {name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          {data.map(({ link, name }) => (
            <Link
              href={link}
              className="text-sm dark:text-zinc-400 text-zinc-950 hover:underline"
            >
              <h1>{name}</h1>
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="w-full items-center justify-center min-h-[25vh] border-t-2 border-muted-foreground p-8 md:px-10">
      <div className="grid sm:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-y-8 md:justify-items-center lg:justify-items-start">
        <div className="sm:row-span-3 lg:row-span-1 md:text-4xl font-black col-span-2 row-span-1 flex gap-2 items-center lg:justify-self-start justify-self-center">
          {/* TODO: Replace this with an <Image /> relevant to RH */}
          <div>
            <img
              src="https://placehold.co/50"
              alt="placeholder image"
              width={50}
              height={50}
            ></img>
          </div>
          <div>
            <p className="text-xs">Tagline</p>
            <h1 className="text-4xl">RowdyHacks</h1>
          </div>
        </div>
        {Object.entries(dropdownItemMap).map(([title, data]) => (
          <LinkSection title={title} data={data} />
        ))}
        <div className="col-span-2 lg:col-span-1 justify-self-center">
          <Link href="https://vercel.com">
            <Image
              className="dark:invert select-none"
              src="/img/powered-by-vercel.svg"
              alt="Powered by Vercel"
              width={200}
              height={10}
            />
          </Link>
        </div>
        <div className="w-[200px] bg-black dark:bg-white h-[41px] rounded-lg col-span-2 lg:col-span-1 flex gap-2 px-2 lg:col-start-5 justify-between items-center justify-self-center">
          <Link href="https://twitter.com/rowdyhacks/">
            <Twitter className="invert" />
          </Link>
          <Link href="https://www.instagram.com/rowdyhacks/">
            <Instagram className="invert" />
          </Link>
          <Link href="https://www.facebook.com/UTSA.ACM">
            <Facebook className="invert" />
          </Link>
          <Link href="https://twitter.com/rowdyhacks/">
            <Github className="invert" />
          </Link>
          <Link href="https://github.com/acmutsa/RowdyHacks24/">
            <Image
              className="dark:invert select-none"
              src="/img/landing/discord_icon.svg"
              alt="Discord logo"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <p className="text-center md:py-0 text-xs sm:col-start-2 self-center justify-self-center col-span-2 lg:col-start-2 lg:col-span-3">
          Made with &lt;/&gt; &amp; ♥ @ RowdyHacks
          <br />© RowdyHacks &amp; Association of Computing Machinery at
          UTSA2024. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
