import { useState } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { profile } from '../../data/portfolio';

const emptyForm = { name: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const updateField = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));
  const submitForm = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setStatus({ type: 'error', message: 'Please complete all fields before sending your message.' }); return; }
    if (!emailPattern.test(form.email)) { setStatus({ type: 'error', message: 'Please enter a valid email address.' }); return; }
    setIsSubmitting(true); setStatus({ type: '', message: '' });
    try {
      if (endpoint) {
        const response = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }) });
        if (!response.ok) throw new Error('Form service rejected the message.');
        setForm(emptyForm); setStatus({ type: 'success', message: 'Your message was sent successfully. Thank you.' });
      } else {
        const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
        const body = encodeURIComponent(`Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus({ type: 'success', message: 'Your email app has been opened with your message.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Your message could not be sent. Please email me directly instead.' });
    } finally { setIsSubmitting(false); }
  };

  return <form className="contact-form" onSubmit={submitForm} noValidate><label>Name<input value={form.name} onChange={updateField('name')} autoComplete="name" required /></label><label>Email<input type="email" value={form.email} onChange={updateField('email')} autoComplete="email" required /></label><label>Message<textarea rows="5" value={form.message} onChange={updateField('message')} required /></label>{status.message && <p className={`form-feedback ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>{status.message}</p>}<button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : <>Send message <HiArrowUpRight /></>}</button></form>;
}
