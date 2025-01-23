import { Container } from "@mui/material";
import Tidings from "../_components/Tidings";

export default function Work() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen">
            <Container className="flex flex-col justify-center items-center mx-auto px-4">
                <h1 className="text-4xl font-happy text-white mb-8 text-center">
                    My work
                </h1>
                <Tidings />
            </Container>
        </div>
    );
}
