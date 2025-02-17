import { Container } from "@mui/material";
import Tidings from "../_components/Tidings";
import Chip from "../_components/Chip";
import Readily from "../_components/Readily";
import ASLML from "../_components/ASLML";
import Tetris from "../_components/Tetris";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Work() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen">
            <Container className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-happy text-white text-center">
                    My work
                </h1>
                <h1 className="text-4xl font-happy text-white text-center mt-5">
                    Tidings
                </h1>
                <h1 className="text-lg font-happy text-white text-center">
                    April 2023 - August 2024
                </h1>
                <Tidings />
                <h1 className="text-4xl font-happy text-white text-center mt-5">
                    Chip
                </h1>
                <h1 className="text-lg font-happy text-white text-center">
                    August 2022 - April 2023
                </h1>
                <Chip />
                <div>
                    <a
                        href="https://github.com/KristiF/Readily"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-4 mt-5"
                    >
                        <h1 className="text-4xl font-happy text-white text-center">
                            Readily
                        </h1>

                        <GitHubIcon
                            className="text-white"
                            style={{ fontSize: "1.5rem" }}
                        />
                    </a>
                </div>
                <h1 className="text-lg font-happy text-white text-center">
                    Spring 2023
                </h1>
                <Readily />
                <h1 className="text-4xl font-happy text-white text-center mt-5">
                    ASL_ML
                </h1>
                <h1 className="text-lg font-happy text-white text-center">
                    Spring 2022
                </h1>
                <ASLML />
                <div>
                    <a
                        href="https://github.com/KristiF/Tetris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-4 mt-5"
                    >
                        <h1 className="text-4xl font-happy text-white text-center">
                            Tetris
                        </h1>

                        <GitHubIcon
                            className="text-white"
                            style={{ fontSize: "1.5rem" }}
                        />
                    </a>
                </div>
                <h1 className="text-lg font-happy text-white text-center">
                    Autumn 2018
                </h1>
                <Tetris />
            </Container>
        </div>
    );
}
