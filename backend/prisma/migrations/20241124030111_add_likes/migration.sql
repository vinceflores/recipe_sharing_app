-- CreateTable
CREATE TABLE "Likes" (
    "userId" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "recipeId"),
    CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Likes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
