/*
  Warnings:

  - You are about to alter the column `profilePic` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "profilePic" SET DATA TYPE VARCHAR(100);
