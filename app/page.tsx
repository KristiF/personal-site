import { Fragment } from "react";
import Image from "next/image";

const socials = [
    {
        href: "https://www.linkedin.com/in/kristi-francis-88753397/",
        text: "LinkedIn",
    },
    { href: "https://github.com/KristiF/", text: "GitHub" },
];

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
            {/* Soft warm halo behind the portrait, so it sits in light rather than on a flat field */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[42%] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow)] opacity-60 blur-3xl"
            />

            <div className="relative flex w-full max-w-xl flex-col items-center text-center">
                <Image
                    src="/images/kristi.webp"
                    alt="Portrait of Kristi Francis"
                    width={953}
                    height={1000}
                    priority
                    className="w-52 rounded-[2rem] shadow-[0_28px_64px_-24px_var(--shadow)] sm:w-60"
                />

                <h1 className="mt-12 font-display text-4xl tracking-tight sm:text-5xl">
                    Hello, I&apos;m Kristi.
                </h1>

                <p className="mt-5 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
                    Currently building cool stuff as CTO of{" "}
                    <a
                        href="https://solvigo.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] underline decoration-[var(--accent)]/35 underline-offset-4 transition-colors hover:text-[var(--accent-hover)] hover:decoration-[var(--accent-hover)]"
                    >
                        Solvigo
                    </a>
                    .
                </p>

                <div className="mt-12 flex items-center gap-5 text-sm text-[var(--muted)]">
                    {socials.map((social, i) => (
                        <Fragment key={social.href}>
                            {i > 0 && <span aria-hidden>·</span>}
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-[var(--accent)]"
                            >
                                {social.text}
                            </a>
                        </Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
}
