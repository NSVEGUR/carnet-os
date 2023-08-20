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
exports.resetMail = exports.resetPassword = exports.mybookings = exports.login = exports.signup = void 0;
const catchAsync_util_1 = __importDefault(require("../util/catchAsync.util"));
const appError_util_1 = __importDefault(require("../util/appError.util"));
const schema_1 = require("../db/schema");
const db_1 = require("../db");
const drizzle_orm_1 = require("drizzle-orm");
const signup = (0, catchAsync_util_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { mail, password } = req.body;
        const results = yield db_1.db.insert(schema_1.users).values({
            mail,
            password,
        });
        return res.status(200).json({
            status: "success",
            message: "Signed Up Successfully",
            results: {
                mail,
                password,
                userid: results.insertId,
            },
        });
    });
});
exports.signup = signup;
const login = (0, catchAsync_util_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { mail, password } = req.body;
        const results = yield db_1.db
            .select()
            .from(schema_1.users)
            .where((0, drizzle_orm_1.sql) `${schema_1.users.mail} = ${mail} and ${schema_1.users.password} = ${password}`);
        if (results.length === 0) {
            return res.status(404).json({
                status: "failure",
                message: "Wrong Password or Mail",
                results,
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Logged In Successfully",
            results,
        });
    });
});
exports.login = login;
const mybookings = (0, catchAsync_util_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userid } = req.body;
        const results = yield db_1.db
            .select()
            .from(schema_1.bookings)
            .where((0, drizzle_orm_1.sql) `${schema_1.bookings.userId} = ${userid}`);
        return res.status(200).json({
            status: "success",
            results,
        });
    });
});
exports.mybookings = mybookings;
const resetPassword = (0, catchAsync_util_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userid, password } = req.body;
        if (!password)
            return next(new appError_util_1.default("Password Can't be Null", 400));
        yield db_1.db
            .update(schema_1.users)
            .set({ password })
            .where((0, drizzle_orm_1.sql) `${schema_1.users.id} = ${userid}`);
        return res.status(200).json({
            status: "success",
            results: {
                password,
            },
        });
    });
});
exports.resetPassword = resetPassword;
const resetMail = (0, catchAsync_util_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userid, mail } = req.body;
        if (!mail)
            return next(new appError_util_1.default("Mail Can't be Null", 400));
        yield db_1.db
            .update(schema_1.users)
            .set({ mail })
            .where((0, drizzle_orm_1.sql) `${schema_1.users.id} = ${userid}`);
        return res.status(200).json({
            status: "success",
            results: {
                mail,
            },
        });
    });
});
exports.resetMail = resetMail;
