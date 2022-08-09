import Navbar from './components/navbar.js';
import {useState} from 'react';
import "./App.css";
import Introduction from './components/Indroduction.js';
import Profiles from './components/profiles.js';
import Mywork from './components/mywork.js';
import Resume from './components/resume.js';
import Footer from './components/footer.js';
function App() {
  
  const [mode,setMode] = useState('dark');

  function modeToggle(){
    if(mode==='dark'){
      setMode('light');
    }
    else setMode('dark');
  }  
  return (
    <div>
        <Navbar toggle={modeToggle} mode={mode}></Navbar>
        <div id='main'>
          <Introduction mode={mode}></Introduction>
        </div>
        <Profiles></Profiles>
        <div id="mywork">
          <Mywork mode={mode}></Mywork>
        </div>
        <div id='resume'>
          <Resume mode={mode}></Resume>
        </div>
        <div>
          <Footer mode={mode}></Footer>
        </div>
    </div>
  );
}

export default App;
