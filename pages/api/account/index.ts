import { createHandler } from "@api/handler";
import { createAccount, updateAccount } from "@lib/account/api/accountService";
import { AccountInput } from "@lib/account/data/types";
import { updateProfile } from "@lib/profile/api/service";

export default createHandler()
  .post(async (req, res) => {
    res.sendSuccess(await createAccount(req.body));
  })
  .put(async (req, res) => {
    const input: AccountInput = req.body;
    if (req?.body?.email) delete req.body.email;
    res.sendSuccess(await updateAccount(req.body));
  });
