import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  mail: varchar("mail", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

export const trains = mysqlTable("trains", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  fromPlace: varchar("from_place", { length: 256 }),
  toPlace: varchar("to_place", { length: 256 }),
  departure: varchar("departure", { length: 256 }),
  arrival: varchar("arrival", { length: 256 }),
});

export const bookings = mysqlTable("bookings", {
  id: serial("id").primaryKey(),
  trainId: int("train_id").references(() => trains.id),
  userId: int("user_id").references(() => users.id),
  fromPlace: varchar("from_place", { length: 256 }),
  toPlace: varchar("to_place", { length: 256 }),
  dateOfJourney: varchar("date_of_journey", { length: 256 }),
  departure: varchar("departure", { length: 256 }),
  arrival: varchar("arrival", { length: 256 }),
  coach: varchar("coach", { length: 256 }),
});
