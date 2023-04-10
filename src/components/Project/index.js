import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "./Card";

const Data = [
  {
    id: 1,
    title: "Amazon Web Scraper Project",
    furl: "https://github.com/Devaprem1996/Python-projects/blob/aaf3b5487e8ed00a206678bffdc41df3252197f0/Amazon%20Web%20Scraper%20Project.py",
    des: " Automating the Scarping process by defining functions and Automatically appending the price and rating for every 24 hours",
  },
  {
    id: 2,
    title: " Covid-Death-Vaccinations-Report-Project-__SQL-Queries",
    furl: "https://github.com/Devaprem1996/Covid-Death-Vaccinations-Report-Project-__SQL-Queries.git",
    des: " This is SQL base Project, Using methods - JOIN method, conditional CASE method, CTE, Altering Tables, store Procedures.",
  },
  {
    id: 3,
    title: "Nashville-Housing-Project-_SQL",
    furl: "https://github.com/Devaprem1996/Nashville-Housing-Project-_SQL.git",
    des: "Finding the cheapest house in Nashville, ethods - SUBSTRING method, conditional CASE method, PARSENAME methods, CTE to REMOVE DUPLICATES, Altering Tables. ",
  },
  {
    id: 4,
    title: "Shopping Cart _Ecommerce_frontend App",
    furl: "https://github.com/Devaprem1996/ecommerce_frontend-.git",
    des: "Frontend and Backend project using nodejs - mailchimp fetching process",
  },
  {
    id: 5,
    title: "React-KeeperApp",
    furl: "https://github.com/Devaprem1996/Keeper-App-react-project.git",
    des: " react CURD  full stack project using nodejs, mongoDB,mongoose,",
  },
  {
    id: 6,
    title: "Friends App (CURD)",
    furl: "https://github.com/Devaprem1996/React-Friends-app-CURD-.git",
    des: " This application is full-stack project using MERN stack , Server based projects using mongoose (ODM), Cors, Axios, etc .",
  },
  {
    id: 7,
    title: "Movie App (API project )",
    furl: "https://github.com/Devaprem1996/React-Movie_app-.git",
    des: "  Users can search movie details by movie name. Added an upload page to upload new movies and Users can read and upload their own data. ",
  },
];

const Project = () => {
  return (
    <Box className="projectBox" sx={{ flexGrow: 1 }} my={10} id="project">
      <Typography variant="h4" sx={{ textAlign: "left", margin: "30px 0" }}>
        Projects.
      </Typography>

      <div className="cardbox">
        <Grid container spacing={1}>
          <Grid item lg={3} xs={12} sm={12}>
            <Card
              key={1}
              title={Data[0].title}
              fcode={Data[0].furl}
              des={Data[0].des}
            />
          </Grid>
          <Grid item lg={3} xs={12} sm={12}>
            <Card
              key={2}
              title={Data[1].title}
              fcode={Data[1].furl}
              des={Data[1].des}
            />
          </Grid>
          <Grid item lg={3} xs={12} sm={12}>
            <Card
              key={3}
              title={Data[2].title}
              fcode={Data[2].furl}
              des={Data[2].des}
            />
          </Grid>
          <Grid item lg={3} xs={12} sm={12}>
            <Card
              key={4}
              title={Data[3].title}
              fcode={Data[3].furl}
              des={Data[3].des}
            />
          </Grid>
          <Grid item lg={3} xs={12} sm={12}>
            <Card
              key={5}
              title={Data[4].title}
              fcode={Data[4].furl}
              des={Data[4].des}
            />
          </Grid>
          <Grid item lg={3} xs={12} sm={12}>
            <Card
              key={6}
              title={Data[5].title}
              fcode={Data[5].furl}
              des={Data[5].des}
            />
          </Grid>
          <Grid item lg={3} xs={12} sm={12}>
            <Card
              key={7}
              title={Data[6].title}
              fcode={Data[6].furl}
              des={Data[6].des}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Project;
