var jwt = require("jsonwebtoken");

module.exports = {
    verifyToken: async function (req, res, next) {
        // console.log(req.headers);
        var token = req.headers.authorization;
        try {
            if (token) {
                var payload = await jwt.verify(token, "thisisasecreat");
                req.user = payload;
               return next();
            } else{
                return res.status(400).json({message: "Token required" });
            }
        } catch (err) {
            console.log(err);
            next(err);
        }   
    },
    isAdmin: async function (req, res, next) {
        let token = req.headers.authorization;
    
        try {
            if (!payload.isAdmin) {
            let payload = await jwt.verify(token, 'thisissecret');
            return res.status(400).json({ error: 'You have to be loggedin as Admin' });
            req.user = payload;
            next();
          } else {
            return res.status(400).json({message: "Token required" });
          }
        } catch (error) {
          next(error);
        }
    }
}