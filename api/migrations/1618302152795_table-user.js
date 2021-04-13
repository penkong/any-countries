/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE IF NOT EXISTS "users" (
      "id" SERIAL PRIMARY KEY,
      "email" varchar(50) UNIQUE NOT NULL,
      "password" text NOT NULL,
      "confirmed" boolean DEFAULT false,
      "type" varchar(50),
      "deleted" boolean DEFAULT false,
      "created_at" timestamptz NOT NULL DEFAULT (now()),
      "updated_at" timestamptz,
      "deleted_at" timestamptz
    );
  `)
}

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE IF EXISTS "users" CASCADE;
  `)
}
