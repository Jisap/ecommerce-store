import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;  // Ruta original a la petición de la api

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({             
        url: URL,                                       // A la URL le añadimos 
        query: {                                        // las props como queremos que aparezcan
            colorId: query.colorId,                     // si es que vienen.
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        }
    });

    
    const res = await fetch(url);   // Hacemos la petición con la nueva URL que contiene todas las props añadidas
    return res.json();
}

export default getProducts;