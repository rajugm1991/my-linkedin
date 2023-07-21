import './App.css';
import Header from './components/header/Header';


import Body from './components/body/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notification from './components/pages/Notification';
import BodyContainer from './components/body/BodyContainer';
import { Provider } from 'react-redux';
import store from './utils/store';
import ProfileView from './components/profile/ProfileView';
import LeftSideContainer from './components/sidebar/LeftSideContainer';
import OutletComponent from './components/OutletComponent';

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
 * Test commit
 * 
 * 
 */

function App() {


  const router=createBrowserRouter([{

    path:'/',
    element: <><Header/>  <Body/> </>,
    children: [

      {
        path: '/',
        element: <> <LeftSideContainer/><BodyContainer/></>

      },
      {
        path: 'notify',
        element:  <OutletComponent />,
        children :[
          {
            path:'',
            element:<Notification/>
          }
        ]
      },
      {
        path: 'profile',
        element: <OutletComponent/>,
        children: [
          {
            path: '',
            element: <ProfileView/>
          }
        ]

      }

    ]
  }])


  return (
    <div className="App">
     <Provider store={store}>
     <RouterProvider router={router}/>
     </Provider>
 
    </div>
  );
}

export default App;
