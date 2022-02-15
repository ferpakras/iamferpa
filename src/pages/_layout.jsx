import React, { useEffect, useState } from 'react';
import { lightTheme, darkTheme, styled } from '../../stitches.config';
import { useMainState } from '../shared/store/MainContextStore';

import Header from '../shared/components/header/Header';

const Wrapper = styled('div', {
  minHeight: '100vh',
  minWeight: '100vw',
  backgroundColor: '$sage3',
  color: '$gray12',
  backgroundImage: "url('/images/asfalt-dark.png')",
});
const Container = styled('div', {
  marginX: 'auto',

  variants: {
    size: {
      1: {
        maxWidth: '100%',
        paddingX: '$2',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
});

const Footer = styled('footer', {
  paddingY: '$2',
  borderTop: '1px solid $line',
  fontSize: '$sm',
  textAlign: 'center',
});

const Layout = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const { theme } = useMainState();

  useEffect(() => {
    renderTheme(theme);
  }, [theme]);

  const renderTheme = (theme) => {
    if (theme.name === 'darkTheme') {
      setSelectedTheme(darkTheme);
    } else {
      setSelectedTheme(lightTheme);
    }
  };

  return (
    <Wrapper className={selectedTheme}>
      <Container size={{ '@initial': '1', '@bp1': '2', '@bp2': '3' }}>
        <Header />
        <main>{children}</main>
        <Footer>aqui vem aquele textinho legal de copyright. 2022</Footer>
      </Container>
    </Wrapper>
  );
};

export default Layout;
