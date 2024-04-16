import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import User from "../models/userModel";

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
  callbackURL: process.env.CALLBACK_URL as string
},
  async function(accessToken: string, refreshToken: string, profile: Profile, cb: (err: any, user?: any) => void) {
    try {
      const profilePicUrl = profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null;
      let user = await User.findOne({ email: profile.emails![0].value }).lean().exec();

      if (!user) {
        return cb(null, false);
      }

      user = await User.findOneAndUpdate(
        { email: profile.emails![0].value },
        {
          $set: {
            googleId: profile.id,
            googleAccessToken: accessToken,
            googleRefreshToken: refreshToken,
            profilePicUrl: profilePicUrl,
            firstName: profile.name?.givenName || "",
            lastName: profile.name?.familyName || ""
          }
        },
        { new: true }
      ).lean().exec();

      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  }));

passport.serializeUser(function(user: any, done) {
  done(null, user._id);
});

passport.deserializeUser(async function(id: string, done) {
  try {
    const user = await User.findById(id).lean().exec();
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;

