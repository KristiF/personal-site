import { Container } from "@mui/material";
import ProfileCard from "../_components/ProfileCard";
import AboutText from "../_components/AboutText";
import PersonalImages from "../_components/PersonalImages";
export default function About() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen">
            <Container className="flex flex-col justify-center items-center mx-auto px-4">
                <h1 className="text-4xl font-happy text-white mb-8 text-center">
                    About me
                </h1>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 w-full">
                    <ProfileCard className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 max-w-full aspect-square" />
                    <AboutText />
                </div>
                <PersonalImages />
            </Container>
        </div>
    );
}
