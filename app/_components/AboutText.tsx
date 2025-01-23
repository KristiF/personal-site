import { FC } from "react";
import ImageGallery from "react-image-gallery";

const AboutText: FC = () => {
    return (
        <div className="flex flex-col items-center max-w-md gap-6">
            <p className="text-lg text-justify text-white">
                I'm a software engineer with a passion for full stack
                development and people. I love technology and problem solving,
                and I'm always looking for ways to improve my skills. I have
                experience working with a variety of technologies, including
                JavaScript, TypeScript, React, Next.js, Node.js, Python,
                MongoDB, and more. I'm always looking for new opportunities to
                learn and grow.
            </p>
            <p className="text-lg text-justify text-white">
                In my free time, I enjoy having a variety of hobbies, including
                reading, dancing, playing music, baking, cooking, chess, and
                more. I'm always looking for new things to learn and explore.
                I'm also an avid traveller, having previously visited 20+
                countries and counting, including a 6 month solo trip around
                South America, 1 month interrailing around Europe (along with 2
                other longer trips around Europe), 1 month adventuring in
                Israel, and a bunch of other trips around the world. I'm always
                looking for new places to explore and new cultures to learn
                about.
            </p>
        </div>
    );
};
export default AboutText;
