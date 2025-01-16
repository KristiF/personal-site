"use client";
import ProfileCard from "@/components/ProfileCard";
import Intro from "@/components/Intro";
import FlashingArrow from "@/components/FlashingArrow";
import PortfolioItem from "@/components/PortfolioItem";
import localFont from "next/font/local";

const happy = localFont({
    src: "../HappyMonkey-Regular.ttf",
    variable: "--font-happy", // Make sure to set the variable name
});

export default function Home() {
    return (
        <main className={`${happy.variable} font-happy`}>
            <section
                id="start"
                className="min-h-screen flex flex-col items-center justify-center gap-2 text-center"
            >
                <h1 className="sm:text-7xl text-4xl font-happy text-white">
                    Hi!👋
                </h1>
                <h1 className="sm:text-7xl text-4xl font-happy text-white">
                    I'm Kristi.
                </h1>
                <h1 className="sm:text-7xl text-4xl font-happy text-white">
                    I'm a M.Sc. student
                </h1>
                <h1 className="sm:text-7xl text-4xl font-happy text-white">
                    in Computer Science.
                </h1>
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
