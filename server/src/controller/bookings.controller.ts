import catchAsync from "../util/catchAsync.util";
import { Request, Response, NextFunction } from "express";
import AppError from "../util/appError.util";
import { trains, bookings } from "../db/schema";
import { db } from "../db";
import { sql } from "drizzle-orm";

interface BookingDetails {
  from: string;
  to: string;
  date: Date | string;
  coach: string;
  trainid: string | number;
  userid: string | number;
  departure: string | number;
  arrival: string | number;
}

interface RouteDetails {
  from: string;
  to: string;
}

const bookTicket = catchAsync(async function (
  req: Request<{}, {}, BookingDetails>,
  res: Response,
  next: NextFunction
) {
  const { from, to, date, coach, trainid, userid, departure, arrival } =
    req.body;
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

const searchTrains = catchAsync(async function (
  req: Request<{}, {}, RouteDetails>,
  res: Response,
  next: NextFunction
) {
  const { from, to } = req.body;
  const results = await db
    .select()
    .from(trains)
    .where(sql`${trains.fromPlace} = ${from} and ${trains.toPlace} = ${to}`);
  return res.status(200).json({
    status: "success",
    results,
  });
});

export { bookTicket, searchTrains };
