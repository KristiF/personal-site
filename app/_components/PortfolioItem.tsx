import { FC } from "react";

interface PortfolioItemProps {
    title: string;
    description: string;
    image: string;
    href: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
    title,
    description,
    image,
    href,
}) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-lg font-bold text-white">{description}</p>
            <a href={href} target="_blank">
                <img
                    className="rounded-4xl"
                    alt={title}
                    width={300}
                    height={300}
                    src={image}
                />
            </a>
        </div>
    );
};

export default PortfolioItem;
