"use client"

import { Product } from "@/types";
import Image from "next/image";

interface ProductCard {
   data : Product;
}

const ProductCard:React.FC<ProductCard> = ({ data }) => {
   return (
      <div className="bg-white group cursor-pointer rounded-xl p-3 space-y4">
         {/* Images and Actions */}
         <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image 
               src={data?.images?.[0]?.url}
               fill
               alt="Image"
               className="aspect-square object-cover rounded-md"
            />
         </div>
      </div>
   )
}

export default ProductCard