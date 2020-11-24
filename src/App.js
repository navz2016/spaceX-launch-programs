import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';


class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact render={props =>(
                    <Home {...props}/>
                )} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default App;