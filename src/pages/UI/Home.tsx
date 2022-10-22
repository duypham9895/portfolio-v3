import React from "react";
import Header from "./Header";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Header />
    </div>
  );
};

export default Home;
