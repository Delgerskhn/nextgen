import * as passport from "passport";
import {
  serializeUser,
  deserializeUser,
  localStrategy,
  facebookStrategy,
  googleStrategy,
} from "@lib/auth/api/service";

passport.use(localStrategy);
passport.use(facebookStrategy);
passport.use(googleStrategy);

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

export { passport };
