import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Home } from "./pages/Home";
import { StockItems } from "./pages/StockItems";
import { CreateItem } from "./pages/CreateItem";
import { UpdateItem } from "./pages/UpdateItem";
import { ItemDetails } from "./pages/ItemDetails";

export const router = createBrowserRouter([{
  path:'/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element:<Home />
    },
    {
      path:'items',
      element:<StockItems />,
    },
    {
      path:'itemDetails/:itemId',
      element:<ItemDetails />,
    },
    {
      path:'new',
      element: <CreateItem />
    },
    {
      path:'update/:itemId',
      element: <UpdateItem />
    }
  ]
}])