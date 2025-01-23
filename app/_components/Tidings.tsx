"use client";
import { FC } from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";

const Tidings: FC = () => {
    const appImages = [
        {
            original: "/images/tidings-app-1.png",
            thumbnail: "/images/tidings-app-1.png",
            description: "Tidings App",
        },
        {
            original: "/images/tidings-app-2.png",
            thumbnail: "/images/tidings-app-2.png",
        },
        {
            original: "/images/tidings-app-3.png",
            thumbnail: "/images/tidings-app-3.png",
        },
        {
            original: "/images/tidings-app-4.png",
            thumbnail: "/images/tidings-app-4.png",
        },
        {
            original: "/images/tidings-app-5.png",
            thumbnail: "/images/tidings-app-5.png",
        },
    ];
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-evenly gap-8 items-center">
                <div className="relative h-80 w-full">
                    <Image
                        src="/images/tidings-logo.png"
                        alt="Tidings"
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
                    <p></p>
                </div>
            </div>
            <h2 className="text-white font-happy text-center text-xl sm:text-3xl">
                Promotional images of the Tidings app:
            </h2>
            <ImageGallery items={appImages} />
        </div>
    );
};
export default Tidings;
