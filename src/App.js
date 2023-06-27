import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import LeftSideContainer from './components/sidebar/LeftSideContainer';
import BodyContainer from './components/body/BodyContainer';
import RighSideContainer from './components/sidebar/RighSideContainer';
import Body from './components/body/Body';

/**
 *  Header
 *   - Logo
 *   - Search components
 *   - Link componenets
 *      - Home, N/w,jobs, messaging, notification 
 * 
 *  Body
 *    - Profile
 *    - Recent Post
 *    - Search Component
 *    - Linkedin news
 *    - ListPostComponent
 *       - PostComponenet
 * 
 * 
 * 
 */

function App() {
  return (
    <div className="App">
      <Header/>
    
       <Body/>
 
    </div>
  );
}

export default App;
