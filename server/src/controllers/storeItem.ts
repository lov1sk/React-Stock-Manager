import { ItemModel } from "../models/itemModel";
import { Request, Response } from "express";

class StoreItem {
  async handle(req: Request, res: Response): Promise<Response> {
    const item = req.body;
    console.log(item);

    try {
      await ItemModel.create(item);

      return res.status(201).json({ message: "Item created" });
    } catch (err) {
      return res.status(500);
    }
  }
}

export const storeItem = new StoreItem();
