import { createHandler } from "@api/handler";
import { ERROR_MESSAGES } from "@util/errors";
import { confirmVerificationCode } from "@lib/user/api/twilio";
import { validatePhoneNumber } from "@lib/user/data/validators";

const handler = createHandler();

handler.post(async (req, res) => {
  const isValid = validatePhoneNumber(
    req.body.phoneNumber,
    req.body.countryCode
  );
  await confirmVerificationCode(
    isValid.fullPhoneNumber,
    req.body.confirmationCode
  )
    .then((message) => {
      res.sendSuccess({ valid: message.valid });
    })
    .catch((error) => {
      console.log(error);
      res.sendError(error.status, ERROR_MESSAGES.BAD_REQUEST);
    });
});
export default handler;
