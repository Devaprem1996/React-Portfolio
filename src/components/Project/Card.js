import { motion } from "framer-motion";
import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div class="container">
      <div class="card">
        <div class="content">
          <div class="imgBx"></div>
          <div class="contentBx">
            <h3>
              {props.title}
              <br />
              <span>{props.des}</span>
            </h3>
          </div>
        </div>

        <ul class="sci">
          <li>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href={props.fcode}>sourceCode</a>{" "}
            </motion.div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
