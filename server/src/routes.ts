import { Router } from "express";
import { storeItem } from "./controllers/storeItem";
import { showItems } from "./controllers/showItems";
import { deleteItem } from "./controllers/deleteItem";
import { updateItem } from "./controllers/updateItem";

const routes = Router();

routes.get("/items", showItems.handle);
routes.get("/item/:id", showItems.findById);
routes.post("/item/new", storeItem.handle);
routes.put("/item/:id", updateItem.handle);
routes.delete("/item/:id", deleteItem.handle);

export { routes };
