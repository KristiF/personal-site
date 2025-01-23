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
                        I created this simple Tetris game as a personal project
                        when I first learned Python. The purpose of the project
                        was to have a fun way to practice object-oriented
                        programming and creating graphical user interfaces. The
                        graphics of the game were created using the Pygame
                        library. It's a little buggy and not very polished, but
                        it was a great learning experience for me.
                    </p>
                    <a href="https://github.com/KristiF/Tetris">Github link.</a>
                </div>
            </div>
        </div>
    );
};
export default Tetris;
