"use client"

import { Product } from "@/types";
import Image from "next/image";
import Iconbutton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from 'react';
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";


interface ProductCard {
   data : Product;
}

const ProductCard:React.FC<ProductCard> = ({ data }) => {

   const router = useRouter();
   const cart = useCart();

   const handleClick = () => {
      router.push(`/product/${data?.id}`)
   };

   const previewModal = usePreviewModal(); // hook de estado de zustand

   const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      previewModal.onOpen(data); // establece estado para el modal -> data=product, isOpen=true -> ModalProvider -> PreviewModal -> Modal
   };

   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      cart.addItem(data); // establece estado para el modal -> items[] + data, isOpen=true -> ModalProvider -> PreviewModal -> Modal -> navbar-actions +1
   };

   return (
      <div  
         onClick={handleClick} 
         className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      >
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
                     onClick={ onPreview }
                     icon={<Expand size={20} className="text-gray-600"/>}
                  />
                  <Iconbutton
                     onClick={ onAddToCart }
                     icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
               </div>
            </div>
         </div>
         {/* Description */}
         <div>
            <p className="font-semibold text-lg">
               {data.name}
            </p>
            <p className="text-sm text-gray-500">
               {data.category?.name}
            </p>
         </div>
         {/* Price */}
         <div className="flex items-center justify-between">
            <Currency value={data?.price} />
         </div>
      </div>
   )
}

export default ProductCard