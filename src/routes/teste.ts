import Router from "express";

const router = Router();

router.get("/", () => {
  console.log("funciona");
});

export default router;
