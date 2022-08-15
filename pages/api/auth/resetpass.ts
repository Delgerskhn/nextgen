import { createHandler } from "@api/handler";
import { sendResetPasswordLink } from "@lib/mail/api/mailService";
import { changePassword, getUser } from "@lib/user/api/service";
import { validateEmail } from "@lib/user/data/validators";
import { ERROR_MESSAGES } from "@util/errors";

export default createHandler().post(async (req, res) => {
  if (!validateEmail(req.body.email))
    return res.sendError(400, ERROR_MESSAGES.BAD_REQUEST, "invalid-email");

  var user = await getUser(req.body.email);
  if (!user)
    return res.sendError(400, ERROR_MESSAGES.BAD_REQUEST, "unrecognized-email");
  const randomPassword = "FisA78ca";
  await changePassword({
    userId: user.id,
    password: randomPassword,
  });
  await sendResetPasswordLink(req.body.email, randomPassword);

  res.sendSuccess({ isSuccess: true });
});
