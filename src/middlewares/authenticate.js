import passport from 'passport';

export const authenticate = (req,res,next) => {
    console.log("authenticate called from middleware");
    passport.authenticate('jwt', (err,user) => {
        console.log("user",user);
        if(err) next(err);
        if(!user) {
            return res.status(401).json({
                message: 'Unauthorised token'
            })
        }
        req.user = user;
        next();
    })(req,res,next);
}