import { createHandler } from "@api/handler";
import { ERROR_MESSAGES } from "@util/errors";
import { carrierLookup, sendVerificationCode } from "@lib/user/api/twilio";
import { checkPhoneNotExists } from "@lib/user/api/service";
import { validatePhoneNumber } from "@lib/user/data/validators";

const handler = createHandler();

handler.post(async (req, res) => {
  const validate = validatePhoneNumber(
    req.body.phoneNumber,
    req.body.countryCode
  );
  //verify inside internal collection
  if (!validate.isValid)
    return res.sendError(
      400,
      ERROR_MESSAGES.BAD_REQUEST,
      "invalid-phone-number"
    );
  //Verify using twilio
  carrierLookup(validate.fullPhoneNumber)
    .then(() => {})
    .catch((error) => {
      return res.sendError(
        400,
        ERROR_MESSAGES.BAD_REQUEST,
        "invalid-phone-number"
      );
    });

  if (!(await checkPhoneNotExists(validate.fullPhoneNumber)))
    return res.sendError(
      409,
      ERROR_MESSAGES.CONFLICT,
      "phone-number-already-registered"
    );

  await sendVerificationCode(validate.fullPhoneNumber)
    .then((message: any) => {
      return res.sendSuccess({
        valid: true,
        fullPhoneNumber: validate.fullPhoneNumber,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.sendError(error.status, ERROR_MESSAGES.BAD_REQUEST);
    });
});

export default handler;
