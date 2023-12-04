import React, { useState } from 'react'

const Demo = () => {

    const [right,setRight] = useState(false);
    const [left,setLeft] = useState(false);

    const Rightmove = () =>{
        setRight(!right)
    }

    const Leftmove = () =>{
        setLeft(!left)
    }

    
  return (
    <>
    <div className={`demo d-flex flex-column justify-content-center mx-auto demo ${right && 'translatex'} ${left && 'translatey'}`} style={{width:"400px",height:"300px"}}>
        <img className='demoimg' src="https://www.hotelaradhanainn.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fso7v7vzh%2Fproduction%2F2f3413618ad1e3d8c9a187ab01fe5468b1777235-5616x3744.jpg&w=640&q=75" alt="" style={{width:"100%",height:"100%"}}/>
        <button style={{width:"30px",height:"30px",backgroundColor:"grey"}} onClick={Rightmove}>Right</button>
        <button style={{width:"30px",height:"30px",backgroundColor:"grey"}} onClick={Leftmove}>left</button>
    </div>
    </>
  )
}

export default Demo