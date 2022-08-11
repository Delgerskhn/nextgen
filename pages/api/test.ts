import { createHandler } from "@api/handler";
import { sendEmail } from "@lib/mail/api/mailService";

export default createHandler().get(async (req, res) => {
  res.send(await sendEmail("delgersaikhan2001@gmail.com"));
});
