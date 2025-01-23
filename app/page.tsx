"use client";
import Intro from "@/components/Intro";

export default function Home() {
    return (
        <main>
            <div className="min-h-screen flex flex-col items-center justify-start mt-5 gap-4 text-center">
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
            </div>
        </main>
    );
}
