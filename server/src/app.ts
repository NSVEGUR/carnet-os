import config from "./config";
import express, { Request, Response, NextFunction, Express } from "express";
import cors from "cors";
import AppError from "./util/appError.util";
import errorHandler from "./controller/error.controller";
import userRouter from "./routes/user.route";
import bookingRouter from "./routes/booking.route";

const app: Express = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//For CORS (Cross origin resource sharing)
app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", userRouter);
app.use("/trains", bookingRouter);

//UNUSED ROUTES MIDDLEWARE
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`can't find the ${req.originalUrl} on this server`, 404));
});

//GLOBAL ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

export default app;
