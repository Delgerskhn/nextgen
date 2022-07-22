import {
  PrismaClient,
  PriceInterval,
  PriceType,
} from "@prisma/client";
import CSVToJSON from "csvtojson";
import * as bcrypt from "bcryptjs"; 

const prisma = new PrismaClient();

async function generatePasswordDigest() {
  return bcrypt.hash("changeme", 10);
}


async function main() {
  
  const userEmails = [];
  for (let i = 1; i <= 10; i++) {
    userEmails.push(`user${i}@nomadicsoft.net`);
  }
  let i = 0;
  for await (const email of userEmails) {
    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        passwordDigest: await generatePasswordDigest(),
        role: "STUDENT",
        phoneNumber: (88889000 + i++).toString(),
        phoneNumberVerified: new Date()
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
