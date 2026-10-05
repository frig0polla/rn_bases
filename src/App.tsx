import { useState } from 'react'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiterals } from './typescript/ObjectLiterals'
import { BasicFunctions } from './typescript/BasicFunctions'
import { Counter } from './typescript/Counter'
import { UsersPage } from './typescript/UsersPage'


function App() {

  return (
    <>
    <div className="flex justify-center items-center">
    <h1>React + TypeScript</h1>

      <BasicTypes />


      <ObjectLiterals />


      <BasicFunctions />


      <Counter />
      
      <UsersPage />
      </div>
    </>
  )
}

export default App
