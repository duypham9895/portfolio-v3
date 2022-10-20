import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <h2>Hello world</h2>
    </>
  );
};

export default App;
