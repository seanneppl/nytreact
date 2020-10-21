import { join } from "path";
import { Router } from "express";
import apiRoutes from "./api";

const router: Router = Router();

router.use("/api", apiRoutes);

router.use(function (req, res) {
  res.sendFile(join(__dirname, "../client/build/index.html"));
});

export default router;
