import { createHandler } from "@api/handler";
import { createUser } from "@lib/user/api/service";
import { ERROR_MESSAGES } from "@util/errors";

const handler = createHandler();

handler.post(async (req: any, res) => {
  const user = await createUser(req.body);
  res.sendSuccess(user);
});

export default handler;
