import React from 'react'

const FeedbackOverview = ({feedbackList}) => {
  console.log(feedbackList)
  if(feedbackList.length === 0) {
    return (
      <div className='feedback-content'>
        <h3>No Feedback Found</h3>
      </div>
    )
  }
  return (
    <div className='feedback-content'>
      <h2>Feedback Overview</h2>
      <ul>
        {feedbackList.map((feedback) => {
            return <li key={feedback.id}>{feedback.feedbackText}</li>
        })}
      </ul>
    </div>
  )
}

export default FeedbackOverview