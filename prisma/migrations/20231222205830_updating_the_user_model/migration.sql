/*
  Warnings:

  - You are about to drop the column `active` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `followers` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `registredAt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `active`,
    DROP COLUMN `followers`,
    DROP COLUMN `registredAt`,
    ADD COLUMN `phone` INTEGER NOT NULL DEFAULT 0;
