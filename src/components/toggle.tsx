import { useState } from "react"

export default function Toggle() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  return (
    <div className="mb-12 flex items-center justify-center space-x-4">
      <span className={`font-medium ${billingCycle === "monthly" ? "text-scondary" : "text-gray-400"} `}>Mensual</span>
      <button
        onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-scondary transition-transform ${billingCycle === "annual" ? "translate-x-6" : "translate-x-1"
            }`}
        />
      </button>
      <span className={`font-medium ${billingCycle === "annual" ? "text-scondary" : "text-gray-400"}`}>
        Anual
      </span>
      {billingCycle === "annual" && (
        <span className="rounded-full bg-scondary px-3 py-1 text-sm font-medium text-primary">
          ¡Ahorra hasta $200!
        </span>
      )}
    </div>
  )
}