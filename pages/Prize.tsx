
import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GlowButton from '../components/GlowButton';

const Prize: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black font-mono tracking-tighter mb-4 italic">
          THE <span className="text-neon neon-glow uppercase">GRAND PRIZE</span>
        </h2>
        <div className="h-0.5 w-64 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto opacity-50"></div>
      </div>

      {!revealed ? (
        <div className="relative group cursor-pointer" onClick={() => setRevealed(true)}>
          <GlassCard className="w-80 h-[400px] flex items-center justify-center border-neon/50 bg-neon/5 transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(57,255,20,0.3)]">
            <div className="text-center">
              <div className="text-7xl mb-6 animate-pulse">🎁</div>
              <p className="text-neon font-mono tracking-[0.5em] font-bold text-sm uppercase">Click to Reveal</p>
            </div>
            {/* Animated lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-px bg-neon animate-glow-line"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-neon animate-glow-line" style={{animationDelay: '1s'}}></div>
            </div>
          </GlassCard>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {/* Main Prize Card */}
          <GlassCard className="lg:col-span-2 relative overflow-hidden h-[400px] group border-neon">
            <img src="https://picsum.photos/seed/prize-oryn/800/400" alt="Prize" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-4xl font-black text-neon neon-glow mb-2 uppercase tracking-tighter">Ultimate AE Rig</h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed max-w-md">
                The winning editor receives a lifetime license for all Boris FX Sapphire plugins, a custom mechanical macro pad for keyframe control, and a $500 cash prize.
              </p>
            </div>
          </GlassCard>

          {/* Runners Up */}
          <div className="space-y-6">
            <GlassCard title="2ND PLACE" className="border-gray-500">
               <h4 className="text-xl font-bold text-white mb-2 font-mono">$250 CASH</h4>
               <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Plus premium asset pack</p>
            </GlassCard>
            <GlassCard title="3RD PLACE" className="border-orange-900/40">
               <h4 className="text-xl font-bold text-white mb-2 font-mono">$100 CASH</h4>
               <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Plus 1yr editing sub</p>
            </GlassCard>
            <GlowButton onClick={() => setRevealed(false)} variant="outline" className="w-full text-xs">
              RE-LOCK PRIZE
            </GlowButton>
          </div>
        </div>
      )}
      
      <p className="mt-16 text-gray-600 font-mono text-[10px] tracking-[0.4em] uppercase">
        * Terms and conditions apply. Winners announced live on stream.
      </p>
    </div>
  );
};

export default Prize;
