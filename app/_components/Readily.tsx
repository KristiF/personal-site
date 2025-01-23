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
                        I started working on Tidings in April 2023. It was a
                        startup focused on revolutionizing the news industry
                        with an AI-based news aggregator app. The app featured
                        personalized news with articles from a wide range of
                        sources, either scraped or obtained through APIs. The
                        articles were summarized using large language models. It
                        also featured a personal news podcast, which was
                        generated using text-to-speech and natural language
                        processing.
                    </p>
                </div>
            </div>
            <div className="relative h-80 w-full mb-8">
                <Image
                    src="/images/readily-app.png"
                    alt="Readly app showcase"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
};
export default Readily;
