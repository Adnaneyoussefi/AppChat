import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import Header from './header/Header';
import NavBar from './NavBar';
import Sidebar from './body/Sidebar';
import Body from './body/Body';

const WorkSpace = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state)
      }, []);

  return (
    <div>
      <Header workspace={location.state} />
        <div className='AppBody'>
          <Body workspace={location.state}/>
        </div>
    </div>
  )
}

export default WorkSpace