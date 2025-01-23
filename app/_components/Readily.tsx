"use client";
import { FC } from "react";
import Image from "next/image";

const Readily: FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-evenly gap-8 items-center">
                <div className="relative h-80 w-full">
                    <Image
                        src="/images/readily-logo.png"
                        alt="Readly logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col text-lg text-justify text-white gap-8 max-w-4">
                    <p>
                        Readily was a group project for the university course
                        "DH2642 Interaction Programming and the Dynamic Web".
                        The project was a news aggregator web application that
                        allowed users to read news articles from a variety of
                        sources. The articles links where fetched from a news
                        API and scraped using the Newspaper Python Library. The
                        articles were then summarized and categorized using
                        natural language processing.
                        <a href="https://github.com/KristiF/Readily">
                            Github link.
                        </a>
                    </p>
                </div>
            </div>
            <div className="relative h-80 w-full mb-8">
                <Image
                    src="/images/readily-app.webp"
                    alt="Readly app showcase"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
};
export default Readily;
