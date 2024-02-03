/*
  Warnings:

  - You are about to drop the column `parentId` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sharedPostId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_parentId_fkey";

-- DropIndex
DROP INDEX "Post_parentId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "parentId",
ADD COLUMN     "sharedPostId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Post_sharedPostId_key" ON "Post"("sharedPostId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_sharedPostId_fkey" FOREIGN KEY ("sharedPostId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
