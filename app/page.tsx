export default function Home() {
  return (
    <div style={{ backgroundColor: "#0f172a", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "3rem", color: "#38bdf8", marginBottom: "10px" }}>GlobalSkill-PK</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.6", color: "#94a3b8" }}>
        GlobalSkill-PK | expert freelancing & web solutions. We are building something amazing here.
      </p>
      <div style={{ marginTop: "30px", padding: "15px 30px", border: "2px solid #38bdf8", borderRadius: "50px", color: "#38bdf8", fontWeight: "bold" }}>
        Mobile Development Mode Active
      </div>
    </div>
  );
}
