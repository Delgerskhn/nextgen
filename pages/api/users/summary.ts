import { createHandler } from "@api/handler";
import { prisma } from "@api/prisma";

export default createHandler().get(async (req, res) => {
  res.sendSuccess({ total: await prisma.user.count() });
});
