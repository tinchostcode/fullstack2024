import express from "express";

import { getProduct, getProducts,deleteProduct,createProduct,updateProduct } from "../controllers/ProductController.js";

const router = express.Router();


//forma 1 para crear las rutas

router.get("/:id",getProduct)
router.get("/",getProducts)
router.put("/:id",updateProduct)
router.post("/",createProduct)
router.delete("/:id",deleteProduct)

//Forma 2 para las rutas

//router.route("/").get.(getProduct).post(createProduct)
//router.route("/id").delete(deleteProduct).put(updateProduct).get(getProduct)

export default router

