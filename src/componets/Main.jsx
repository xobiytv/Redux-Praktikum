import React from 'react'
import { Navbar, Card } from './'

export default function Main() {
    return (
        <div className=''>
            <Navbar/>
            <div className='container'>
                <Card/>
            </div>
            
            <h1 className="text-3xl text-center font-bold underline">
                Hello world!
            </h1>
        </div>
    )
}
