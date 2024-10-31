/*
  Warnings:

  - The primary key for the `Adocao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Adotante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idade` on the `Pet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Adocao" DROP CONSTRAINT "Adocao_adotanteId_fkey";

-- DropForeignKey
ALTER TABLE "Adocao" DROP CONSTRAINT "Adocao_petId_fkey";

-- AlterTable
ALTER TABLE "Adocao" DROP CONSTRAINT "Adocao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "petId" SET DATA TYPE TEXT,
ALTER COLUMN "adotanteId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Adocao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Adocao_id_seq";

-- AlterTable
ALTER TABLE "Adotante" DROP CONSTRAINT "Adotante_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Adotante_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Adotante_id_seq";

-- AlterTable
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_pkey",
DROP COLUMN "idade",
ADD COLUMN     "dataNascimento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pet_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pet_id_seq";

-- AddForeignKey
ALTER TABLE "Adocao" ADD CONSTRAINT "Adocao_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adocao" ADD CONSTRAINT "Adocao_adotanteId_fkey" FOREIGN KEY ("adotanteId") REFERENCES "Adotante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
