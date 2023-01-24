import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <section className="main">
      <div className="custom-container">
        <div className=" w-96 h-72 border border-slate-300 rounded-md grid place-items-center">
          <motion.div
            animate={{ x: 70, scale: 1 }}
            initial={{scale: 0}}
            className="w-28 h-28 rounded-3xl bg-purple-400"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default App;
