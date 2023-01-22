
import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getPublishedProduct, getSingleProduct, updateProduct } from '../controller/productController.js';

const ProductRouter = express.Router();

ProductRouter.post("/addProduct", addProduct);
ProductRouter.get("/allProducts", getAllProducts);
ProductRouter.get("/published", getPublishedProduct);
ProductRouter.get("/:id", getSingleProduct);
ProductRouter.put("/:id", updateProduct);
ProductRouter.delete("/:id", deleteProduct);


export default ProductRouter;