-- CreateTable
CREATE TABLE "CommentsOnRecipes" (
    "recipeId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    PRIMARY KEY ("commentId", "recipeId"),
    CONSTRAINT "CommentsOnRecipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CommentsOnRecipes_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
