const N = "#0a1628";
const N8 = "#0f2040";
const N7 = "#163058";
const S4 = "#ff6b00";
const S3 = "#ff8533";
const G5 = "#138808";
const G3 = "#40c830";
const T = "#e8edf5";
const T2 = "#8096b4";
const T3 = "#4a6a94";
const MO = "JetBrains Mono, monospace";
const RJ = "Rajdhani, sans-serif";
const IN = "Inter, sans-serif";

const FEATURES = [
  {
    icon: "🔐",
    title: "Cryptographic Ballot Secrecy",
    body: "End-to-end encryption separates voter identity from ballot choice. No administrator, employer, or third party can link your vote to you.",
  },
  {
    icon: "🧬",
    title: "Multi-Factor Identity Verification",
    body: "Aadhaar biometrics, OTP, and government-issued credentials combine for tamper-resistant authentication at every step.",
  },
  {
    icon: "🌐",
    title: "Global Accessibility",
    body: "Eligible Indian voters in London, New York, Dubai, or Singapore can participate with the same security guarantees as voters in India.",
  },
  {
    icon: "📋",
    title: "Independent Auditability",
    body: "Cryptographic proofs, tamper-evident logs, and open security audits allow independent verification of every accepted vote.",
  },
  {
    icon: "🛡️",
    title: "Zero Critical Vulnerabilities at Launch",
    body: "Red-team exercises, penetration testing, cryptographic review, and disaster-recovery drills before any production deployment.",
  },
  {
    icon: "⚡",
    title: "High-Availability Infrastructure",
    body: "Redundant architecture with DDoS protection, incident response, and offline contingency procedures throughout the voting period.",
  },
];

const PHASES = [
  { num: "01", label: "RESEARCH", desc: "Legal, constitutional & cybersecurity study", status: "active" },
  { num: "02", label: "PROTOTYPE", desc: "Non-binding simulated election & security testing", status: "upcoming" },
  { num: "03", label: "PILOT", desc: "ECI-authorized controlled pilot deployment", status: "upcoming" },
  { num: "04", label: "EXPANSION", desc: "Gradual rollout after ECI approval", status: "upcoming" },
  { num: "05", label: "INTERNATIONAL", desc: "Configurable framework for other democracies", status: "upcoming" },
];

const COUNTRIES = ["🇮🇳 India", "🇺🇸 United States", "🇬🇧 United Kingdom", "🇦🇺 Australia", "🇨🇦 Canada", "🇸🇬 Singapore", "🇦🇪 UAE", "🇩🇪 Germany", "🇯🇵 Japan", "🇫🇷 France"];

export default function LandingPage({ setView }: { setView: (v: any) => void }) {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: "90vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          alignItems: "center",
          gap: 80,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: MO,
              fontSize: 11,
              letterSpacing: 3,
              color: S4,
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 32,
                height: 2,
                background: S4,
              }}
            />
            ELECTION COMMISSION OF INDIA · PROTOTYPE
          </div>

          <h1
            style={{
              fontFamily: RJ,
              fontWeight: 700,
              fontSize: 72,
              lineHeight: 1,
              color: T,
              marginBottom: 8,
              letterSpacing: -1,
            }}
          >
            INDIA GLOBAL
          </h1>
          <h1
            style={{
              fontFamily: RJ,
              fontWeight: 700,
              fontSize: 72,
              lineHeight: 1,
              color: S4,
              marginBottom: 32,
              letterSpacing: -1,
            }}
          >
            ONLINE VOTING
          </h1>

          <p
            style={{
              fontFamily: IN,
              fontSize: 18,
              lineHeight: 1.7,
              color: T2,
              maxWidth: 480,
              marginBottom: 48,
            }}
          >
            Wherever an eligible Indian voter is in the world, they should have a secure way to participate in India's democratic process — without travelling to their registered constituency.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => setView("vote")}
              style={{
                fontFamily: MO,
                fontSize: 12,
                letterSpacing: 2,
                padding: "16px 32px",
                background: S4,
                border: "none",
                borderRadius: 3,
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              CAST YOUR VOTE →
            </button>
            <button
              onClick={() => setView("dashboard")}
              style={{
                fontFamily: MO,
                fontSize: 12,
                letterSpacing: 2,
                padding: "16px 32px",
                background: "transparent",
                border: `1px solid ${T3}`,
                borderRadius: 3,
                color: T2,
                cursor: "pointer",
              }}
            >
              VIEW DASHBOARD
            </button>
          </div>
        </div>

        {/* Live Stats Panel */}
        <div
          style={{
            background: N8,
            border: `1px solid ${N7}`,
            borderRadius: 8,
            padding: 32,
          }}
        >
          <div
            style={{
              fontFamily: MO,
              fontSize: 10,
              letterSpacing: 3,
              color: S4,
              marginBottom: 24,
              borderBottom: `1px solid ${N7}`,
              paddingBottom: 16,
            }}
          >
            LIVE ELECTION STATUS · GENERAL ELECTION 2029
          </div>

          <StatRow label="Total Eligible Voters" value="96,88,47,203" sub="registered voters" />
          <StatRow label="Remote Registrations" value="1,24,83,441" sub="overseas eligible" />
          <StatRow label="Votes Recorded" value="4,18,29,104" sub="43.2% participation" />
          <StatRow label="System Uptime" value="99.98%" sub="last 72 hours" highlight={G3} />
          <StatRow label="Security Alerts" value="0 CRITICAL" sub="2 low-severity resolved" highlight={G3} />

          <div
            style={{
              marginTop: 24,
              padding: 16,
              background: "rgba(19,136,8,0.08)",
              border: `1px solid rgba(19,136,8,0.25)`,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 20 }}>🟢</span>
            <div>
              <div style={{ fontFamily: MO, fontSize: 11, color: G3, letterSpacing: 1 }}>ALL SYSTEMS OPERATIONAL</div>
              <div style={{ fontFamily: IN, fontSize: 12, color: T3, marginTop: 2 }}>Voting period: 07:00–18:00 IST · 12 Apr 2029</div>
            </div>
          </div>
        </div>
      </section>

      {/* Principle Banner */}
      <div style={{ background: N8, borderTop: `1px solid ${N7}`, borderBottom: `1px solid ${N7}` }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "48px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 3, color: T3, marginBottom: 16 }}>
              FUNDAMENTAL PRINCIPLE
            </div>
            <h2 style={{ fontFamily: RJ, fontWeight: 700, fontSize: 40, color: T, lineHeight: 1.1, marginBottom: 16 }}>
              IDENTITY SEPARATE<br />FROM BALLOT
            </h2>
            <p style={{ fontFamily: IN, fontSize: 15, color: T2, lineHeight: 1.7 }}>
              The system architecture makes it technically impossible for unauthorized parties to connect an individual's identity to their ballot choice. Voter verification and vote recording are cryptographically separated.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <PrincipleCard
              icon="🪪"
              label="VOTER IDENTITY"
              q="Is this person eligible to vote?"
              color={S4}
            />
            <PrincipleCard
              icon="🗳️"
              label="BALLOT"
              q="What did this voter choose?"
              color={G5}
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 3, color: S4, marginBottom: 12 }}>
            SECURITY FRAMEWORK
          </div>
          <h2 style={{ fontFamily: RJ, fontWeight: 700, fontSize: 52, color: T, letterSpacing: -0.5 }}>
            BUILT FOR DEMOCRACY
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </section>

      {/* Voting Flow Preview */}
      <section style={{ background: N8, borderTop: `1px solid ${N7}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <div style={{ marginBottom: 64, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 3, color: S4, marginBottom: 12 }}>
                CITIZEN VOTING FLOW
              </div>
              <h2 style={{ fontFamily: RJ, fontWeight: 700, fontSize: 52, color: T }}>
                10 STEPS TO A SECURE VOTE
              </h2>
            </div>
            <button
              onClick={() => setView("vote")}
              style={{
                fontFamily: MO,
                fontSize: 11,
                letterSpacing: 2,
                padding: "12px 24px",
                background: "transparent",
                border: `1px solid ${S4}`,
                borderRadius: 3,
                color: S4,
                cursor: "pointer",
              }}
            >
              TRY THE FLOW →
            </button>
          </div>

          <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
            {[
              "Welcome", "Secure Login", "Identity Verify", "Voter Check",
              "Eligibility", "Election Info", "Ballot", "Review",
              "Submit", "Confirmation",
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: i < 3 ? S4 : N7,
                    border: `2px solid ${i < 3 ? S4 : N7}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: MO,
                    fontSize: 13,
                    fontWeight: 600,
                    color: i < 3 ? "#fff" : T3,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {i < 3 ? "✓" : String(i + 1).padStart(2, "0")}
                </div>
                {i < 9 && (
                  <div
                    style={{
                      position: "absolute",
                      width: 80,
                      height: 2,
                      background: i < 2 ? S4 : N7,
                      transform: "translateX(44px)",
                      marginTop: -23,
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily: MO,
                    fontSize: 9,
                    letterSpacing: 1,
                    color: i < 3 ? S4 : T3,
                    marginTop: 8,
                    textAlign: "center",
                    maxWidth: 64,
                    lineHeight: 1.3,
                  }}
                >
                  {step.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 3, color: S4, marginBottom: 12 }}>
            GLOBAL REACH
          </div>
          <h2 style={{ fontFamily: RJ, fontWeight: 700, fontSize: 52, color: T }}>
            WHEREVER INDIA IS
          </h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {COUNTRIES.map((c) => (
            <div
              key={c}
              style={{
                fontFamily: IN,
                fontSize: 14,
                padding: "10px 20px",
                background: N8,
                border: `1px solid ${N7}`,
                borderRadius: 3,
                color: T2,
              }}
            >
              {c}
            </div>
          ))}
          <div
            style={{
              fontFamily: IN,
              fontSize: 14,
              padding: "10px 20px",
              background: "rgba(255,107,0,0.08)",
              border: `1px solid rgba(255,107,0,0.3)`,
              borderRadius: 3,
              color: S4,
            }}
          >
            + all countries
          </div>
        </div>
        <p style={{ fontFamily: IN, fontSize: 15, color: T3, marginTop: 24, maxWidth: 600, lineHeight: 1.7 }}>
          Supporting multiple time zones, multiple languages, low-bandwidth environments, and accessibility requirements for all eligible Indian citizens worldwide.
        </p>
      </section>

      {/* Phases */}
      <section style={{ background: N8, borderTop: `1px solid ${N7}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 3, color: S4, marginBottom: 12 }}>
              IMPLEMENTATION ROADMAP
            </div>
            <h2 style={{ fontFamily: RJ, fontWeight: 700, fontSize: 52, color: T }}>
              PHASED DEPLOYMENT
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0 }}>
            {PHASES.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: "32px 24px",
                  borderLeft: i === 0 ? `1px solid ${N7}` : "none",
                  borderRight: `1px solid ${N7}`,
                  borderTop: `3px solid ${p.status === "active" ? S4 : N7}`,
                  background: p.status === "active" ? "rgba(255,107,0,0.05)" : "transparent",
                }}
              >
                <div style={{ fontFamily: MO, fontSize: 28, fontWeight: 600, color: p.status === "active" ? S4 : T3, marginBottom: 8 }}>
                  {p.num}
                </div>
                <div style={{ fontFamily: RJ, fontWeight: 700, fontSize: 18, color: T, letterSpacing: 1, marginBottom: 8 }}>
                  {p.label}
                </div>
                <div style={{ fontFamily: IN, fontSize: 13, color: T3, lineHeight: 1.5 }}>
                  {p.desc}
                </div>
                {p.status === "active" && (
                  <div style={{ fontFamily: MO, fontSize: 9, color: S4, letterSpacing: 2, marginTop: 16 }}>
                    ● IN PROGRESS
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${N7}`,
          padding: "48px 32px",
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontFamily: RJ, fontWeight: 700, fontSize: 18, color: T, letterSpacing: 1 }}>
            INDIA VOTES
          </div>
          <div style={{ fontFamily: IN, fontSize: 12, color: T3, marginTop: 4 }}>
            A research prototype. Not for deployment without Election Commission of India authorization.
          </div>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Privacy Policy", "Security Model", "Audit Reports", "Accessibility"].map((l) => (
            <span key={l} style={{ fontFamily: MO, fontSize: 10, letterSpacing: 1.5, color: T3, cursor: "pointer" }}>
              {l.toUpperCase()}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}

function StatRow({ label, value, sub, highlight }: { label: string; value: string; sub: string; highlight?: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "14px 0",
        borderBottom: `1px solid rgba(22,48,88,0.6)`,
      }}
    >
      <div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8096b4" }}>{label}</div>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "#4a6a94", letterSpacing: 1, marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: 22, color: highlight || "#e8edf5", letterSpacing: 0.5 }}>
        {value}
      </div>
    </div>
  );
}

function PrincipleCard({ icon, label, q, color }: { icon: string; label: string; q: string; color: string }) {
  return (
    <div
      style={{
        background: "#0a1628",
        border: `1px solid ${color}30`,
        borderTop: `3px solid ${color}`,
        borderRadius: 4,
        padding: 24,
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: 2, color: color, marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8096b4", lineHeight: 1.5 }}>{q}</div>
    </div>
  );
}

function FeatureCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div
      style={{
        background: "#0f2040",
        padding: 32,
        borderBottom: `1px solid #163058`,
        borderRight: `1px solid #163058`,
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: 20, color: "#e8edf5", marginBottom: 12, letterSpacing: 0.5 }}>
        {title}
      </div>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#8096b4", lineHeight: 1.65 }}>{body}</div>
    </div>
  );
}
