-- CreateTable
CREATE TABLE "Descendants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "descendant_name" TEXT NOT NULL,
    "descendant_img" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Descendants_descendant_name_key" ON "Descendants"("descendant_name");
