import { cn } from "@/lib/utils";
import { forwardRef } from "react";     // Este componente está utilizando el gancho forwardRef para permitir que el atributo ref
                                        // se pase al elemento botón subyacente. 
                                        // ref puede ser una referencia al boton -> útil para manipular el elemento o escuchar eventos        


export interface ButtonProps            // Define las propiedades que se pueden pasar al componente Button
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ // Componente controlado -> valor de disabled y type es controlado por el componente padre
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return ( // Button devuelve un elemento buttom con las propiedades especificadas.
        <button
            className={cn(
              `
                w-auto
                rounded-full
                bg-black
                border-transparent
                px-5
                py-3
                disabled:cursor-not-allowed
                disabled:opacity-50
                text-white
                font-semibold
                hover:opacity-75
                transition
              `,  
              className
            )}
            ref={ref}
        >
            {children}
        </button>    
    )
});

Button.displayName = "Button"; // establece el nombre de visualización del componente Button en "Button".

export default Button;