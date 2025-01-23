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
        <div className="flex flex-col">
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
                        Tidings was a startup with the aim of revolutionizing
                        news consumption with an AI-based news aggregator app.
                        The app featured personalized news with articles from a
                        wide range of sources, either scraped or obtained
                        through APIs. The articles were summarized using large
                        language models. It also featured a personal news
                        podcast, which was generated using text-to-speech and
                        natural language processing.
                    </p>
                    <p>
                        At Tidings, I was fully responsible for the full-stack
                        development of the application. I built a backend using
                        Node.js and Python, utilizing Azure Functions and Azure
                        Container Instances for scalable, serverless computing.
                        The frontend was developed using React and React Native.
                        I managed the article database by integrating API
                        fetching and web scraping, followed by processing and
                        summarizing the articles using large language models. As
                        the startup grew, I took on additional responsibilities
                        as the tech team expanded with interns. My role evolved
                        to include:
                        <ul>
                            <li>
                                • Team Leadership: Mentoring interns,
                                structuring goals, managing tasks, monitoring
                                progress, and ensuring deadlines were met.
                            </li>
                            <li>
                                • Architecture: Designing and implementing
                                scalable solutions for the backend and frontend.
                                Implementing CI/CD pipelines.
                            </li>
                            <li>
                                • Review: Conducting code reviews, ensuring code
                                quality, mainting standards, and providing
                                feedback.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <h2 className="text-white mt-4 font-happy text-center text-xl sm:text-2xl">
                Promotional images of the Tidings app:
            </h2>
            <ImageGallery items={appImages} />
        </div>
    );
};
export default Tidings;
