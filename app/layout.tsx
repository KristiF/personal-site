import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: "Kristi Francis",
    description: "Currently building cool stuff as CTO of Solvigo.",
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
            <body className="font-sans">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
