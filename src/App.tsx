import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Projects } from './layout/section/projects/Projects';
import { Skills } from './layout/section/skills/Skills';
import { Contacts } from './layout/section/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import {About} from "./layout/section/about/About";
import {Education} from "./layout/section/education/Education";
// import { Particle } from './componets/particle/Particle';


function App() {
    return (
        <div className="App">
            {/* <Particle /> */}
            <Header />
            <Main />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contacts />
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;