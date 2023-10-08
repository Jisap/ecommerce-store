"use client"

import Currency from "@/components/ui/currency";
import Iconbutton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { X } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Product } from "@/types";


interface CartItemsProps {
   data: Product;
}

const CartItem: React.FC<CartItemsProps> = ({ data }) => {
   return (
      <div>
         caritem

      </div>
   )
}

export default CartItem