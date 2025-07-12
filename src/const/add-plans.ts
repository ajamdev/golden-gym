import type { addPlans } from "@/types/add-plans";
import Users from '@/assets/iconos/users.svg'
import Heart from '@/assets/iconos/heart.svg'
import Zap from '@/assets/iconos/zap.svg'
import Calendar from '@/assets/iconos/calendar.svg'
export const ADD_PLANS: addPlans[] = [
  {
    id: 'users',
    name: 'Entrenamiento Personal',
    image: {
      logo: Users
    },
    description: 'Sesiones individuales con entrenador certificado',
    price: '25',
    duration: 'Por sesión'
  },
  {
    id: 'heart',
    name: 'Consulta Nutricional',
    image: {
      logo: Heart
    },
    description: 'Plan alimenticio personalizado',
    price: '40',
    duration: 'Por consulta'
  },
  {
    id: 'zap',
    name: 'Masaje Deportivo',
    image: {
      logo: Zap
    },
    description: 'Recuperación muscular profesional',
    price: '35',
    duration: 'Por sesión'
  },
  {
    id: 'calendar',
    name: 'Evaluación Física',
    image: {
      logo: Calendar
    },
    description: 'Análisis completo de composición corporal',
    price: '20',
    duration: 'Por evaluación'
  },
]