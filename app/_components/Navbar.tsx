"use client";

import { FC } from "react";
import {
    AppBar,
    Button,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const links = [
        { href: "#start", text: "Start" },
        { href: "#about", text: "About Me" },
        { href: "#portfolio", text: "Portfolio" },
    ];

    const handleScroll = (href: string) => {
        setDrawerOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Top Navbar */}
            <AppBar
                position="sticky"
                elevation={0}
                className={"bg-inherit " + className}
            >
                <Container className="flex justify-between items-center py-2">
                    <div className="text-white text-xl">My Portfolio</div>
                    <div className="hidden md:flex gap-6">
                        {links.map((link) => (
                            <Button
                                key={link.href}
                                onClick={() => handleScroll(link.href)}
                                className="text-white text-lg"
                            >
                                {link.text}
                            </Button>
                        ))}
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
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(true)}
                        className="md:hidden"
                    >
                        <MenuIcon />
                    </IconButton>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <List>
                    {links.map((link) => (
                        <ListItem
                            button
                            key={link.href}
                            onClick={() => handleScroll(link.href)}
                        >
                            {link.text}
                        </ListItem>
                    ))}
                    <ListItem>
                        <a
                            href="https://www.linkedin.com/in/kristi-francis-88753397/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a
                            href="https://github.com/KristiF/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
