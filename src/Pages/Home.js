import React, { useEffect, useState } from 'react';
import useFetchPrograms  from '../Components/Custom/useFetchPrograms';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import Header from '../Components/UI/Header/Header';
import Footer from '../Components/UI/Footer/Footer';
import '../Components/Custom/common.css';
import FilterContainer from '../Components/UI/Filters/FilterContainer';
import ProgramList from '../Components/UI/Programs/ProgramList';
import Loader from '../Components/UI/Loader/Loader';
import { getParam, setParam } from '../Components/Custom/Utils';
import Error from '../Components/ErrorBoundary/Error';

const Home = props => {

    const query = getParam(props.location.search);

    const [filterSelected , setFilterSelected] = useState({
        limit: query.limit || 100,
        launch_year: query.launch_year || null,
        launch_success: query.launch_success || null,
        land_success: query.land_success || null
    });

    const FILTER_TYPES= [
        {'name': 'launch_year', 'displayName': 'Launch Year', 'minRange': 2006}, 
        {'name': 'launch_success', 'displayName': 'Successful Launch'},
        {'name': 'land_success', 'displayName': 'Successful Landing'} 
    ];

    const { programs, loading, error } = useFetchPrograms(filterSelected);

    const applyFilter = values  => {
        setFilterSelected(prevState => ({
            ...prevState,
            [values.type]:values[values.type]
        }));
    }

    useEffect(() => {
        let queryString = setParam(filterSelected);
        props.history.push("?" + queryString);
    },[filterSelected]);

    return(
        <main className="pad-10 main-container">
            {loading && <Loader />}
            {error && <Error />}
            <Header />

            <ErrorBoundary>
                <section className="grid-container grid-container-main">
                    <div className="grid-item-main grid-container-filter">
                        <FilterContainer 
                            FILTER_TYPES={FILTER_TYPES}
                            filterSelected={filterSelected} 
                            applyFilter={applyFilter}
                            query={getParam(props.location.search)} 
                            history={props.history}/>
                    </div>
                    <div className="grid-item-main grid-container grid-container-program">
                        <ProgramList programs={programs} />
                    </div>                
                </section>
            </ErrorBoundary>
            
            <Footer />
        </main>
    )
}

export default Home;