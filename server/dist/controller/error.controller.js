"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appError_util_1 = __importDefault(require("../util/appError.util"));
const config_1 = __importDefault(require("./../config"));
const handleJWTError = () => new appError_util_1.default("Invalid Token! Please Login Again", 401);
const handleJWTExpiredError = () => new appError_util_1.default("Your Token Expired! Please Login Again", 401);
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: "failure",
        error: err,
        message: err.message,
        stack: err.stack,
    });
};
const sendErrorProd = (err, res) => {
    // Errors created by me
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: "failure",
            message: err.message,
        });
    }
    //Programming or unknown error
    else {
        console.error("ERROR!💥💥💥", err);
        res.status(500).json({
            status: "failure",
            message: "Something went wrong :(",
        });
    }
};
function errorControler(err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (config_1.default.NODE_ENV === "development") {
        sendErrorDev(err, res);
    }
    else if (config_1.default.NODE_ENV === "production") {
        let error = err;
        if (err.name === "JsonWebTokenError")
            error = handleJWTError();
        if (err.name === "TokenExpiredError")
            error = handleJWTExpiredError();
        sendErrorProd(error, res);
    }
}
exports.default = errorControler;
