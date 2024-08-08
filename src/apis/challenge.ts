import axios from "axios";
import { axiosInstance } from ".";
import { CommonError } from "../@types/api";

export const getChallenges = async (
    page: number,
    size: number,
    type: string,
    categories?: string[]
) => {
    try {
        const res = await axiosInstance.get(
            `https://www.fledge.site/api/v1/public/challenges`,
            {
                params: {
                    page: page,
                    size: size,
                    type: type,
                    categories: categories,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log(error);
        if (axios.isAxiosError<CommonError>(error) && error.response) {
            const errorCode = error.response.data.errorCode;
            const message = error.response.data.message;
            console.log(`${errorCode}: ${message}`);
            alert(message);
        }
    }
};

export const getTopParticipants = async () => {
    try {
        const res = await axiosInstance.get(
            `https://www.fledge.site/api/v1/public/challenges/top-participants`
        );
        return res.data;
    } catch (error) {
        console.log(error);
        if (axios.isAxiosError<CommonError>(error) && error.response) {
            const errorCode = error.response.data.errorCode;
            const message = error.response.data.message;
            console.log(`${errorCode}: ${message}`);
            alert(message);
        }
    }
};

export const getPartnershipChallenges = async (
    page: number,
    size: number,
    categories?: string[]
) => {
    try {
        const res = await axiosInstance.get(
            `https://www.fledge.site/api/v1/public/challenges/partnership-and-organization`,
            {
                params: {
                    page: page,
                    size: size,
                    categories: categories,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log(error);
        if (axios.isAxiosError<CommonError>(error) && error.response) {
            const errorCode = error.response.data.errorCode;
            const message = error.response.data.message;
            console.log(`${errorCode}: ${message}`);
            alert(message);
        }
    }
};
