/*
  Warnings:

  - The primary key for the `ViewedChatRoom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `ViewedChatRoom` table. All the data in the column will be lost.
  - Added the required column `userUid` to the `ViewedChatRoom` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ViewedChatRoom" DROP CONSTRAINT "ViewedChatRoom_userId_fkey";

-- AlterTable
ALTER TABLE "ViewedChatRoom" DROP CONSTRAINT "ViewedChatRoom_pkey",
DROP COLUMN "userId",
ADD COLUMN     "userUid" TEXT NOT NULL,
ADD CONSTRAINT "ViewedChatRoom_pkey" PRIMARY KEY ("userUid", "chatRoomId");

-- AddForeignKey
ALTER TABLE "ViewedChatRoom" ADD CONSTRAINT "ViewedChatRoom_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
