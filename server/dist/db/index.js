"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const planetscale_serverless_1 = require("drizzle-orm/planetscale-serverless");
const database_1 = require("@planetscale/database");
// create the connection
const connection = (0, database_1.connect)({
    url: process.env.DB_URL,
});
exports.db = (0, planetscale_serverless_1.drizzle)(connection);
