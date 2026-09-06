import { useState } from "react";
import LandingPage from "./components/LandingPage";
import VoterFlow from "./components/VoterFlow";
import GovDashboard from "./components/GovDashboard";
import AuditorPortal from "./components/AuditorPortal";

type View = "home" | "vote" | "dashboard" | "audit";

export default function App() {
  const [view, setView] = useState<View>("home");

  return (
    <div
      className="min-h-full"
      style={{
        background: "#0a1628",
        fontFamily: "Inter, sans-serif",
        color: "#e8edf5",
      }}
    >
      <Nav view={view} setView={setView} />
      <main>
        {view === "home" && <LandingPage setView={setView} />}
        {view === "vote" && <VoterFlow setView={setView} />}
        {view === "dashboard" && <GovDashboard setView={setView} />}
        {view === "audit" && <AuditorPortal setView={setView} />}
      </main>
    </div>
  );
}

function Nav({
  view,
  setView,
}: {
  view: string;
  setView: (v: any) => void;
}) {
  return (
    <header
      style={{
        background: "#050d1a",
        borderBottom: "1px solid rgba(255,107,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => setView("home")}
          style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer" }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #ff6b00 0%, #cc5500 100%)",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: 1,
            }}
          >
            मत
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#e8edf5",
                letterSpacing: 1.5,
                lineHeight: 1.1,
              }}
            >
              INDIA VOTES
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                color: "#ff6b00",
                letterSpacing: 2,
              }}
            >
              SECURE REMOTE VOTING
            </div>
          </div>
        </button>

        {/* Nav Links */}
        <nav style={{ display: "flex", gap: 4 }}>
          {[
            { id: "home", label: "HOME" },
            { id: "vote", label: "CAST VOTE" },
            { id: "dashboard", label: "GOV DASHBOARD" },
            { id: "audit", label: "AUDIT PORTAL" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                letterSpacing: 1.5,
                padding: "6px 16px",
                background: view === item.id ? "rgba(255,107,0,0.15)" : "transparent",
                border: view === item.id ? "1px solid rgba(255,107,0,0.6)" : "1px solid transparent",
                borderRadius: 3,
                color: view === item.id ? "#ff6b00" : "#8096b4",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* ECI Badge */}
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9,
            color: "#4a6a94",
            letterSpacing: 1.5,
            textAlign: "right",
            lineHeight: 1.6,
          }}
        >
          ELECTION COMMISSION<br />OF INDIA · PROTOTYPE
        </div>
      </div>
    </header>
  );
}
