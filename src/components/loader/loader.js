import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center align-center'>
            <Triangle ariaLabel="loading-indicator" color='#07080B' height={50} width={50} />
        </div>
    )
}

export { Loader }