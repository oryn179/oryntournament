
import React, { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import GlowButton from '../components/GlowButton';
import { User, Editor, GiftVote, Rating } from '../types';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Mock Admin Data
  const [stats, setStats] = useState({
    totalUsers: 1450,
    totalVotes: 3240,
    pendingStarRequests: 12
  });

  const [users, setUsers] = useState<User[]>([
    { username: 'Editor_Pro', githubId: 'gh_8123', role: 'user', votedFor: '1' },
    { username: 'AE_King', githubId: 'gh_9901', role: 'user', votedFor: '3' },
    { username: 'Vision_FX', githubId: 'gh_2234', role: 'user' },
  ]);

  const [giftVotes, setGiftVotes] = useState<GiftVote[]>([
    { id: '1', username: 'Editor_Pro', stars: 15, votesAdded: 35, timestamp: '2023-10-24 14:20' },
    { id: '2', username: 'AE_King', stars: 5, votesAdded: 12, timestamp: '2023-10-24 16:45' },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded secret for demo - should be handled by robust backend auth
    if (password === 'oryn_admin_2024_secure') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('ACCESS DENIED: INVALID FRAGMENT');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <GlassCard className="max-w-sm w-full p-8 border-red-900/40">
          <h2 className="text-xl font-black text-red-500 mb-6 font-mono tracking-tighter uppercase">Admin Authentication</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="MASTER KEY..."
              className="w-full bg-black/60 border border-red-500/20 rounded-sm p-3 text-red-500 font-mono text-sm focus:outline-none focus:border-red-500/60"
            />
            {error && <p className="text-[10px] text-red-500 font-mono animate-pulse">{error}</p>}
            <GlowButton type="submit" className="w-full bg-red-900/20 border-red-900 hover:shadow-red-900/20 text-red-500">
              DECRYPT
            </GlowButton>
          </form>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 animate-fadeIn">
      <div className="flex justify-between items-center mb-12 border-b border-neon/20 pb-4">
        <h1 className="text-3xl font-black font-mono tracking-tighter uppercase">
          ADMIN <span className="text-neon neon-glow">COMMAND CENTER</span>
        </h1>
        <button onClick={() => setIsAuthenticated(false)} className="text-[10px] text-gray-500 hover:text-red-500 font-mono uppercase tracking-widest transition-colors">
          Exit Secure Mode
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <GlassCard title="TOTAL USERS" className="bg-neon/5">
          <div className="text-4xl font-black font-mono text-neon">{stats.totalUsers}</div>
        </GlassCard>
        <GlassCard title="LIVE VOTES" className="bg-neon/5">
          <div className="text-4xl font-black font-mono text-neon">{stats.totalVotes}</div>
        </GlassCard>
        <GlassCard title="PENDING STARS" className="bg-red-900/5 border-red-900/20">
          <div className="text-4xl font-black font-mono text-red-500">{stats.pendingStarRequests}</div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Management */}
        <GlassCard title="LOGGED IN USERS">
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-xs">
              <thead className="text-gray-500 border-b border-neon/10">
                <tr>
                  <th className="text-left pb-4 uppercase tracking-widest">Username</th>
                  <th className="text-left pb-4 uppercase tracking-widest">Voted For</th>
                  <th className="text-right pb-4 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neon/5">
                {users.map((user) => (
                  <tr key={user.githubId} className="group">
                    <td className="py-4 text-white uppercase">{user.username}</td>
                    <td className="py-4 text-neon">{user.votedFor || '-'}</td>
                    <td className="py-4 text-right">
                      <button className="text-red-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">REVOKE</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Gift Vote Log */}
        <GlassCard title="GIFT VOTE TRANSACTIONS">
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-xs">
              <thead className="text-gray-500 border-b border-neon/10">
                <tr>
                  <th className="text-left pb-4 uppercase tracking-widest">User</th>
                  <th className="text-left pb-4 uppercase tracking-widest">Stars</th>
                  <th className="text-left pb-4 uppercase tracking-widest">Time</th>
                  <th className="text-right pb-4 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neon/5">
                {giftVotes.map((log) => (
                  <tr key={log.id}>
                    <td className="py-4 text-white uppercase">{log.username}</td>
                    <td className="py-4 text-neon">⭐ {log.stars}</td>
                    <td className="py-4 text-gray-500">{log.timestamp}</td>
                    <td className="py-4 text-right">
                      <span className="bg-neon/10 text-neon px-2 py-0.5 rounded-full text-[8px] border border-neon/20 font-bold uppercase">Applied</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
      
      <div className="mt-8">
        <GlassCard title="SYSTEM LOGS" className="opacity-50">
           <pre className="text-[10px] text-gray-500 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
             [SECURE_SHELL] 2023-10-24 16:55:22 - Connection established from IP 192.168.1.1
             [AUTH] GitHub OAuth Handshake successful for Client_ID: Ov23li0p73...
             [DATABASE] Committed 4 new votes to shard_04
             [CLEANUP] Purged 142 session tokens (TTL expired)
           </pre>
        </GlassCard>
      </div>
    </div>
  );
};

export default Admin;
