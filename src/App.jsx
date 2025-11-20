import { lazy, Suspense } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const Hero = lazy(() => import("./components/sections/Hero"));
const Services = lazy(() => import("./components/sections/Services"));
const About = lazy(() => import("./components/sections/About"));
const Doctors = lazy(() => import("./components/sections/Doctors"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const AppointmentForm = lazy(() => import("./components/sections/AppointmentForm"));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-primary/20 to-secondary/20"></div>}>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <AppointmentForm />
      </Suspense>
      <Footer />
    </>
  );
}