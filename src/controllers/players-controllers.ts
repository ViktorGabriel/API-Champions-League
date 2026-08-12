import { Request, Response } from "express";
import * as service from "../services/players-services";
import { noContent } from "../utils/http-helper";

export const getPlayers = async (request: Request, response: Response) => {
    const HttpReponse = await service.getPlayerService()

    response.status(HttpReponse.statuscode).json(HttpReponse.body)
};

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id as string);
    const HttpReponse = await service.getPlayerByIdService(id);
    response.status(HttpReponse.statuscode).json(HttpReponse.body);
};

export const addPlayer = async (request: Request, response: Response) => {
    const bodyValue = request.body;
    const httpResponse = await service.createPlayerService(bodyValue);

    if (httpResponse) {
        response.status(httpResponse.statuscode).json(httpResponse.body);
    } 

};  