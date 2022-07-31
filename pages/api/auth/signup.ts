import { createHandler } from "@api/handler";
import { createUser } from "@lib/user/api/service";
import { ERROR_MESSAGES } from "@util/errors";

const handler = createHandler();

handler.post(async (req: any, res) => {
  const user = await createUser(req.body);
  req.login(user, (err: any) => {
    if (err) return res.sendError(401, ERROR_MESSAGES.UNAUTHORIZED);
    req.session.userId = user.id;
    return res.sendSuccess(user);
  });
});

export default handler;
