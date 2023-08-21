"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const appError_util_1 = __importDefault(require("./util/appError.util"));
const error_controller_1 = __importDefault(require("./controller/error.controller"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const booking_route_1 = __importDefault(require("./routes/booking.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//For CORS (Cross origin resource sharing)
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use("/health", (req, res) => {
    res.end("ok");
});
app.use("/user", user_route_1.default);
app.use("/trains", booking_route_1.default);
//UNUSED ROUTES MIDDLEWARE
app.use("*", (req, res, next) => {
    next(new appError_util_1.default(`can't find the ${req.originalUrl} on this server`, 404));
});
//GLOBAL ERROR HANDLING MIDDLEWARE
app.use(error_controller_1.default);
exports.default = app;
