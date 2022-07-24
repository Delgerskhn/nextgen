import { createHandler } from "@api/handler";
import { getAccountsByUserId } from "@lib/account/api/accountService";

export default createHandler().get(async (req, res) => {
  res.sendSuccess(await getAccountsByUserId(req.query.userId as string));
});
