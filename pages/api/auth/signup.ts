import { createHandler } from "@api/handler";
import { sendEmail } from "@lib/mail/api/mailService";
import { createUser } from "@lib/user/api/service";
import { ERROR_MESSAGES } from "@util/errors";

const handler = createHandler();

handler.post(async (req: any, res) => {
  // return res.sendError(401, "application-closed", "application-closed");
  const user = await createUser(req.body);
  user.email && (await sendEmail(user.email));
  res.sendSuccess(user);
});

export default handler;
