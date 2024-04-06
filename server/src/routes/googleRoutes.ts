import { Request, Response, Router } from "express";
import passport from "../config/passport";

const router = Router();

router.get('/',
  passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar.events'] }));

router.get('/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  (_: Request, res: Response) => {
    // Successful authentication, redirect to the frontend
    res.redirect('http://localhost:5173/event-types');
  });

router.get('/failure', (_: Request, res: Response) => {
  res.status(401).json({ message: 'failed to connect your calendar, TRY AGAIN' });
});

export default router;

