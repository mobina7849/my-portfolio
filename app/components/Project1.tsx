'use client'
import React, { useCallback, useState } from 'react';
import { Container, Tabs, Tab, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image';
import pic1 from '../../public/imgs/download.png'
import pic2 from '../../public/imgs/download.jpg'
// Sample project data
const projects = [
  {
    id: 1,
    title: 'Web Development Project',
    category: 'Web Development',
    description: 'A web development project.',
    image: pic1,
  },
  {
    id: 2,
    title: 'Mobile App Project',
    category: 'Mobile Apps',
    description: 'A mobile app project.',
    image: pic2,
  },
  {
    id: 3,
    title: 'Design Project',
    category: 'Design',
    description: 'A design project.',
    image: pic1,
  },
  {
    id: 4,
    title: 'Another Web Development Project',
    category: 'Web Development',
    description: 'Another web development project.',
    image: pic2,
  },
];

const categories = ['All', 'Web Development', 'Mobile Apps', 'Design'];

const ProjectTabs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle Tab Change
  const handleTabChange = useCallback((event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedCategory(newValue);
  },[]);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Container maxWidth="lg" style={{ padding: '50px 20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        My Projects
      </Typography>

      {/* Tabs for Categories */}
      <Tabs
        value={selectedCategory}
        onChange={handleTabChange}
        centered
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center', // Center the tabs
            },
          }}
      >
        {categories.map((category) => (
          <Tab label={category} value={category} key={category} />
        ))}
      </Tabs>

      {/* Display Filtered Projects */}
      <Box mt={4}>
        <Grid container spacing={3}>
          {filteredProjects.map(({id,title,image,description}) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card>
                <Grid display={'flex'} justifyContent={'center'}>
                <Image src={image} alt='' width={200} height={150}/>
                </Grid>
                {/* <CardMedia
                  component="img"
                  alt={title}
                  height="140"
                  image={image}
                  title={title}
                /> */}
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2">{description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectTabs;
