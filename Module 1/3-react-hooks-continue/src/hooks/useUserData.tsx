import React, { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  //Cleanup
//   const controller = new AbortController();
  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();

    // cleanup
    // return () => {
    //   controller.abort();
    // };
  }, []);
  return {isLoading, error, data}
};

export default useUserData;
