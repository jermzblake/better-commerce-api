/*
  Warnings:

  - Added the required column `size` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "size" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Size_name_key" ON "Size"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_size_fkey" FOREIGN KEY ("size") REFERENCES "Size"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
