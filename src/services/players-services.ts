import { playerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/player-repository";
import * as HttpReponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayer();
    let response = null;

    if (data) {
        response = await HttpReponse.ok(data);
    } else {
        response = await HttpReponse.noContent();
    }

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await HttpReponse.ok(data);
    } else {
        response = await HttpReponse.noContent();
    }

    return response;
};

export const createPlayerService = async (player: playerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        const data = await PlayerRepository.insertPlayer(player);
        response = await HttpReponse.created(data);
    } else {
        response = await HttpReponse.badRequest();
    }

    return response;
};