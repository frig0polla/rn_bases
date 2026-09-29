import React, { useState } from 'react'

export const useCounter = () => {

        const [counter, setCounter] = useState<number>(0)

        const increment = (value: number) => {
            setCounter(counter + value)
    }

    return {
        //properties
        counter,
            
        increment
    }
}
