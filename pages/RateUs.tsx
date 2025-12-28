
import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GlowButton from '../components/GlowButton';

const RateUs: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    
    // In a real app, send to API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fadeIn">
        <GlassCard className="text-center p-12 max-w-md border-neon">
          <div className="text-5xl mb-6">💚</div>
          <h2 className="text-3xl font-black text-neon mb-4 tracking-tighter">THANK YOU!</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed mb-8 uppercase tracking-widest">
            Your feedback fuels our growth.
          </p>
          <GlowButton onClick={() => setSubmitted(false)} className="w-full">
            SUBMIT ANOTHER
          </GlowButton>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black font-mono tracking-tighter uppercase mb-4">
          RATE <span className="text-neon neon-glow">EXPERIENCE</span>
        </h2>
        <p className="text-gray-400 font-mono text-xs tracking-widest uppercase">
          Help us build the ultimate community
        </p>
      </div>

      <GlassCard className="p-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col items-center">
            <label className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-6">Select Stars</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="focus:outline-none transition-transform duration-200 hover:scale-125"
                >
                  <svg 
                    className={`w-12 h-12 ${
                      (hover || rating) >= star ? 'text-neon drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]' : 'text-gray-800'
                    } transition-colors duration-200`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
            <p className="mt-4 text-neon font-mono text-xs uppercase tracking-widest">
              {rating > 0 ? `${rating} / 5 STARS` : 'NO RATING SELECTED'}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Comments (Optional)</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="YOUR THOUGHTS..."
              rows={4}
              className="w-full bg-black/40 border border-neon/20 rounded-sm p-4 text-white font-mono text-sm focus:outline-none focus:border-neon/60 transition-colors placeholder:text-gray-700"
            />
          </div>

          <GlowButton type="submit" disabled={rating === 0} className="w-full">
            SUBMIT FEEDBACK
          </GlowButton>
        </form>
      </GlassCard>
    </div>
  );
};

export default RateUs;
