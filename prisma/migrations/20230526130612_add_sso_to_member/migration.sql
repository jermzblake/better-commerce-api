/*
  Warnings:

  - Added the required column `auth_type` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('sso', 'creds');

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "auth_type" "AuthType" NOT NULL,
ADD COLUMN     "sso_type" VARCHAR(255),
ALTER COLUMN "password_hash" DROP NOT NULL;
