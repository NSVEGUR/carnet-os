-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `bookings` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`train_id` int,
	`user_id` int,
	`from_place` varchar(256),
	`to_place` varchar(256),
	`date_of_journey` varchar(256),
	`departure` varchar(256),
	`arrival` varchar(256),
	`coach` varchar(256),
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `trains` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`from_place` varchar(256),
	`to_place` varchar(256),
	`departure` varchar(256),
	`arrival` varchar(256),
	CONSTRAINT `trains_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`mail` varchar(256),
	`password` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);

*/