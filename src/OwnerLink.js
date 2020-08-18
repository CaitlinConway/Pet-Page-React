import React from "react";

const OwnerLink = (props) => (
  <a name="href" value={props.href}>
    {props.firstName} {props.lastName}
  </a>
);
export default OwnerLink;
