import { CreditCard, Shield, Lock } from "lucide-react";
import { Button } from "../ui/Button";

export const PaymentButton = ({ onClick, isProcessing }) => {
  return (
    <div className="space-y-4">
      <Button
        onClick={onClick}
        size="lg"
        className="w-full"
        loading={isProcessing}
      >
        <CreditCard className="h-5 w-5" />
        Pay ₹99 with Razorpay
      </Button>

      <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Lock className="h-3 w-3" />
          256-bit SSL Encrypted
        </span>
        <span className="flex items-center gap-1">
          <Shield className="h-3 w-3" />
          Secure Payment
        </span>
      </div>

      <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
        <p className="text-xs text-gray-500">
          Powered by <span className="font-semibold text-gray-700">Razorpay</span> — India's most trusted payment gateway
        </p>
        <div className="mt-2 flex justify-center gap-2">
          <span className="rounded bg-gray-200 px-2 py-0.5 text-[10px] text-gray-600">UPI</span>
          <span className="rounded bg-gray-200 px-2 py-0.5 text-[10px] text-gray-600">Cards</span>
          <span className="rounded bg-gray-200 px-2 py-0.5 text-[10px] text-gray-600">NetBanking</span>
          <span className="rounded bg-gray-200 px-2 py-0.5 text-[10px] text-gray-600">Wallets</span>
        </div>
      </div>
    </div>
  );
};
