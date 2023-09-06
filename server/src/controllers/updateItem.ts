import { ItemModel } from "../models/itemModel";
import { Request, Response } from "express";

class UpdateItem {
  async handle(req: Request, res: Response): Promise<Response | void> {
    console.log("hello");

    const { id } = req.params;
    const item = req.body;
    try {
      let updatedItem = await ItemModel.findByIdAndUpdate(id, item);
      updatedItem = await ItemModel.findById(id);
      return res.status(201).json({ result: updatedItem });
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateItem = new UpdateItem();
