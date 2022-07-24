import { Strategy } from "passport-facebook";
import { manageExternalUser } from "@lib/user/api/service";
import { apiRoot } from "@util/config";

export const facebookStrategy = new Strategy(
  {
    clientID: `${process.env.FACEBOOK_APP_ID}`,
    clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
    callbackURL: `${apiRoot}/auth/facebook/callback`,
    profileFields: ["email"],
  },
  async function (accessToken, refreshToken, profile, cb) {
    const email = profile.emails ? profile.emails[0].value : "";

    const user = await manageExternalUser(
      email,
      "facebook",
      profile.id,
      "someid",
      accessToken,
      refreshToken
    );

    return cb(null, user);
  }
);
