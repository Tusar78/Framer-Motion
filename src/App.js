import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <section className="main">
      <div className="custom-container">
        <div className=" w-96 h-72 border border-slate-300 rounded-md grid place-items-center">
          <motion.div
            animate={{ rotate: rotate ? 90 : 0, x: rotate ? 70 : 0 }}
            onClick={() => setRotate(!rotate)}
            className="w-28 h-28 rounded-3xl bg-purple-400"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default App;
