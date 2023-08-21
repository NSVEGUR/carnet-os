import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  serial,
  int,
  varchar,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const bookings = mysqlTable(
  "bookings",
  {
    id: serial("id").notNull(),
    trainId: int("train_id"),
    userId: int("user_id"),
    fromPlace: varchar("from_place", { length: 256 }),
    toPlace: varchar("to_place", { length: 256 }),
    dateOfJourney: varchar("date_of_journey", { length: 256 }),
    departure: varchar("departure", { length: 256 }),
    arrival: varchar("arrival", { length: 256 }),
    coach: varchar("coach", { length: 256 }),
  },
  (table) => {
    return {
      bookingsId: primaryKey(table.id),
    };
  }
);

export const trains = mysqlTable(
  "trains",
  {
    id: serial("id").notNull(),
    name: varchar("name", { length: 256 }),
    fromPlace: varchar("from_place", { length: 256 }),
    toPlace: varchar("to_place", { length: 256 }),
    departure: varchar("departure", { length: 256 }),
    arrival: varchar("arrival", { length: 256 }),
  },
  (table) => {
    return {
      trainsId: primaryKey(table.id),
    };
  }
);

export const users = mysqlTable(
  "users",
  {
    id: serial("id").notNull(),
    mail: varchar("mail", { length: 256 }),
    password: varchar("password", { length: 256 }),
  },
  (table) => {
    return {
      usersId: primaryKey(table.id),
    };
  }
);
