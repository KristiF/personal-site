import { FC } from "react";

interface IntroProps {
    className?: string;
}

const Intro: FC<IntroProps> = ({ className }) => {
    return (
        <div className={className}>
            <h1 className="text-4xl font-bold text-white">Welcome!</h1>
            <p className="text-2xl font-bold text-white">
                I'm glad you're here.
            </p>
            <p className="text-2xl font-bold text-white">
                Feel free to look around and learn more about me.
            </p>
            <p className="text-2xl font-bold text-white">
                Looking for my resume? You can find it{" "}
                <a
                    href="/cv_kristifrancis.pdf"
                    className="underline text-amber-300"
                >
                    here
                </a>
                .
            </p>
        </div>
    );
};

export default Intro;
