import { createHandler } from "@api/handler";
import { toggleNotify } from "@lib/profile/api/service";
import { ERROR_MESSAGES } from "@util/errors";

const handler = createHandler();

handler.patch(async (req, res) => {
  try {
    res.sendSuccess(
      await toggleNotify({
        ability: req.ability,
        userId: req.user?.id,
        toggleName: req.body.toggleName,
      })
    );
  } catch (error) {
    res.sendError(500, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
  }
});

export default handler;
