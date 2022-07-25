import { createHandler } from "@api/handler";
import { deleteObject } from "@lib/file/api/service";

export default createHandler().delete(async (req, res) => {
  res.sendSuccess(await deleteObject(req.query.fileKey as string));
});
