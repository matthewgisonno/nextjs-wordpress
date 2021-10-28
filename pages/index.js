import { getListAllPages } from './api/api';
import React, { useState, useEffect } from "react";
import Navigation from '../components/navigation';
import Content from '../components/content';

export default function Home({ pages }) {
    
    const wpPages = pages;
    
    return (
        <>
            {wpPages ? (
                <>
                    <Navigation data={wpPages} slug="homepage" />
                    <Content data={wpPages} page="true" slug="homepage" />
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export async function getStaticProps() {
    const data = await getListAllPages();
    
    return {
        props: { 
            pages: data.nodes
        },
        revalidate: 600
    }
}