import React from 'react';
import { Helmet } from 'react-helmet';

export default function headParams(){
    return(
        <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#eee" />
            <meta name="description" 
                content="A front-end application which help users list and browse all launches by SpaceX program." />
            <meta name="apple-mobile-web-app-capable" content="yes"></meta>
            <meta name="keywords" content="spaceX, launch, landing, programs" />
            <meta name="author" content="Navjeet Singh" />
            <title>SpaceX Launch</title>
        </Helmet>
    )
}