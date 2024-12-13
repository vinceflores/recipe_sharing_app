/*
  Warnings:

  - You are about to drop the column `commect` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL DEFAULT '🍴'
);
INSERT INTO "new_Category" ("id", "name") SELECT "id", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "recipeId" TEXT
);
INSERT INTO "new_Comment" ("id", "recipeId", "title") SELECT "id", "recipeId", "title" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
