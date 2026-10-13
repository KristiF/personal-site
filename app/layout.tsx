import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: "Kristi Francis - CTO of Solvigo",
    description: "Currently building cool stuff as CTO of Solvigo.",
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
