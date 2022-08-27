import { createHandler } from "@api/handler";
import {
  createProject,
  getProjects,
  updateProject,
} from "@lib/project/api/projectService";

export default createHandler()
  .get(async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page as string) : 0;
    const q = typeof req.query.q == "string" ? req.query.q : undefined;
    const projects = await getProjects(page, q);
    res.sendSuccess(projects);
  })
  .post(async (req, res) => {
    res.sendSuccess(await createProject(req.body));
  })
  .put(async (req, res) => {
    res.sendSuccess(await updateProject(req.body));
  });
