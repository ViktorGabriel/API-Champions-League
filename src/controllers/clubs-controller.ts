import { Request, Response } from "express";
import * as Services from "../services/clubs-services";

export const getClubs = async (request: Request, response: Response) => {
    const httpResponse = await Services.getClubsService();

    response.status(httpResponse.statuscode).json(httpResponse.body);
};