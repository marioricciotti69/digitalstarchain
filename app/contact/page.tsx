import { contactInfo } from "./contactInfo";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle">Contact</h1>
        <p className="sectionSub">
          Share your goals and we’ll reply with next steps and a tailored proposal.
        </p>

        <div className="grid2">
          <div className="card cardPad">
            <div className="featureTitle">Contact details</div>

            <p className="featureDesc" style={{ marginTop: 10 }}>
              <strong>Email:</strong> {contactInfo.email}
              {contactInfo.phone ? (
                <>
                  <br />
                  <strong>Phone:</strong> {contactInfo.phone}
                </>
              ) : null}
              {contactInfo.addressLine ? (
                <>
                  <br />
                  <strong>Address:</strong> {contactInfo.addressLine}
                </>
              ) : null}
              {contactInfo.cityCountry ? (
                <>
                  <br />
                  <strong>Location:</strong> {contactInfo.cityCountry}
                </>
              ) : null}
              <br />
              <strong>Hours:</strong> {contactInfo.hours}
            </p>

            <p className="small" style={{ marginTop: 12 }}>
              Prefer email? Write us and we’ll get back within 1–2 business days.
            </p>
          </div>

          <div className="card cardPad">
            <div className="featureTitle">Send a message</div>

            {!contactInfo.formspreeEndpoint ? (
              <p className="small" style={{ marginTop: 10 }}>
                Form is not active yet. Add your Formspree endpoint in{" "}
                <code>app/contact/contactInfo.ts</code>.
              </p>
            ) : null}

            <form
              className="form"
              action={contactInfo.formspreeEndpoint || "#"}
              method="POST"
            >
              <input className="input" name="name" placeholder="Name" required />
              <input className="input" name="email" placeholder="Email" type="email" required />
              <input className="input" name="company" placeholder="Company (optional)" />
              <textarea className="textarea" name="message" placeholder="Tell us about your goals…" required />

              {/* Anti-spam honeypot (Formspree supports it) */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <button className="btn btnPrimary" type="submit" disabled={!contactInfo.formspreeEndpoint}>
                Send
              </button>

              <p className="small">
                By sending, you agree to be contacted about your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

