import React, { useEffect, useState } from 'react'

const Reviewform = () => {

    const [name,setName] = useState("")
    const [review,setReview] = useState("")
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        setReviews(storedReviews)
    },[])

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const reviewstore = {
            name:name,
            review:review
        }
        
        if(name !=='' && review !=='')
        {
            const updatedReview = [...reviews,reviewstore]
            localStorage.setItem('reviews',JSON.stringify(updatedReview))
            setReviews(updatedReview)
        }
        setName('')
        setReview('')
    }

  return (
    <>
    <div className='container-fluid d-flex flex-column gap-2 mt-5' style={{padding:"50px"}}>
            <h3>Reviews</h3>
            <form className='d-flex flex-column form gap-4' style={{padding:"0 auto"}} onSubmit={handleSubmit}>
                <h6 style={{fontSize:'20px',fontWeight:'500'}}>Leave a Review</h6>
                <div className='d-flex flex-column gap-4'>
                    <input style={{fontSize:'16px',border:"1px solid rgba(0,0,0,0.5)",padding:"8px"}} type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
                    <textarea style={{border:"1px solid rgba(0,0,0,0.5)",padding:"10px"}} name="review" id="review" rows="2" placeholder='Enter your review' onChange={(e)=>setReview(e.target.value)}></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
            <div>
                {reviews.map((reviews,index)=>(
                    <div key={index} className='reviewbox'>
                      <p style={{fontSize:"20px",fontWeight:"500"}}>{reviews.name}</p>
                      <p>{reviews.review}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Reviewform