import { useState } from "react";

const S4 = "#ff6b00";
const G5 = "#138808";
const G3 = "#40c830";
const N8 = "#0f2040";
const N7 = "#163058";
const T = "#e8edf5";
const T2 = "#8096b4";
const T3 = "#4a6a94";
const MO = "JetBrains Mono, monospace";
const RJ = "Rajdhani, sans-serif";
const IN = "Inter, sans-serif";

type ATab = "verification" | "crypto" | "logs" | "integrity" | "reports";

export default function AuditorPortal({ setView }: { setView: (v: any) => void }) {
  const [tab, setTab] = useState<ATab>("verification");
  const [receiptInput, setReceiptInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleCheck = () => {
    setChecking(true);
    setTimeout(() => { setChecking(false); setChecked(true); }, 1800);
  };

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 3, color: S4, marginBottom: 8 }}>
            INDEPENDENT AUDITOR · READ-ONLY ACCESS
          </div>
          <h1 style={{ fontFamily: RJ, fontWeight: 700, fontSize: 44, color: T, letterSpacing: -0.5 }}>
            AUDIT PORTAL
          </h1>
          <div style={{ fontFamily: IN, fontSize: 14, color: T2, marginTop: 4 }}>
            General Election 2029 · Independent verification system
          </div>
        </div>
        <div
          style={{
            fontFamily: MO,
            fontSize: 10,
            letterSpacing: 2,
            padding: "12px 16px",
            background: "rgba(74,106,148,0.1)",
            border: `1px solid ${T3}`,
            borderRadius: 3,
            color: T3,
            textAlign: "right",
            lineHeight: 1.6,
          }}
        >
          AUDITOR: Independent Electoral Commission<br />
          SESSION: AUD-2029-048<br />
          ACCESS: READ-ONLY
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: `1px solid ${N7}` }}>
        {(["verification", "crypto", "logs", "integrity", "reports"] as ATab[]).map((t) => (
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
            {t === "crypto" ? "CRYPTOGRAPHIC" : t}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tab === "verification" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Receipt Verifier */}
            <div style={{ background: N8, border: `1px solid ${N7}`, padding: 32, borderRadius: 4 }}>
              <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: S4, marginBottom: 16 }}>
                VOTE RECEIPT VERIFIER
              </div>
              <p style={{ fontFamily: IN, fontSize: 14, color: T2, lineHeight: 1.65, marginBottom: 24 }}>
                Enter a cryptographic receipt to verify a vote was recorded. This does NOT reveal the voter's choice.
              </p>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: MO, fontSize: 9, letterSpacing: 2, color: T3, marginBottom: 8 }}>
                  RECEIPT CODE
                </div>
                <input
                  type="text"
                  placeholder="EC-IN-2029-XXXXXXXXX"
                  value={receiptInput}
                  onChange={(e) => { setReceiptInput(e.target.value); setChecked(false); }}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "#0a1628",
                    border: `1px solid ${N7}`,
                    borderRadius: 4,
                    fontFamily: MO,
                    fontSize: 13,
                    color: T,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {checking ? (
                <div style={{ fontFamily: MO, fontSize: 11, color: S4, letterSpacing: 2 }}>
                  🔍 QUERYING AUDIT LOG...
                </div>
              ) : (
                <button
                  onClick={handleCheck}
                  disabled={!receiptInput}
                  style={{
                    fontFamily: MO,
                    fontSize: 11,
                    letterSpacing: 2,
                    padding: "12px 24px",
                    background: receiptInput ? S4 : "transparent",
                    border: `1px solid ${receiptInput ? S4 : T3}`,
                    borderRadius: 3,
                    color: receiptInput ? "#fff" : T3,
                    cursor: receiptInput ? "pointer" : "not-allowed",
                  }}
                >
                  VERIFY RECEIPT
                </button>
              )}

              {checked && (
                <div
                  style={{
                    marginTop: 20,
                    padding: 16,
                    background: "rgba(19,136,8,0.08)",
                    border: `1px solid rgba(19,136,8,0.3)`,
                    borderRadius: 4,
                  }}
                >
                  <div style={{ fontFamily: MO, fontSize: 10, color: G3, marginBottom: 8 }}>✓ VOTE VERIFIED</div>
                  <div style={{ fontFamily: MO, fontSize: 10, color: T3, lineHeight: 1.8 }}>
                    Status: RECORDED<br />
                    Timestamp: 12-Apr-2029 · 08:34:17 IST<br />
                    Encrypted: YES (E2E)<br />
                    Ballot choice: SEALED<br />
                    Duplicate check: CLEAR
                  </div>
                </div>
              )}
            </div>

            {/* Election Summary */}
            <div style={{ background: N8, border: `1px solid ${N7}`, padding: 32, borderRadius: 4 }}>
              <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: S4, marginBottom: 16 }}>
                ELECTION INTEGRITY SUMMARY
              </div>
              {[
                { label: "Total votes accepted", value: "4,18,29,104", note: "" },
                { label: "Votes rejected (failed auth)", value: "1,204", note: "0.003%" },
                { label: "Duplicate attempts blocked", value: "3", note: "all rejected" },
                { label: "Audit records generated", value: "4,18,29,104", note: "100% coverage" },
                { label: "Cryptographic proofs valid", value: "4,18,29,104", note: "100%" },
                { label: "Chain integrity check", value: "PASSED", note: "" },
                { label: "Observer verifications", value: "12,841", note: "independent" },
                { label: "Discrepancies found", value: "0", note: "" },
              ].map((r) => (
                <div
                  key={r.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: `1px solid ${N7}`,
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ fontFamily: IN, fontSize: 12, color: T2 }}>{r.label}</span>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: MO, fontSize: 11, color: T }}>{r.value}</div>
                    {r.note && <div style={{ fontFamily: MO, fontSize: 9, color: T3 }}>{r.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "crypto" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: N8, border: `1px solid ${N7}`, padding: 32, borderRadius: 4 }}>
            <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: S4, marginBottom: 20 }}>
              CRYPTOGRAPHIC PARAMETERS
            </div>
            {[
              { k: "Encryption scheme", v: "ElGamal + homomorphic tally" },
              { k: "Key algorithm", v: "RSA-4096 (ECI-held private key)" },
              { k: "Hash function", v: "SHA-3-256" },
              { k: "Zero-knowledge proof", v: "Schnorr / Chaum–Pedersen" },
              { k: "Commitment scheme", v: "Pedersen commitments" },
              { k: "Ballot encryption", v: "AES-256-GCM per ballot" },
              { k: "Transport", v: "TLS 1.3 · mTLS on internal services" },
              { k: "Key storage", v: "FIPS 140-2 Level 3 HSM · ECI data center" },
            ].map((r) => (
              <div
                key={r.k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  padding: "12px 0",
                  borderBottom: `1px solid ${N7}`,
                  gap: 16,
                }}
              >
                <span style={{ fontFamily: IN, fontSize: 12, color: T2 }}>{r.k}</span>
                <span style={{ fontFamily: MO, fontSize: 11, color: T }}>{r.v}</span>
              </div>
            ))}
          </div>

          <div style={{ background: N8, border: `1px solid ${N7}`, padding: 32, borderRadius: 4 }}>
            <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: S4, marginBottom: 20 }}>
              PROOF VERIFICATION STATUS
            </div>
            <div
              style={{
                padding: 20,
                background: "rgba(19,136,8,0.05)",
                border: `1px solid rgba(19,136,8,0.2)`,
                borderRadius: 4,
                marginBottom: 16,
                fontFamily: MO,
                fontSize: 10,
                color: G3,
                lineHeight: 2,
                letterSpacing: 0.5,
              }}
            >
              ✓ All ZK proofs verified for accepted ballots<br />
              ✓ Bulletin board hash chain: INTACT<br />
              ✓ Mix-net shuffle proof: VALID<br />
              ✓ Decryption proof: PENDING (post-election)<br />
              ✓ Tally proof: PENDING (post-election)<br />
              ✓ Independent verifier signatures: 3/3
            </div>
            <div style={{ fontFamily: IN, fontSize: 13, color: T3, lineHeight: 1.7 }}>
              Independent verifiers have confirmed cryptographic integrity of accepted ballots. Decryption proofs will be published after the voting period closes.
            </div>
          </div>
        </div>
      )}

      {tab === "logs" && (
        <div style={{ background: N8, border: `1px solid ${N7}`, borderRadius: 4, overflow: "hidden" }}>
          <div style={{ padding: "16px 24px", borderBottom: `1px solid ${N7}`, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: S4 }}>TAMPER-EVIDENT AUDIT LOG</span>
            <span style={{ fontFamily: MO, fontSize: 10, color: T3 }}>HASH CHAIN · SHA-3-256</span>
          </div>
          <div style={{ fontFamily: MO, fontSize: 11, color: G3, padding: "20px 24px", lineHeight: 2.2, overflowX: "auto" }}>
            {[
              { ts: "12:48:02.341", event: "VOTE_RECORDED", hash: "a3f7...c12e", prev: "8b2a...d4f1" },
              { ts: "12:48:01.882", event: "VOTE_RECORDED", hash: "8b2a...d4f1", prev: "7c9e...a881" },
              { ts: "12:48:00.122", event: "VOTE_RECORDED", hash: "7c9e...a881", prev: "4d1b...f203" },
              { ts: "12:47:59.441", event: "VOTE_RECORDED", hash: "4d1b...f203", prev: "2a8c...b99d" },
              { ts: "12:47:58.204", event: "VOTE_REJECTED", hash: "2a8c...b99d", prev: "f781...0e34" },
              { ts: "12:47:57.081", event: "DUPLICATE_BLOCKED", hash: "f781...0e34", prev: "c2e9...7a12" },
              { ts: "12:47:55.882", event: "VOTE_RECORDED", hash: "c2e9...7a12", prev: "9b3f...e401" },
              { ts: "12:47:54.319", event: "AUTH_VERIFIED", hash: "9b3f...e401", prev: "1d5c...8b22" },
            ].map((l, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "130px 160px 120px 1fr", gap: 24, borderBottom: `1px solid rgba(22,48,88,0.6)`, paddingBottom: 4 }}>
                <span style={{ color: T3 }}>{l.ts}</span>
                <span style={{ color: l.event.includes("RECORDED") ? G3 : l.event.includes("REJECTED") || l.event.includes("BLOCKED") ? "#ff8533" : T }}>{l.event}</span>
                <span style={{ color: T3 }}>hash:{l.hash}</span>
                <span style={{ color: "#4a6a94" }}>prev:{l.prev}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: "12px 24px", borderTop: `1px solid ${N7}`, fontFamily: MO, fontSize: 10, color: T3 }}>
            Showing last 8 entries of 4,18,29,104 · Log chain verified intact
          </div>
        </div>
      )}

      {tab === "integrity" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {[
            {
              title: "SOURCE CODE REVIEW",
              status: "PASSED",
              items: ["Open-source codebase audit", "No backdoors found", "Dependencies verified", "Build reproducibility: YES"],
            },
            {
              title: "PENETRATION TESTING",
              status: "PASSED",
              items: ["External red team: 3 firms", "Internal security team audit", "Vulnerability disclosure: 0 critical", "All medium issues patched"],
            },
            {
              title: "INFRASTRUCTURE AUDIT",
              status: "PASSED",
              items: ["ECI data center inspection", "Network segmentation verified", "HSM configuration audited", "Disaster recovery tested"],
            },
          ].map((s) => (
            <div key={s.title} style={{ background: N8, border: `1px solid ${N7}`, borderTop: `3px solid ${G5}`, padding: 24 }}>
              <div style={{ fontFamily: MO, fontSize: 9, letterSpacing: 2, color: T3, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontFamily: MO, fontSize: 14, color: G3, marginBottom: 16 }}>✓ {s.status}</div>
              {s.items.map((item) => (
                <div key={item} style={{ fontFamily: IN, fontSize: 12, color: T2, padding: "6px 0", borderBottom: `1px solid ${N7}`, display: "flex", gap: 8 }}>
                  <span style={{ color: G3 }}>·</span> {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {tab === "reports" && (
        <div>
          <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: T3, marginBottom: 20 }}>
            PUBLISHED SECURITY REPORTS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { title: "Pre-Election Penetration Test Report — April 2029", org: "Cyber Security Works Ltd", date: "28 Mar 2029", type: "PENTEST" },
              { title: "Cryptographic System Review — March 2029", org: "Prof. Arun Mehta, IIT Bombay", date: "22 Mar 2029", type: "CRYPTO" },
              { title: "Source Code Audit — February 2029", org: "Trail of Bits", date: "14 Feb 2029", type: "CODE AUDIT" },
              { title: "Infrastructure Security Assessment", org: "ECI Internal Security Team", date: "10 Feb 2029", type: "INFRA" },
              { title: "Threat Model Review — Final", org: "CERT-In", date: "05 Feb 2029", type: "THREAT MODEL" },
              { title: "Accessibility Audit Report", org: "National Institute for Empowerment of Persons with Disabilities", date: "20 Jan 2029", type: "ACCESSIBILITY" },
            ].map((r) => (
              <div
                key={r.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto auto",
                  gap: 20,
                  padding: "16px 20px",
                  background: N8,
                  border: `1px solid ${N7}`,
                  borderBottom: "none",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: MO,
                    fontSize: 8,
                    letterSpacing: 1.5,
                    padding: "4px 8px",
                    background: "rgba(255,107,0,0.1)",
                    border: `1px solid rgba(255,107,0,0.3)`,
                    borderRadius: 2,
                    color: S4,
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.type}
                </div>
                <div>
                  <div style={{ fontFamily: IN, fontSize: 13, color: T }}>{r.title}</div>
                  <div style={{ fontFamily: IN, fontSize: 12, color: T3, marginTop: 2 }}>{r.org}</div>
                </div>
                <div style={{ fontFamily: MO, fontSize: 10, color: T3, whiteSpace: "nowrap" }}>{r.date}</div>
                <div style={{ fontFamily: MO, fontSize: 10, color: G3 }}>PUBLISHED ↓</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
