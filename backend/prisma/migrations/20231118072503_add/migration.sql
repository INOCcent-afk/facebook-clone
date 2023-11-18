-- CreateTable
CREATE TABLE "_UserFollowedRequest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserFollowedRequest_AB_unique" ON "_UserFollowedRequest"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFollowedRequest_B_index" ON "_UserFollowedRequest"("B");

-- AddForeignKey
ALTER TABLE "_UserFollowedRequest" ADD CONSTRAINT "_UserFollowedRequest_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollowedRequest" ADD CONSTRAINT "_UserFollowedRequest_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
