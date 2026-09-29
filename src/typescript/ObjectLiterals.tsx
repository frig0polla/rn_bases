import React from 'react'

export const ObjectLiterals = () => {

        interface adress  {
            country: string;
            province: string;
            city: string;
            street?: string;
            number: number;
        }

        interface Person {
            age: number;
            firstName: string;
            lastName: string;
            adress: Adress;
        }

        
    const person: Person = {
        age: 39,
        firstName: 'Antonio',
        lastName: 'Calabuig',
        address: {
            country: 'Spain',
            province: 'Valencia',
            city: 'Aldaia',
            number: 70
            }
        }

  return (
    <>
    <div>ObjectLiterals</div>

    <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  )
}
