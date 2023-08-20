"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookings_controller_1 = require("./../controller/bookings.controller");
const trains_controller_1 = require("./../controller/trains.controller");
const router = express_1.default.Router();
router.post("/search", bookings_controller_1.searchTrains);
router.post("/bookticket", bookings_controller_1.bookTicket);
router.get("/", trains_controller_1.getTrains);
exports.default = router;
