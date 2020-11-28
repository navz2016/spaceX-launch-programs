import React, { useEffect, useState } from 'react';
import Head from '../Components/Custom/Head';
import useFetchPrograms  from '../Components/Custom/useFetchPrograms';
import Header from '../Components/UI/Header/Header';
import Footer from '../Components/UI/Footer/Footer';
import '../Components/Custom/common.css';
import FilterContainer from '../Components/UI/Filters/FilterContainer';
import ProgramList from '../Components/UI/Programs/ProgramList';
import Loader from '../Components/UI/Loader/Loader';
import { getParam, setParam } from '../Components/Custom/Utils';

const Home = props => {

    const query = getParam(props.location.search);

    const [filterSelected , setFilterSelected] = useState({
        limit: query.limit || 100,
        launch_year: query.launch_year || null,
        launch_success: query.launch_success || null,
        land_success: query.land_success || null
    });

    const { programs, loading, error } = useFetchPrograms(filterSelected);

    const applyFilter = values  => {
        setFilterSelected(prevState => ({
            ...prevState,
            limit: values.limit || filterSelected.limit,
            launch_year: values.launch_year || filterSelected.launch_year,
            launch_success: values.launch_success || filterSelected.launch_success,
            land_success: values.land_success || filterSelected.land_success
        }));
    }

    useEffect(() => {
        let queryString = setParam(filterSelected);
        props.history.push("?" + queryString);
    },[filterSelected.limit, filterSelected.launch_year, filterSelected.launch_success, filterSelected.land_success]);

    return(
        <main className="pad-10">
            <Head />
            {loading && <Loader />}
            {error && <h3>Something went wrong!! Try refreshing.</h3>}
            <Header />

            <section className="grid-container grid-container-main">
                <div className="grid-item-main grid-container-filter">
                    <FilterContainer 
                        filterSelected={filterSelected} 
                        applyFilter={applyFilter}
                        query={getParam(props.location.search)} 
                        history={props.history}/>
                </div>
                <div className="grid-item-main grid-container grid-container-program">
                    <ProgramList programs={programs} />
                </div>                
            </section>
            
            <Footer />
        </main>
    )
}

export default Home;