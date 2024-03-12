import { InputHTMLAttributes, forwardRef } from "react";

type Inputprops = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
}


// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, Inputprops>(
  ({type ='text', name ='', ...props}, ref) =>{
    return(
      <>
        <label htmlFor={name}
         className="block text-neutral-500 font-semibold text-sm py-2"
         >{props.label}</label>
        <input type={type} name={name} ref={ref} {...props} 
          className="block w-full border border-neutral-400 rounded p-2 mb-6"
        />            

      </>
    )
  }
)