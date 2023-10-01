"use client"

import { Product } from "@/types";
import Image from "next/image";
import Iconbutton from "./icon-button";
import { Expand } from "lucide-react";

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
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
               <div className="flex gap-x-6 justify-center">
                  <Iconbutton
                     onClick={() => {}}
                     icon={<Expand size={20} className="text-gray-600"/>}

                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductCard