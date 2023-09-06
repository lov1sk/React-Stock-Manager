import { ItemModel } from "../models/itemModel";
import { Request, Response } from "express";

class DeleteItem {
  async handle(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    try {
      await ItemModel.findByIdAndDelete(id);
      return res.status(201).json({ message: "Deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500);
    }
  }
}

export const deleteItem = new DeleteItem();
