import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Drawer } from "@mui/material";
export const metadata: Metadata = {
    title: "Kristi Francis - Software Engineer",
    icons: {
        icon: "/images/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
