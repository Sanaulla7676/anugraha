"use client";

import { useState } from "react";

export default function CounsellingForm() {
  const [prepared,setPrepared]=useState(false);
  const [error,setError]=useState("");

  const submit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setError("");
    const form=new FormData(event.currentTarget);
    const name=String(form.get("name")||"").trim();
    const phone=String(form.get("phone")||"").trim();
    if(!name||!phone){setError("Please enter your name and phone number.");return;}
    const rows=[
      "ANUGRAHA TRAINING INSTITUTE · COUNSELLING REQUEST",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${String(form.get("email")||"Not provided")}`,
      `Age: ${String(form.get("age")||"Not provided")}`,
      `Education: ${String(form.get("education")||"Not provided")}`,
      `Occupation: ${String(form.get("occupation")||"Not provided")}`,
      `Preferred date: ${String(form.get("date")||"Flexible")}`,
      `Preferred time: ${String(form.get("time")||"Any suitable time")}`,
      `Reason for learning: ${String(form.get("reason")||"Not provided")}`
    ];
    const url=`https://wa.me/919686568245?text=${encodeURIComponent(rows.join("\n"))}`;
    window.open(url,"_blank","noopener,noreferrer");
    setPrepared(true);
  };

  return <section className="counselling-panel">
    <div className="counselling-copy">
      <span className="section-kicker">COUNSELLING REQUEST</span>
      <h2>Tell us a little about yourself.</h2>
      <p>Share the details below. Your device will open WhatsApp with a prepared enquiry message to the Anugraha admissions number. Review it and press Send in WhatsApp to complete your enquiry.</p>
      <div className="counselling-contact"><small>ADMISSIONS TEAM</small><a href="tel:9686568245">96865 68245</a></div>
      <p className="note">This form opens WhatsApp; it does not silently save a lead or send a message automatically. Applicants under 18 need parent or guardian consent.</p>
      {prepared&&<p className="form-success" role="status">WhatsApp opened with your enquiry details. Please press Send in WhatsApp.</p>}
      {error&&<p className="form-error" role="alert">{error}</p>}
    </div>
    <form className="enquiry-form" onSubmit={submit}>
      <label>Full name<input required name="name" autoComplete="name" placeholder="Your full name"/></label>
      <label>Phone number<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+() -]{8,}" placeholder="Mobile number"/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="name@example.com"/></label>
      <label>Age<input name="age" type="number" min="16" placeholder="Your age"/></label>
      <label>Education<select name="education" defaultValue=""><option value="">Select qualification</option><option>SSLC / PUC</option><option>Diploma</option><option>Graduate</option><option>Postgraduate</option><option>Other / Prefer not to say</option></select></label>
      <label>Current occupation<select name="occupation" defaultValue=""><option value="">Select status</option><option>Student</option><option>Working professional</option><option>Homemaker</option><option>Freelancer</option><option>Business owner</option><option>Career changer</option></select></label>
      <label>Preferred date<input name="date" type="date"/></label>
      <label>Preferred time<select name="time" defaultValue="Any suitable time"><option>Any suitable time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
      <label className="form-full">Why are you interested in event management?<textarea name="reason" placeholder="Tell us what you want to learn or explore."/></label>
      <label className="form-consent form-full"><input required type="checkbox"/> <span>I agree to be contacted about this counselling request.</span></label>
      <button className="button button-primary form-full" type="submit">Continue to WhatsApp <span>↗</span></button>
      <p className="note form-full">By continuing, you choose to open WhatsApp and send the information you provided to Anugraha’s admissions number.</p>
    </form>
  </section>;
}
