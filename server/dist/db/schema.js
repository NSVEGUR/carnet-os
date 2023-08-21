"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.trains = exports.bookings = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.bookings = (0, mysql_core_1.mysqlTable)("bookings", {
    id: (0, mysql_core_1.serial)("id").notNull(),
    trainId: (0, mysql_core_1.int)("train_id"),
    userId: (0, mysql_core_1.int)("user_id"),
    fromPlace: (0, mysql_core_1.varchar)("from_place", { length: 256 }),
    toPlace: (0, mysql_core_1.varchar)("to_place", { length: 256 }),
    dateOfJourney: (0, mysql_core_1.varchar)("date_of_journey", { length: 256 }),
    departure: (0, mysql_core_1.varchar)("departure", { length: 256 }),
    arrival: (0, mysql_core_1.varchar)("arrival", { length: 256 }),
    coach: (0, mysql_core_1.varchar)("coach", { length: 256 }),
}, (table) => {
    return {
        bookingsId: (0, mysql_core_1.primaryKey)(table.id),
    };
});
exports.trains = (0, mysql_core_1.mysqlTable)("trains", {
    id: (0, mysql_core_1.serial)("id").notNull(),
    name: (0, mysql_core_1.varchar)("name", { length: 256 }),
    fromPlace: (0, mysql_core_1.varchar)("from_place", { length: 256 }),
    toPlace: (0, mysql_core_1.varchar)("to_place", { length: 256 }),
    departure: (0, mysql_core_1.varchar)("departure", { length: 256 }),
    arrival: (0, mysql_core_1.varchar)("arrival", { length: 256 }),
}, (table) => {
    return {
        trainsId: (0, mysql_core_1.primaryKey)(table.id),
    };
});
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.serial)("id").notNull(),
    mail: (0, mysql_core_1.varchar)("mail", { length: 256 }),
    password: (0, mysql_core_1.varchar)("password", { length: 256 }),
}, (table) => {
    return {
        usersId: (0, mysql_core_1.primaryKey)(table.id),
    };
});
