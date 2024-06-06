import React from "react";

const UserAvatar = ({imageUrl}) => {
  return (
    <div>
      <img
        style={{ width: "50px", height: "50px" }}
        src={imageUrl}
      />
    </div>
  );
};

export default UserAvatar;
