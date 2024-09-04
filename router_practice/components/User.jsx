import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const params = useParams();

  return (
    <>
      <div>User</div>
      <h1>I am User {params.username} </h1>
    </>
  );
}
