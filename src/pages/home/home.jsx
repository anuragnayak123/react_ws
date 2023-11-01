import React from 'react';
import './home.css'
import Topbar from '../../components/topbar/topbar';
import Sidebar from '../../components/sidebar/sidebar';

function Home() {
    return (
      <div>
        <Topbar />
        <div className="homeContainer">
        <Sidebar />
        </div>
      </div>
    );
}

export default Home;
