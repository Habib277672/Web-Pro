// East Asia Web Page - React Single Page Version
// Uses simple CSS, no routing.
// You can add React Router later if needed.

import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/hero";
import { StatsAndVideo } from "./components/stats&video";
import { Banner } from "./components/banner";
import { RegionalPolicySection } from "./components/latestNews";
import GovernanceSection from "./components/detail";
import { GovernanceSectionTwo } from "./components/detail-two";
import { GlobalLeadershipSection } from "./components/detail-three";
import { Leaderships } from "./components/leadership-H";
import { Catogries } from "./components/detail-four";
import { GovernanceLanding } from "./components/sm-banners";
import { EastAsiaRegion } from "./components/after-sm";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="main-content">
        <Hero />
        <StatsAndVideo />

        <Banner />
        <RegionalPolicySection />
        <GovernanceSection />
        <GovernanceSectionTwo />
        <GlobalLeadershipSection />
        <Leaderships />
        <Catogries />
        <GovernanceLanding />
        <EastAsiaRegion />
      </main>
      <Footer />
    </div>
  );
}
