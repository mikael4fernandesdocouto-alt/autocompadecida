import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

type Mode = "login" | "register";

export function LoginPage() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<Mode>("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async () => {
    setError("");
    if (!username.trim() || !password.trim()) {
      setError("Preencha todos os campos.");
      return;
    }
    if (mode === "register" && password !== confirmPassword) {
      setError("Senhas não conferem.");
      return;
    }
    setBusy(true);
    try {
      if (mode === "login") {
        const err = await login(username.trim(), password);
        if (err) setError(err);
      } else {
        const err = await register(username.trim(), password);
        if (err) setError(err);
        else {
          setMode("login");
          setPassword("");
          setConfirmPassword("");
          setError("Conta criada! Faça login.");
        }
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070707] px-4">
      <div className="w-full max-w-sm rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-white">Teatro Teleprompter</h1>
          <p className="mt-1 text-sm text-zinc-400">
            {mode === "login" ? "Entre na sua conta" : "Crie uma nova conta"}
          </p>
        </div>

        {error && (
          <p className="mb-4 rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
            {error}
          </p>
        )}

        <div className="space-y-3">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-500">Usuário</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Seu nome de usuário"
              className="mt-1 w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-500">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              className="mt-1 w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>
          {mode === "register" && (
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-zinc-500">Confirmar senha</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repita a senha"
                className="mt-1 w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
            </div>
          )}
          <button
            onClick={handleSubmit}
            disabled={busy}
            className="w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-emerald-400 disabled:opacity-50"
          >
            {busy ? "Aguarde..." : mode === "login" ? "Entrar" : "Criar conta"}
          </button>
        </div>

        <div className="mt-6 text-center">
          {mode === "login" ? (
            <p className="text-xs text-zinc-500">
              Não tem conta?{" "}
              <button onClick={() => { setMode("register"); setError(""); }} className="text-emerald-400 hover:underline">
                Cadastre-se
              </button>
            </p>
          ) : (
            <p className="text-xs text-zinc-500">
              Já tem conta?{" "}
              <button onClick={() => { setMode("login"); setError(""); }} className="text-emerald-400 hover:underline">
                Faça login
              </button>
            </p>
          )}
        </div>

        <div className="mt-4 border-t border-zinc-800 pt-4 text-center">
          <p className="text-[10px] text-zinc-600">
            Admin: usuário <span className="text-zinc-400">admin000</span> senha <span className="text-zinc-400">000</span>
          </p>
        </div>
      </div>
    </main>
  );
}
