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
--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_train_id_trains_id_fk` FOREIGN KEY (`train_id`) REFERENCES `trains`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;