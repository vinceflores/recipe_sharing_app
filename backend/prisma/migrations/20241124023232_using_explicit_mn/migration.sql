-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ImagesOnComments" (
    "imageId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("commentId", "imageId"),
    CONSTRAINT "ImagesOnComments_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ImagesOnComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VideosOnComments" (
    "videoId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("commentId", "videoId"),
    CONSTRAINT "VideosOnComments_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VideosOnComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CategoryToRecipe" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CategoryToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CommentToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CommentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CommentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_userId_key" ON "Settings"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToRecipe_AB_unique" ON "_CategoryToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToRecipe_B_index" ON "_CategoryToRecipe"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommentToUser_AB_unique" ON "_CommentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CommentToUser_B_index" ON "_CommentToUser"("B");
