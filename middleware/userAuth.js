// const { verifyToken } = require("./jwtauth");
// const asyncHandler = require("express-async-handler");

// const tokenValidate = asyncHandler(async (req, res, next) => {
//     let token;
//     const authHeader = req.headers.authorization;
  
//     if (authHeader && authHeader.startsWith('Bearer')) {
//       token = authHeader.split(' ')[1];
//       try {
//         const decoded = verifyToken(token);
//         req.username = decoded.username;
//         next();
//       } catch (err) {
//         res.status(401).json({ message: 'User is Unauthorized' });
//       }
//     } else {
//       res.status(400).json({ message: 'User is not Unauthorized' });
//     }
//   });
  
// module.exports = tokenValidate;
