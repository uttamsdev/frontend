import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import useUserData from "../hooks/useUserData";
//Container and Presentational pattern
//Jekhane fetch related data thakbe seta container r jekahne render ui show hobe seta presentational
const UsersContainer = () => {
  //custom hooks
  const { isLoading, error, data } = useUserData();

  //   props in object
  const props = {
    isLoading,
    data,
    error,
  };

  return (
    <div>
      <UserList {...props} />
    </div>
  );
};

export default UsersContainer;
