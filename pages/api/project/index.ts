import { createHandler } from "@api/handler";
import { createProject } from "@lib/project/api/projectService";

export default createHandler().post(async (req, res) => {
  res.sendSuccess(await createProject(req.body));
});
