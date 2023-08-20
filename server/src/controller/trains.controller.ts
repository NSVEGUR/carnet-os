import catchAsync from "../util/catchAsync.util";
import { Request, Response, NextFunction } from "express";
import AppError from "../util/appError.util";
import { trains } from "../db/schema";
import { db } from "../db";

const getTrains = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const results = await db.select().from(trains);
  return res.status(200).json({
    status: "success",
    results,
  });
});

export { getTrains };
