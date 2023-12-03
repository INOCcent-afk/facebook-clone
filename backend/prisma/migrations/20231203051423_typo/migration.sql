/*
  Warnings:

  - A unique constraint covering the columns `[senderUid]` on the table `FriendRequest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[receiverUid]` on the table `FriendRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_senderUid_key" ON "FriendRequest"("senderUid");

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_receiverUid_key" ON "FriendRequest"("receiverUid");
