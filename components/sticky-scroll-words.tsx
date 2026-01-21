'use client';

import { Box, Typography } from '@mui/material';

const leftWords = ['Best', 'Premium', 'Key', 'Top', 'Global', 'Cloud'];
const rightWords = ['Support', 'Care', 'Satisfaction', 'Experience', 'Success'];

export default function StickyScrollWords() {
  return (
    <Box
      sx={{
        bgcolor: '#000000',
        color: '#ffffff',
        minHeight: '200vh',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr auto 1fr' },
          gap: { xs: 2, md: 4 },
          maxWidth: '1600px',
          mx: 'auto',
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Left Column - Scrolling Words */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 4 },
            pt: { xs: 4, md: 8 },
          }}
        >
          {leftWords.map((word, index) => (
            <Box
              key={index}
              sx={{
                minHeight: { xs: '30vh', md: '35vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-end' },
                pr: { xs: 0, md: 4 },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3.5rem',
                    md: '4.5rem',
                    lg: '5.5rem',
                    xl: '6.5rem'
                  },
                  fontWeight: 800,
                  textAlign: { xs: 'center', md: 'right' },
                  opacity: index === leftWords.length - 1 ? 1 : 0.25,
                  transition: 'opacity 0.5s ease',
                  color: index === leftWords.length - 1 ? '#ffffff' : '#666666',
                  lineHeight: 1,
                }}
              >
                {word}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Center Column - Sticky "Customer" */}
        <Box
          sx={{
            position: 'sticky',
            top: '45%',
            height: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.5rem',
                lg: '5.5rem',
                xl: '6.5rem'
              },
              fontWeight: 800,
              textAlign: 'center',
              whiteSpace: 'nowrap',
              lineHeight: 1,
            }}
          >
            Customer
          </Typography>
        </Box>

        {/* Right Column - Scrolling Words */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 4 },
            pt: { xs: 4, md: 8 },
          }}
        >
          {rightWords.map((word, index) => (
            <Box
              key={index}
              sx={{
                minHeight: { xs: '30vh', md: '35vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                pl: { xs: 0, md: 4 },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3.5rem',
                    md: '4.5rem',
                    lg: '5.5rem',
                    xl: '6.5rem'
                  },
                  fontWeight: 800,
                  textAlign: { xs: 'center', md: 'left' },
                  opacity: index === rightWords.length - 1 ? 1 : 0.25,
                  transition: 'opacity 0.5s ease',
                  color: index === rightWords.length - 1 ? '#ffffff' : '#666666',
                  lineHeight: 1,
                }}
              >
                {word}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Final Static Section - Cloud Customer Success */}
      <Box
        sx={{
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: 4 },
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.5rem',
                lg: '5.5rem',
                xl: '6.5rem'
              },
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            Cloud
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.5rem',
                lg: '5.5rem',
                xl: '6.5rem'
              },
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            Customer
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.5rem',
                lg: '5.5rem',
                xl: '6.5rem'
              },
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            Success
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
