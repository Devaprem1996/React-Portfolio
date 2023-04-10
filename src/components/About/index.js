import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import "./about.css";
import Skills from "./cloudTag";
import techie from "../Images/techie.png";
import htmlImg from "../Images/html.png";
import cssImg from "../Images/css.png";
import jsImg from "../Images/js.png";
import reactjsImg from "../Images/reactjs.png";
import nodejsImg from "../Images/nodejs.png";
import bootstrapImg from "../Images/bootstrap.png";
import gitImg from "../Images/git.png";
import githubImg from "../Images/github.png";
import mongoDBImg from "../Images/mongoDB.png";

const About = () => {
  return (
    <Box className="aboutbox">
      <Grid container flexGrow={1} spacing={8} mb={15}>
        <Grid item lg={6} xs={12}>
          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {" "}
            <div className="aboutHeader">
              <Typography variant="h3" my={3}>
                About me
              </Typography>
            </div>{" "}
          </motion.div>

          <div className="aboutPara">
            <Typography variant="h5">
              <p>
                As a fresher MERN stack developer and data analyst, I bring a
                strong educational background and a passion for problem-solving
                to the table. With a solid understanding of web development
                principles and a knack for utilizing data to inform
                decision-making, I am well-equipped to contribute to any project
                or team.
              </p>
              <br />
              <p>
                My technical skills include proficiency in MERN stack
                technologies such as MongoDB, Express.js, React.js, and Node.js,
                as well as data analysis tools such as Python, SQL, and Excel.
                Additionally, I possess strong critical thinking, communication,
                and collaboration abilities, enabling me to work effectively
                with colleagues at all levels of an organization.
              </p>
              <br />
              <p>
                {" "}
                I am a quick learner and constantly seeking to expand my skill
                set to stay current with the latest technologies and trends. I
                am eager to leverage my skills and enthusiasm to contribute to
                the success of an organization in a challenging and dynamic
                environment.
              </p>
            </Typography>
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <div className="aboutImg">
            <img src={techie} alt="aboutimg"></img>
          </div>
        </Grid>
      </Grid>

      <Grid container flexGrow={1} spacing={8} mb={15}>
        <Grid item lg={6} xs={12}>
          <div className="aboutHeader">
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Typography variant="h3" my={3}>
                Tech Stacks
              </Typography>
            </motion.div>
          </div>

          <div className="imgContainer">
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="images">
                {" "}
                <img src={htmlImg} alt="htmlImg"></img>{" "}
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="images">
                {" "}
                <img src={cssImg} alt="cssImg"></img>{" "}
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="images">
                {" "}
                <img src={jsImg} alt="jsImg"></img>{" "}
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="images">
                {" "}
                <img src={reactjsImg} alt="reactjsImg"></img>{" "}
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {" "}
              <div className="images">
                {" "}
                <img src={nodejsImg} alt="nodejsImg"></img>{" "}
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {" "}
              <div className="images">
                {" "}
                <img src={mongoDBImg} alt="mongoDBImg"></img>{" "}
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="images">
                {" "}
                <img src={bootstrapImg} alt="bootstrapImg"></img>{" "}
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="images">
                {" "}
                <img src={gitImg} alt="gitImg"></img>{" "}
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="images">
                {" "}
                <img src={githubImg} alt="githubImg"></img>{" "}
              </div>
            </motion.div>
          </div>
        </Grid>

        <Grid item lg={6} xs={12}>
          <div className="aboutHeader">
            <Typography variant="h3" my={3}>
              Skills
            </Typography>
          </div>

          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div>
              <Skills className="tagcloud" />
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
