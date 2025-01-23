import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Drawer } from "@mui/material";
import localFont from "next/font/local";

const happy = localFont({
    src: "../HappyMonkey-Regular.ttf",
    variable: "--font-happy", // Make sure to set the variable name
});

export const metadata: Metadata = {
    title: "Kristi Francis - Personal site",
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
            <body className={`${happy.variable} font-happy`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
