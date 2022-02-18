import React from 'react';
import './home.css'
import StoreSummary from './StoreSummary';

const Home = () => {
    return(
        <React.Fragment>
        <h1 className='tag' >
            Home
        </h1>
        <StoreSummary />
        </React.Fragment>
    )
};

export default Home;