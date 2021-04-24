import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className='container'>
      <h1>404 - PAGE NOT FOUND :(</h1>
    </div>
  );
};

export default NotFound;
