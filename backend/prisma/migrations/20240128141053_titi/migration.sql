/*
  Warnings:

  - The `viewed` column on the `ChatRoom` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "viewed",
ADD COLUMN     "viewed" TEXT[];
