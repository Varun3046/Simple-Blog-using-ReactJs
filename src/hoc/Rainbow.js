import React from 'react'

const Rainbow = (WrappedComponent) =>{

    const colours =[ 'red','pink','orange','blue','green','yellow']
    const randomColor = colours[Math.floor(Math.random()*5)]

    // making class name basedon randomcolor
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
               <WrappedComponent  {...props}/> 
            </div>
        )
    }

}

export default Rainbow