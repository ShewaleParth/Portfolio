import Navbar from '@/components/Navbar';
import HeroEntryInterface from '@/components/HeroEntryInterface';
import SystemProfileSection from '@/components/SystemProfileSection';
import CapabilityMatrixSection from '@/components/CapabilityMatrixSection';
import AISystemsShowcase from '@/components/AISystemsShowcase';
import EngineeringTimeline from '@/components/EngineeringTimeline';
import AISimulator from '@/components/AISimulator';
import ProofSection from '@/components/ProofSection';
import ContactConsole from '@/components/ContactConsole';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* SECTION 1 — Entry Interface */}
      <HeroEntryInterface />

      {/* SECTION 2 — System Profile (About) */}
      <SystemProfileSection />

      {/* SECTION 3 — Capability Matrix (Skills) */}
      <CapabilityMatrixSection />

      {/* SECTION 4 — AI Systems Showcase (Projects) */}
      <AISystemsShowcase />

      {/* SECTION 5 — Engineering Timeline */}
      <EngineeringTimeline />

      {/* Unique Differentiator — AI System Simulator */}
      <AISimulator />

      {/* SECTION 6 — Proof Section */}
      <ProofSection />

      {/* SECTION 7 — Contact Console */}
      <ContactConsole />

      <Footer />
    </main>
  );
};

export default Index;
