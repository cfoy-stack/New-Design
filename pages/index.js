import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sectionStyle = {
    maxWidth: "900px",
    margin: "0 auto 5rem auto",
    padding: "0 20px",
    color: "#293C4A",
    lineHeight: "1.6",
    textAlign: "center",
  };

  const headingStyle = {
    fontWeight: "700",
    fontSize: "2.6rem",
    margin: "1.5rem 0",
  };

  return (
    <>
      <Head>
        <title>Pro-Dispense - Performance Nutrition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ fontFamily: "system-ui, sans-serif", backgroundColor: "#F7F7F7", paddingTop: 60, paddingBottom: 80 }}>
        {/* Hero Section */}
        <section style={{ ...sectionStyle, paddingTop: 120, paddingBottom: 80, backgroundColor: "#293C4A", color: "#fff", borderRadius: 12 }}>
          <h1 style={{ fontWeight: 900, fontSize: "3.8rem", marginBottom: 30 }}>
            Introducing <span style={{ color: "#94E5FF" }}>Pro-Dispense FLO 1</span>
          </h1>
          <p style={{ fontWeight: 600, fontSize: "1.6rem", maxWidth: 650, margin: "0 auto 40px" }}>
            Next-generation precision dispensing with the most advanced sports nutrition system.
          </p>
        </section>

        {/* Time & Convenience */}
        <section id="timeConvenience" style={sectionStyle}>
          <h2 style={headingStyle}>Time & Convenience</h2>
          <p>
            Manual preparation of supplements consumes significant time, adding friction to daily athlete routines.
          </p>
          <p style={{ marginTop: 15 }}>
            Variability in mixing and dosing risks athlete performance and consistency.
          </p>
        </section>

        {/* Consistency & Quality */}
        <section style={{ ...sectionStyle, backgroundColor: "#E9EBE8", color: "#1C262D", borderRadius: 12, paddingTop: 60, paddingBottom: 60 }}>
          <h2 style={headingStyle}>Consistency & Quality</h2>
          <p>
            Ready-to-drink products often contain additives, create plastic waste, and lack personalised nutrition.
          </p>
        </section>

        {/* Data Tracking & Analysis */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Data Tracking & Analysis</h2>
          <p>
            Currently, no reliable way exists to track consumption, measure compliance, or understand nutritional behaviour over time.
          </p>
        </section>

        {/* Enquiry Section */}
        <section id="enquire" style={{ ...sectionStyle, color: "#293C4A" }}>
          <h2 style={headingStyle}>Get In Touch</h2>
          {submitted ? (
            <p style={{ fontWeight: "700", color: "green" }}>Thank you for your enquiry! We will be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left" }}>
              <label htmlFor="name">Name*</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleInput} required style={{ padding: "0.75rem", fontSize: "1rem" }} />

              <label htmlFor="email">Email*</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleInput} required style={{ padding: "0.75rem", fontSize: "1rem" }} />

              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" value={form.company} onChange={handleInput} style={{ padding: "0.75rem", fontSize: "1rem" }} />

              <label htmlFor="message">Message*</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={handleInput} required style={{ padding: "0.75rem", fontSize: "1rem" }} />

              <button type="submit" style={{ padding: "1rem", backgroundColor: "#94E5FF", color: "#1C262D", fontWeight: "700", borderRadius: "48px", border: "none", cursor: "pointer" }}>
                Submit
              </button>
            </form>
          )}
        </section>
      </main>
    </>
  );
}

