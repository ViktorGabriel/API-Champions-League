import { HttpReponse } from "../models/http-reponse-model";

export const ok =  async (data:any): Promise<HttpReponse> => {
    return {
        statuscode: 200,
        body: data
    };
};

export const noContent = async():Promise<HttpReponse> => {
    return {
        statuscode: 204,
        body: null
    };
};

export const badRequest = async():Promise<HttpReponse> => {
    return{
        statuscode: 400,
        body: null
    };
};

export const created = async (data?: any): Promise<HttpReponse> => {
    return {
        statuscode: 201,
        body: data || { message: "successful" }
    };
};