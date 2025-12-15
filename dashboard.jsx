import React, { useState, useContext, createContext } from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  CheckSquare, 
  Database, 
  FileText, 
  Zap, 
  Video, 
  Users, 
  Bell, 
  Menu,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Clock,
  CheckCircle2,
  X,
  Calendar,
  Filter,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Target,
  Award,
  TrendingUp,
  Sun,
  Moon,
  LogOut,
  Layers,
  GitBranch,
  Tag,
  Home,
  ArrowRight,
  Trash2,
  ArrowUpRight,
  ListFilter,
  Palette,
  Type,
  MousePointerClick,
  FormInput,
  Sparkles,
  Command,
  Search,
  ExternalLink,
  MoreHorizontal,
  LayoutGrid,
  List as ListIcon,
  PlayCircle,
  MoreVertical,
  FileQuestion,
  Folder,
  Play
} from 'lucide-react';

// --- THEME CONTEXT ---
const ThemeContext = createContext({ isDarkMode: true });

// --- COMPONENTES UI REUTILIZÁVEIS ---

const GlassCard = ({ children, className = "", onClick }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const baseClasses = isDarkMode 
    ? "border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl" 
    : "border-slate-200 bg-white/60 backdrop-blur-xl shadow-xl shadow-slate-200/50";

  const shineClasses = isDarkMode
    ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
    : "bg-gradient-to-r from-transparent via-slate-400/10 to-transparent";

  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl border ${baseClasses} ${className}`}
    >
      <div className={`absolute top-0 left-0 right-0 h-[1px] ${shineClasses}`} />
      {children}
    </div>
  );
};

// Componente de Badge Padronizado
const StatusBadge = ({ color = 'slate', children, className = "" }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const colors = {
    brand: {
      dark: 'bg-[#FABE19]/10 text-[#FABE19] border-[#FABE19]/20',
      light: 'bg-[#FABE19]/10 text-[#d8a416] border-[#FABE19]/20',
    },
    blue: {
      dark: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      light: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    green: {
      dark: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      light: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    red: {
      dark: 'bg-red-500/10 text-red-400 border-red-500/20',
      light: 'bg-red-50 text-red-700 border-red-200',
    },
    purple: {
      dark: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      light: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    indigo: {
      dark: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      light: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    pink: {
      dark: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      light: 'bg-pink-50 text-pink-700 border-pink-200',
    },
    slate: {
      dark: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
      light: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  };

  const styleClass = isDarkMode ? colors[color]?.dark : colors[color]?.light;

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors duration-300 ${styleClass || colors.slate.dark} ${className}`}>
      {children}
    </span>
  );
};

// Componente de Anel de Progresso (SVG)
const ProgressRing = ({ radius, stroke, progress, color, icon: Icon }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="rotate-[-90deg] transition-all duration-500"
      >
        {/* Background Ring */}
        <circle
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-slate-700/30 opacity-50"
        />
        {/* Progress Ring */}
        <circle
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {/* Icon Centered */}
      <div className={`absolute inset-0 flex items-center justify-center`} style={{ color }}>
        <Icon size={18} />
      </div>
    </div>
  );
};

// Componente de Filtro em Cápsula (Global)
const FilterPill = ({ icon: Icon, label, value, active = false }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <button className={`
      flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200
      ${active 
        ? 'bg-[#FABE19]/10 border-[#FABE19] text-[#FABE19] shadow-[0_0_10px_rgba(250,190,25,0.1)]' 
        : isDarkMode 
          ? 'bg-slate-900/50 border-white/10 text-slate-400 hover:border-white/30 hover:text-white' 
          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
      }
    `}>
      <Icon size={14} className={active ? 'text-[#FABE19]' : 'opacity-70'} />
      <span>{label}</span>
      {value && (
        <>
          <span className="w-[1px] h-3 bg-current opacity-20 mx-1" />
          <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>{value}</span>
        </>
      )}
      <ChevronDown size={12} className="ml-1 opacity-50" />
    </button>
  );
};

// Componente de Tags de Filtro para Gráficos
const ChartActiveFilters = ({ filters }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  if (!filters || filters.length === 0) return null;

  return (
    <div className="flex items-center flex-wrap gap-2">
      <div className={`flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold mr-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
        <ListFilter size={12} />
        <span>Filtrado por:</span>
      </div>

      {filters.map((filter, idx) => (
        <div 
          key={idx}
          className={`
            flex items-center gap-1.5 pl-2 pr-1 py-1 rounded-md border text-[10px] font-medium transition-all group cursor-pointer
            ${isDarkMode 
              ? `bg-slate-900/40 border-white/5 hover:bg-white/5` 
              : `bg-white border-slate-200 hover:bg-slate-50`}
          `}
          style={{ 
            borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : '', 
            borderLeft: `2px solid ${filter.hexColor || 'currentColor'}` 
          }}
        >
           <span className={`${filter.color}`}>{filter.icon}</span>
           <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{filter.label}</span>
           <button className={`
             ml-1 p-0.5 rounded-full opacity-50 group-hover:opacity-100 transition-all
             ${isDarkMode ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-slate-200 hover:text-slate-900'}
           `}>
              <X size={10} />
           </button>
        </div>
      ))}

      <button 
        className={`
          ml-auto text-[10px] px-2 py-1 rounded transition-colors flex items-center gap-1
          ${isDarkMode 
            ? 'text-slate-500 hover:text-red-400 hover:bg-red-400/5' 
            : 'text-slate-400 hover:text-red-500 hover:bg-red-50'}
        `}
      >
        <Trash2 size={10} />
        <span>Limpar</span>
      </button>
    </div>
  );
};

// --- DADOS MOCKADOS ---

const DASHBOARD_KPIS = [
  { 
    id: 1,
    type: 'count',
    label: 'Questões Respondidas', 
    value: '223', 
    trend: '+12 essa semana',
    trendUp: true,
    icon: HelpCircle,
    color: '#3b82f6', 
    bg: 'bg-blue-500'
  },
  { 
    id: 2,
    type: 'percent',
    label: 'Acertos em Revisões', 
    value: '73.6%', 
    rawValue: 73.6,
    sub: 'Média global', 
    icon: Target,
    color: '#FABE19', 
    bg: 'bg-[#FABE19]'
  },
  { 
    id: 3,
    type: 'percent',
    label: 'Acertos em Provas', 
    value: '84.0%', 
    rawValue: 84.0,
    sub: 'Média global', 
    icon: Award,
    color: '#a855f7', 
    bg: 'bg-purple-500'
  },
  { 
    id: 4,
    type: 'target',
    label: 'Meta do Mês', 
    value: '0%', 
    sub: 'Nenhuma meta definida', 
    icon: TrendingUp,
    color: '#10b981', 
    bg: 'bg-emerald-500'
  },
];

const SUBJECT_ANALYSIS = [
  { 
    id: 1, 
    name: 'Cirurgia Geral', 
    revisoes: 0, 
    acertos: '-', 
    questoes: 91, 
    ultima: '-',
    subtopics: [
      { name: 'Cirurgia Abdominal', revisoes: 0, acertos: '-', questoes: 41, ultima: '-' },
      { name: 'Trauma e Emergência', revisoes: 0, acertos: '-', questoes: 50, ultima: '-' },
    ]
  },
  { id: 2, name: 'Clínica Médica', revisoes: 14, acertos: '67.3%', questoes: 39, ultima: '62.1%' },
  { id: 3, name: 'Ginecologia e Obstetrícia', revisoes: 10, acertos: '73.4%', questoes: 41, ultima: '72.4%' },
  { id: 4, name: 'Pediatria', revisoes: 4, acertos: '73.1%', questoes: 52, ultima: '73.1%' },
];

const WEEK_DAYS = [
  { day: '08', name: 'Segunda', active: false },
  { day: '09', name: 'Terça', active: true, tasks: [
    { title: 'Clínica Médica', subtitle: 'Endocrinologia', progress: 62, time: '11 min', done: 18, total: 29, color: 'blue' }
  ]},
  { day: '10', name: 'Quarta', active: false },
  { day: '11', name: 'Quinta', active: false },
  { day: '12', name: 'Sexta', active: false, tasks: [
    { title: 'Clínica Médica', subtitle: 'Nefrologia', progress: 66, time: '20 min', done: 20, total: 30, color: 'amber' }
  ]},
  { day: '13', name: 'Sábado', active: false },
  { day: '14', name: 'Domingo', active: false },
];

const MONTH_DATA = Array.from({ length: 35 }, (_, i) => {
  const day = i + 1;
  if (day > 31) return null;
  let tasks = [];
  if (day === 9) tasks = [{ type: 'revisao', color: 'blue' }, { type: 'prova', color: 'amber' }];
  if (day === 12) tasks = [{ type: 'revisao', color: 'amber' }];
  if (day === 15) tasks = [{ type: 'simulado', color: 'purple' }];
  if (day === 22) tasks = [{ type: 'revisao', color: 'blue' }, { type: 'revisao', color: 'emerald' }];
  return { day, tasks, current: day === 9 };
});

const MEETINGS_DATA = [
  {
    id: 1,
    title: 'Mentoria Individual: Planejamento R1',
    date: 'Hoje, 14:00 - 15:00',
    participants: ['Dr. Vinicius', 'Você'],
    type: 'Individual',
    status: 'confirmada',
    link: '#'
  },
  {
    id: 2,
    title: 'Revisão de Casos Clínicos: Cardiologia',
    date: 'Amanhã, 19:00 - 20:30',
    participants: ['Dra. Ana', 'Grupo A', '+12'],
    type: 'Grupo',
    status: 'confirmada',
    link: '#'
  },
  {
    id: 3,
    title: 'Tira-dúvidas: Cirurgia Geral',
    date: '15 dez, 10:00 - 11:30',
    participants: ['Dr. Carlos', 'Grupo B'],
    type: 'Grupo',
    status: 'pendente',
    link: '#'
  }
];

const LIVES_DATA = [
  { id: 1, title: 'Atualizações em Sepsis 2025', date: 'Hoje, 20:00', author: 'Dr. Vinicius', status: 'Ao Vivo em breve', thumbnail: 'blue' },
  { id: 2, title: 'ECG para Residentes', date: '14 dez, 19:00', author: 'Dra. Ana', status: 'Agendada', thumbnail: 'purple' },
  { id: 3, title: 'Manejo de Via Aérea Difícil', date: '10 dez, 20:00', author: 'Dr. Carlos', status: 'Gravada', thumbnail: 'emerald' },
];

const QUESTION_BANK_DATA = [
  { id: 1, title: 'HU-UFS 2022 - VUNESP', type: 'Prova Completa', created: '12 dez 2025', questionsTotal: 50, questionsDone: 0, progress: 0, correct: 0, score: null },
  { id: 2, title: 'HC-FMRP 2018 - FEPESE', type: 'Prova Completa', created: '09 dez 2025', questionsTotal: 50, questionsDone: 1, progress: 2, correct: 0, score: 0 },
  { id: 3, title: 'HUWC-UFC 2019 - FMUSP', type: 'Prova Completa', created: '07 dez 2025', questionsTotal: 50, questionsDone: 2, progress: 4, correct: 0, score: 0 },
  { id: 4, title: 'HCPA 2022 - IADES', type: 'Prova Completa', created: '23 nov 2025', questionsTotal: 50, questionsDone: 2, progress: 4, correct: 0, score: 0 },
  { id: 5, title: 'NOVA', type: 'Lista Customizada', created: '22 nov 2025', questionsTotal: 50, questionsDone: 41, progress: 82, correct: 10, score: 24.39 },
];

const INSTITUTION_EXAMS_DATA = [
  {
    id: 'inst1',
    name: 'HC-FMRP',
    state: 'BR',
    exams: [
      { id: 1, title: 'Residência Médica R+ - HC-FMRP', year: '2018', board: 'FEPESE', questions: 50, progress: 2, status: 'Em andamento' },
      { id: 2, title: 'Residência Médica R1 - HC-FMRP', year: '2018', board: 'FEPESE', questions: 50, progress: 0, status: 'Não iniciado' },
    ]
  },
  {
    id: 'inst2',
    name: 'HC-FMUSP',
    state: 'SP',
    exams: [
      { id: 3, title: 'Residência Médica R+ - HC-FMUSP', year: '2020', board: 'CESPE', questions: 50, progress: 0, status: 'Não iniciado' },
      { id: 4, title: 'Residência Médica R1 - HC-FMUSP', year: '2021', board: 'SUS', questions: 50, progress: 100, status: 'Concluída' },
    ]
  }
];

const WEEKDAY_HEADERS = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

// --- COMPONENTE PRINCIPAL ---

const App = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [plannerView, setPlannerView] = useState('semanal');
  const [questionView, setQuestionView] = useState('list'); 
  const [examView, setExamView] = useState('list'); 
  const [expandedRows, setExpandedRows] = useState({ 1: true });
  const [expandedInstitutions, setExpandedInstitutions] = useState({ 'inst1': true, 'inst2': true }); 
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = {
    bg: isDarkMode ? 'bg-[#05050f]' : 'bg-slate-50',
    text: {
      primary: isDarkMode ? 'text-white' : 'text-slate-900',
      secondary: isDarkMode ? 'text-slate-400' : 'text-slate-500',
      accent: isDarkMode ? 'text-slate-200' : 'text-slate-700',
      muted: isDarkMode ? 'text-slate-500' : 'text-slate-400',
    },
    input: isDarkMode 
      ? 'bg-slate-950/50 border-white/10 text-slate-300 hover:border-white/20' 
      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm',
    itemHover: isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-100',
    divider: isDarkMode ? 'divide-white/5' : 'divide-slate-200',
    border: isDarkMode ? 'border-white/5' : 'border-slate-200',
  };

  const toggleRow = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleInstitution = (id) => {
    setExpandedInstitutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'System Design', icon: Palette },
    { name: 'Cronograma', icon: CalendarDays },
    { name: 'Planner', icon: CheckSquare },
    { name: 'Banco de Questões', icon: Database },
    { name: 'Provas na Íntegra', icon: FileText },
    { name: 'Flashcards', icon: Zap },
    { name: 'Lives', icon: Video },
    { name: 'Reuniões', icon: Users },
  ];

  // --- RENDER FUNCTIONS (RESTAURADAS E COMPLETAS) ---

  const renderDashboard = () => (
    <div className="space-y-6 pb-6">
      <div className="mb-2">
        <h1 className={`text-3xl font-bold ${theme.text.primary} tracking-tight mb-1`}>Dashboard</h1>
        <p className={`text-sm ${theme.text.secondary}`}>Acompanhe seu desempenho e evolução nos estudos</p>
      </div>

      <div className="flex flex-col gap-3">
        <p className={`text-xs font-semibold uppercase tracking-wider ${theme.text.muted} ml-1`}>Filtros Globais</p>
        <div className="flex flex-wrap items-center gap-3">
          <FilterPill icon={Calendar} label="Período" value="Últimos 30 dias" active />
          <div className={`w-[1px] h-6 ${isDarkMode ? 'bg-white/10' : 'bg-slate-300'} hidden md:block`} />
          <FilterPill icon={Tag} label="Categoria" value="Cirurgia Geral" />
          <FilterPill icon={GitBranch} label="Subcategoria" />
          <FilterPill icon={Layers} label="Grupo" />
          <button className={`ml-auto px-3 py-2 text-xs font-medium transition-colors rounded-lg ${isDarkMode ? 'text-slate-500 hover:text-white hover:bg-white/5' : 'text-slate-400 hover:text-red-500 hover:bg-red-50'}`}>
            Limpar Filtros
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {DASHBOARD_KPIS.map((kpi) => (
          <GlassCard key={kpi.id} className={`p-0 overflow-hidden relative group ${theme.itemHover}`}>
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="p-5 h-32 flex flex-col justify-between relative z-10">
               <div className="flex justify-between items-start">
                  <p className={`${theme.text.secondary} text-xs font-semibold uppercase tracking-wider`}>{kpi.label}</p>
                  {kpi.type === 'count' && (<div className={`p-1.5 rounded-lg bg-blue-500/10 text-blue-500`}><kpi.icon size={16} /></div>)}
                  {kpi.type === 'target' && (<div className={`p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500`}><kpi.icon size={16} /></div>)}
               </div>
               <div className="flex items-end justify-between">
                  <div>
                    <h3 className={`text-3xl font-bold ${theme.text.primary} tracking-tight leading-none mb-1`}>{kpi.value}</h3>
                    {kpi.type === 'count' && (<div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium"><ArrowUpRight size={10} /><span>{kpi.trend}</span></div>)}
                    {(kpi.type === 'percent' || kpi.type === 'target') && (<p className={`text-[10px] font-medium ${theme.text.muted}`}>{kpi.sub}</p>)}
                  </div>
                  {kpi.type === 'percent' && (<div className="shrink-0"><ProgressRing radius={26} stroke={4} progress={kpi.rawValue} color={kpi.color} icon={kpi.icon} /></div>)}
                  {kpi.type === 'target' && (<div className="w-16 h-1.5 bg-slate-800 rounded-full mb-2 overflow-hidden"><div className="h-full bg-emerald-500 w-[5%] rounded-full" /></div>)}
               </div>
             </div>
             <div className="absolute bottom-0 left-0 h-[2px] transition-all duration-1000 w-0 group-hover:w-full" style={{ backgroundColor: kpi.color }} />
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={16} className="text-blue-500" />
                <h3 className={`text-lg font-semibold ${theme.text.primary}`}>Evolução de Acertos em Provas</h3>
              </div>
              <p className={`text-xs ${theme.text.secondary}`}>Desempenho mensal vs meta estabelecida</p>
            </div>
            <button className={`text-[10px] border px-2 py-1 rounded ${theme.input}`}>Sempre</button>
          </div>
          <div className="mb-6 space-y-4">
             <ChartActiveFilters filters={[{ label: 'Cirurgia Geral', icon: <Tag size={10} />, color: 'text-blue-400', hexColor: '#60a5fa' }, { label: 'Cirurgia Abdominal', icon: <GitBranch size={10} />, color: 'text-purple-400', hexColor: '#a855f7' }, { label: 'Abdome Agudo', icon: <Layers size={10} />, color: 'text-emerald-400', hexColor: '#34d399' }]} />
             <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold shadow-[0_0_10px_rgba(16,185,129,0.1)]"><CheckCircle2 size={12} /> <span>Meta atingida em 2 de 2 meses</span></div>
                <span className="text-[10px] text-emerald-500/80 font-medium">Meta do último mês atingida ✓</span>
             </div>
          </div>
          <div className="h-48 relative flex items-end px-2 pt-4">
             <svg className="absolute inset-0 w-full h-full p-6 pb-0" preserveAspectRatio="none">
                <line x1="0" y1="25%" x2="100%" y2="25%" stroke={isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeDasharray="4" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke={isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeDasharray="4" />
                <line x1="0" y1="75%" x2="100%" y2="75%" stroke={isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeDasharray="4" />
                <path d="M0,80 L200,80 L400,80 L800,80" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4" />
                <path d="M0,75 C100,78 300,85 800,82" fill="none" stroke="#FABE19" strokeWidth="3" />
             </svg>
             <div className={`w-full flex justify-between text-[10px] ${theme.text.muted} mt-2 z-10`}><span>out/2025</span><span>out/2025</span></div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex justify-between items-start mb-4">
             <div>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={16} className="text-[#FABE19]" />
                <h3 className={`text-lg font-semibold ${theme.text.primary}`}>Evolução de Acertos em Revisões</h3>
              </div>
              <p className={`text-xs ${theme.text.secondary}`}>Desempenho mensal vs meta estabelecida</p>
            </div>
            <button className={`text-[10px] border px-2 py-1 rounded ${theme.input}`}>Sempre</button>
          </div>
          <div className="mb-6 space-y-4">
             <ChartActiveFilters filters={[{ label: 'Cirurgia Geral', icon: <Tag size={10} />, color: 'text-blue-400', hexColor: '#60a5fa' }, { label: 'Cirurgia Abdominal', icon: <GitBranch size={10} />, color: 'text-purple-400', hexColor: '#a855f7' }]} />
             <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-bold"><Target size={12} /> <span>Meta atingida em 0 de 1 meses</span></div>
             </div>
          </div>
          <div className="h-48 relative flex items-end px-2 pt-4">
             <svg className="absolute inset-0 w-full h-full p-6 pb-0" preserveAspectRatio="none">
                <line x1="0" y1="25%" x2="100%" y2="25%" stroke={isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeDasharray="4" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke={isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeDasharray="4" />
                <path d="M0,70 L800,70" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4" />
                <path d="M0,80 Q200,60 400,65 T800,120" fill="none" stroke="#FABE19" strokeWidth="3" />
             </svg>
             <div className={`w-full flex justify-between text-[10px] ${theme.text.muted} mt-2 z-10`}><span>ago/2025</span><span>set/2025</span><span>out/2025</span><span>nov/2025</span><span>dez/2025</span></div>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-0 overflow-hidden">
         <div className={`p-6 border-b ${theme.border}`}>
            <h3 className={`text-lg font-semibold ${theme.text.primary}`}>Análise por Assunto</h3>
            <p className={`text-xs ${theme.text.secondary}`}>Desempenho hierárquico por categoria, subcategoria e grupo</p>
         </div>
         <div className="w-full text-left border-collapse">
            <div className={`flex text-xs font-bold uppercase tracking-wider py-3 px-6 ${isDarkMode ? 'bg-slate-950/30 text-slate-400' : 'bg-slate-100/50 text-slate-500'}`}>
               <div className="flex-1">Tema</div>
               <div className="w-24 text-center">Revisões</div>
               <div className="w-24 text-center">% Acertos</div>
               <div className="w-28 text-center">Total Questões</div>
               <div className="w-28 text-center">% Última Revisão</div>
            </div>
            <div className={`divide-y ${theme.divider}`}>
               {SUBJECT_ANALYSIS.map((subject) => (
                 <React.Fragment key={subject.id}>
                    <div className={`flex items-center py-4 px-6 ${theme.itemHover} transition-colors cursor-pointer group`} onClick={() => subject.subtopics && toggleRow(subject.id)}>
                       <div className={`flex-1 flex items-center gap-2 text-sm font-medium ${theme.text.accent}`}>{subject.subtopics ? (expandedRows[subject.id] ? <ChevronDown size={14} className="text-[#FABE19]" /> : <ChevronRight size={14} className="text-slate-500" />) : (<ChevronRight size={14} className="text-slate-500" />)}<span className={`group-hover:${theme.text.primary} transition-colors`}>{subject.name}</span></div>
                       <div className={`w-24 text-center text-sm ${theme.text.secondary}`}>{subject.revisoes}</div>
                       <div className={`w-24 text-center text-sm font-medium ${theme.text.accent}`}>{subject.acertos}</div>
                       <div className={`w-28 text-center text-sm ${theme.text.secondary}`}>{subject.questoes}</div>
                       <div className={`w-28 text-center text-sm ${theme.text.secondary}`}>{subject.ultima}</div>
                    </div>
                    {subject.subtopics && expandedRows[subject.id] && (
                       <div className={isDarkMode ? "bg-slate-950/20" : "bg-slate-50"}>
                          {subject.subtopics.map((sub, idx) => (
                             <div key={idx} className={`flex items-center py-3 px-6 pl-12 border-t ${theme.border} ${theme.itemHover} transition-colors`}>
                                <div className={`flex-1 flex items-center gap-2 text-xs ${theme.text.secondary}`}><ChevronRight size={12} className="text-slate-500" /><span>{sub.name}</span></div>
                                <div className={`w-24 text-center text-xs ${theme.text.muted}`}>{sub.revisoes}</div>
                                <div className={`w-24 text-center text-xs ${theme.text.muted}`}>{sub.acertos}</div>
                                <div className={`w-28 text-center text-xs ${theme.text.muted}`}>{sub.questoes}</div>
                                <div className={`w-28 text-center text-xs ${theme.text.muted}`}>{sub.ultima}</div>
                             </div>
                          ))}
                       </div>
                    )}
                 </React.Fragment>
               ))}
            </div>
         </div>
      </GlassCard>
    </div>
  );

  const renderPlanner = () => (
    <div className="h-full flex flex-col gap-6">
      <div className="mb-2 shrink-0">
         <h1 className={`text-3xl font-bold ${theme.text.primary} tracking-tight mb-1`}>Planner</h1>
         <p className={`text-sm ${theme.text.secondary}`}>Visualize suas revisões programadas em calendário</p>
      </div>
      <GlassCard className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-4 w-full md:w-auto">
           <div className={`${theme.input} p-1 rounded-lg border flex`}>
              <button onClick={() => setPlannerView('semanal')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${plannerView === 'semanal' ? (isDarkMode ? 'bg-slate-800 text-white shadow-lg' : 'bg-white text-slate-900 shadow-sm') : theme.text.secondary}`}>Visão Semanal</button>
              <button onClick={() => setPlannerView('mensal')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${plannerView === 'mensal' ? (isDarkMode ? 'bg-slate-800 text-white shadow-lg' : 'bg-white text-slate-900 shadow-sm') : theme.text.secondary}`}>Visão Mensal</button>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <button className={`p-2 rounded-full transition-colors ${theme.itemHover} ${theme.text.secondary}`}><ChevronLeft size={20} /></button>
           <div className="text-center">
              <h2 className={`text-xl font-bold ${theme.text.primary}`}>Dezembro 2025</h2>
              <p className={`text-xs ${theme.text.secondary}`}>{plannerView === 'semanal' ? '08 dez - 14 dez 2025' : 'Visualização completa'}</p>
           </div>
           <button className={`p-2 rounded-full transition-colors ${theme.itemHover} ${theme.text.secondary}`}><ChevronRight size={20} /></button>
        </div>
        <button className={`hidden md:flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${theme.input}`}><RefreshCw size={14} />Recarregar</button>
      </GlassCard>
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pb-2">
        {plannerView === 'semanal' ? (
          <div className="grid grid-cols-7 gap-3 h-full min-w-[1000px] md:min-w-0">
            {WEEK_DAYS.map((day, index) => (
              <div key={index} className="flex flex-col h-full min-w-[140px]">
                <div className={`mb-3 p-3 rounded-xl border flex flex-col items-center justify-center transition-colors ${day.active ? 'bg-[#FABE19]/10 border-[#FABE19]/30' : `${theme.itemHover} ${theme.border}`}`}>
                   <span className={`text-xs font-medium uppercase tracking-wider ${day.active ? 'text-[#FABE19]' : theme.text.secondary}`}>{day.name}</span>
                   <span className={`text-2xl font-bold ${day.active ? (isDarkMode ? 'text-white' : 'text-slate-900') : (isDarkMode ? 'text-slate-300' : 'text-slate-400')}`}>{day.day}</span>
                </div>
                <GlassCard className={`flex-1 p-2 space-y-3 ${day.active ? (isDarkMode ? 'bg-slate-800/40' : 'bg-slate-100/50') : (isDarkMode ? 'bg-slate-900/20' : 'bg-white/40')}`}>
                   {!day.tasks ? (
                     <div className="h-full flex items-center justify-center"><span className={`text-xs italic ${theme.text.muted}`}>Sem revisões</span></div>
                   ) : (
                     day.tasks.map((task, tIndex) => (
                       <div key={tIndex} className={`${isDarkMode ? 'bg-slate-900/80 border-white/10' : 'bg-white border-slate-200'} border p-3 rounded-xl shadow-lg hover:border-[#FABE19]/30 transition-colors cursor-pointer group relative`}>
                          <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${task.color === 'blue' ? 'bg-blue-500' : 'bg-[#FABE19]'} shadow-[0_0_8px_currentColor]`} />
                          <h4 className={`text-xs font-semibold mb-0.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{task.title}</h4>
                          <p className={`text-sm font-bold mb-3 ${task.color === 'blue' ? 'text-blue-500' : 'text-[#FABE19]'}`}>{task.subtitle}</p>
                          <div className={`w-full h-1.5 rounded-full mb-2 overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}><div className={`h-full rounded-full ${task.color === 'blue' ? 'bg-blue-500' : 'bg-[#FABE19]'}`} style={{ width: `${task.progress}%` }} /></div>
                          <div className={`flex justify-between text-[10px] font-medium mb-3 ${theme.text.muted}`}><span>Progresso</span><span>{task.progress}%</span></div>
                          <div className={`grid grid-cols-2 gap-2 pt-2 border-t ${theme.border}`}>
                             <div className={`flex items-center gap-1.5 ${theme.text.secondary}`}><CheckCircle2 size={12} /><span className="text-[10px]">{task.done}/{task.total}</span></div>
                             <div className={`flex items-center gap-1.5 ${theme.text.secondary}`}><Clock size={12} /><span className="text-[10px]">{task.time}</span></div>
                          </div>
                       </div>
                     ))
                   )}
                </GlassCard>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col">
            <div className="grid grid-cols-7 gap-2 mb-2 shrink-0">{WEEKDAY_HEADERS.map((header, i) => (<div key={i} className={`text-center py-2 text-xs font-semibold uppercase tracking-wider ${theme.text.secondary}`}>{header}</div>))}</div>
            <div className="grid grid-cols-7 gap-2 auto-rows-fr h-full">
              {MONTH_DATA.map((data, index) => {
                if (!data) return <div key={index} className="bg-transparent" />;
                const hasTasks = data.tasks.length > 0;
                return (
                  <GlassCard key={index} className={`p-2 flex flex-col transition-all cursor-pointer group ${theme.itemHover} ${data.current ? (isDarkMode ? 'border-[#FABE19]/50 bg-[#FABE19]/5' : 'border-[#FABE19] bg-amber-50') : theme.border}`}>
                    <div className="flex justify-between items-start mb-2"><span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${data.current ? 'bg-[#FABE19] text-slate-900 font-bold' : isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{data.day}</span>{hasTasks && (<div className="flex gap-1">{data.tasks.map((t, ti) => (<div key={ti} className={`w-1.5 h-1.5 rounded-full ${t.color === 'blue' ? 'bg-blue-400' : t.color === 'purple' ? 'bg-purple-400' : 'bg-[#FABE19]'}`} />))}</div>)}</div>
                    <div className="flex-1 flex flex-col gap-1 overflow-hidden">{data.tasks.map((task, i) => (<div key={i} className={`text-[10px] px-1.5 py-1 rounded truncate ${task.color === 'blue' ? (isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700') : task.color === 'purple' ? (isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700') : (isDarkMode ? 'bg-[#FABE19]/20 text-[#FABE19]' : 'bg-amber-100 text-amber-700')}`}>{task.type === 'revisao' ? 'Revisão' : task.type === 'prova' ? 'Prova' : 'Simulado'}</div>))}</div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderMeetings = () => (
    <div className="space-y-6 pb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className={`text-3xl font-bold ${theme.text.primary} tracking-tight mb-1`}>Reuniões</h1>
          <p className={`text-sm ${theme.text.secondary}`}>Gerencie suas mentorias e encontros em grupo</p>
        </div>
        <button className="bg-[#FABE19] text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-[#FABE19]/20 hover:bg-[#d8a416] transition-colors flex items-center gap-2">
          <Video size={18} />
          Agendar Nova Reunião
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <GlassCard className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-blue-500/10 text-blue-500"><Video size={24} /></div><div><p className={`text-xs ${theme.text.secondary} uppercase font-bold`}>Próximas</p><h3 className={`text-2xl font-bold ${theme.text.primary}`}>3</h3></div></GlassCard>
         <GlassCard className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500"><CheckCircle2 size={24} /></div><div><p className={`text-xs ${theme.text.secondary} uppercase font-bold`}>Concluídas</p><h3 className={`text-2xl font-bold ${theme.text.primary}`}>12</h3></div></GlassCard>
         <GlassCard className="p-4 flex items-center gap-4"><div className="p-3 rounded-xl bg-purple-500/10 text-purple-500"><Clock size={24} /></div><div><p className={`text-xs ${theme.text.secondary} uppercase font-bold`}>Horas</p><h3 className={`text-2xl font-bold ${theme.text.primary}`}>24h</h3></div></GlassCard>
      </div>
      <div className="space-y-4">
         <h3 className={`text-lg font-semibold ${theme.text.primary} mt-2`}>Próximas Reuniões</h3>
         <div className="grid grid-cols-1 gap-4">
            {MEETINGS_DATA.map((meeting) => (
              <GlassCard key={meeting.id} className={`p-0 overflow-hidden flex flex-col md:flex-row group ${theme.itemHover}`}>
                 <div className={`w-full md:w-1.5 h-1 md:h-auto ${meeting.type === 'Individual' ? 'bg-blue-500' : 'bg-purple-500'}`} />
                 <div className="p-5 flex-1 flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className={`flex flex-col items-center justify-center p-3 rounded-xl border min-w-[80px] ${theme.input}`}>
                       <Calendar size={20} className={meeting.type === 'Individual' ? 'text-blue-500' : 'text-purple-500'} />
                       <span className={`text-[10px] font-bold mt-1 uppercase ${theme.text.secondary}`}>{meeting.date.split(',')[0]}</span>
                    </div>
                    <div className="flex-1">
                       <div className="flex items-center gap-2 mb-1">
                          <StatusBadge color={meeting.type === 'Individual' ? 'blue' : 'purple'}>{meeting.type}</StatusBadge>
                          {meeting.status === 'pendente' && (<StatusBadge color="brand">Aguardando Confirmação</StatusBadge>)}
                       </div>
                       <h3 className={`text-lg font-bold ${theme.text.primary} mb-1`}>{meeting.title}</h3>
                       <div className="flex items-center gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-1.5"><Clock size={14} /><span>{meeting.date.split(',')[1]}</span></div>
                          <div className="flex items-center gap-1.5"><Users size={14} /><span>{meeting.participants.join(', ')}</span></div>
                       </div>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                       <button className={`p-2 rounded-lg transition-colors ${theme.input} hover:text-white`}><MoreHorizontal size={20} /></button>
                       <button className={`flex-1 md:flex-none bg-[#FABE19] text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-[#FABE19]/20 hover:bg-[#d8a416] transition-colors flex items-center justify-center gap-2`}>Entrar na Sala <ExternalLink size={16} /></button>
                    </div>
                 </div>
              </GlassCard>
            ))}
         </div>
      </div>
    </div>
  );

  const renderLives = () => (
    <div className="space-y-6 pb-6">
      <div className="mb-2">
        <h1 className={`text-3xl font-bold ${theme.text.primary} tracking-tight mb-1`}>Lives</h1>
        <p className={`text-sm ${theme.text.secondary}`}>Aulas ao vivo e gravações exclusivas</p>
      </div>
      <GlassCard className="p-0 overflow-hidden relative group h-64 flex items-end">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
         <div className="absolute inset-0 bg-slate-900" /> 
         {/* Placeholder for video thumbnail image */}
         <div className="relative z-20 p-6 w-full">
            <div className="flex items-center gap-2 mb-2">
               <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">AO VIVO</span>
               <span className="text-white/80 text-xs font-medium">Iniciou há 10 min</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Discutindo Questões de Alto Nível: Neurologia</h2>
            <div className="flex items-center gap-3">
               <button className="bg-[#FABE19] text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-[#FABE19]/20 hover:bg-[#d8a416] transition-colors flex items-center gap-2">
                  <Play size={16} fill="currentColor" /> Assistir Agora
               </button>
            </div>
         </div>
      </GlassCard>
      
      <div className="space-y-4">
         <h3 className={`text-lg font-semibold ${theme.text.primary} mt-2`}>Próximas & Gravadas</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LIVES_DATA.map((live) => (
               <GlassCard key={live.id} className="p-0 overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className={`h-32 w-full bg-gradient-to-br ${live.thumbnail === 'blue' ? 'from-blue-600 to-blue-900' : live.thumbnail === 'purple' ? 'from-purple-600 to-purple-900' : 'from-emerald-600 to-emerald-900'} relative`}>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                           <Play size={20} fill="currentColor" />
                        </div>
                     </div>
                  </div>
                  <div className="p-4">
                     <div className="flex justify-between items-start mb-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${theme.text.secondary}`}>{live.status}</span>
                        <MoreVertical size={14} className={theme.text.secondary} />
                     </div>
                     <h4 className={`font-bold text-sm mb-1 ${theme.text.primary} line-clamp-2`}>{live.title}</h4>
                     <p className={`text-xs ${theme.text.secondary}`}>{live.author} • {live.date}</p>
                  </div>
               </GlassCard>
            ))}
         </div>
      </div>
    </div>
  );

  const renderQuestionBank = () => (
    <div className="space-y-6 pb-6">
      <div className="flex flex-col gap-6">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className={`text-3xl font-bold ${theme.text.primary} tracking-tight mb-1`}>Banco de Questões</h1>
              <p className={`text-sm ${theme.text.secondary}`}>Gerencie seus cadernos de questões e simulados</p>
            </div>
            <button className="bg-[#FABE19] text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-[#FABE19]/20 hover:bg-[#d8a416] transition-colors flex items-center gap-2">
              <Database size={18} />
              Criar Novo Caderno
            </button>
         </div>
         <GlassCard className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
               <div className={`${theme.input} border rounded-lg px-3 py-2 text-sm flex items-center gap-2 min-w-[200px]`}>
                  <Search size={16} className={theme.text.muted} />
                  <input type="text" placeholder="Buscar lista..." className="bg-transparent border-none outline-none w-full placeholder:text-slate-500" />
               </div>
               <FilterPill icon={CheckCircle2} label="Todos os status" />
               <FilterPill icon={FileText} label="Revisões" />
            </div>
            <div className={`flex items-center p-1 rounded-lg border ${theme.input} shrink-0`}>
               <button onClick={() => setQuestionView('list')} className={`p-2 rounded-md transition-all ${questionView === 'list' ? (isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-900') : theme.text.secondary}`}><ListIcon size={18} /></button>
               <button onClick={() => setQuestionView('card')} className={`p-2 rounded-md transition-all ${questionView === 'card' ? (isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-900') : theme.text.secondary}`}><LayoutGrid size={18} /></button>
            </div>
         </GlassCard>
      </div>
      {questionView === 'list' ? (
        <GlassCard className="p-0 overflow-hidden">
           <div className={`grid grid-cols-12 gap-4 p-4 border-b text-xs font-bold uppercase tracking-wider ${theme.border} ${isDarkMode ? 'text-slate-400 bg-white/5' : 'text-slate-500 bg-slate-50'}`}>
              <div className="col-span-4">Tema</div>
              <div className="col-span-2">Tipo</div>
              <div className="col-span-2">Criado em</div>
              <div className="col-span-2">Progresso</div>
              <div className="col-span-1">Acertos</div>
              <div className="col-span-1 text-right">Ações</div>
           </div>
           <div className={`divide-y ${theme.divider}`}>
              {QUESTION_BANK_DATA.map((item) => (
                 <div key={item.id} className={`grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group`}>
                    <div className="col-span-4 font-medium truncate">{item.title}</div>
                    <div className="col-span-2"><StatusBadge color={item.type === 'Prova Completa' ? 'purple' : 'blue'}>{item.type}</StatusBadge></div>
                    <div className={`col-span-2 text-sm ${theme.text.secondary}`}>{item.created}</div>
                    <div className="col-span-2">
                       <div className="flex flex-col gap-1">
                          <div className={`h-1.5 w-full rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}><div className="h-full rounded-full bg-blue-500" style={{ width: `${item.progress}%` }}></div></div>
                          <p className={`text-[10px] ${theme.text.secondary}`}>{item.questionsDone}/{item.questionsTotal} questões <span className="float-right">{item.progress}%</span></p>
                       </div>
                    </div>
                    <div className="col-span-1">
                       <div className="flex items-center gap-2">
                          <div className={`h-1.5 w-16 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}><div className="h-full rounded-full bg-emerald-500" style={{ width: `${item.score || 0}%` }}></div></div>
                          <span className="text-xs font-medium">{item.score !== null ? `${item.score}%` : '%'}</span>
                       </div>
                    </div>
                    <div className="col-span-1 text-right"><button className={`p-1.5 rounded hover:bg-white/10 transition-colors ${theme.text.secondary}`}><MoreVertical size={16} /></button></div>
                 </div>
              ))}
           </div>
        </GlassCard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {QUESTION_BANK_DATA.map((item) => (
              <GlassCard key={item.id} className="p-5 hover:border-[#FABE19]/30 transition-colors group relative overflow-hidden">
                 <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FABE19]/10 border border-[#FABE19] flex items-center justify-center text-[#FABE19]"><FileQuestion size={20} /></div>
                    <div className="flex items-center gap-2">
                       <StatusBadge color={item.type === 'Prova Completa' ? 'purple' : 'blue'}>{item.type.split(' ')[0]}</StatusBadge>
                       <button className={`${theme.text.secondary} hover:text-white`}><MoreVertical size={16} /></button>
                    </div>
                 </div>
                 <h3 className={`font-bold text-base mb-1 ${theme.text.primary} truncate`}>{item.title}</h3>
                 <p className={`text-xs ${theme.text.secondary} mb-6`}>{item.questionsTotal} questões • {item.created}</p>
                 <div className="space-y-4">
                    <div className="space-y-1">
                       <div className="flex justify-between text-xs"><span className={theme.text.secondary}>Progresso</span><span className={theme.text.primary}>{item.progress}%</span></div>
                       <div className={`h-1.5 w-full rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}><div className="h-full rounded-full bg-blue-500" style={{ width: `${item.progress}%` }}></div></div>
                    </div>
                    <div className="space-y-1">
                       <p className={`text-xs ${theme.text.secondary}`}>Acertos: <span className="font-medium text-emerald-500">{item.score !== null ? `${item.score}%` : '-'}</span></p>
                    </div>
                 </div>
              </GlassCard>
           ))}
        </div>
      )}
    </div>
  );

  const renderFullExams = () => (
    <div className="space-y-6 pb-6">
      <div className="flex flex-col gap-6">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className={`text-3xl font-bold ${theme.text.primary} tracking-tight mb-1`}>Provas na Íntegra</h1>
              <p className={`text-sm ${theme.text.secondary}`}>Realize provas completas organizadas por instituição</p>
            </div>
         </div>
         <GlassCard className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
               <div className={`${theme.input} border rounded-lg px-3 py-2 text-sm flex items-center gap-2 min-w-[200px]`}>
                  <Search size={16} className={theme.text.muted} />
                  <input type="text" placeholder="Buscar por instituição..." className="bg-transparent border-none outline-none w-full placeholder:text-slate-500" />
               </div>
               <FilterPill icon={CheckCircle2} label="Todos os status" />
               <FilterPill icon={FileText} label="Todos os tipos" />
            </div>
            <div className={`flex items-center p-1 rounded-lg border ${theme.input} shrink-0`}>
               <button onClick={() => setExamView('list')} className={`p-2 rounded-md transition-all ${examView === 'list' ? (isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-900') : theme.text.secondary}`}><ListIcon size={18} /></button>
               <button onClick={() => setExamView('card')} className={`p-2 rounded-md transition-all ${examView === 'card' ? (isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-900') : theme.text.secondary}`}><LayoutGrid size={18} /></button>
            </div>
         </GlassCard>
      </div>
      <div className="flex flex-col gap-4">
        {INSTITUTION_EXAMS_DATA.map((institution) => (
          <div key={institution.id} className="space-y-2">
            <GlassCard className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors" onClick={() => toggleInstitution(institution.id)}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-yellow-500/10 text-[#FABE19] border border-[#FABE19]/30' : 'bg-yellow-100 text-yellow-600 border border-yellow-200'}`}><Folder size={20} /></div>
                <div><h3 className={`text-lg font-bold ${theme.text.primary}`}>{institution.name}</h3><p className={`text-xs ${theme.text.secondary}`}>{institution.exams.length} provas disponíveis</p></div>
                <StatusBadge color="slate" className="text-[10px]">{institution.state}</StatusBadge>
              </div>
              <div className={theme.text.secondary}>{expandedInstitutions[institution.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
            </GlassCard>
            {expandedInstitutions[institution.id] && (
              <div className={`transition-all duration-300 ${examView === 'list' ? '' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 border-l-2 border-white/5'}`}>
                {examView === 'list' ? (
                  <GlassCard className="p-0 overflow-hidden mt-2 border-t-0 rounded-t-none">
                    <div className={`grid grid-cols-12 gap-4 p-3 border-b text-[10px] font-bold uppercase tracking-wider ${theme.border} ${isDarkMode ? 'text-slate-400 bg-white/5' : 'text-slate-500 bg-slate-50'}`}>
                        <div className="col-span-4 pl-4 flex items-center gap-1">PROVA <ArrowUpRight size={10} /></div>
                        <div className="col-span-2">QUESTÕES</div>
                        <div className="col-span-3">PROGRESSO</div>
                        <div className="col-span-2">STATUS</div>
                        <div className="col-span-1 text-right pr-4">AÇÕES</div>
                    </div>
                    <div className={`divide-y ${theme.divider}`}>
                      {institution.exams.map((exam) => (
                        <div key={exam.id} className={`grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group`}>
                          <div className="col-span-4 flex items-center gap-3">
                             <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${isDarkMode ? 'bg-[#FABE19]/10 text-[#FABE19]' : 'bg-yellow-100 text-yellow-600'}`}><FileText size={16} /></div>
                             <div><p className={`font-bold text-sm ${theme.text.primary}`}>{exam.title}</p><p className={`text-xs ${theme.text.secondary}`}>{exam.year} • {exam.board}</p></div>
                          </div>
                          <div className={`col-span-2 text-sm ${theme.text.secondary}`}>{exam.questions} questões</div>
                          <div className="col-span-3">
                             <div className="flex items-center gap-3">
                                <div className={`h-1.5 flex-1 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}><div className="h-full rounded-full bg-blue-500" style={{ width: `${exam.progress}%` }}></div></div>
                                <span className="text-xs font-medium w-8">{exam.progress}%</span>
                             </div>
                          </div>
                          <div className="col-span-2"><StatusBadge color={exam.status === 'Concluída' ? 'green' : exam.status === 'Em andamento' ? 'blue' : 'slate'}>{exam.status}</StatusBadge></div>
                          <div className="col-span-1 text-right"><button className={`p-1.5 rounded hover:bg-white/10 transition-colors ${theme.text.secondary}`}><MoreVertical size={16} /></button></div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                ) : (
                  institution.exams.map((exam) => (
                    <GlassCard key={exam.id} className="p-5 hover:border-[#FABE19]/30 transition-colors group">
                       <div className="flex justify-between items-start mb-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#FABE19]/10 text-[#FABE19]' : 'bg-yellow-100 text-yellow-600'}`}><FileText size={20} /></div>
                          <div className="flex items-center gap-2">
                             <StatusBadge color={exam.status === 'Concluída' ? 'green' : exam.status === 'Em andamento' ? 'blue' : 'slate'}>{exam.status}</StatusBadge>
                             <button className={`${theme.text.secondary} hover:text-white`}><MoreVertical size={16} /></button>
                          </div>
                       </div>
                       <h3 className={`font-bold text-sm mb-1 ${theme.text.primary} line-clamp-2 min-h-[2.5rem]`}>{exam.title}</h3>
                       <p className={`text-xs ${theme.text.secondary} mb-4`}>{exam.year} • {exam.board} • {exam.questions} questões</p>
                       <div className="space-y-1">
                          <div className="flex justify-between text-xs"><span className={theme.text.secondary}>Progresso</span><span className={theme.text.primary}>{exam.progress}%</span></div>
                          <div className={`h-1.5 w-full rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}><div className="h-full rounded-full bg-blue-500" style={{ width: `${exam.progress}%` }}></div></div>
                       </div>
                    </GlassCard>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSystemDesign = () => (
    <div className="space-y-8 pb-6">
      <div className="mb-2">
        <h1 className={`text-3xl font-bold ${theme.text.primary} tracking-tight mb-1`}>System Design</h1>
        <p className={`text-sm ${theme.text.secondary}`}>Guia de estilos e componentes da plataforma</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Section: Cores */}
        <section>
          <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text.primary}`}>
            <Palette size={18} className="text-[#FABE19]" /> Paleta de Cores
          </h2>
          <GlassCard className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-[#FABE19] shadow-lg shadow-[#FABE19]/20"></div>
                <p className={`text-xs font-mono ${theme.text.secondary}`}>Brand Primary<br/>#FABE19</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-blue-500 shadow-lg shadow-blue-500/20"></div>
                <p className={`text-xs font-mono ${theme.text.secondary}`}>Action Blue<br/>#3b82f6</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-emerald-500 shadow-lg shadow-emerald-500/20"></div>
                <p className={`text-xs font-mono ${theme.text.secondary}`}>Success Green<br/>#10b981</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-red-500 shadow-lg shadow-red-500/20"></div>
                <p className={`text-xs font-mono ${theme.text.secondary}`}>Danger Red<br/>#ef4444</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-purple-500 shadow-lg shadow-purple-500/20"></div>
                <p className={`text-xs font-mono ${theme.text.secondary}`}>System Purple<br/>#a855f7</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-[#05050f] border border-white/10"></div>
                <p className={`text-xs font-mono ${theme.text.secondary}`}>Background<br/>#05050f</p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Section: Typography */}
        <section>
          <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text.primary}`}>
            <Type size={18} className="text-[#FABE19]" /> Tipografia
          </h2>
          <GlassCard className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className={`text-xs uppercase tracking-wider ${theme.text.muted} mb-2 block`}>Headings</span>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold">H1. Título Principal</h1>
                  <h2 className="text-3xl font-bold">H2. Título de Seção</h2>
                  <h3 className="text-2xl font-bold">H3. Título de Card</h3>
                  <h4 className="text-xl font-semibold">H4. Subtítulo</h4>
                </div>
              </div>
              <div>
                <span className={`text-xs uppercase tracking-wider ${theme.text.muted} mb-2 block`}>Body & UI</span>
                <div className="space-y-4">
                  <p className="text-base">Body Base. O texto padrão para leitura longa e descrições.</p>
                  <p className="text-sm">Body Small. Usado em componentes, listas e labels.</p>
                  <p className="text-xs">Caption. Usado para metadados e informações secundárias.</p>
                  <p className="text-[10px] uppercase tracking-wider font-bold">Label / Kicker</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Section: Buttons */}
        <section>
          <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text.primary}`}>
            <MousePointerClick size={18} className="text-[#FABE19]" /> Botões
          </h2>
          <GlassCard className="p-6 space-y-8">
            <div className="space-y-2">
              <p className={`text-xs uppercase tracking-wider ${theme.text.muted} mb-2`}>Variantes</p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-[#FABE19] text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-[#FABE19]/20 hover:bg-[#d8a416] transition-colors">
                  Primary Button
                </button>
                <button className={`border ${isDarkMode ? 'border-white/20 bg-white/5 hover:bg-white/10' : 'border-slate-300 bg-white hover:bg-slate-50'} px-4 py-2 rounded-lg text-sm font-medium transition-colors`}>
                  Secondary / Outline
                </button>
                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}>
                  Ghost Button
                </button>
                <button className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-500/20 transition-colors">
                  Destructive
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <p className={`text-xs uppercase tracking-wider ${theme.text.muted} mb-2`}>Tamanhos</p>
              <div className="flex flex-wrap gap-4 items-end">
                <button className="bg-[#FABE19] text-slate-900 px-6 py-3 rounded-xl text-base font-bold shadow-lg shadow-[#FABE19]/20">
                  Large Button
                </button>
                <button className="bg-[#FABE19] text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-[#FABE19]/20">
                  Default Button
                </button>
                <button className="bg-[#FABE19] text-slate-900 px-3 py-1.5 rounded-md text-xs font-bold shadow-lg shadow-[#FABE19]/20">
                  Small
                </button>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Section: Forms */}
        <section>
          <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text.primary}`}>
            <FormInput size={18} className="text-[#FABE19]" /> Formulários e Inputs
          </h2>
          <GlassCard className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className={`text-xs font-medium ml-1 ${theme.text.secondary}`}>Input Padrão</label>
                  <div className={`${theme.input} border rounded-lg px-4 py-2.5 text-sm w-full flex items-center gap-2`}>
                    <Users size={16} className={theme.text.muted} />
                    <input type="text" placeholder="Digite seu nome..." className="bg-transparent border-none outline-none w-full placeholder:text-slate-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className={`text-xs font-medium ml-1 ${theme.text.secondary}`}>Input Focado / Ativo</label>
                  <div className={`bg-slate-950/50 border border-[#FABE19] text-white rounded-lg px-4 py-2.5 text-sm w-full flex items-center gap-2 shadow-[0_0_10px_rgba(250,190,25,0.1)]`}>
                    <Command size={16} className="text-[#FABE19]" />
                    <input type="text" defaultValue="Texto focado" className="bg-transparent border-none outline-none w-full text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className={`text-xs font-medium ml-1 text-red-400`}>Input com Erro</label>
                  <div className={`bg-red-500/5 border border-red-500/50 rounded-lg px-4 py-2.5 text-sm w-full flex items-center gap-2`}>
                    <input type="text" defaultValue="Valor inválido" className="bg-transparent border-none outline-none w-full text-red-400" />
                    <X size={16} className="text-red-500" />
                  </div>
                  <span className="text-[10px] text-red-400 ml-1">Mensagem de erro explicativa aqui.</span>
                </div>
                <div className="space-y-1 pt-2">
                  <label className={`flex items-center gap-2 text-sm ${theme.text.secondary} cursor-pointer`}>
                    <div className="w-5 h-5 rounded border border-slate-500 flex items-center justify-center bg-transparent"></div>
                    Opção desmarcada
                  </label>
                  <label className={`flex items-center gap-2 text-sm ${theme.text.primary} cursor-pointer mt-2`}>
                    <div className="w-5 h-5 rounded bg-[#FABE19] text-slate-900 flex items-center justify-center shadow-lg shadow-[#FABE19]/20">
                      <CheckCircle2 size={14} />
                    </div>
                    Opção selecionada
                  </label>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Section: Badges */}
        <section>
          <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text.primary}`}>
            <Tag size={18} className="text-[#FABE19]" /> Badges & Etiquetas
          </h2>
          <GlassCard className="p-6">
            <p className={`text-sm mb-4 ${theme.text.secondary}`}>
              Badges padronizados que se adaptam automaticamente ao tema (Dark/Light).
            </p>
            <div className="flex flex-wrap gap-4">
              <StatusBadge color="brand">Primária / Brand</StatusBadge>
              <StatusBadge color="blue">Azul / Info</StatusBadge>
              <StatusBadge color="green">Verde / Sucesso</StatusBadge>
              <StatusBadge color="red">Vermelho / Erro</StatusBadge>
              <StatusBadge color="purple">Roxo / Sistema</StatusBadge>
              <StatusBadge color="indigo">Indigo / Secundário</StatusBadge>
              <StatusBadge color="pink">Rosa / Destaque</StatusBadge>
              <StatusBadge color="slate">Slate / Padrão</StatusBadge>
            </div>
          </GlassCard>
        </section>

        {/* Section: Shadows and Blurs */}
        <section>
          <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text.primary}`}>
            <Sparkles size={18} className="text-[#FABE19]" /> Sombras e Efeitos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`h-24 rounded-2xl flex items-center justify-center text-xs ${isDarkMode ? 'bg-slate-900/40 border border-white/5' : 'bg-white border border-slate-100'} backdrop-blur-sm`}>
              Blur Small (sm)
            </div>
            <div className={`h-24 rounded-2xl flex items-center justify-center text-xs ${isDarkMode ? 'bg-slate-900/40 border border-white/5' : 'bg-white border border-slate-100'} backdrop-blur-md shadow-lg`}>
              Blur Medium (md) + Shadow
            </div>
            <div className={`h-24 rounded-2xl flex items-center justify-center text-xs ${isDarkMode ? 'bg-slate-900/40 border border-white/5' : 'bg-white border border-slate-100'} backdrop-blur-xl shadow-2xl`}>
              Blur Extra Large (xl) + Deep Shadow
            </div>
          </div>
        </section>

        {/* Section: Icons */}
        <section>
          <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme.text.primary}`}>
            <Users size={18} className="text-[#FABE19]" /> Iconografia
          </h2>
          <GlassCard className="p-6">
            <p className={`text-sm mb-4 ${theme.text.secondary}`}>
              Utilizamos a biblioteca <code className="bg-white/10 px-1 rounded">lucide-react</code> para consistência.
            </p>
            <div className={`grid grid-cols-6 md:grid-cols-12 gap-4 ${theme.text.secondary}`}>
              <LayoutDashboard size={20} />
              <CalendarDays size={20} />
              <CheckSquare size={20} />
              <Database size={20} />
              <FileText size={20} />
              <Zap size={20} />
              <Video size={20} />
              <Users size={20} />
              <Bell size={20} />
              <Search size={20} />
              <Clock size={20} />
              <Trash2 size={20} />
            </div>
          </GlassCard>
        </section>

      </div>
    </div>
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={`min-h-screen ${theme.bg} ${theme.text.primary} font-sans selection:bg-[#FABE19]/30 selection:text-[#FABE19] relative overflow-hidden transition-colors duration-300`}>
        
        {/* Background Ambience */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {isDarkMode ? (
            <>
              <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#FABE19]/10 rounded-full blur-[100px]" />
            </>
          ) : (
            <>
              <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/30 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-200/30 rounded-full blur-[100px]" />
              <div className="absolute top-[20%] right-[20%] w-[20vw] h-[20vw] bg-[#FABE19]/20 rounded-full blur-[80px]" />
            </>
          )}
        </div>

        <div className="relative z-10 flex h-screen p-4 gap-4 overflow-hidden">
          
          {/* SIDEBAR */}
          <aside 
            className={`
              ${isSidebarOpen ? 'w-72' : 'w-0'} 
              transition-all duration-300 ease-in-out
              flex flex-col h-full
              relative z-20
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-0 md:hidden'} 
            `}
            style={{ width: isSidebarOpen ? '18rem' : '0', opacity: isSidebarOpen ? 1 : 0 }}
          >
            <GlassCard className="h-full flex flex-col p-4">
              {/* Logo Area */}
              <div className="flex items-center gap-3 px-2 mb-8 h-12">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FABE19] to-[#d8a416] flex items-center justify-center shadow-lg shadow-[#FABE19]/20 shrink-0">
                  <Users size={16} className="text-slate-900" />
                </div>
                
                <div className="flex flex-col overflow-hidden">
                  <span className={`font-bold text-lg leading-tight tracking-wide ${theme.text.primary} whitespace-nowrap`}>PRO RESIDÊNCIA</span>
                  <span className="text-[10px] text-[#FABE19] font-medium tracking-widest uppercase">Mentoria</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`
                        group flex items-center w-full p-3 rounded-xl transition-all duration-200 relative
                        ${isActive 
                          ? 'bg-[#FABE19]/10 text-[#FABE19] shadow-[0_0_20px_rgba(250,190,25,0.15)]' 
                          : `${theme.text.secondary} hover:bg-white/5 hover:${theme.text.primary}`}
                      `}
                    >
                      {isActive && (
                        <div className="absolute left-0 w-1 h-6 bg-[#FABE19] rounded-r-full shadow-[0_0_10px_#FABE19]" />
                      )}
                      
                      <item.icon 
                        size={20} 
                        className={`shrink-0 transition-colors ${isActive ? 'text-[#FABE19]' : 'group-hover:text-current'}`} 
                      />
                      
                      <span className="ml-3 text-sm font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* User Footer */}
              <div className={`mt-4 pt-4 border-t ${theme.border} space-y-4`}>
                <div className="flex items-center gap-3">
                   <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 border border-white/20 p-[2px] shrink-0">
                      <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Vinicius" alt="User" className="rounded-full bg-slate-900" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className={`text-sm font-semibold ${theme.text.accent} truncate`}>Dr. Vinicius</p>
                     <p className={`text-xs ${theme.text.secondary} truncate`}>Mentor</p>
                   </div>
                   <button className={`${theme.text.secondary} hover:text-red-400 transition-colors`}>
                     <LogOut size={16} />
                   </button>
                </div>
              </div>
            </GlassCard>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
            
            {/* HEADER MINIMALISTA */}
            <header className="mb-6 shrink-0">
              <GlassCard className="flex items-center justify-between p-4 py-3">
                
                {/* Left: Menu Toggle (Moved from Sidebar) */}
                <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className={`p-2 rounded-lg transition-colors ${theme.itemHover} ${theme.text.secondary} hover:${theme.text.primary}`}
                >
                  <Menu size={20} />
                </button>

                {/* Right: Tools */}
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${theme.input}`}
                  >
                    {isDarkMode ? (
                      <>
                        <Moon size={16} className="text-blue-400" />
                        <span className="text-xs font-medium">Dark</span>
                      </>
                    ) : (
                      <>
                        <Sun size={16} className="text-[#FABE19]" />
                        <span className="text-xs font-medium">Light</span>
                      </>
                    )}
                  </button>

                  <button className={`relative p-2 rounded-full ${theme.itemHover} ${theme.text.secondary} hover:${theme.text.primary} transition-colors`}>
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#FABE19] rounded-full animate-pulse shadow-[0_0_8px_#FABE19]" />
                  </button>
                </div>
              </GlassCard>
            </header>

            {/* DYNAMIC CONTENT AREA */}
            <div className="flex-1 overflow-hidden">
              {activeTab === 'Dashboard' ? (
                <div className="h-full overflow-y-auto custom-scrollbar pr-2 pb-2">
                  {renderDashboard()}
                </div>
              ) : activeTab === 'Planner' ? (
                <div className="h-full overflow-hidden">
                  {renderPlanner()}
                </div>
              ) : activeTab === 'Reuniões' ? (
                <div className="h-full overflow-y-auto custom-scrollbar pr-2 pb-2">
                  {renderMeetings()}
                </div>
              ) : activeTab === 'Banco de Questões' ? (
                <div className="h-full overflow-y-auto custom-scrollbar pr-2 pb-2">
                  {renderQuestionBank()}
                </div>
              ) : activeTab === 'Provas na Íntegra' ? (
                <div className="h-full overflow-y-auto custom-scrollbar pr-2 pb-2">
                  {renderFullExams()}
                </div>
              ) : activeTab === 'Lives' ? (
                <div className="h-full overflow-y-auto custom-scrollbar pr-2 pb-2">
                  {renderLives()}
                </div>
              ) : activeTab === 'System Design' ? (
                <div className="h-full overflow-y-auto custom-scrollbar pr-2 pb-2">
                  {renderSystemDesign()}
                </div>
              ) : (
                <div className={`h-full flex items-center justify-center ${theme.text.secondary}`}>
                  <p>Página em construção: {activeTab}</p>
                </div>
              )}
            </div>

          </main>
        </div>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: ${isDarkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.05)'};
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
          }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;