import { createHandler } from "@api/handler";
import { createUser, createUserWithPhone } from "@lib/user/api/service";
import { ERROR_MESSAGES } from "@util/errors";

const handler = createHandler();

handler.post(async (req: any, res) => {
  try {
    const user = await createUser(
      req.body.email,
      req.body.password
    );
    req.login(user, (err: any) => {
      if (err) return res.sendError(401, ERROR_MESSAGES.UNAUTHORIZED);
      req.session.userId = user.id;
      return res.sendSuccess(user);
    });
  } catch (error) {
    console.log(error);
    res.sendError(500, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
  }
});

export default handler;
