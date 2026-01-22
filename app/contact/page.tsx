export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle">Contact</h1>
        <p className="sectionSub">
          Send a message and we’ll reply with next steps. (Form is front-end only for now.)
        </p>

        <div className="grid2">
          <div className="card cardPad">
            <div className="featureTitle">Business details</div>
            <p className="featureDesc" style={{ marginTop: 8 }}>
              Email: <strong>hello@digitalstarchain.online</strong><br />
              Hours: Mon–Fri<br />
              Location: Remote / Worldwide
            </p>
            <p className="small" style={{ marginTop: 12 }}>
              Later we can connect this form to email, a CRM, or a booking calendar.
            </p>
          </div>

          <div className="card cardPad">
            <div className="featureTitle">Message</div>

            <form className="form">
              <input className="input" placeholder="Name" />
              <input className="input" placeholder="Email" type="email" />
              <textarea className="textarea" placeholder="Tell us about your goals…" />
              <button className="btn btnPrimary" type="button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
