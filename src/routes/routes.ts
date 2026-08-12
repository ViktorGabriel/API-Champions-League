import { Router } from "express";
import * as PlayerController from "../controllers/players-controllers";

const router = Router();

router.get("/players", PlayerController.getPlayers);
router.post("/players", PlayerController.addPlayer);


router.get("/players/:id", PlayerController.getPlayerById);



export default router;