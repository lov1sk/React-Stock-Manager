import { ItemModel } from "../models/itemModel";
import { Request, Response } from "express";

class ShowItems {
  async handle(req: Request, res: Response): Promise<Response> {
    const items = await ItemModel.find({});

    if (!items) {
      return res.status(400);
    }
    return res.status(201).json({ result: items });
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const item = await ItemModel.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).json({ result: item });
  }
}

export const showItems = new ShowItems();
