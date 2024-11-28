// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   let token;
//   let authHeader = req.headers.Authorization || req.headers.Authorization;
//   if (authHeader && authHeader.startsWith("Bearer")) {
//     token = authHeader.split("")[1];

//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "No token, authorization denied" });
//     }

//     try {
//       const decode = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decode;
//       console.log("The decoded user is: ", req.user);
//       next();
//     } catch (error) {
//       res.status(400).json({ message: "Token is not valid" });
//     }
//   } else {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }
// };

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Extract the token
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    try {
      //   console.log(token);

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log("The decoded user is: ", req.user);
      next();
    } catch (error) {
      return res.status(400).json({ message: "Token is not valid" });
    }
  } else {
    // No authorization header present
    return res.status(401).json({ message: "Authorization header missing" });
  }
};

module.exports = verifyToken;
