import GlobalStyles from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const StylesTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StylesTemplate;
