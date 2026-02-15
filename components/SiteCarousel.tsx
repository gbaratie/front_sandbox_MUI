import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { Site } from '@/data/sites';

interface SiteCarouselProps {
  sites: Site[];
}

/**
 * Carousel pour afficher une liste de sites avec navigation précédent/suivant.
 */
const SiteCarousel: React.FC<SiteCarouselProps> = ({ sites }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(0, sites.length - 1);

  const goPrev = () => setActiveIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));

  if (sites.length === 0) return null;

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        sx={{
          overflow: 'hidden',
          mx: { xs: 0, sm: 6 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.35s ease-in-out',
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {sites.map((site) => (
            <Box
              key={site.id}
              sx={{
                flex: '0 0 100%',
                minWidth: 0,
                px: { xs: 0, sm: 1 },
              }}
            >
              <Card
                sx={{
                  maxWidth: 400,
                  margin: 'auto',
                  boxShadow: 3,
                }}
              >
                <CardActionArea
                  {...(site.url
                    ? { component: 'a', href: site.url, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  disabled={!site.url}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={site.image}
                    alt={site.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {site.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {site.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      <IconButton
        aria-label="Site précédent"
        onClick={goPrev}
        sx={{
          position: 'absolute',
          left: { xs: -8, sm: 0 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'background.paper',
          boxShadow: 2,
          '&:hover': { bgcolor: 'action.hover' },
          '&:disabled': { opacity: 0.5 },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        aria-label="Site suivant"
        onClick={goNext}
        sx={{
          position: 'absolute',
          right: { xs: -8, sm: 0 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'background.paper',
          boxShadow: 2,
          '&:hover': { bgcolor: 'action.hover' },
          '&:disabled': { opacity: 0.5 },
        }}
      >
        <ChevronRightIcon />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 0.5,
          mt: 2,
        }}
      >
        {sites.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveIndex(index)}
            role="button"
            tabIndex={0}
            aria-label={`Aller au site ${index + 1}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveIndex(index);
            }}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: index === activeIndex ? 'primary.main' : 'action.disabled',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              '&:hover': { bgcolor: index === activeIndex ? 'primary.dark' : 'action.selected' },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SiteCarousel;
