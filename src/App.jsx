import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import NavbarForPolicy from "./components/layout/NavbarForPolicy";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Footer from "./pages/footer/Footer";
import Probo from "./pages/probo/Probo";
import Tournaments from "./pages/tournament/Tournaments";
import HowItsWork from "./pages/howItsWork/HowItsWork";
import Partnership from "./pages/partnership/Partnership";
import Sports from "./pages/sports/Sports";
import W11Token from "./pages/w11Token/W11Token";
import Privacypolicy from "./pages/policies/Privacypolicy";
import TermsAndConditions from "./pages/policies/TermsAndConditions";
import ResponsibleGaming from "./pages/policies/ResponsibleGaming";
import KYCPolicy from "./pages/policies/KYCPolicy";
import ScrollButton from "./components/ScrollButton";


export default function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const policyNavbarRoutes = [
    "/privacy-policy",
    "/terms-and-conditions",
    "/responsible-gaming",
    "/know-your-customer-policy",
  ];

  const showPolicyNavbar = policyNavbarRoutes.includes(currentPath);

  return (
    <div>
      {showPolicyNavbar ? <NavbarForPolicy /> : <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutUs />
              <HowItsWork />
              <Partnership />
              <Sports />
              <W11Token />
              <Tournaments />
              <Probo />
              <Footer />
            </>
          }
        />

        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
        <Route
          path="/know-your-customer-policy"
          element={<KYCPolicy />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ScrollButton />
    </div>
  );
}

