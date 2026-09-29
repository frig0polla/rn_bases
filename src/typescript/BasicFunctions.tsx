import React from 'react'

export const BasicFunctions = () => {

    const addTwoNumbrers =(a: number, b: number): number => {
        return a + b;
    }
  return (
    <>
    <div>BasicFunctions</div>

    <span>El resultado de sumar 2 + 8 es: { addTwoNumbrers(2, 8)}</span>
    </>
  )
}
