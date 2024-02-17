/*
  Warnings:

  - You are about to drop the column `commentParentId` on the `Comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[repliedCommentToId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "commentParentId",
ADD COLUMN     "repliedCommentToId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_repliedCommentToId_key" ON "Comment"("repliedCommentToId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_repliedCommentToId_fkey" FOREIGN KEY ("repliedCommentToId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
