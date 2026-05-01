import { useState } from 'react';
import { Lock, User } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo credentials - in production, use proper authentication
    if (username === 'admin' && password === 'studybuddy2024') {
      localStorage.setItem('adminLoggedIn', 'true');
      onLogin();
    } else {
      setError('Invalid credentials. Try admin/studybuddy2024');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">
            <span className="text-primary">PANDAI</span>
            <span className="text-secondary">KIRA</span>
          </h1>
          <p className="text-muted-foreground">Admin Dashboard</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl">Admin Login</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
            <p className="font-semibold mb-1">Demo Credentials:</p>
            <p>Username: admin</p>
            <p>Password: studybuddy2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
