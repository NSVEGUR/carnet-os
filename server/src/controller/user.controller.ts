import catchAsync from "../util/catchAsync.util";
import { Request, Response, NextFunction } from "express";
import AppError from "../util/appError.util";
import { trains, bookings, users } from "../db/schema";
import { db } from "../db";
import { sql } from "drizzle-orm";

interface User {
  mail: string;
  password: string;
}

interface Userid {
  userid: string | number;
}

interface ResetPasswordDetails {
  userid: string | number;
  password: string;
}

interface ResetMailDetails {
  userid: string | number;
  mail: string;
}

const signup = catchAsync(async function (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) {
  const { mail, password } = req.body;
  const results = await db.insert(users).values({
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

const login = catchAsync(async function (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) {
  const { mail, password } = req.body;
  const results = await db
    .select()
    .from(users)
    .where(sql`${users.mail} = ${mail} and ${users.password} = ${password}`);
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

const mybookings = catchAsync(async function (
  req: Request<{}, {}, Userid>,
  res: Response,
  next: NextFunction
) {
  const { userid } = req.body;
  const results = await db
    .select()
    .from(bookings)
    .where(sql`${bookings.userId} = ${userid}`);
  return res.status(200).json({
    status: "success",
    results,
  });
});

const resetPassword = catchAsync(async function (
  req: Request<{}, {}, ResetPasswordDetails>,
  res: Response,
  next: NextFunction
) {
  const { userid, password } = req.body;
  if (!password) return next(new AppError("Password Can't be Null", 400));
  await db
    .update(users)
    .set({ password })
    .where(sql`${users.id} = ${userid}`);
  return res.status(200).json({
    status: "success",
    results: {
      password,
    },
  });
});

const resetMail = catchAsync(async function (
  req: Request<{}, {}, ResetMailDetails>,
  res: Response,
  next: NextFunction
) {
  const { userid, mail } = req.body;
  if (!mail) return next(new AppError("Mail Can't be Null", 400));
  await db
    .update(users)
    .set({ mail })
    .where(sql`${users.id} = ${userid}`);
  return res.status(200).json({
    status: "success",
    results: {
      mail,
    },
  });
});

export { signup, login, mybookings, resetPassword, resetMail };
