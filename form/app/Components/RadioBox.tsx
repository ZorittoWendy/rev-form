import React from 'react'

function RadioBox() {
  return (
    <div className="sm:col-span-2 mt-10">
        <p className="mb-4 text-sm font-semibold text-gray-500 ">
            Escolaridade
        </p>
        <div className="flex items-center ps-3">
            <input 
                id="list-radio-license"
                 type="radio" 
                 value="option1" 
                 
                 className="w-4 h-4 bg-gray-100 border-gray-300 
                  dark:ring-offset-gray-700
                  dark:focus:ring-offset-gray-700
                  focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                                
            <label htmlFor="list-radio-license" 
                className="w-full py-3 ms-2 text-sm 
                font-medium text-gray-900
                 dark:text-gray-500">Ensino Fundamental Completo
            </label>
        </div>

        <div className="flex items-center ps-3">
            <input 
                id="list-radio-license"
                 type="radio" 
                 value="option1" 
                 
                 className="w-4 h-4 bg-gray-100 border-gray-300 
                  dark:ring-offset-gray-700
                  dark:focus:ring-offset-gray-700
                  focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                                
            <label htmlFor="list-radio-license" 
                className="w-full py-3 ms-2 text-sm 
                font-medium text-gray-900
                 dark:text-gray-500">Ensino Medio Completo
            </label>
        </div>

        <div className="flex items-center ps-3">
            <input 
                id="list-radio-license"
                 type="radio" 
                 value="option1" 
                 
                 className="w-4 h-4 bg-gray-100 border-gray-300 
                  dark:ring-offset-gray-700
                  dark:focus:ring-offset-gray-700
                  focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                                
            <label htmlFor="list-radio-license" 
                className="w-full py-3 ms-2 text-sm 
                font-medium text-gray-900
                 dark:text-gray-500">Ensino Superior Completo
            </label>
        </div>
    </div>
  )
}

export default RadioBox