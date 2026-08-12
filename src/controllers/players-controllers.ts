import { Request, Response } from "express";
import { getPlayerService } from "../services/players-services";
export const getPlayers = async (request: Request, response: Response) => {
    const HttpReponse = await getPlayerService()

    response.status(HttpReponse.statuscode).json(HttpReponse.body)
}