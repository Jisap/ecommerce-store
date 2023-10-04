"use client"

import getProducts from "@/actions/get-products";

export const revalidate = 0;

interface CategroyProps {
   params: {
      categoryId: string;
   },
   searchParams: {
      colorId: string;
      sizeId: string;
   }
}

const CategoryPage: React.FC<CategroyProps> = async({ params, searchParams }) => {

   const products = await getProducts({
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
      sizeId: searchParams.sizeId,
   });

   return (
      <div>CategoryPage</div>
   )
}

export default CategoryPage