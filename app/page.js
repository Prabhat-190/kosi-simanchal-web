import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services'; 
import CompanyStats from '../components/CompanyStats'; 
import RailwayProjects from '../components/RailwayProjects'; // <-- NEW RAILWAY IMPORT
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
      <Hero />
      
      <section className="wrapper bg-light" data-cues="fadeIn" data-duration="800">
        <About />
      </section>

      <CompanyStats />
      
      {/* <-- NEW RAILWAY SECTION ADDED HERE --> */}
      <RailwayProjects /> 
      
      <Services />
      
      <ExportImport />
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