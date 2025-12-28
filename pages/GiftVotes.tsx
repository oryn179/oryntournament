
import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GlowButton from '../components/GlowButton';

const GiftVotes: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const starPackages = [
    { stars: 1, votes: 2, priceLabel: '1 STAR' },
    { stars: 5, votes: 12, priceLabel: '5 STARS' },
    { stars: 15, votes: 35, priceLabel: '15 STARS', popular: true },
    { stars: 50, votes: 120, priceLabel: '50 STARS' },
  ];

  if (showConfirmation) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] animate-fadeIn">
        <div className="glassmorphism p-12 text-center max-w-lg border-neon">
          <div className="w-20 h-20 bg-neon/10 border-2 border-neon rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <svg className="w-10 h-10 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-neon mb-4 tracking-tighter">DONE</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed mb-8">
            “If your transaction is not applied within 24 hours, please DM us.”
          </p>
          <a href="https://t.me/oryn179" target="_blank" rel="noopener noreferrer">
            <GlowButton className="w-full">
              INBOX ADMIN
            </GlowButton>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black font-mono tracking-tighter mb-4 uppercase">
          GIFT <span className="text-neon neon-glow">VOTES</span>
        </p>
        <p className="text-gray-400 font-mono text-xs tracking-[0.2em] max-w-md mx-auto">
          Support your favorite editors by gifting extra votes through Telegram Stars
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {starPackages.map((pkg) => (
          <GlassCard key={pkg.stars} className={`text-center py-10 ${pkg.popular ? 'border-neon scale-105' : ''}`}>
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon text-black px-3 py-1 text-[10px] font-bold tracking-widest rounded-full uppercase">
                Best Value
              </span>
            )}
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-2xl font-black text-white mb-1 font-mono">{pkg.votes} VOTES</h3>
            <p className="text-neon font-mono text-sm tracking-widest mb-8">{pkg.priceLabel}</p>
            <GlowButton 
              variant={pkg.popular ? 'primary' : 'outline'} 
              className="w-full text-xs"
              onClick={() => setShowConfirmation(true)}
            >
              GET NOW
            </GlowButton>
          </GlassCard>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <GlassCard title="HOW TO PAY" className="bg-neon/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
            <div className="flex-1 space-y-4">
              <p className="text-lg text-gray-200 font-light">
                “Pay Here <span className="text-neon font-bold">@Oryn179</span> – send the stars you want”
              </p>
              <ul className="text-xs text-gray-500 font-mono space-y-2 uppercase tracking-widest">
                <li>• Instant transaction processing</li>
                <li>• 24/7 Admin support available</li>
                <li>• Guaranteed vote delivery</li>
              </ul>
            </div>
            <a href="https://t.me/oryn179" target="_blank" rel="noopener noreferrer">
              <GlowButton className="whitespace-nowrap flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.257.257-.527.257l.215-3.048 5.548-5.013c.242-.214-.054-.334-.376-.12L10.4 12.185l-2.95-.922c-.64-.204-.653-.64.135-.945l11.507-4.435c.532-.2.996.11.802.938z"/>
                </svg>
                <span>OPEN TELEGRAM</span>
              </GlowButton>
            </a>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default GiftVotes;
