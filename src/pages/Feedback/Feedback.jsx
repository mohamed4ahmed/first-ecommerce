import React, { useEffect } from "react";
import FeedbackContainer from "../../containers/Feedback/Feedback";
const Feedback = () => {
  useEffect(() => {
    document.title = "Comment - Smart Integrated Machinery";
  }, []);
  return <FeedbackContainer />;
};

export default Feedback;
