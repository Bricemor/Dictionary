-- CreateTable
CREATE TABLE "Dictionary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "cyrillic" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "gender" TEXT,
    "definition" TEXT NOT NULL,
    "definitionCyrillic" TEXT NOT NULL
);
