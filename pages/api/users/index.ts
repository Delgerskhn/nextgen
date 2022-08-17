import { createHandler } from "@api/handler";
// import { subject } from "@casl/ability";
import { getUsers, createUser } from "@lib/user/api/service";
import { ERROR_MESSAGES } from "@util/errors";

const handler = createHandler();

handler
  .get(async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page as string) : 0;
    try {
      const users = await getUsers(page);
      res.sendSuccess(users);
    } catch (error) {
      res.sendError(500, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
  })
  .post(async (req, res) => {
    try {
      const user = createUser({ ...req.body });
      res.sendSuccess(user);
    } catch (error) {
      res.sendError(500, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
  });

export default handler;
