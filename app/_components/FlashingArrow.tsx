import { FC, MouseEvent } from "react";

interface FlashingArrowProps {
  href? : string;
}

const FlashingArrow: FC<FlashingArrowProps> = ({ href }) => {
    return (
      <a href={href} className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <svg
          className="animate-bounce w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </a>
    );
};

export default FlashingArrow;
