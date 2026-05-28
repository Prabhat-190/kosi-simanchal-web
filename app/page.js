import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider'; // 👈 WE CHANGED THIS IMPORT
import About from '../components/About';
import Services from '../components/Services'; 
import CompanyStats from '../components/CompanyStats'; 
import RailwayProjects from '../components/RailwayProjects'; 
import ExportImport from '../components/ExportImport';
import TradeConsultation from '../components/TradeConsultation'; 
import MasterData from '../components/MasterData';
import ClientPortal from '../components/ClientPortal';   
import OrderTracking from '../components/OrderTracking'; 
import Careers from '../components/Careers';             
import PaymentContact from '../components/PaymentContact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="content-wrapper overflow-hidden">
      
      <Navbar />
      
      {/* 👈 WE ARE NOW USING THE FAST, FIXED SLIDER HERE */}
      <HeroSlider /> 
      
      <section className="wrapper bg-light" data-cues="fadeIn" data-duration="800">
        <About />
      </section>

      <CompanyStats />
      
      {/* Enterprise Railway Division */}
      <RailwayProjects /> 
      
      <Services />
      
      <ExportImport />
      
      {/* Secure Backend Connected Form */}
      <TradeConsultation />  

      <section className="wrapper bg-white" data-cue="slideInUp">
        <MasterData />
      </section>

      <ClientPortal />
      <OrderTracking />
      <Careers />

      <section className="wrapper bg-soft-primary" data-cues="zoomIn" data-duration="600">
        <PaymentContact />
      </section>

      <Footer />
    </main>
  );
}