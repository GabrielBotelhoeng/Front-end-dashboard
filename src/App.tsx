import React, { useState } from 'react';
import { LogIn, Lock, Mail, Brain, Layout, Users, MessageSquare, Settings, LogOut, Calendar, FileText, BarChart, Clock, Bell } from 'lucide-react';

interface User {
  email: string;
  password: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ email: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Brain className="w-16 h-16 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Bem-vindo!</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            {!showSignUp ? (
              <>
                <div className="space-y-6">
                  <div>
                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="E-mail"
                      required
                    />
                  </div>

                  <button
                    onClick={handleLogin}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-200"
                  >
                    Continuar
                  </button>

                  <div className="text-center">
                    <p className="text-gray-400 text-sm">
                      Não tem uma conta?{' '}
                      <button
                        onClick={() => setShowSignUp(true)}
                        className="text-purple-400 hover:text-purple-300"
                      >
                        Cadastre-se
                      </button>
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-transparent text-gray-400">ou</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-4 rounded-lg border border-gray-600">
                    <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                    Acessar com o Google
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-4 rounded-lg border border-gray-600">
                    <Mail className="h-5 w-5" />
                    Acesso rápido via e-mail
                  </button>
                </div>

                <div className="mt-6 text-xs text-gray-400 text-center">
                  Ao proceder com o Login, você indica que concorda com os{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Termos de Uso
                  </a>{' '}
                  e consente com o tratamento dos dados, nas finalidades descritas na nossa{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Política de Privacidade
                  </a>
                  .
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <button
                  onClick={() => setShowSignUp(false)}
                  className="text-gray-400 hover:text-white mb-4"
                >
                  ← Voltar
                </button>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Nome completo"
                />
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Senha"
                />
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg">
                  Criar conta
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Advocacia.IA</span>
            </div>
          </div>
          <nav className="mt-6">
            <div className="px-4 space-y-2">
              <button className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
                <Layout className="h-5 w-5" />
                Dashboard
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <FileText className="h-5 w-5" />
                Processos
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Calendar className="h-5 w-5" />
                Agenda
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <MessageSquare className="h-5 w-5" />
                Mensagens
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Users className="h-5 w-5" />
                Clientes
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5" />
                Configurações
              </button>
            </div>
          </nav>
          <div className="absolute bottom-0 w-64 p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <LogOut className="h-5 w-5" />
              Sair
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="bg-white shadow">
            <div className="px-8 py-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                  <Bell className="h-6 w-6" />
                </button>
                <div className="h-8 w-8 bg-blue-600 rounded-full text-white flex items-center justify-center">
                  A
                </div>
              </div>
            </div>
          </header>

          <main className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Stats Cards */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-700">Processos Ativos</h3>
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mt-4">127</p>
                <p className="text-sm text-gray-500 mt-2">+8 novos esta semana</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-700">Audiências</h3>
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mt-4">12</p>
                <p className="text-sm text-gray-500 mt-2">Próximos 7 dias</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-700">Clientes</h3>
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mt-4">856</p>
                <p className="text-sm text-gray-500 mt-2">+5% este mês</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-700">Horas Trabalhadas</h3>
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mt-4">164h</p>
                <p className="text-sm text-gray-500 mt-2">Este mês</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Próximas Audiências</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">Audiência de Conciliação</p>
                        <p className="text-sm text-gray-500">Processo nº 1234567-89.2023.8.26.0100</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(2024, 2, 15 + i).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Atividade Recente</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <FileText className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">Petição Protocolada</p>
                        <p className="text-sm text-gray-500">Processo nº 9876543-21.2023.8.26.0100</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(2024, 2, 10 + i).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;