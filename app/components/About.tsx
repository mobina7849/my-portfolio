import React from 'react';
import { Box, Typography, Container,Grid, Card } from '@mui/material';
import CircularWithValueLabel from './Prograss';

interface SkillsType{
    name:string,
    percent:number
}

const skills:SkillsType[]=[
    {
        name:'Reactjs',
        percent:80
    },
    {
        name:'Nextjs',
        percent:70
    },
    {
        name:'Mui',
        percent:90
    },
    {
        name:'Html',
        percent:88
    },
    {
        name:'Css',
        percent:77
    },
    {
        name:'Git',
        percent:50
    },
]

const About: React.FC = () => {
  return (
    <Container maxWidth="md" id="about" style={{ padding: '50px 20px' }} >
        <Grid display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
        <Typography variant="h3" gutterBottom>
        Lets introduce something
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign={'center'}>
        I am a full-stack developer with expertise in building modern web applications.
        I specialize in React, Next.js, and TypeScript to create high-performance websites.
      </Typography>

      <Grid display={'flex'} gap={4} my={4} sx={{flexWrap:'wrap'}} justifyContent={'center'}>
        {skills.map(({name,percent},index)=>(
      <Card sx={{padding:'16px',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Typography>
          {name}
      </Typography>
    <CircularWithValueLabel end={percent}/>
    </Card>
        ))}
      </Grid>

        </Grid>
    </Container>
  );
};

export default About;
