import { createHandler } from "@api/handler";
import { changePassword } from "@lib/user/api/service";
import { ERROR_MESSAGES } from "@util/errors";

export default createHandler().put(async (req, res) => {
  if (!req.user || req.user.role != "ADMIN")
    return res.sendError(401, ERROR_MESSAGES.UNAUTHORIZED);
  res.sendSuccess(
    await changePassword({
      userId: req.body.id,
      password: req.body.password,
    })
  );
});
