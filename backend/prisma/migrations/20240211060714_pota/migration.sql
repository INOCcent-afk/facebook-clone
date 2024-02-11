/*
  Warnings:

  - A unique constraint covering the columns `[userUid]` on the table `Reaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reaction_userUid_key" ON "Reaction"("userUid");
