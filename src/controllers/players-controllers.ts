import { Request, Response } from "express";

export const getPlayers = async (request: Request, response: Response) => {
    //const body = request.body
    //console.log(body)
    response.status(200).json({ player: "Viktor" });
    }