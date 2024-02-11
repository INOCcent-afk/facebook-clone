/*
  Warnings:

  - You are about to drop the column `userId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Reaction` table. All the data in the column will be lost.
  - Added the required column `userUid` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUid` to the `Reaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reaction" DROP CONSTRAINT "Reaction_userId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "userId",
ADD COLUMN     "userUid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reaction" DROP COLUMN "userId",
ADD COLUMN     "userUid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
