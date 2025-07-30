import React from 'react'
import Footer from '../components/Footer';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Posts from '../components/Posts';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
export default function LayoutHome() {
    return (<>

        <Hero />
        <Section2 />
        <Section3 />
        <Posts />

        
    </>
    )
}
