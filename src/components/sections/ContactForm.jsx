import { useState } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { profile } from '../../data/portfolio';

const emptyForm = { name: '', email: '', message: '' };

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const submitForm = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError('Please complete all fields before sending your message.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Please enter a valid email address.'); return; }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setError(''); setSent(true);
  };
  return <form className="contact-form" onSubmit={submitForm} noValidate><label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" /></label><label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" /></label><label>Message<textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>{error && <p className="form-feedback error" role="alert">{error}</p>}{sent && <p className="form-feedback success" role="status">Your email app has been opened with your message.</p>}<button className="button button-primary" type="submit">Send message <HiArrowUpRight /></button></form>;
}
