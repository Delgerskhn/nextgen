import nc from "next-connect";

import { AppRequest, AppResponse } from "./types";
import { trustProxyMiddleware } from "./middlewares/trust-proxy";
import { responseMiddleware } from "./middlewares/response";
import { sessionMiddleware } from "./middlewares/session";
import { passport } from "./middlewares/passport";
import { abilityMiddleware } from "./middlewares/ability";

const middlewares = [
  trustProxyMiddleware,
  responseMiddleware,
  sessionMiddleware,
  passport.initialize(),
  passport.session(),
  abilityMiddleware,
];

export const createHandler = (options = {}) => {
  console.log("create handler");
  return nc<AppRequest, AppResponse>({
    onError: (err, _, res) => {
      console.error(err);
      res.sendError(err);
    },
    onNoMatch: (_, res) => {
      res.status(404).end("Page is not found");
    },
    ...options,
  }).use(...middlewares);
};
