"use client";
import { FC } from "react";
import Image from "next/image";

const Tetris: FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-evenly gap-8 items-center">
                <div className="relative h-80 w-full">
                    <Image
                        src="/images/tetris.png"
                        alt="Tetris game showcase"
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
        </div>
    );
};
export default Tetris;
