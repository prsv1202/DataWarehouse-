import { useState } from "react";

const S4 = "#ff6b00";
const G5 = "#138808";
const G3 = "#40c830";
const N = "#0a1628";
const N8 = "#0f2040";
const N7 = "#163058";
const T = "#e8edf5";
const T2 = "#8096b4";
const T3 = "#4a6a94";
const MO = "JetBrains Mono, monospace";
const RJ = "Rajdhani, sans-serif";
const IN = "Inter, sans-serif";

type Tab = "overview" | "participation" | "security" | "health" | "incidents";

const GEO_DATA = [
  { region: "United States", count: "2,84,103", pct: 71.2, color: S4 },
  { region: "United Kingdom", count: "98,412", pct: 68.4, color: S4 },
  { region: "UAE", count: "1,12,883", pct: 74.1, color: G3 },
  { region: "Singapore", count: "48,204", pct: 81.3, color: G3 },
  { region: "Australia", count: "67,891", pct: 65.7, color: T2 },
  { region: "Canada", count: "55,341", pct: 62.8, color: T2 },
  { region: "Germany", count: "31,204", pct: 58.3, color: T3 },
  { region: "Japan", count: "24,108", pct: 55.1, color: T3 },
];

const ALERTS = [
  { level: "LOW", time: "11:42 IST", msg: "Unusual login attempt from Tbilisi, Georgia — blocked by geo-anomaly detection", resolved: true },
  { level: "LOW", time: "09:17 IST", msg: "DDoS probe detected on authentication endpoint — mitigated automatically", resolved: true },
];

export default function GovDashboard({ setView }: { setView: (v: any) => void }) {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 3, color: S4, marginBottom: 8 }}>
            ELECTION COMMISSION OF INDIA
          </div>
          <h1 style={{ fontFamily: RJ, fontWeight: 700, fontSize: 44, color: T, letterSpacing: -0.5 }}>
            GOVERNMENT DASHBOARD
          </h1>
          <div style={{ fontFamily: IN, fontSize: 14, color: T2, marginTop: 4 }}>
            General Election 2029 · 18th Lok Sabha · Real-time monitoring
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontFamily: MO,
              fontSize: 11,
              color: G3,
              padding: "8px 16px",
              background: "rgba(19,136,8,0.1)",
              border: `1px solid rgba(19,136,8,0.3)`,
              borderRadius: 3,
              marginBottom: 8,
            }}
          >
            ● ELECTION IN PROGRESS
          </div>
          <div style={{ fontFamily: MO, fontSize: 10, color: T3, lineHeight: 1.6 }}>
            12 Apr 2029 · 12:48 IST<br />
            Voting closes in 5h 12m
          </div>
        </div>
      </div>

      {/* Top KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, marginBottom: 24 }}>
        {[
          { label: "ELIGIBLE VOTERS", value: "96.88 Cr", sub: "total registered" },
          { label: "REMOTE ELIGIBLE", value: "1.25 Cr", sub: "overseas opt-in" },
          { label: "VOTES RECORDED", value: "4.18 Cr", sub: "43.2% turnout" },
          { label: "SYSTEM UPTIME", value: "99.98%", sub: "72-hr window", green: true },
          { label: "CRITICAL ALERTS", value: "0", sub: "2 low resolved", green: true },
        ].map((k, i) => (
          <div
            key={i}
            style={{
              background: N8,
              border: `1px solid ${N7}`,
              borderTop: `3px solid ${k.green ? G5 : S4}`,
              padding: "20px 24px",
            }}
          >
            <div style={{ fontFamily: MO, fontSize: 9, letterSpacing: 2, color: T3, marginBottom: 8 }}>{k.label}</div>
            <div style={{ fontFamily: RJ, fontWeight: 700, fontSize: 32, color: k.green ? G3 : T, lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontFamily: IN, fontSize: 12, color: T3, marginTop: 6 }}>{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: `1px solid ${N7}` }}>
        {(["overview", "participation", "security", "health", "incidents"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              fontFamily: MO,
              fontSize: 10,
              letterSpacing: 2,
              padding: "12px 20px",
              background: "transparent",
              border: "none",
              borderBottom: `2px solid ${tab === t ? S4 : "transparent"}`,
              color: tab === t ? S4 : T3,
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tab === "overview" && <OverviewTab />}
      {tab === "participation" && <ParticipationTab />}
      {tab === "security" && <SecurityTab />}
      {tab === "health" && <HealthTab />}
      {tab === "incidents" && <IncidentsTab />}
    </div>
  );
}

function OverviewTab() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Hourly progress bar */}
        <div style={{ background: N8, border: `1px solid ${N7}`, padding: 24, borderRadius: 4 }}>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>
            HOURLY VOTE INTAKE (REMOTE VOTERS)
          </div>
          <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 80 }}>
            {[12, 28, 45, 62, 88, 94, 78, 65, 48, 32, 20, 14].map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div
                  style={{
                    width: "100%",
                    height: v * 0.7,
                    background: i < 6 ? S4 : N7,
                    borderRadius: 2,
                  }}
                />
                <div style={{ fontFamily: MO, fontSize: 7, color: T3 }}>{7 + i}h</div>
              </div>
            ))}
          </div>
        </div>

        {/* Constituency summary */}
        <div style={{ background: N8, border: `1px solid ${N7}`, padding: 24, borderRadius: 4 }}>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>
            TOP CONSTITUENCIES BY REMOTE TURNOUT
          </div>
          {[
            { name: "Mumbai North", turnout: 58.2, remote: 12841 },
            { name: "Bengaluru South", turnout: 54.7, remote: 10238 },
            { name: "Hyderabad", turnout: 52.1, remote: 9847 },
            { name: "Chennai Central", turnout: 49.8, remote: 8412 },
            { name: "Pune", turnout: 47.3, remote: 7841 },
          ].map((c) => (
            <div key={c.name} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontFamily: IN, fontSize: 13, color: T }}>{c.name}</span>
                <span style={{ fontFamily: MO, fontSize: 11, color: T2 }}>{c.turnout}%</span>
              </div>
              <div style={{ height: 4, background: N7, borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${c.turnout}%`, background: S4, borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Audit status */}
        <div style={{ background: N8, border: `1px solid ${N7}`, padding: 24, borderRadius: 4 }}>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>AUDIT STATUS</div>
          {[
            { label: "Cryptographic proofs generated", status: "OK", green: true },
            { label: "Tamper-evident log chain", status: "INTACT", green: true },
            { label: "Independent observer access", status: "ACTIVE", green: true },
            { label: "ECI audit server sync", status: "LIVE", green: true },
            { label: "Duplicate vote prevention", status: "0 DETECTED", green: true },
          ].map((r) => (
            <div
              key={r.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: `1px solid ${N7}`,
              }}
            >
              <span style={{ fontFamily: IN, fontSize: 12, color: T2 }}>{r.label}</span>
              <span style={{ fontFamily: MO, fontSize: 10, color: G3 }}>{r.status}</span>
            </div>
          ))}
        </div>

        {/* Geographic summary */}
        <div style={{ background: N8, border: `1px solid ${N7}`, padding: 24, borderRadius: 4 }}>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>TOP COUNTRIES</div>
          {GEO_DATA.slice(0, 5).map((g) => (
            <div key={g.region} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontFamily: IN, fontSize: 12, color: T2 }}>{g.region}</span>
                <span style={{ fontFamily: MO, fontSize: 10, color: g.color }}>{g.pct}%</span>
              </div>
              <div style={{ height: 3, background: N7, borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${g.pct}%`, background: g.color, borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ParticipationTab() {
  return (
    <div>
      <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>
        GEOGRAPHIC PARTICIPATION — REMOTE VOTERS
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
        {GEO_DATA.map((g) => (
          <div key={g.region} style={{ background: N8, border: `1px solid ${N7}`, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontFamily: IN, fontSize: 14, color: T }}>{g.region}</span>
              <span style={{ fontFamily: RJ, fontWeight: 700, fontSize: 22, color: g.color }}>{g.pct}%</span>
            </div>
            <div style={{ height: 6, background: N7, borderRadius: 3, marginBottom: 8 }}>
              <div style={{ height: "100%", width: `${g.pct}%`, background: g.color, borderRadius: 3 }} />
            </div>
            <div style={{ fontFamily: MO, fontSize: 10, color: T3 }}>{g.count} votes recorded</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecurityTab() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div>
        <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>THREAT MONITORING</div>
        {[
          { threat: "DDoS Attacks", count: "847 attempts", status: "ALL BLOCKED", green: true },
          { threat: "Credential Stuffing", count: "1,203 attempts", status: "ALL BLOCKED", green: true },
          { threat: "Account Takeover", count: "12 attempts", status: "ALL BLOCKED", green: true },
          { threat: "Duplicate Vote Attempts", count: "3 detected", status: "ALL REJECTED", green: true },
          { threat: "Unauthorized Admin Access", count: "0 attempts", status: "NONE", green: true },
          { threat: "Phishing Campaigns", count: "4 reported", status: "UNDER REVIEW", green: false },
        ].map((r, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              gap: 16,
              padding: "12px 16px",
              background: N8,
              border: `1px solid ${N7}`,
              borderBottom: "none",
              alignItems: "center",
            }}
          >
            <span style={{ fontFamily: IN, fontSize: 13, color: T2 }}>{r.threat}</span>
            <span style={{ fontFamily: MO, fontSize: 10, color: T3 }}>{r.count}</span>
            <span style={{ fontFamily: MO, fontSize: 10, color: r.green ? G3 : "#ffaa70", letterSpacing: 1 }}>{r.status}</span>
          </div>
        ))}
      </div>

      <div>
        <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>SECURITY POSTURE</div>
        <div style={{ background: N8, border: `1px solid ${N7}`, padding: 24, marginBottom: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: 20,
              background: "rgba(19,136,8,0.06)",
              border: `1px solid rgba(19,136,8,0.2)`,
              borderRadius: 4,
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 32 }}>🛡️</span>
            <div>
              <div style={{ fontFamily: MO, fontSize: 12, color: G3, letterSpacing: 2 }}>SECURE</div>
              <div style={{ fontFamily: IN, fontSize: 12, color: T3, marginTop: 4 }}>0 critical vulnerabilities · 2 low resolved</div>
            </div>
          </div>

          {[
            { label: "TLS 1.3 enforcement", value: "100%" },
            { label: "Certificate validity", value: "Valid · 847d remaining" },
            { label: "WAF rules active", value: "2,481 rules" },
            { label: "Rate limiting", value: "Active on all endpoints" },
            { label: "Encryption at rest", value: "AES-256-GCM" },
            { label: "HSM key management", value: "ECI-controlled" },
          ].map((r) => (
            <div
              key={r.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: `1px solid ${N7}`,
              }}
            >
              <span style={{ fontFamily: IN, fontSize: 12, color: T2 }}>{r.label}</span>
              <span style={{ fontFamily: MO, fontSize: 10, color: G3 }}>{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HealthTab() {
  const services = [
    { name: "Authentication Service", uptime: 99.99, latency: "84ms", status: "healthy" },
    { name: "Ballot Delivery CDN", uptime: 100.0, latency: "42ms", status: "healthy" },
    { name: "Encryption Service (HSM)", uptime: 99.99, latency: "120ms", status: "healthy" },
    { name: "Vote Recording Service", uptime: 99.98, latency: "67ms", status: "healthy" },
    { name: "ECI Audit Server", uptime: 100.0, latency: "18ms", status: "healthy" },
    { name: "Duplicate-Vote Prevention", uptime: 100.0, latency: "31ms", status: "healthy" },
    { name: "Observer Portal", uptime: 99.97, latency: "142ms", status: "healthy" },
    { name: "DDoS Protection Layer", uptime: 100.0, latency: "—", status: "healthy" },
  ];

  return (
    <div>
      <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>
        SYSTEM HEALTH — ALL SERVICES
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {services.map((s) => (
          <div
            key={s.name}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 16,
              padding: "16px 20px",
              background: N8,
              border: `1px solid ${N7}`,
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontFamily: IN, fontSize: 14, color: T }}>{s.name}</div>
            </div>
            <div>
              <div style={{ fontFamily: MO, fontSize: 10, color: T3, marginBottom: 2 }}>UPTIME</div>
              <div style={{ fontFamily: MO, fontSize: 13, color: G3 }}>{s.uptime}%</div>
            </div>
            <div>
              <div style={{ fontFamily: MO, fontSize: 10, color: T3, marginBottom: 2 }}>LATENCY</div>
              <div style={{ fontFamily: MO, fontSize: 13, color: T2 }}>{s.latency}</div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: G3 }} />
              <span style={{ fontFamily: MO, fontSize: 10, color: G3, letterSpacing: 1 }}>HEALTHY</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IncidentsTab() {
  return (
    <div>
      <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 16 }}>
        INCIDENT LOG — CURRENT ELECTION PERIOD
      </div>
      <div
        style={{
          padding: 20,
          background: "rgba(19,136,8,0.05)",
          border: `1px solid rgba(19,136,8,0.2)`,
          borderRadius: 4,
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 24 }}>✅</span>
        <div>
          <div style={{ fontFamily: MO, fontSize: 12, color: G3 }}>0 OPEN INCIDENTS</div>
          <div style={{ fontFamily: IN, fontSize: 13, color: T3, marginTop: 4 }}>All incidents resolved · Election integrity maintained</div>
        </div>
      </div>

      {ALERTS.map((a, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: 20,
            padding: "16px 20px",
            background: N8,
            border: `1px solid ${N7}`,
            borderBottom: "none",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: MO,
                fontSize: 9,
                letterSpacing: 2,
                padding: "4px 8px",
                background: "rgba(255,170,112,0.1)",
                border: "1px solid rgba(255,170,112,0.3)",
                borderRadius: 2,
                color: "#ffaa70",
              }}
            >
              {a.level}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: IN, fontSize: 13, color: T2 }}>{a.msg}</div>
            <div style={{ fontFamily: MO, fontSize: 10, color: T3, marginTop: 4 }}>{a.time}</div>
          </div>
          <div style={{ fontFamily: MO, fontSize: 10, color: G3 }}>✓ RESOLVED</div>
        </div>
      ))}
    </div>
  );
}
