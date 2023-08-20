"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTrains = exports.bookTicket = void 0;
const catchAsync_util_1 = __importDefault(require("../util/catchAsync.util"));
const schema_1 = require("../db/schema");
const db_1 = require("../db");
const drizzle_orm_1 = require("drizzle-orm");
const bookTicket = (0, catchAsync_util_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { from, to, date, coach, trainid, userid, departure, arrival } = req.body;
        // const results = await db.insert(bookings).values({
        //   trainId: trainid,
        //   userId: userid,
        //   fromPlace: from,
        //   toPlace: to,
        //   dateOfJourney: date,
        //   coach,
        //   departure,
        //   arrival,
        // });
        return res.status(200).json({
            status: "success",
            results: req.body,
        });
    });
});
exports.bookTicket = bookTicket;
const searchTrains = (0, catchAsync_util_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { from, to } = req.body;
        const results = yield db_1.db
            .select()
            .from(schema_1.trains)
            .where((0, drizzle_orm_1.sql) `${schema_1.trains.fromPlace} = ${from} and ${schema_1.trains.toPlace} = ${to}`);
        return res.status(200).json({
            status: "success",
            results,
        });
    });
});
exports.searchTrains = searchTrains;
