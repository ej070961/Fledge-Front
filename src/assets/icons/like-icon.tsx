import React from "react";

type IconProps = {
    fill?: boolean;
};
const LikeIcon = ({ fill = false }: IconProps) => (
    <svg
        width="47"
        height="42"
        viewBox="0 0 47 42"
        fill={fill ? "none" : "#EEC65D"}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M44.9155 12.2192C44.5775 8.63833 42.2735 2 33.9319 2C25.5902 2 23.5039 8.39734 23.5039 8.39734C23.5039 8.39734 21.4175 2 13.0759 2C4.73422 2 2.42249 8.63833 2.08836 12.2192C1.11316 22.5815 8.20763 32.9475 23.5 40C38.7962 32.9475 45.8868 22.5815 44.9116 12.2192H44.9155Z"
            stroke="#EEC65D"
            stroke-width="3"
            stroke-linejoin="round"
        />
    </svg>
);

export default LikeIcon;
