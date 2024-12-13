-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("description", "id", "name") SELECT "description", "id", "name" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
