import { useState } from 'react'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiterals } from './typescript/ObjectLiterals'
import { BasicFunctions } from './typescript/BasicFunctions'
import { Counter } from './typescript/Counter'


function App() {

  return (
    <>
    <div className="flex justify-center items-center">
    <h1>React + TypeScript</h1>

      <BasicTypes />


      <ObjectLiterals />


      <BasicFunctions />


      <Counter />
      
      </div>
    </>
  )
}

export default App
