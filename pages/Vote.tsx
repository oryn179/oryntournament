
import React, { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import GlowButton from '../components/GlowButton';
import { Editor, User } from '../types';

const CLIENT_ID = 'Ov23li0p73NXvUGvyU1Z';

const Vote: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editors, setEditors] = useState<Editor[]>([
    { id: '1', name: 'Zade Edits', avatar: 'https://picsum.photos/seed/zade/200', votes: 124 },
    { id: '2', name: 'Vortex AMV', avatar: 'https://picsum.photos/seed/vortex/200', votes: 89 },
    { id: '3', name: 'Neon Samurai', avatar: 'https://picsum.photos/seed/samurai/200', votes: 256 },
    { id: '4', name: 'Pixel Ghost', avatar: 'https://picsum.photos/seed/ghost/200', votes: 45 },
  ]);
  const [votedId, setVotedId] = useState<string | null>(null);

  useEffect(() => {
    // Check local storage for existing session
    const savedUser = localStorage.getItem('oryn_user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      setVotedId(parsed.votedFor || null);
    }

    // Handle OAuth redirect simulation
    // We check both search params and hash params as GitHub might append 'code' 
    // before the hash depending on the server config.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // In a real app, you'd exchange this code for a token on the server.
      // Here we simulate a successful login for the UI.
      handleFakeLogin();
      // Clean up the URL to remove the code parameter
      const cleanUrl = window.location.origin + window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  const handleFakeLogin = () => {
    const fakeUser: User = {
      username: 'GitHubUser_' + Math.floor(Math.random() * 9999),
      githubId: 'gh_' + Math.random().toString(36).substring(2, 11),
      role: 'user'
    };
    setUser(fakeUser);
    localStorage.setItem('oryn_user', JSON.stringify(fakeUser));
  };

  const handleGitHubLogin = () => {
    // Determine redirect URI. For Cloudflare Pages, we redirect back to the root or vote page.
    // GitHub will return here with a ?code= parameter.
    const redirectUri = window.location.origin + window.location.pathname;
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user:email`;
    
    // Explicitly trigger GitHub authorization screen
    window.location.href = authUrl;
  };

  const handleVote = (editorId: string) => {
    if (!user) return;
    if (votedId) return;

    const updatedEditors = editors.map(e => 
      e.id === editorId ? { ...e, votes: e.votes + 1 } : e
    );
    setEditors(updatedEditors);
    setVotedId(editorId);

    const updatedUser = { ...user, votedFor: editorId };
    setUser(updatedUser);
    localStorage.setItem('oryn_user', JSON.stringify(updatedUser));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-mono tracking-tighter mb-4">
          TOURNAMENT <span className="text-neon">VOTING</span>
        </h2>
        <div className="h-1 w-24 bg-neon mx-auto mb-8 shadow-[0_0_10px_#39FF14]"></div>
        
        {!user ? (
          <GlassCard className="max-w-md mx-auto text-center py-8">
            <p className="text-gray-400 mb-6 font-mono text-sm uppercase tracking-widest">
              IDENTITY VERIFICATION REQUIRED
            </p>
            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
              Sign in with GitHub to verify you are a real editor. One account, one vote.
            </p>
            <GlowButton onClick={handleGitHubLogin} className="flex items-center justify-center space-x-3 mx-auto px-8">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>SIGN IN WITH GITHUB</span>
            </GlowButton>
          </GlassCard>
        ) : (
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex items-center space-x-3 glassmorphism px-6 py-3 border-neon/50">
              <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
              <span className="text-neon font-mono text-xs tracking-[0.3em]">AUTHENTICATED: {user.username.toUpperCase()}</span>
            </div>
            {votedId && (
              <p className="text-neon/70 font-mono text-[10px] tracking-widest animate-pulse uppercase">Transaction Recorded | Voting Locked</p>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {editors.map((editor) => (
          <GlassCard key={editor.id} className={`flex flex-col items-center p-8 transition-all duration-500 ${votedId === editor.id ? 'border-neon ring-1 ring-neon ring-opacity-50 scale-105 shadow-[0_0_30px_rgba(57,255,20,0.2)]' : 'hover:border-neon/40'}`}>
            <div className="relative mb-6">
              <img src={editor.avatar} alt={editor.name} className={`w-24 h-24 rounded-full border-2 border-neon/30 transition-all duration-500 ${votedId === editor.id ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0'}`} />
              {votedId === editor.id && (
                <div className="absolute -bottom-2 -right-2 bg-neon text-black rounded-full p-1 shadow-lg animate-bounce">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono tracking-tight">{editor.name}</h3>
            <div className="text-neon font-mono text-lg mb-6 flex items-baseline space-x-2">
              <span className="text-2xl font-black">{editor.votes}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">VOTES</span>
            </div>
            
            <GlowButton 
              variant={votedId === editor.id ? 'primary' : 'outline'}
              disabled={!!votedId || !user}
              onClick={() => handleVote(editor.id)}
              className="w-full text-xs font-bold"
            >
              {votedId === editor.id ? 'CONFIRMED' : votedId ? 'LOCKED' : user ? 'CAST VOTE' : 'LOGIN TO VOTE'}
            </GlowButton>
          </GlassCard>
        ))}
      </div>
      
      <div className="text-center text-gray-700 font-mono text-[9px] tracking-[0.5em] uppercase pt-12">
        Protected by Oryn Cryptographic Verification
      </div>
    </div>
  );
};

export default Vote;
