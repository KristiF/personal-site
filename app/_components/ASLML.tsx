"use client";
import { FC } from "react";
import Image from "next/image";

const ASLML: FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-evenly gap-8 items-center">
                <div className="relative h-80 w-full">
                    <Image
                        src="/images/asl_ml.png"
                        alt="Chip logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col text-lg text-justify text-white gap-8 max-w-4">
                    <p>
                        ASL_ML was a group project for the university course
                        "DM1590 Machine Learning for Media Technology". The
                        project utilized the MediaPipe library to create a
                        dataset that could be used to train a machine learning
                        model to recognize American Sign Language (ASL) letters.
                        The dataset consisted of images of hands signing the ASL
                        alphabet, which were processed using the MediaPipe
                        library to extract the hand landmarks. The extracted
                        landmarks were then used to train different machine
                        learning models to recognize the ASL letters. This was a
                        really fun project that taught me a lot about machine
                        learning and computer vision. I processed the dataset
                        and trained one of the machine learning models using
                        Python and Tensorflow.
                    </p>
                    <p>
                        The github repository for the project is still private
                        as it's on an enterprise account for KTH and owned by
                        another group member. I will update this page with a
                        link to the repository as soon as it becomes public.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ASLML;
