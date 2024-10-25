ALTER TABLE "events" ADD COLUMN IF NOT EXISTS "location" varchar(255) DEFAULT 'TBD';--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN IF NOT EXISTS "points" integer DEFAULT 0 NOT NULL;