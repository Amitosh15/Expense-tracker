import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  // const token = req.headers.authorization;
  const bearer = req.headers.authorization;

  // if (!token) {
  //   return res.status(401).json({ message: "Not authorized" });
  // }

  if (!bearer || !bearer.startsWith("Bearer "))
    return res.status(401).json({ message: "Not authorized" });

  const token = bearer.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalid" });
  }
};
