/*
  Warnings:

  - You are about to drop the column `receiverId` on the `FriendRequest` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `FriendRequest` table. All the data in the column will be lost.
  - Added the required column `receiverUid` to the `FriendRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderUid` to the `FriendRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FriendRequest" DROP CONSTRAINT "FriendRequest_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "FriendRequest" DROP CONSTRAINT "FriendRequest_senderId_fkey";

-- DropIndex
DROP INDEX "FriendRequest_senderId_receiverId_idx";

-- AlterTable
ALTER TABLE "FriendRequest" DROP COLUMN "receiverId",
DROP COLUMN "senderId",
ADD COLUMN     "receiverUid" TEXT NOT NULL,
ADD COLUMN     "senderUid" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "FriendRequest_senderUid_receiverUid_idx" ON "FriendRequest"("senderUid", "receiverUid");

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_senderUid_fkey" FOREIGN KEY ("senderUid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_receiverUid_fkey" FOREIGN KEY ("receiverUid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
