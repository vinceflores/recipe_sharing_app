/*
  Warnings:

  - You are about to drop the column `description` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `ingredients` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructions` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "userId" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("id", "userId") SELECT "id", "userId" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
