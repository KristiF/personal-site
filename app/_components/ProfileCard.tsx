import { FC } from "react";
import Image from "next/image";
interface ProfileCardProps {
    className?: string;
    style?: React.CSSProperties;
}

const ProfileCard: FC<ProfileCardProps> = ({ className, style }) => {
    return (
        <div style={style} className={className}>
            <Image
                alt="personal photo"
                layout="fill"
                objectFit="cover"
                src={"/images/personal-photo.jpg"}
                className="rounded-full"
            />
        </div>
    );
};

export default ProfileCard;
