import { createHandler } from "@api/handler";
import { sendProjectReceived } from "@lib/mail/api/mailService";
import {
  createProject,
  getProjects,
  updateProject,
} from "@lib/project/api/projectService";
import { getUserById } from "@lib/user/api/service";

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
    const proj = await updateProject(req.body);
    if (
      !!(proj.projectDocFile && proj.teamIntroFile && proj.projectIntroFile)
    ) {
      if (!proj.allFileUploaded) {
        var u = await getUserById(proj.userId);
        if (u) sendProjectReceived(u!.email!, proj.teamName!);
      }
      updateProject({ ...proj, allFileUploaded: true });
    }
    res.sendSuccess(proj);
  });
