-- AlterTable
ALTER TABLE "ChatRoom" ALTER COLUMN "viewed" DROP NOT NULL,
ALTER COLUMN "viewed" DROP DEFAULT,
ALTER COLUMN "viewed" SET DATA TYPE TEXT;