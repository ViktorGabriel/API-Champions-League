import { playerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";

const database: playerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Right Winger",
        statistics: {
            overall: 90,
            pace: 79,
            shooting: 89,
            passing: 90,
            dribbling: 94,
            defending: 33,
            physical: 64
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al-Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            overall: 86,
            pace: 77,
            shooting: 88,
            passing: 75,
            dribbling: 80,
            defending: 34,
            physical: 75
        }
    },
    {
        id: 3,
        name: "Neymar Jr",
        club: "Santos FC",
        nationality: "Brasil",
        position: "Left Winger",
        statistics: {
            overall: 89,
            pace: 86,
            shooting: 83,
            passing: 85,
            dribbling: 93,
            defending: 37,
            physical: 61
        }
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        club: "Real Madrid",
        nationality: "França",
        position: "Forward",
        statistics: {
            overall: 91,
            pace: 97,
            shooting: 90,
            passing: 80,
            dribbling: 92,
            defending: 36,
            physical: 78
        }
    },
    {
        id: 5,
        name: "Robert Lewandowski",
        club: "FC Barcelona",
        nationality: "Polônia",
        position: "Forward",
        statistics: {
            overall: 88,
            pace: 75,
            shooting: 88,
            passing: 79,
            dribbling: 81,
            defending: 44,
            physical: 82
        }
    },
    {
        id: 6,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Noruega",
        position: "Forward",
        statistics: {
            overall: 91,
            pace: 89,
            shooting: 93,
            passing: 66,
            dribbling: 80,
            defending: 45,
            physical: 88
        }
    },
    {
        id: 7,
        name: "Vinicius Junior",
        club: "Real Madrid",
        nationality: "Brasil",
        position: "Left Winger",
        statistics: {
            overall: 90,
            pace: 95,
            shooting: 84,
            passing: 81,
            dribbling: 91,
            defending: 29,
            physical: 69
        }
    },
    {
        id: 8,
        name: "Jude Bellingham",
        club: "Real Madrid",
        nationality: "Inglaterra",
        position: "Midfielder",
        statistics: {
            overall: 90,
            pace: 80,
            shooting: 86,
            passing: 83,
            dribbling: 88,
            defending: 78,
            physical: 85
        }
    },
    {
        id: 9,
        name: "Kevin De Bruyne",
        club: "Napoli",
        nationality: "Bélgica",
        position: "Midfielder",
        statistics: {
            overall: 90,
            pace: 72,
            shooting: 85,
            passing: 94,
            dribbling: 87,
            defending: 65,
            physical: 74
        }
    },
    {
        id: 10,
        name: "Mohamed Salah",
        club: "Trabzonspor",
        nationality: "Egito",
        position: "Right Winger",
        statistics: {
            overall: 89,
            pace: 89,
            shooting: 87,
            passing: 81,
            dribbling: 88,
            defending: 45,
            physical: 75
        }
    },
    {
        id: 11,
        name: "Harry Kane",
        club: "Bayern München",
        nationality: "Inglaterra",
        position: "Forward",
        statistics: {
            overall: 90,
            pace: 69,
            shooting: 93,
            passing: 84,
            dribbling: 83,
            defending: 49,
            physical: 83
        }
    },
    {
        id: 12,
        name: "Luka Modrić",
        club: "AC Milan",
        nationality: "Croácia",
        position: "Midfielder",
        statistics: {
            overall: 86,
            pace: 72,
            shooting: 76,
            passing: 89,
            dribbling: 86,
            defending: 71,
            physical: 64
        }
    },
    {
        id: 13,
        name: "Rodri",
        club: "Manchester City",
        nationality: "Espanha",
        position: "Midfielder",
        statistics: {
            overall: 91,
            pace: 58,
            shooting: 73,
            passing: 86,
            dribbling: 81,
            defending: 87,
            physical: 85
        }
    },
    {
        id: 14,
        name: "Antoine Griezmann",
        club: "Orlando City SC",
        nationality: "França",
        position: "Forward",
        statistics: {
            overall: 88,
            pace: 80,
            shooting: 88,
            passing: 87,
            dribbling: 87,
            defending: 58,
            physical: 72
        }
    },
    {
        id: 15,
        name: "Lautaro Martínez",
        club: "Inter Milan",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            overall: 89,
            pace: 81,
            shooting: 88,
            passing: 74,
            dribbling: 84,
            defending: 48,
            physical: 84
        }
    }
];
export const findAllPlayer = async(): Promise<playerModel[]> => {
    return database;
};

export const findPlayerById = async (
    id:number
):Promise<playerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async(player: playerModel) => {
    const id = database[database.length - 1].id + 1;
    player.id = id;
    database.push(player);
    return player;
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;
};

export const findAndModifyPlayer = async(id:number, statistics:statisticsModel): Promise<playerModel> => {
    const playerIndex = database.findIndex(player => player.id === id);
    
    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }   
        return database[playerIndex];  
}