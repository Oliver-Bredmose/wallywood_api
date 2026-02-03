import { useState } from 'react';
import style from './kontakt.module.scss';

export function Kontakt() {
  const [formData, setFormData] = useState({
    navn: '',
    email: '',
    besked: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form data:', formData);
    
    setStatus('Tak for din besked! Vi vender tilbage hurtigst muligt.');
    
    setFormData({
      navn: '',
      email: '',
      besked: ''
    });

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className={style.KontaktContainer}>
      <div className={style.KontaktContent}>
        
        <h1 className={style.KontaktHero}>Kontakt os</h1>

        <form onSubmit={handleSubmit} className={style.KontaktForm}>
          
          <div className={style.FormGroup}>
            <label htmlFor="navn">Dit navn: *</label>
            <input
              type="text"
              id="navn"
              name="navn"
              value={formData.navn}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.FormGroup}>
            <label htmlFor="email">Din email: *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.FormGroup}>
            <label htmlFor="besked">Din besked: *</label>
            <textarea
              id="besked"
              name="besked"
              rows={8}
              value={formData.besked}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={style.SubmitButton}>
            Send
          </button>

          {status && (
            <div className={style.StatusMessage}>
              {status}
            </div>
          )}

        </form>

      </div>
    </div>
  );
}