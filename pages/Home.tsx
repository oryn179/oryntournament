
import React, { useState, useEffect } from 'react';
import GlowButton from '../components/GlowButton';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: end of current month
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 1, 0);
    targetDate.setHours(23, 59, 59);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      {/* Hero Section */}
      <div className="mb-12 animate-fadeIn">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter">
          ORYN <span className="text-neon neon-glow">SERVER</span>
        </h1>
        <p className="text-xl md:text-2xl font-mono text-gray-400 tracking-[0.3em] uppercase">
          Editors Tournament Platform
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-4 gap-4 md:gap-8 mb-16">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MINS', value: timeLeft.minutes },
          { label: 'SECS', value: timeLeft.seconds },
        ].map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="glassmorphism w-16 h-16 md:w-24 md:h-24 flex items-center justify-center border-neon/30">
              <span className="text-2xl md:text-4xl font-mono text-neon font-bold">{unit.value.toString().padStart(2, '0')}</span>
            </div>
            <span className="mt-2 text-[10px] md:text-xs font-mono text-gray-500 tracking-widest">{unit.label}</span>
          </div>
        ))}
      </div>

      {/* Registration CTA */}
      <GlassCard className="max-w-2xl w-full border-neon/20 py-10" title="PARTICIPATE">
        <p className="text-lg md:text-xl font-light text-gray-300 mb-8 italic">
          “Want to register and you want to see your edit and want to win?”
        </p>
        <div className="flex justify-center">
          <a href="https://forms.gle/UWnLvPZRE4Q2kKS96" target="_blank" rel="noopener noreferrer">
            <GlowButton className="text-lg">
              REGISTER HERE
            </GlowButton>
          </a>
        </div>
      </GlassCard>

      {/* Decorative Glow elements */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-20 blur-sm"></div>
    </div>
  );
};

export default Home;
