import React from 'react';

import { StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components/native';

// Importa os Components
import AppBar from './src/components/Appbar';
import ToolBar from './src/components/ToolBar';
import Users  from './src/components/Users';
import Story  from './src/components/Story';
import Feed  from './src/components/Feed';

const Container = styled.SafeAreaView`
flex: 1
`;

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </Container>
    </>
  )
}

export default App

/* https://www.youtube.com/watch?v=yLnRIeaLeBY&fbclid=IwAR0n_rPPmwWfkdJJpvQDFAril9IQRO6iVNt36ShkDjinOn3lnc0c_-XUftU */
