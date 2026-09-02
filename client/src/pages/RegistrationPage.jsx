import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { RegistrationForm } from "../components/registration/RegistrationForm";
import { PaymentButton } from "../components/registration/PaymentButton";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { getWhatsAppRegistrationLink } from "../utils/formatters";
import { GOOGLE_SHEETS_URL, RAZORPAY_PAYMENT_URL, WORKSHOP } from "../utils/constants";

const buildSheetPayload = (data) => ({
  fullName: data.fullName,
  mobile: data.mobile,
  email: data.email,
  age: data.age,
  gender: data.gender,
  city: data.city,
  currentWeight: data.currentWeight || null,
  currentHeight: data.currentHeight || null,
  goal: data.goal,
  healthIssues: Array.isArray(data.healthIssues) ? data.healthIssues.join(", ") : (data.healthIssues || null),
  healthIssuesOther: data.healthIssuesOther || null,
  currentCoaching: data.currentCoaching || null,
  seriousness: data.seriousness || null,
  budget: data.budget || null,
  fee: WORKSHOP.fee,
  submittedAt: new Date().toLocaleString("en-IN"),
});

const submitToSheet = async (data) => {
  if (!GOOGLE_SHEETS_URL) {
    throw new Error("Google Sheet is not configured. Please contact support.");
  }
  const res = await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(buildSheetPayload(data)),
  });
  if (!res.ok && res.status !== 0) {
    throw new Error("Could not submit your details. Please try again.");
  }
};

const RegistrationPage = () => {
  const [step, setStep] = useState("form");
  const [registrationData, setRegistrationData] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleFormSubmit = async (data) => {
    if (!GOOGLE_SHEETS_URL) {
      toast.error("Registration is not configured. Please contact support.");
      return;
    }
    setSubmitting(true);
    try {
      await submitToSheet(data);
      setRegistrationData(data);
      setStep("payment");
      toast.success("Your details have been saved. Please complete payment.");
    } catch (error) {
      toast.error(error.message || "Failed to save your details. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handlePayment = () => {
    window.open(RAZORPAY_PAYMENT_URL, "_blank");
    setPaymentStatus({
      ...registrationData,
      status: "payment_pending",
      submittedAt: new Date().toISOString(),
    });
    setStep("success");
  };

  return (
    <>
      <Helmet>
        <title>Register for Workshop - Aarogyam Wellness Centre</title>
        <meta name="description" content="Register for the Aarogyam Wellness Workshop on 23rd & 24th July 2026. Pay just ₹99 and start your transformation journey." />
      </Helmet>

      <main className="min-h-screen bg-gray-50 pt-8 pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            {step !== "success" && (
              <>
                <div className="mb-6 text-center">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Register for a Consultation
                  </h1>
                </div>

                <div className="mb-6 flex items-center justify-center gap-4">
                  <div className={`flex items-center gap-2 text-sm font-medium ${step === "form" ? "text-emerald-600" : "text-gray-400"}`}>
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${step === "form" ? "bg-emerald-600 text-white" : "bg-emerald-200 text-emerald-700"}`}>1</span>
                    Details
                  </div>
                  <div className="h-px w-12 bg-gray-200" />
                  <div className={`flex items-center gap-2 text-sm font-medium ${step === "payment" ? "text-emerald-600" : "text-gray-400"}`}>
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${step === "payment" ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-500"}`}>2</span>
                    Payment
                  </div>
                </div>
              </>
            )}

            {step === "form" && (
              <RegistrationForm onSubmit={handleFormSubmit} isSubmitting={submitting} />
            )}

            {step === "payment" && registrationData && (
              <Card className="text-center">
                <h2 className="text-xl font-bold text-gray-900">Complete Payment</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Hi <strong>{registrationData.fullName}</strong>, please pay ₹99 to confirm your registration.
                </p>

                <div className="mx-auto mt-4 max-w-sm rounded-xl bg-gray-50 p-4 text-left text-sm">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Name</span>
                    <span className="font-medium text-gray-900">{registrationData.fullName}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium text-gray-900">{registrationData.email}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Mobile</span>
                    <span className="font-medium text-gray-900">{registrationData.mobile}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                    <span className="text-gray-500">Amount</span>
                    <span className="font-bold text-emerald-600">₹{WORKSHOP.fee}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <PaymentButton onClick={handlePayment} isProcessing={false} />
                </div>

                <div className="mt-4">
                  <Button variant="ghost" size="sm" onClick={() => setStep("form")}>
                    Edit Details
                  </Button>
                </div>
              </Card>
            )}

            {step === "success" && paymentStatus && (
              <Card className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle className="h-10 w-10 text-emerald-600" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">Thank You!</h2>
                <p className="mt-2 text-gray-500">
                  Thank you, <strong>{paymentStatus.fullName}</strong>. We have received your details.
                </p>

                <div className="mx-auto mt-6 max-w-sm rounded-xl bg-gray-50 p-4 text-left">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Name</span>
                      <span className="font-semibold text-gray-900">{paymentStatus.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Email</span>
                      <span className="text-gray-900">{paymentStatus.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Goal</span>
                      <span className="font-semibold text-gray-900">{paymentStatus.goal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status</span>
                      <span className="font-bold text-amber-600">Awaiting Payment</span>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-4 max-w-sm rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                  Your details have been saved. A new tab opened with your payment. Please complete the payment to confirm your registration.
                </div>

                <div className="mt-8 flex justify-center">
                  <a
                    href={getWhatsAppRegistrationLink(paymentStatus.fullName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:max-w-sm"
                  >
                    <Button variant="whatsapp" className="w-full" size="md">
                      Share on WhatsApp
                    </Button>
                  </a>
                </div>

                <div className="mt-4">
                  <Link to="/">
                    <Button variant="ghost" className="w-full" size="md">
                      Return Home
                    </Button>
                  </Link>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default RegistrationPage;
