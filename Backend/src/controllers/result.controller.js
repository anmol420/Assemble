import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import { Result } from "../models/result.models.js";
import { Tournament } from "../models/tournament.models.js";
import { User } from "../models/user.models.js";

const postResult = asyncHandler(async (req, res) => {
    const { tournamentName, leaderboard } = req.body;

    const tournament = await Tournament.findOne({ name: tournamentName });
    if (!tournament) {
        throw new ApiError(404, "Tournament not found");
    }

    // if (!tournament.isActive) {
    //     throw new ApiError(400, "Tournament is not active");
    // }

    console.log(leaderboard);
    

    try {
        await Result.create({
            tournament: tournament._id,
            leaderboard,
        });

        return res
            .status(201)
            .json(new ApiResponse(201, "Result Posted Successfully!!"));
        } catch (error) {
            throw new ApiError(500, error.message || "Internal Server Error");
        }
    });

    export {
        postResult,
    }