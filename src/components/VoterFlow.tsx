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

const STEPS = [
  "Welcome",
  "Login",
  "Identity",
  "Voter Verify",
  "Eligibility",
  "Election Info",
  "Ballot",
  "Review",
  "Submit",
  "Confirmed",
];

const CANDIDATES = [
  { id: "a", party: "National Democratic Alliance", symbol: "🪷", candidate: "Priya Sharma", constituency: "Secunderabad, Telangana" },
  { id: "b", party: "United Progressive Alliance", symbol: "✋", candidate: "Arjun Reddy", constituency: "Secunderabad, Telangana" },
  { id: "c", party: "Telangana Rashtra Samithi", symbol: "🚗", candidate: "Lakshmi Venkatesh", constituency: "Secunderabad, Telangana" },
  { id: "d", party: "Aam Aadmi Party", symbol: "🧹", candidate: "Mohammed Khaleel", constituency: "Secunderabad, Telangana" },
  { id: "nota", party: "NOTA", symbol: "✗", candidate: "None Of The Above", constituency: "" },
];

export default function VoterFlow({ setView }: { setView: (v: any) => void }) {
  const [step, setStep] = useState(0);
  const [aadhaar, setAadhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const RECEIPT_ID = "EC-IN-2029-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px", minHeight: "calc(100vh - 64px)" }}>
      {/* Progress */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontFamily: MO, fontSize: 10, letterSpacing: 2, color: S4 }}>
            STEP {step + 1} OF {STEPS.length} — {STEPS[step].toUpperCase()}
          </span>
          <span style={{ fontFamily: MO, fontSize: 10, color: T3 }}>
            SECURE SESSION · TLS 1.3
          </span>
        </div>
        <div style={{ height: 3, background: N7, borderRadius: 2, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${((step + 1) / STEPS.length) * 100}%`,
              background: `linear-gradient(90deg, ${S4}, #ff8533)`,
              borderRadius: 2,
              transition: "width 0.4s ease",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              style={{
                fontFamily: MO,
                fontSize: 8,
                letterSpacing: 0.5,
                color: i <= step ? S4 : T3,
                textAlign: "center",
              }}
            >
              {i <= step ? "✓" : "·"}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div
        style={{
          background: N8,
          border: `1px solid ${N7}`,
          borderRadius: 8,
          padding: 48,
          minHeight: 440,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {step === 0 && <StepWelcome onNext={next} />}
        {step === 1 && <StepLogin aadhaar={aadhaar} setAadhaar={setAadhaar} otp={otp} setOtp={setOtp} otpSent={otpSent} setOtpSent={setOtpSent} onNext={next} />}
        {step === 2 && <StepIdentity onNext={next} />}
        {step === 3 && <StepVoterVerify onNext={next} />}
        {step === 4 && <StepEligibility onNext={next} />}
        {step === 5 && <StepElectionInfo onNext={next} />}
        {step === 6 && <StepBallot selected={selected} setSelected={setSelected} onNext={next} />}
        {step === 7 && <StepReview selected={selected} onNext={next} />}
        {step === 8 && <StepSubmit confirmed={confirmed} setConfirmed={setConfirmed} onNext={next} />}
        {step === 9 && <StepConfirmed receiptId={RECEIPT_ID} setView={setView} />}
      </div>

      {/* Navigation */}
      {step > 0 && step < 9 && (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <button
            onClick={prev}
            style={{
              fontFamily: MO,
              fontSize: 11,
              letterSpacing: 2,
              padding: "10px 20px",
              background: "transparent",
              border: `1px solid ${T3}`,
              borderRadius: 3,
              color: T2,
              cursor: "pointer",
            }}
          >
            ← BACK
          </button>
          <div style={{ fontFamily: MO, fontSize: 10, color: T3, display: "flex", alignItems: "center", gap: 8 }}>
            🔒 256-bit encrypted session
          </div>
        </div>
      )}
    </div>
  );
}

function StepWelcome({ onNext }: { onNext: () => void }) {
  return (
    <div style={{ flex: 1 }}>
      <Label>WELCOME</Label>
      <H2>Secure Remote Voting</H2>
      <Body style={{ marginBottom: 32 }}>
        You are about to cast your vote in the General Election 2029. This session is end-to-end encrypted. Your ballot choice is cryptographically separated from your identity.
      </Body>

      <InfoBox>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#ff6b00", letterSpacing: 2, marginBottom: 8 }}>BEFORE YOU BEGIN</div>
        <ul style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8096b4", lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
          <li>You must be a registered Indian voter</li>
          <li>You must have your Aadhaar number</li>
          <li>Your registered mobile number must be accessible</li>
          <li>You may only vote once</li>
          <li>Your vote is secret — no one can see your choice</li>
        </ul>
      </InfoBox>

      <button onClick={onNext} style={primaryBtn}>BEGIN SECURE SESSION →</button>
    </div>
  );
}

function StepLogin({ aadhaar, setAadhaar, otp, setOtp, otpSent, setOtpSent, onNext }: any) {
  return (
    <div style={{ flex: 1 }}>
      <Label>STEP 2 — SECURE LOGIN</Label>
      <H2>Aadhaar Authentication</H2>
      <Body style={{ marginBottom: 32 }}>Enter your 12-digit Aadhaar number. An OTP will be sent to your registered mobile number.</Body>

      <div style={{ marginBottom: 24 }}>
        <FieldLabel>Aadhaar Number</FieldLabel>
        <input
          type="text"
          maxLength={12}
          placeholder="XXXX XXXX XXXX"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, "").slice(0, 12))}
          style={inputStyle}
        />
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#4a6a94", marginTop: 6 }}>
          Your Aadhaar is not stored. It is used only for this session.
        </div>
      </div>

      {!otpSent ? (
        <button
          onClick={() => setOtpSent(true)}
          disabled={aadhaar.length !== 12}
          style={{ ...primaryBtn, opacity: aadhaar.length !== 12 ? 0.4 : 1 }}
        >
          SEND OTP TO REGISTERED MOBILE
        </button>
      ) : (
        <div>
          <FieldLabel>OTP (sent to ●●●● ●●5 2834)</FieldLabel>
          <input
            type="text"
            maxLength={6}
            placeholder="6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            style={inputStyle}
          />
          <div style={{ marginTop: 8, display: "flex", gap: 16 }}>
            <button
              onClick={onNext}
              disabled={otp.length !== 6}
              style={{ ...primaryBtn, opacity: otp.length !== 6 ? 0.4 : 1 }}
            >
              VERIFY & CONTINUE →
            </button>
            <button onClick={() => setOtpSent(false)} style={ghostBtn}>Resend OTP</button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepIdentity({ onNext }: { onNext: () => void }) {
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => { setScanning(false); setDone(true); }, 2000);
  };

  return (
    <div style={{ flex: 1 }}>
      <Label>STEP 3 — IDENTITY VERIFICATION</Label>
      <H2>Biometric Confirmation</H2>
      <Body style={{ marginBottom: 32 }}>A liveness check confirms you are the Aadhaar holder. This is a one-time check and no biometric data is retained.</Body>

      <div
        style={{
          width: 200,
          height: 200,
          border: `2px dashed ${done ? G5 : N7}`,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
          background: done ? "rgba(19,136,8,0.05)" : "rgba(22,48,88,0.3)",
          transition: "all 0.4s",
        }}
      >
        <div style={{ fontSize: 48 }}>{done ? "✅" : scanning ? "🔄" : "📷"}</div>
        <div style={{ fontFamily: MO, fontSize: 10, color: done ? G3 : T3, marginTop: 12, letterSpacing: 1.5 }}>
          {done ? "VERIFIED" : scanning ? "SCANNING..." : "CAMERA READY"}
        </div>
      </div>

      {!done && (
        <button onClick={handleScan} style={primaryBtn} disabled={scanning}>
          {scanning ? "PROCESSING..." : "START FACE SCAN"}
        </button>
      )}
      {done && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <SuccessBadge>Identity verified · Rajesh Kumar Sharma · DOB: 14-Aug-1985</SuccessBadge>
          <button onClick={onNext} style={primaryBtn}>CONTINUE →</button>
        </div>
      )}
    </div>
  );
}

function StepVoterVerify({ onNext }: { onNext: () => void }) {
  return (
    <div style={{ flex: 1 }}>
      <Label>STEP 4 — VOTER REGISTRATION VERIFICATION</Label>
      <H2>Confirming Registration</H2>
      <Body style={{ marginBottom: 32 }}>Cross-referencing your identity with the Electoral Roll maintained by the Election Commission of India.</Body>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
        <CheckRow label="Electoral Photo ID Card" value="KN/01/234/567890" done />
        <CheckRow label="Constituency" value="Secunderabad, Telangana" done />
        <CheckRow label="Assembly Segment" value="Secunderabad Cantonment — 178" done />
        <CheckRow label="Serial No. in Roll" value="782 · Part 14" done />
        <CheckRow label="Duplicate Vote Check" value="Not yet voted · Cleared" done highlight={G3} />
      </div>

      <SuccessBadge>Registration confirmed · Eligible to vote</SuccessBadge>
      <button onClick={onNext} style={{ ...primaryBtn, marginTop: 24 }}>PROCEED →</button>
    </div>
  );
}

function StepEligibility({ onNext }: { onNext: () => void }) {
  return (
    <div style={{ flex: 1 }}>
      <Label>STEP 5 — ELECTION ELIGIBILITY</Label>
      <H2>Remote Voting Eligibility</H2>
      <Body style={{ marginBottom: 32 }}>Your eligibility for remote voting has been verified against ECI criteria.</Body>

      <InfoBox>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#ff6b00", letterSpacing: 2, marginBottom: 12 }}>ELIGIBILITY CRITERIA MET</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "Indian citizen · Passport no. P4821847",
            "Registered voter · Electoral Roll 2029",
            "Remote voting opt-in registered · 12 Jan 2029",
            "Current location: London, United Kingdom",
            "No voting record exists for this election",
          ].map((e, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: G3, fontFamily: MO, fontSize: 12, marginTop: 1 }}>✓</span>
              <span style={{ fontFamily: IN, fontSize: 13, color: "#8096b4" }}>{e}</span>
            </div>
          ))}
        </div>
      </InfoBox>

      <button onClick={onNext} style={{ ...primaryBtn, marginTop: 24 }}>CONFIRMED — PROCEED TO BALLOT →</button>
    </div>
  );
}

function StepElectionInfo({ onNext }: { onNext: () => void }) {
  return (
    <div style={{ flex: 1 }}>
      <Label>STEP 6 — ELECTION INFORMATION</Label>
      <H2>General Election 2029</H2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
        {[
          { k: "Election", v: "18th Lok Sabha General Election" },
          { k: "Constituency", v: "Secunderabad, Telangana" },
          { k: "Voting Date", v: "12 April 2029" },
          { k: "Voting Window", v: "07:00 – 18:00 IST" },
          { k: "Your Location", v: "London, UK (BST +5:30h)" },
          { k: "Local Time", v: "07:15 BST (12:45 IST)" },
        ].map(({ k, v }) => (
          <div key={k} style={{ background: "#0a1628", border: `1px solid ${N7}`, borderRadius: 4, padding: 16 }}>
            <div style={{ fontFamily: MO, fontSize: 9, letterSpacing: 2, color: T3, marginBottom: 4 }}>{k.toUpperCase()}</div>
            <div style={{ fontFamily: IN, fontSize: 14, color: T }}>{v}</div>
          </div>
        ))}
      </div>

      <InfoBox>
        <div style={{ fontFamily: IN, fontSize: 13, color: "#8096b4", lineHeight: 1.7 }}>
          You are voting in the <strong style={{ color: T }}>Secunderabad Parliamentary Constituency</strong>. {CANDIDATES.length - 1} candidates are contesting. Your ballot will be encrypted immediately upon casting.
        </div>
      </InfoBox>

      <button onClick={onNext} style={{ ...primaryBtn, marginTop: 24 }}>VIEW BALLOT →</button>
    </div>
  );
}

function StepBallot({ selected, setSelected, onNext }: { selected: string | null; setSelected: (s: string) => void; onNext: () => void }) {
  return (
    <div style={{ flex: 1 }}>
      <Label>STEP 7 — BALLOT</Label>
      <H2>Cast Your Vote</H2>
      <Body style={{ marginBottom: 32 }}>
        Select one candidate. Your choice is encrypted the moment you submit. Take your time — no one can see your screen.
      </Body>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
        {CANDIDATES.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "16px 20px",
              background: selected === c.id ? "rgba(255,107,0,0.08)" : "#0a1628",
              border: `1px solid ${selected === c.id ? S4 : N7}`,
              borderRadius: 4,
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: `2px solid ${selected === c.id ? S4 : T3}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {selected === c.id && <div style={{ width: 10, height: 10, borderRadius: "50%", background: S4 }} />}
            </div>
            <div style={{ fontSize: 28 }}>{c.symbol}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: IN, fontWeight: 600, fontSize: 15, color: T }}>{c.candidate}</div>
              <div style={{ fontFamily: MO, fontSize: 10, color: T3, letterSpacing: 1, marginTop: 2 }}>{c.party.toUpperCase()}</div>
            </div>
          </button>
        ))}
      </div>

      <button onClick={onNext} disabled={!selected} style={{ ...primaryBtn, opacity: selected ? 1 : 0.4 }}>
        REVIEW MY VOTE →
      </button>
    </div>
  );
}

function StepReview({ selected, onNext }: { selected: string | null; onNext: () => void }) {
  const cand = CANDIDATES.find((c) => c.id === selected);
  return (
    <div style={{ flex: 1 }}>
      <Label>STEP 8 — REVIEW</Label>
      <H2>Review Your Vote</H2>
      <Body style={{ marginBottom: 32 }}>
        Please confirm your selection. Once submitted, your vote cannot be changed.
      </Body>

      <div
        style={{
          background: "#0a1628",
          border: `2px solid ${S4}`,
          borderRadius: 6,
          padding: 32,
          marginBottom: 32,
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div style={{ fontSize: 52 }}>{cand?.symbol}</div>
        <div>
          <div style={{ fontFamily: MO, fontSize: 10, color: T3, letterSpacing: 2, marginBottom: 6 }}>YOUR SELECTION</div>
          <div style={{ fontFamily: RJ, fontWeight: 700, fontSize: 28, color: T }}>{cand?.candidate}</div>
          <div style={{ fontFamily: IN, fontSize: 14, color: T2, marginTop: 4 }}>{cand?.party}</div>
        </div>
      </div>

      <div
        style={{
          padding: 16,
          background: "rgba(255,107,0,0.06)",
          border: `1px solid rgba(255,107,0,0.2)`,
          borderRadius: 4,
          fontFamily: IN,
          fontSize: 13,
          color: T3,
          lineHeight: 1.6,
          marginBottom: 32,
        }}
      >
        ⚠️ On the next screen, you will be asked to make a final confirmation. Your vote will be encrypted and submitted. This action is irreversible.
      </div>

      <button onClick={onNext} style={primaryBtn}>
        CONFIRM & SUBMIT VOTE →
      </button>
    </div>
  );
}

function StepSubmit({ confirmed, setConfirmed, onNext }: any) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); onNext(); }, 2500);
  };

  return (
    <div style={{ flex: 1 }}>
      <Label>STEP 9 — SECURE SUBMISSION</Label>
      <H2>Final Confirmation</H2>
      <Body style={{ marginBottom: 32 }}>
        Check the box to confirm this is your free, independent choice made without coercion.
      </Body>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
        {[
          "I am casting this vote of my own free will.",
          "No person is watching me or directing my vote.",
          "I understand this vote is final and cannot be changed.",
          "I certify I am the registered voter Rajesh Kumar Sharma.",
        ].map((s, i) => (
          <label key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              style={{ marginTop: 3, accentColor: S4, width: 16, height: 16 }}
            />
            <span style={{ fontFamily: IN, fontSize: 14, color: T2, lineHeight: 1.5 }}>{s}</span>
          </label>
        ))}
      </div>

      {submitting ? (
        <div
          style={{
            padding: 24,
            background: "rgba(255,107,0,0.06)",
            border: `1px solid rgba(255,107,0,0.3)`,
            borderRadius: 6,
            textAlign: "center",
          }}
        >
          <div style={{ fontFamily: MO, fontSize: 13, color: S4, letterSpacing: 2 }}>
            🔐 ENCRYPTING BALLOT...
          </div>
          <div style={{ fontFamily: IN, fontSize: 12, color: T3, marginTop: 8 }}>
            Generating cryptographic proof · Submitting to ECI servers
          </div>
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={!confirmed}
          style={{ ...primaryBtn, opacity: confirmed ? 1 : 0.4 }}
        >
          SUBMIT MY VOTE NOW
        </button>
      )}
    </div>
  );
}

function StepConfirmed({ receiptId, setView }: { receiptId: string; setView: (v: any) => void }) {
  return (
    <div style={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontSize: 64, marginBottom: 24 }}>🗳️</div>

      <div
        style={{
          fontFamily: MO,
          fontSize: 12,
          letterSpacing: 3,
          color: G3,
          marginBottom: 12,
          padding: "6px 16px",
          background: "rgba(19,136,8,0.1)",
          border: `1px solid rgba(19,136,8,0.3)`,
          borderRadius: 3,
        }}
      >
        ✓ VOTE SUCCESSFULLY RECORDED
      </div>

      <h2 style={{ fontFamily: RJ, fontWeight: 700, fontSize: 48, color: T, marginBottom: 16 }}>
        THANK YOU FOR<br />VOTING
      </h2>

      <p style={{ fontFamily: IN, fontSize: 15, color: T2, lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
        Your encrypted vote has been recorded. Your ballot choice remains secret and cannot be linked to your identity by anyone.
      </p>

      <div
        style={{
          background: "#0a1628",
          border: `1px solid ${N7}`,
          borderRadius: 6,
          padding: 24,
          width: "100%",
          maxWidth: 420,
          marginBottom: 32,
        }}
      >
        <div style={{ fontFamily: MO, fontSize: 9, color: T3, letterSpacing: 2, marginBottom: 12 }}>CRYPTOGRAPHIC RECEIPT</div>
        <div style={{ fontFamily: MO, fontSize: 13, color: S4, letterSpacing: 1 }}>{receiptId}</div>
        <div style={{ fontFamily: IN, fontSize: 12, color: T3, marginTop: 8, lineHeight: 1.6 }}>
          Keep this receipt. It can be used to verify your vote was recorded without revealing your choice.
        </div>
      </div>

      <button onClick={() => setView("home")} style={ghostBtn}>
        RETURN TO HOME
      </button>
    </div>
  );
}

// Shared UI components
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: MO, fontSize: 10, letterSpacing: 3, color: S4, marginBottom: 8 }}>
      {children}
    </div>
  );
}
function H2({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: RJ, fontWeight: 700, fontSize: 36, color: T, marginBottom: 16, letterSpacing: -0.5 }}>
      {children}
    </div>
  );
}
function Body({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: IN, fontSize: 15, color: T2, lineHeight: 1.65, ...style }}>
      {children}
    </p>
  );
}
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: MO, fontSize: 9, letterSpacing: 2, color: T3, marginBottom: 8 }}>
      {children}
    </div>
  );
}
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "rgba(22,48,88,0.4)",
        border: `1px solid ${N7}`,
        borderRadius: 4,
        padding: 20,
      }}
    >
      {children}
    </div>
  );
}
function SuccessBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 16px",
        background: "rgba(19,136,8,0.08)",
        border: `1px solid rgba(19,136,8,0.3)`,
        borderRadius: 4,
      }}
    >
      <span style={{ color: G3 }}>✓</span>
      <span style={{ fontFamily: IN, fontSize: 13, color: G3 }}>{children}</span>
    </div>
  );
}
function CheckRow({ label, value, done, highlight }: { label: string; value: string; done: boolean; highlight?: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 16px",
        background: "#0a1628",
        border: `1px solid ${N7}`,
        borderRadius: 4,
      }}
    >
      <span style={{ fontFamily: IN, fontSize: 13, color: T2 }}>{label}</span>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{ fontFamily: MO, fontSize: 12, color: highlight || T }}>{value}</span>
        {done && <span style={{ color: G3 }}>✓</span>}
      </div>
    </div>
  );
}

const primaryBtn: React.CSSProperties = {
  fontFamily: MO,
  fontSize: 12,
  letterSpacing: 2,
  padding: "14px 28px",
  background: S4,
  border: "none",
  borderRadius: 3,
  color: "#fff",
  cursor: "pointer",
  fontWeight: 600,
  marginTop: 8,
};

const ghostBtn: React.CSSProperties = {
  fontFamily: MO,
  fontSize: 11,
  letterSpacing: 2,
  padding: "12px 24px",
  background: "transparent",
  border: `1px solid ${T3}`,
  borderRadius: 3,
  color: T2,
  cursor: "pointer",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  background: "#0a1628",
  border: `1px solid ${N7}`,
  borderRadius: 4,
  fontFamily: MO,
  fontSize: 15,
  color: T,
  outline: "none",
  boxSizing: "border-box",
};
