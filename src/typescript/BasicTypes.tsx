import React from 'react'

export const BasicTypes = () => {
  const name: string = 'Antonio';
  const age: number = 40;
  const isActive: boolean = true;
  const power: string[] = ['React', 'ReactNative']
  return (
    <>
    <div>BasicTypes</div>
    <h3> {name} </h3>
    </>
  )
}
