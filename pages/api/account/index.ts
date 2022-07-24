import { createHandler } from "@api/handler";
import { createAccount, updateAccount } from "@lib/account/api/accountService";

export default createHandler()
  .post(async (req, res) => {
    res.sendSuccess(await createAccount(req.body));
  })
  .put(async (req, res) => {
    res.sendSuccess(await updateAccount(req.body));
  });
