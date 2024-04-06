import { Request, Response, Router } from "express";
import passport from "../config/passport";

const router = Router();

router.get('/',
  passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar.events'] }));

router.get('/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
      return res.redirect('http://localhost:5173/auth/google/failure');
    }
    res.redirect('http://localhost:5173/home/event-types');
  });

router.get('/failure', (_: Request, res: Response) => {
  res.redirect('http://localhost:5173')
});

export { router as googleAuthRoutes };

