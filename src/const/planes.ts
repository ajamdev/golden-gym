export const PLANES = {
  basico: {
    name: 'Plan Básico',
    subtitle: 'Perfecto para comenzar',
    prices: {
      monthly: 29,
      annual: 290
    },
    features: ["Acceso al área de pesas", "Área cardiovascular", "Vestuarios y duchas", "Horario: 6:00 - 22:00"]
  },
  premium: {
    name: "Plan Premium",
    subtitle: "La opción más popular",
    prices: { monthly: 49, annual: 490 },
    features: [
      "Todo lo del Plan Básico",
      "Clases grupales ilimitadas",
      "2 sesiones entrenador personal",
      "Consulta nutricionista",
      "2 invitados gratis/mes",
    ],
  },
  elite: {
    name: "Plan Elite",
    subtitle: "Experiencia completa",
    prices: { monthly: 79, annual: 790 },
    features: [
      "Todo lo del Plan Premium",
      "Acceso 24/7",
      "Entrenador personal ilimitado",
      "Zona VIP exclusiva",
      "Invitados ilimitados",
      "Masajes deportivos",
    ],
  },
}