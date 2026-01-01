
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faTelegram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Project Inquiry', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic client validation
    if (!form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      // POST to your Netlify function endpoint
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: 'Project Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-primary"></span>
                <span className="text-accent-blue text-sm font-black uppercase tracking-widest">Contact</span>
              </div>
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-white">Let's work together</h2>
              <p className="text-text-dim text-lg leading-relaxed max-w-md">
                Fill out the form or reach out directly via email. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-surface-dark border border-border-dim flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <div className="text-text-dim text-sm font-bold uppercase tracking-wider mb-1">Email</div>
                  <div className="text-white text-xl font-black">henockgizachew8@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-surface-dark border border-border-dim flex items-center justify-center text-accent-blue">
                  <span className="material-symbols-outlined text-3xl">phone</span>
                </div>
                <div>
                  <div className="text-text-dim text-sm font-bold uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-white text-xl font-black">+251 964 73 2690</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <h4 className="text-white font-black text-lg">Follow Me</h4>
              <div className="flex gap-4">
                {/* {['public', 'code', 'brush'].map((icon, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="w-12 h-12 rounded-full bg-surface-dark border border-border-dim flex items-center justify-center text-text-dim hover:text-background-dark hover:bg-primary hover:border-primary transition-all shadow-lg"
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                  </a>
                ))} */}

                {/* GitHub */}
                <a
                  href="https://github.com/henzo-giz?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-surface-dark border border-border-dim flex items-center justify-center text-text-dim hover:text-background-dark hover:bg-primary hover:border-primary transition-all shadow-lg"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/henzo_giz?igsh=MXJqdmpyMmd0YmEzNA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-surface-dark border border-border-dim flex items-center justify-center text-text-dim hover:text-background-dark hover:bg-primary hover:border-primary transition-all shadow-lg"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                {/* Telegram */}
                <a
                  href="https://t.me/Henzo_giz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-surface-dark border border-border-dim flex items-center justify-center text-text-dim hover:text-background-dark hover:bg-primary hover:border-primary transition-all shadow-lg"
                  aria-label="Telegram"
                >
                  <FontAwesomeIcon icon={faTelegram}  className="text-2xl" />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/henock-gizachew-shiferaw-52377422b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-surface-dark border border-border-dim flex items-center justify-center text-text-dim hover:text-background-dark hover:bg-primary hover:border-primary transition-all shadow-lg"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn}  className="text-2xl" />
                </a>
                {/* X */}
                <a
                  href="https://x.com/henok_oo?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-surface-dark border border-border-dim flex items-center justify-center text-text-dim hover:text-background-dark hover:bg-primary hover:border-primary transition-all shadow-lg"
                  aria-label="X"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@henok_giz?_t=ZM-8xE0Ebes2Hm&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-surface-dark border border-border-dim flex items-center justify-center text-text-dim hover:text-background-dark hover:bg-primary hover:border-primary transition-all shadow-lg"
                  aria-label="TikTok"
                >
                  <FontAwesomeIcon icon={faTiktok}  className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-surface-dark p-8 md:p-12 rounded-3xl border border-border-dim shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="contact-heading">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-white">Name</label>
                  <input 
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-background-dark border border-border-dim rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-border-dim"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-white">Email</label>
                  <input 
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-background-dark border border-border-dim rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-border-dim"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-white">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-background-dark border border-border-dim rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option>Project Inquiry</option>
                  <option>General Question</option>
                  <option>Collaboration</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-white">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background-dark border border-border-dim rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-border-dim resize-none"
                  required
                />
              </div>

              {status === 'success' && <p className="text-green-400 font-bold">Message sent — thank you!</p>}
              {status === 'error' && <p className="text-rose-400 font-bold">Something went wrong. Please check required fields and try again.</p>}

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-primary hover:bg-orange-600 text-background-dark text-lg font-black rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
