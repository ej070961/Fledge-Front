import axios from "axios";
import { axiosInstance } from ".";
import { CommonError } from "../@types/api";

export const getChallenges = async (accessToken: string) => {
    try {
        const res = await axiosInstance.get(
            `https://www.fledge.site/api/v1/public/challenges`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
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

export const getTopParticipants = async (accessToken: string) => {
    try {
        const res = await axiosInstance.get(
            `https://www.fledge.site/api/v1/public/challenges/top-participants`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
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

export const getPartnershipChallenges = async (accessToken: string) => {
    try {
        const res = await axiosInstance.get(
            `https://www.fledge.site/api/v1/public/challenges/partnership-and-organization`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
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
