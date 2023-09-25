import React from 'react';
import { Container, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-500px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 2000 },
  });

  return (
    <animated.div style={springProps}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            marginTop: 40,
            fontWeight: 700,
            fontSize: 40,
            textAlign: 'center',
          }}
        >
          Welcome to the Home Page!
        </Typography>
      </Container>
    </animated.div>
  );
};

export default Home;
