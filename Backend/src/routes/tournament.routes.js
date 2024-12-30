import { Router } from "express";
import verifyToken from "../middlewares/auth.middleware.js";
import { createTournaments , getTournaments , registerPlayer , tournamentInfo} from "../controllers/tournament.controller.js";

const router = Router();

//admin controlled routes
router.route("/createTournament").post(createTournaments)

//user accessed routes
router.route("/getAllTournaments").get(verifyToken,getTournaments)
router.route("/getTournamentInfo").get(verifyToken,tournamentInfo)
router.route("/registerTournament").post(verifyToken,registerPlayer)


export default router