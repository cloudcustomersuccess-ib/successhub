import {
  TrendingUp,
  BarChart3,
  Users,
  ShoppingCart,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const statsCards = [
  { title: 'Ventas Totales', value: '€124,592', change: '+12.5%', up: true, icon: TrendingUp, color: 'text-blue-600' },
  { title: 'Clientes Activos', value: '1,423', change: '+8.2%', up: true, icon: Users, color: 'text-emerald-600' },
  { title: 'Pedidos Pendientes', value: '64', change: '-3.1%', up: false, icon: ShoppingCart, color: 'text-orange-500' },
  { title: 'Tasa de Éxito', value: '94.2%', change: '+2.4%', up: true, icon: BarChart3, color: 'text-purple-600' },
];

const recentActivities = [
  { title: 'Nuevo pedido #4523', subtitle: 'Cliente: Empresa ABC S.L.', time: 'Hace 5 minutos', status: 'success', Icon: CheckCircle2 },
  { title: 'Pedido #4521 en proceso', subtitle: 'Cliente: Tech Solutions', time: 'Hace 15 minutos', status: 'warning', Icon: Clock },
  { title: 'Alerta de inventario bajo', subtitle: 'Producto: Widget Pro 2000', time: 'Hace 1 hora', status: 'error', Icon: AlertTriangle },
];

const projectProgress = [
  { name: 'Implementación Q1', progress: 85 },
  { name: 'Migración de Datos', progress: 60 },
  { name: 'Capacitación de Personal', progress: 40 },
  { name: 'Optimización SEO', progress: 95 },
];

const statusColors: Record<string, string> = {
  success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  error: 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300',
};

export default function CustomerDashboard() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <Button href="/" variant="outline" size="sm" className="mb-4">
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al Índice
        </Button>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Dashboard de Cliente</h1>
        <p className="text-[var(--muted-foreground)] mt-1">Resumen de métricas y actividades del cliente</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statsCards.map((stat) => (
          <div key={stat.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-[var(--muted-foreground)] mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</p>
                <span className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-xs font-bold ${stat.up ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' : 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300'}`}>
                  {stat.change}
                </span>
              </div>
              <div className={`rounded-full bg-[var(--muted)] p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Recent Activity */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <div className="px-5 py-4">
            <h2 className="font-bold text-[var(--foreground)]">Actividad Reciente</h2>
          </div>
          <Separator />
          <ul>
            {recentActivities.map((activity, i) => (
              <li key={i}>
                <div className="flex items-start gap-3 px-5 py-4">
                  <div className={`rounded-full p-2 shrink-0 ${statusColors[activity.status]}`}>
                    <activity.Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--foreground)]">{activity.title}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{activity.subtitle}</p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{activity.time}</p>
                  </div>
                </div>
                {i < recentActivities.length - 1 && <Separator />}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Progress */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <div className="px-5 py-4">
            <h2 className="font-bold text-[var(--foreground)]">Progreso de Proyectos</h2>
          </div>
          <Separator />
          <div className="px-5 py-4 space-y-5">
            {projectProgress.map((p) => (
              <div key={p.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-[var(--foreground)]">{p.name}</span>
                  <span className="text-sm font-bold text-[var(--muted-foreground)]">{p.progress}%</span>
                </div>
                <Progress value={p.progress} max={100} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info banner */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-5">
        <h3 className="font-bold text-[var(--foreground)] mb-1">Página de Ejemplo</h3>
        <p className="text-sm text-[var(--muted-foreground)]">
          Esta es una página independiente creada con componentes shadcn/Tailwind.
          Puedes duplicar esta estructura para crear más páginas específicas para cada cliente o propósito.
        </p>
      </div>
    </div>
  );
}
