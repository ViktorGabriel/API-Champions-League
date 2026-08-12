import * as HttpReponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository";

export const getClubsService = async () => {
    const data = await repository.findAllClubs();
    let response = null;

    if(data) {
        response = await HttpReponse.ok(data)
    }else {
        response = await HttpReponse.noContent()
    }

    return response
};

