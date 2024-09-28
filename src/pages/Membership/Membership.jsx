import React, { useEffect } from "react";
import MembershipContainer from "../../containers/Membership/Membership";
const Membership = () => {
  useEffect(() => {
    document.title = "Member - Smart Integrated Machinery";
  }, []);
  return <MembershipContainer />;
};

export default Membership;
