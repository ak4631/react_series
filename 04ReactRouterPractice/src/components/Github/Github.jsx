// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/hiteshchoudhary`)
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);
  return (
    <div>
      <h1 className="text-center bg-black text-3xl font-semibold p-4 text-white">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Profile" className="m-auto mt-10" />
      </h1>
    </div>
  );
}

export default Github;

// Another Way of fetching data while on load
export const githubInfo = async () => {
  const response = await fetch(`https://api.github.com/users/ak4631`);
  return response.json();
};
