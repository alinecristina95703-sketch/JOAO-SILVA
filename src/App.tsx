import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Utensils, 
  ChevronRight, 
  Camera, 
  Globe, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  Play,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const destinations = [
  {
    id: 'england',
    name: 'Inglaterra',
    title: 'A Majestade Britânica',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop',
    points: ['Big Ben', 'London Eye', 'Palácio de Buckingham', 'Stonehenge'],
    gastronomy: 'Fish & Chips, Afternoon Tea, Sunday Roast',
    foodImage: 'https://images.unsplash.com/photo-1579206239185-30691746400c?q=80&w=2070&auto=format&fit=crop',
    color: 'from-blue-900/40 to-black',
  },
  {
    id: 'portugal',
    name: 'Portugal',
    title: 'Entre Fados e Azulejos',
    image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=2070&auto=format&fit=crop',
    points: ['Torre de Belém', 'Mosteiro dos Jerónimos', 'Vale do Douro', 'Pena Palace'],
    gastronomy: 'Bacalhau à Brás, Pastel de Nata, Arroz de Marisco',
    foodImage: 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?q=80&w=2070&auto=format&fit=crop',
    color: 'from-red-900/40 to-black',
  },
  {
    id: 'italy',
    name: 'Itália',
    title: 'Berço da Arte e do Gosto',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop',
    points: ['Coliseu de Roma', 'Canais de Veneza', 'Duomo de Milão', 'Costa Amalfitana'],
    gastronomy: 'Pasta Carbonara, Pizza Napoletana, Gelato Artigianale',
    foodImage: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=2070&auto=format&fit=crop',
    color: 'from-emerald-900/40 to-black',
  },
  {
    id: 'dublin',
    name: 'Dublin',
    title: 'O Coração Esmeralda',
    image: 'https://images.unsplash.com/photo-1549918838-067588824228?q=80&w=2070&auto=format&fit=crop',
    points: ['Trinity College', 'Guinness Storehouse', 'Temple Bar', 'Phoenix Park'],
    gastronomy: 'Irish Stew, Boxty, Seafood Chowder',
    foodImage: 'https://images.unsplash.com/photo-1597075095400-3669c3a30c80?q=80&w=2070&auto=format&fit=crop',
    color: 'from-green-900/40 to-black',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(destinations[0].id);

  const currentDest = destinations.find(d => d.id === activeTab) || destinations[0];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-gold-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Globe className="text-black w-5 h-5" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter uppercase italic">Alitur</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-white/70">
          <a href="#destinations" className="hover:text-white transition-colors">Roteiros</a>
          <a href="#gastronomy" className="hover:text-white transition-colors">Gastronomia</a>
          <a href="#video" className="hover:text-white transition-colors">Experiência</a>
          <a href="#contact" className="hover:text-white transition-colors">Contato</a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all">
          Reservar Agora
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop"
            alt="European Street"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-white/80 mb-6"
          >
            A Sua Jornada Europeia Começa Aqui
          </motion.p>
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl md:text-9xl font-serif mb-8 leading-[0.9] tracking-tighter"
          >
            Explore o <br /> <span className="italic">Inesquecível</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <button className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:scale-105 transition-all">
              Ver Roteiros <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/30 backdrop-blur-sm font-bold uppercase text-sm tracking-widest hover:bg-white/10 transition-all">
              Falar com Consultor
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 to-white" />
        </motion.div>
      </header>

      {/* Destinations Section */}
      <section id="destinations" className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 block">Destinos Exclusivos</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Escolha o seu próximo <span className="italic">capítulo</span>.</h2>
          </div>
          <p className="text-white/60 max-w-sm text-lg leading-relaxed">
            Roteiros meticulosamente planejados para quem busca o extraordinário em cada parada.
          </p>
        </div>

        {/* Tab Icons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {destinations.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setActiveTab(dest.id)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === dest.id 
                ? 'bg-white text-black scale-105' 
                : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDest.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden group border border-white/10"
            >
              <img 
                src={currentDest.image} 
                alt={currentDest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${currentDest.color}`} />
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-4xl md:text-6xl font-serif mb-4">{currentDest.title}</h3>
                <div className="flex items-center gap-2 text-white/80 font-medium tracking-wide">
                  <MapPin className="w-4 h-4" /> 
                  <span>{currentDest.name}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentDest.id}-info`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-12 py-8"
            >
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-2">
                  <Camera className="w-4 h-4" /> Pontos Turísticos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentDest.points.map((point, i) => (
                    <motion.div 
                      key={point}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-default"
                    >
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <span className="text-lg font-medium text-white/90">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-2">
                  <Utensils className="w-4 h-4" /> Experiência Gastronômica
                </h4>
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 group">
                  <img 
                    src={currentDest.foodImage} 
                    alt="Gastronomia" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-end p-8">
                    <p className="text-2xl font-serif italic text-white drop-shadow-lg">
                      {currentDest.gastronomy}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Experience Video Section */}
      <section id="video" className="py-32 bg-white text-black overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4 block">Experiência Imersiva</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Sinta a <span className="italic">atmosfera</span> antes mesmo de partir.</h2>
            <p className="text-black/60 text-xl leading-relaxed mb-10">
              Assista ao nosso curta-metragem sobre as maravilhas da Europa e descubra por que a Alitur é a escolha definitiva de viajantes exigentes.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-serif">15k+</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Viajantes Felizes</p>
              </div>
              <div>
                <p className="text-4xl font-serif">12</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Anos de Excelência</p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative w-full aspect-video md:aspect-square md:w-[500px] rounded-[40px] overflow-hidden shadow-2xl bg-black group"
            >
               {/* Video Placeholder */}
               <img 
                src="https://images.unsplash.com/photo-1549918838-067588824228?q=80&w=2070&auto=format&fit=crop" 
                alt="Video Preview"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                   <Play className="text-black fill-current ml-1" />
                 </button>
               </div>
               <div className="absolute bottom-10 left-10 text-white pointer-events-none">
                 <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Assista agora</p>
                 <p className="text-2xl font-serif">A Essência de Dublin</p>
               </div>
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-black/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-black/5 rounded-full" />
          </div>
        </div>
      </section>

      {/* Testimonials or Quotes */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
           <QuoteIcon className="w-12 h-12 text-white/20 mx-auto mb-10" />
           <p className="text-3xl md:text-5xl font-serif leading-snug italic mb-12">
            "A Alitur transformou nossa viagem à Itália em um sonho cinematográfico. Cada detalhe, da gastronomia aos hotéis, foi impecável."
           </p>
           <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Client" referrerPolicy="no-referrer" />
             </div>
             <div className="text-left">
               <p className="font-bold uppercase tracking-widest text-sm">Ricardo Mendes</p>
               <p className="text-xs text-white/40">Empresário, São Paulo</p>
             </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
            <div>
              <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tight">Vamos<br /><span className="italic text-white/40">planejar?</span></h2>
              <div className="space-y-6">
                <a href="#" className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  +55 (11) 99999-9999
                </a>
                <a href="#" className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  contato@alitur.com.br
                </a>
                <div className="flex gap-4 pt-6">
                  <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white text-black transition-all">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white text-black transition-all">
                    <Facebook className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <form className="space-y-8 bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40">Nome completo</label>
                   <input type="text" placeholder="Seu nome" className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-white outline-none transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email</label>
                   <input type="email" placeholder="seu@email.com" className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-white outline-none transition-colors" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-white/40">Destino de Interesse</label>
                 <select className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-white outline-none transition-colors appearance-none cursor-pointer">
                    <option className="bg-black">Inglaterra</option>
                    <option className="bg-black">Portugal</option>
                    <option className="bg-black">Itália</option>
                    <option className="bg-black">Dublin</option>
                    <option className="bg-black">Múltiplos Destinos</option>
                 </select>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-white/40">Mensagem</label>
                 <textarea rows={4} placeholder="Como podemos ajudar no seu roteiro?" className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-white outline-none transition-colors resize-none" />
               </div>
               <button className="w-full bg-white text-black py-6 rounded-full font-bold uppercase tracking-[0.2em] hover:scale-[0.98] transition-transform">
                 Enviar Solicitação
               </button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-white/30 text-xs uppercase tracking-widest gap-6">
            <p>© 2024 Alitur Agência de Viagens. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
            <div className="flex items-center gap-2">
              Projetado com <span className="text-red-500">♥</span> pela Alitur
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuoteIcon(props: any) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H4.017V21H6.017Z" />
    </svg>
  );
}
