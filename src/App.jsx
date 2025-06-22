import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Calendar, DollarSign, Users, BarChart3, Clock, Star, ArrowRight } from 'lucide-react'
import logo from './assets/Logopersonalcoach.png'
import './App.css'

function App() {
  const [hoveredPlan, setHoveredPlan] = useState(null)
  const pricingSectionRef = useRef(null)

  const features = [
    {
      icon: DollarSign,
      title: "Gestão Financeira",
      description: "Controle completo de receitas, despesas e relatórios financeiros detalhados"
    },
    {
      icon: Clock,
      title: "Gestão de Frequência",
      description: "Sistema de check-in inteligente para acompanhar a presença dos seus alunos"
    },
    {
      icon: Calendar,
      title: "Gestão de Calendário",
      description: "Agendamento de aulas, treinos e consultas de forma organizada"
    },
    {
      icon: Users,
      title: "Gestão de Pacotes",
      description: "Crie e gerencie diferentes planos e pacotes para seus clientes"
    },
    {
      icon: BarChart3,
      title: "Dashboard Completo",
      description: "Visualize métricas importantes e acompanhe o crescimento do seu negócio"
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "29,90",
      students: "até 5 alunos",
      link: "https://www.asaas.com/c/o7adb4n4kni75lq7",
      popular: false,
      features: ["Gestão básica", "Dashboard simples", "Suporte por email"]
    },
    {
      name: "Basic",
      price: "49,90",
      students: "até 10 alunos",
      link: "https://www.asaas.com/c/e7grdpxc8nfaedym",
      popular: false,
      features: ["Todas funcionalidades Starter", "Relatórios avançados", "Suporte prioritário"]
    },
    {
      name: "Profissional",
      price: "69,90",
      students: "até 15 alunos",
      link: "https://www.asaas.com/c/c8aixdbwqqgfiwb6",
      popular: true,
      features: ["Todas funcionalidades Basic", "Integrações avançadas", "Suporte telefônico"]
    },
    {
      name: "Premium",
      price: "79,90",
      students: "até 25 alunos",
      link: "https://www.asaas.com/c/o7443qrouzcwgam7",
      popular: false,
      features: ["Todas funcionalidades Profissional", "API personalizada", "Treinamento incluído"]
    },
    {
      name: "Business",
      price: "89,90",
      students: "até 50 alunos",
      link: "https://www.asaas.com/c/4ne2jtqd15t9o48i",
      popular: false,
      features: ["Todas funcionalidades Premium", "Multi-usuários", "Backup automático"]
    },
    {
      name: "Enterprise",
      price: "119,90",
      students: "mais de 50 alunos",
      link: "https://www.asaas.com/c/cx9i271dr5ccxi60",
      popular: false,
      features: ["Solução completa", "Suporte 24/7", "Customizações ilimitadas"]
    }
  ]

  const scrollToPricing = () => {
    if (pricingSectionRef.current) {
      pricingSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <img src={logo} alt="Personal Coach" className="h-32 w-auto" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sistema de Gestão Completa para 
              <span className="text-orange-500 block">Coaches Esportivos</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transforme sua gestão com nossa plataforma completa. Gerencie alunos, finanças, 
              agendamentos e muito mais em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToPricing}
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Funcionalidades Completas
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar seu negócio de forma profissional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingSectionRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Escolha o Plano Ideal
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Planos flexíveis que crescem com o seu negócio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-orange-500 bg-slate-700/70' : ''
                }`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-orange-500">R${plan.price}</span>
                    <span className="text-slate-300">/mês</span>
                  </div>
                  <CardDescription className="text-slate-300 text-lg font-medium">
                    {plan.students}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-slate-600 hover:bg-orange-500 text-white'
                    }`}
                    onClick={() => window.open(plan.link, '_blank')}
                  >
                    Assinar {plan.name}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já estão usando o Personal Coach 
            para gerenciar seus negócios de forma mais eficiente.
          </p>
          <Button 
            size="lg"
            className="bg-white text-orange-500 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Começar Gratuitamente
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <img src={logo} alt="Personal Coach" className="h-16 w-auto mx-auto mb-4" />
          </div>
          <p className="text-slate-400 mb-4">
            © 2025 Personal Coach. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-sm">
            Sistema de gestão completa para coaches esportivos e personal trainers
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


