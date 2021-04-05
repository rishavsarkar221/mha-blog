import React from 'react';
import Contents from './Contents';
import data from './data';
import Heading from './Heading';

const App = () => {
    return(
        <React.Fragment>
            <Heading />
            
            {data.map(val => {
                return <Contents content_image={val.content_image} content_title={val.content_title} content={val.content} alt={val.alt} />;
            })} 
        </React.Fragment>
    );
}

export default App;