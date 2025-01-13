import { FC } from "react";
import Image from "next/image";
interface ProfileCardProps {
    className?: string;
    style?: React.CSSProperties;
}

const ProfileCard: FC<ProfileCardProps> = ({ className, style }) => {
    return (
        <div
            style={style}
            className={"flex flex-col items-center mr-10 " + className}
        >
            <Image
                className="rounded-4xl"
                alt="personal photo"
                width={300}
                height={300}
                src={"/images/personal-photo.jpg"}
            />
            <h1 className="sm:text-md md:text-4xl font-bold text-white">
                Kristi Francis
            </h1>
            <h2 className="sm:text-sm md:text-2xl font-bold text-white">
                Software Engineer
            </h2>
            <h2 className="sm:text-sm md:text-2xl font-bold text-white">
                M.Sc. in C.Sci. at KTH
            </h2>
        </div>
    );
};

export default ProfileCard;
