import { createHandler } from "@api/handler";
import { getProjectByUserId } from "@lib/project/api/projectService";

export default createHandler().get(async (req, res) => {
  res.sendSuccess(await getProjectByUserId(req.query.userId as string));
});
