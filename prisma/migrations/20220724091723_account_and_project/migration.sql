/*
  Warnings:

  - Added the required column `firstName` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('Male', 'Female');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "pictureKey" TEXT,
ADD COLUMN     "sex" "Sex";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "point" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "place" INTEGER,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_userId_key" ON "Project"("userId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
