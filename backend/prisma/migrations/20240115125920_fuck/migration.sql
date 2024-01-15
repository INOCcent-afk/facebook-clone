/*
  Warnings:

  - You are about to drop the column `chatRoomId` on the `ChatRoom` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ChatRoom_chatRoomId_idx";

-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "chatRoomId",
ADD COLUMN     "name" TEXT;
