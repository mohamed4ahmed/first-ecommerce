import React, { useEffect } from "react";
import FeedbackContainer from "../../containers/Feedback/Feedback";
const Feedback = () => {
  useEffect(() => {
    document.title = "Comment - ecommerce-one For Clothes";
  }, []);
  return <FeedbackContainer />;
};

export default Feedback;
