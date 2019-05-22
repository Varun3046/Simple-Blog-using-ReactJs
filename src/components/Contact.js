import React from 'react'

const Contact =(props) =>{
    console.log(props)
    // setTimeout(()=>{
    //     props.history.push('/about')  //programatically redirection
    // },2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>lorem ipsum doler sit</p>
        </div>
    )
}

export default Contact