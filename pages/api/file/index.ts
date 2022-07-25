import { createHandler } from "@api/handler";
import { deleteObject, getObjectSignedUrl } from "@lib/file/api/service";

export default createHandler()
  .get(async (req, res) => {
    res.sendSuccess(await getObjectSignedUrl(req.query.fileKey as string));
  })
  .delete(async (req, res) => {
    res.sendSuccess(await deleteObject(req.query.fileKey as string));
  });
