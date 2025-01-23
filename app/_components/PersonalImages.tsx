"use client";
import { FC } from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";

const PersonalImages: FC = () => {
    const meImages = [
        {
            original: "/images/wall.png",
            thumbnail: "/images/wall.png",
        },
        {
            original: "/images/culca-canyon.jpg",
            thumbnail: "/images/culca-canyon.jpg",
        },
        {
            original: "/images/glacier.jpg",
            thumbnail: "/images/glacier.jpg",
        },
        {
            original: "/images/machu-pichu.jpg",
            thumbnail: "/images/machu-pichu.jpg",
        },
        {
            original: "/images/pizza.jpg",
            thumbnail: "/images/pizza.jpg",
        },
    ];
    return (
        <div className="flex flex-col">
            <h2 className="text-white font-happy text-center text-xl sm:text-2xl mt-8">
                Some photos from my life:
            </h2>
            <ImageGallery items={meImages} />
        </div>
    );
};
export default PersonalImages;
