"use client";

import ProfileCard from "@/components/ProfileCard";
import Intro from "@/components/Intro";
import FlashingArrow from "@/components/FlashingArrow";
import PortfolioItem from "@/components/PortfolioItem";

export default function Home() {
    return (
        <main>
            <section
                id="start"
                className="min-h-screen flex items-center justify-center bg-gray-100"
            >
                <h1 className="text-4xl">Welcome to My Portfolio</h1>
                <FlashingArrow />
            </section>

            <section
                id="about"
                className="min-h-screen flex items-center justify-center bg-blue-100"
            >
                <Intro />
            </section>
        </main>
    );
}
