import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

/**
 * A reusable card component for showcasing individual projects.
 * It displays an image, a title and a brief description.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
