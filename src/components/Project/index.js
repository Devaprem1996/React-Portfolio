import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from './Card';

import projectImg from '../Images/durmkit.png'
import WeatherImg from '../Images/Weatherapp.png'
import MailchimpImg from '../Images/MailChimpImg.png'
import TodolistImg from '../Images/todolist.png'
import KeeperImg from '../Images/KeeperImg.png'


const Data = [

  {
    id: 1,
    title: "Durmkit",
    lurl: "https://thriving-sawine-d3f36f.netlify.app",
    furl: "https://github.com/Devaprem1996/DrumKit-project-basic.git",
    des:" JS project"
     
  },
  {
    id: 2,
    title: "Weather app",
    lurl: "https://celebrated-bombolone-cc22c2.netlify.app",
    furl: "https://github.com/Devaprem1996/Weather-app.git",
    des:  "Api-Backend project using nodejs "
  },
  {
    id: 3,
    title: "EJS-Todolist",
    lurl: "https://mysterious-earth-96715.herokuapp.com/",
    furl: "https://github.com/Devaprem1996/Todolist--EJS-.git",
    des: "Ejs-Frontend and Backend project using nodejs,mongoDB CURD  "

  },
  {
    id: 4,
    title: "Mailchimp-Newsletter",
    lurl: "https://evening-falls-58000.herokuapp.com/",
    furl: "https://github.com/Devaprem1996/Mailchimp-project-Newsletter.git",
     des: "Frontend and Backend project using nodejs - mailchimp fetching process"
  },
  {
    id: 5,
    title: "React-KeeperApp",
    lurl: "https://lovely-tiramisu-f743e7.netlify.app/",
    furl: "https://github.com/Devaprem1996/Keeper-App-react-project.git",
     des: " react CURD  full stack project using nodejs, mongoDB,mongoose,"
  },

];


const Project = () => {
  return (
       
     
    
    <Box  className="projectBox" sx={{ flexGrow: 1, }} my={10} id ="project">
           <Typography variant='h4' sx={{textAlign:'left', margin:'30px 0'}}>
              Projects.
           </Typography>
      
           <div className='cardbox'>
        <Grid container  spacing={1}  >
        <Grid item lg={3} xs={12} sm={12}>
          <Card
              key={1}
              title= {Data[0].title}
            fcode={Data[0].furl}
            liveSite={Data[0].lurl}
              img={projectImg}
              des={Data[0].des}
           
            />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <Card
              key={2}
              title= {Data[1].title}
            fcode={Data[1].furl}
            liveSite={Data[1].lurl}
            img={WeatherImg}
            des={Data[1].des}
            />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <Card
              key={3}
              title= {Data[2].title}
            fcode={Data[2].furl}
            liveSite={Data[2].lurl}
            img={TodolistImg}
            des={Data[2].des}
            />
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <Card
              key={4}
              title= {Data[3].title}
            fcode={Data[3].furl}
            liveSite={Data[3].lurl}
            img={MailchimpImg}
            des={Data[3].des}
            />
        </Grid>
        <Grid item lg={12} xs={12} sm={12}>
          <Card
              key={5}
              title= {Data[4].title}
            fcode={Data[4].furl}
            liveSite={Data[4].lurl}
            img={KeeperImg}
            des={Data[4].des}
            />
        </Grid>
       

        </Grid>
        </div>
    </Box>

        
    
  )
}

export default Project