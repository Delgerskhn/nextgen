import { createHandler } from "@api/handler";
import { createProject, updateProject } from "@lib/project/api/projectService";

export default createHandler()
  .post(async (req, res) => {
    res.sendSuccess(await createProject(req.body));
  })
  .put(async (req, res) => {
    res.sendSuccess(await updateProject(req.body));
  });
