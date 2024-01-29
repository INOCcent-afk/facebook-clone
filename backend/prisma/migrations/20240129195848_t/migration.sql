/*
  Warnings:

  - You are about to drop the column `viewed` on the `ChatRoom` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "viewed";

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "viewed" BOOLEAN NOT NULL DEFAULT false;
