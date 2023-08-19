import { styled } from 'styled-components';
import './App.css';
import { HeaderSection } from './components/HeaderSection';
import { HeroSection } from './landing/HeroSection';
import { Landing } from './landing/Landing';


function App() {
  return (
    <div className="App">
      <Container>
        <HeaderSection/>
        <Landing/>
      </Container>
    </div>
  );
}

const Container=styled.div`
  margin: 0 auto;
  padding: 0 32px;
  min-height: calc(100vh-50px);
  max-width: 1200px;
  
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`


export default App;
