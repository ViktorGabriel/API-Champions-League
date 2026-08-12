import { HttpReponse } from "../models/http-reponse-model";

export const ok =  async (data:any): Promise<HttpReponse> => {
    return {
        statuscode: 200,
        body: data
    }
}

export const noContent = async():Promise<HttpReponse> => {
    return {
        statuscode: 204,
        body: null
    }
}