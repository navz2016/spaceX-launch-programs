import React from 'react';
import Head from '../Components/Head';
import useFetchDetails  from '../Components/useFetchDetails';

function Home() {
    const { programs, loading, error } = useFetchDetails();

    return(
        <React.Fragment>
            <Head />
            {loading && <h1>Loading...</h1>}
            {error && <h3>Something went wrong!! Try refreshing.</h3>}
            <p>{programs.length}</p>
            <button onClick={()=> console.log('clicked')}>Click for console msg</button>
        </React.Fragment>
    )
}

export default Home;