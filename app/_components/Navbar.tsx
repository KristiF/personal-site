"use client";

import { FC, useState, useEffect } from "react";
import {
    AppBar,
    Container,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/navigation";

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [scrolled, setScrolled] = useState(false);
    const [currentPage, setCurrentPage] = useState("/");

    const links = [
        { href: "/", text: "Start" },
        { href: "/work", text: "Work" },
        { href: "/about", text: "About me" },
    ];
    const router = useRouter();
    useEffect(() => {
        const handleScrollChange = () => {
            const scrollY = window.scrollY;
            const pageHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            setScrolled(scrollY > pageHeight * 0.2);
        };

        window.addEventListener("scroll", handleScrollChange);
        return () => window.removeEventListener("scroll", handleScrollChange);
    }, []);

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
        // In the future, replace with page navigation logic (e.g., React Router)
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            style={{
                backgroundColor: scrolled ? "#4FC0A4" : "transparent",
                transition: "background-color 0.3s ease-in-out",
            }}
            className={className}
        >
            <Container className="flex flex-col items-center py-4">
                {/* Centered Toggle Buttons */}
                <ToggleButtonGroup
                    value={currentPage}
                    exclusive
                    onChange={(e, value) => handlePageChange(value)}
                    className="flex gap-4"
                >
                    {links.map((link) => (
                        <ToggleButton
                            key={link.href}
                            value={link.href}
                            onClick={() => router.push(link.href)}
                            className={`font-happy text-lg md:text-base sm:text-sm text-white ${
                                currentPage === link.href
                                    ? "bg-white text-black"
                                    : ""
                            }`}
                            style={{
                                border: "none",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                textTransform: "none",
                            }}
                        >
                            {link.text}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>

                {/* Social Links */}
                <div className="flex gap-4 mt-4">
                    <a
                        href="https://www.linkedin.com/in/kristi-francis-88753397/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon className="text-white" />
                    </a>
                    <a
                        href="https://github.com/KristiF/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon className="text-white" />
                    </a>
                </div>
            </Container>
        </AppBar>
    );
};

export default Navbar;
