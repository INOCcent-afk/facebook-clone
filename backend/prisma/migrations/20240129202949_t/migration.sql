-- CreateTable
CREATE TABLE "ViewedChatRoom" (
    "userId" INTEGER NOT NULL,
    "chatRoomId" INTEGER NOT NULL,

    CONSTRAINT "ViewedChatRoom_pkey" PRIMARY KEY ("userId","chatRoomId")
);

-- AddForeignKey
ALTER TABLE "ViewedChatRoom" ADD CONSTRAINT "ViewedChatRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewedChatRoom" ADD CONSTRAINT "ViewedChatRoom_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
