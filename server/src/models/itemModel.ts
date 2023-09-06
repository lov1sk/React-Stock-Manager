import mongoose ,{ Schema } from "mongoose";

const itemSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantityOnStock:{
    type: Number,
    default: 1
  },
  price:{
    type: Number,
    required:true
  }
})
itemSchema.set('timestamps',true)

export const ItemModel = mongoose.model('items',itemSchema)