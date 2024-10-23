import { Stack } from '@fluentui/react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import './App.css';

const App = () => {
  return (
    <>
    <Header />
    <Stack verticalFill verticalAlign="space-between" styles={{root: {height: '100vh'}}}>
      <Main />
      <Footer />
    </Stack>
    </>
  );
};

export default App;
