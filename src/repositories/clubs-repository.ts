import { clubModel } from "../models/clubs-model";
import fs from "fs/promises";
import path from "path";

export const findAllClubs = async(): Promise<clubModel[]> => {
    const filePath = path.join(__dirname, "../data/clubs.json");
    const data = await fs.readFile(filePath, "utf-8");
    const clubs: clubModel[] = JSON.parse(data);
    return clubs;
};


