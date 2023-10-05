"use client"

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string';

interface FilterProps {
   valueKey: string;
   name: string;
   data: (Size | Color)[];
}

const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {

   const searchParams = useSearchParams();
   const router = useRouter();

   const selectedValue = searchParams.get(valueKey);        // De los params obtenemos valueKey="sizeId"

   const onClick = (id:string) => {
      const current = qs.parse(searchParams.toString());    // Parámetros en un string
      const query = {                                       // Nuevo objeto 
         ...current,                                        // de parámetros de consulta          
         [valueKey]: id                                     // con el valor del filtro actualizado
      }

      if(current[valueKey] === id){                         // Si el valor seleccionado ya es el mismo que el valor del filtro se 
         query[valueKey] = null                             // elmina el parámetro de la consulta de la url
      }

      const url = qs.stringifyUrl({                         // Se construye la url con el nuevo size elegido
         url: window.location.href,
         query
      }, { skipNull: true });

      router.push(url);                                     // Redirige al usuario a la página con los filtros actualizados.   
   }

   return (
      <div className="mb-8">
         <h3 className="text-lg font-semibold">
            {name}
         </h3>
         <hr className="my-4" />
         <div className="flex flex-wrap gap-2">
            { data.map((filter) => (
               <div key={filter.id} className="flex items-center">
                  <Button
                     className={cn(
                       "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                       selectedValue === filter.id && "bg-black text-white" 
                     )}
                     onClick={() => onClick(filter.id)}
                  >
                     { filter.name }
                  </Button>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Filter