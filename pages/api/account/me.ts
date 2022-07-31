import { createHandler } from "@api/handler";
import { getMyAccount } from "@lib/account/api/accountService";

export default createHandler().get(async (req, res) => {
  res.sendSuccess(await getMyAccount(req.user.id));
});
