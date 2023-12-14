import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div>
      <h1 className="text-center bg-blue-700 text-3xl font-semibold p-4">
        User: {userid}
      </h1>
    </div>
  );
}

export default User;
