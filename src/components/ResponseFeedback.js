import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearFeedback } from "../slices/feedback";

const ResponseFeedbackDisplay = ({ target, clear = true }) => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback);
  const targetFeedback = feedback[target]
  
  useEffect(() => {
    if (clear) setTimeout(() => dispatch(clearFeedback()), 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFeedback?.message])

  const messageClass = {
    success: 'success-response',
    error: 'error-response',
    pending: 'pending-response'
  }

  return (
    <>
      {targetFeedback?.message && (
        <div className="">
          <span className={ messageClass[targetFeedback?.type] }>
            { targetFeedback?.message }
          </span>
        </div>
      )}
    </>
  )
}

export default ResponseFeedbackDisplay;