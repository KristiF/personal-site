"use client";
import { FC } from "react";
import Image from "next/image";

const Chip: FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-evenly gap-8 items-center">
                <div className="relative h-80 w-full">
                    <Image
                        src="/images/chip-logo.png"
                        alt="Chip logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col text-lg text-justify text-white gap-8 max-w-4">
                    <p>
                        Chip was a startup with the idea of offering a service
                        that unlocked news articles for a small fee, allowing
                        users to read premium content without a subscription. I
                        worked with Chip as an intern, where worked on a variety
                        of tasks. I built the frontend using NextJS, and built a
                        news scraper using Python and Selenium. I also created a
                        Reddit bot to generate traffic to the website, which
                        resulted in more than 100,000 unique visitors after just
                        a few weeks.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Chip;
