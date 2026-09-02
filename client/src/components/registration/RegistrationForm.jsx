import { useForm, Controller } from "react-hook-form";
import { User, Target } from "lucide-react";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";

const GENDERS = ["Male", "Female", "Other"];
const GOALS = ["Weight Loss", "Weight Gain"];

const CURRENT_COACHING = [
  "No, I am not taking guidance or any other coach.",
  "Yes, I am taking currently coaching from another coach (programme).",
];
const SERIOUSNESS = [
  "Not very serious, I am just checking out.",
  "I am very seriously looking, I want to overcome my weight and health issues.",
  "100% committed to make a body and mind transformation. I want to be in my best version and maintain great health!",
];
const BUDGET = [
  "Monthly Basic: Between 5000 to 6000/-",
  "Monthly Intermediate: Between 8000/- to 10,000/-",
  "2 Months Transformation Plan: Rs. 17,999/-",
  "I will like to take a 3 DAY TRIAL SESSION (Zoom Session for workouts and Education @6:00AM)",
];
const HEALTH_ISSUES = [
  "Need to lose weight",
  "Need to lose Fat",
  "High BP",
  "High Blood Sugar/diabetes",
  "Cholesterol",
  "PCOD/Hormonal Issues",
  "Low Energy / Tiredness",
  "Acidity and Digestive Issues",
  "Skin Pigmentation / Acne",
  "Other",
];

export const RegistrationForm = ({ onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      age: "",
      gender: "",
      city: "",
      currentWeight: "",
      currentHeight: "",
      goal: "",
      healthIssues: [],
      healthIssuesOther: "",
      currentCoaching: "",
      seriousness: "",
      budget: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
          <User className="h-5 w-5 text-emerald-600" />
          Personal Information
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullName?.message}
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
            })}
          />

          <Input
            label="Mobile Number"
            placeholder="e.g. 9876543210"
            type="tel"
            error={errors.mobile?.message}
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^(?:\+91|91|0)?[6-9]\d{9}$/,
                message: "Enter a valid 10-digit Indian mobile number",
              },
            })}
          />

          <Input
            label="Email Address"
            placeholder="you@example.com"
            type="email"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />

          <Input
            label="Age"
            placeholder="e.g. 30"
            type="number"
            error={errors.age?.message}
            {...register("age", {
              required: "Age is required",
              min: { value: 10, message: "Age must be at least 10" },
              max: { value: 100, message: "Age must be under 100" },
            })}
          />

          <Select
            label="Gender"
            options={GENDERS}
            error={errors.gender?.message}
            {...register("gender", { required: "Gender is required" })}
          />

          <Input
            label="City"
            placeholder="e.g. Mumbai"
            error={errors.city?.message}
            {...register("city", {
              required: "City is required",
              minLength: { value: 2, message: "City must be at least 2 characters" },
            })}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
          <Target className="h-5 w-5 text-emerald-600" />
          Health & Goals
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Current Weight (KG)"
            placeholder="e.g. 75"
            type="number"
            error={errors.currentWeight?.message}
            {...register("currentWeight", {
              min: { value: 20, message: "Weight must be at least 20 KG" },
              max: { value: 300, message: "Weight must be under 300 KG" },
            })}
          />

          <Input
            label="Current Height (CM)"
            placeholder="e.g. 170"
            type="number"
            error={errors.currentHeight?.message}
            {...register("currentHeight", {
              min: { value: 100, message: "Height must be at least 100 CM" },
              max: { value: 250, message: "Height must be under 250 CM" },
            })}
          />

          <Select
            label="Goal"
            options={GOALS}
            error={errors.goal?.message}
            {...register("goal", { required: "Goal is required" })}
          />
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-gray-900">
            What is the main issue you are facing about your health and fitness? <span className="text-red-500">*</span>
          </p>
          <Controller
            name="healthIssues"
            control={control}
            rules={{ validate: (v) => v.length > 0 || "Please select at least one issue" }}
            render={({ field }) => (
              <>
                <div className="grid gap-2 sm:grid-cols-2">
                  {HEALTH_ISSUES.map((issue) => (
                    <label
                      key={issue}
                      className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        checked={field.value.includes(issue)}
                        onChange={(e) => {
                          const updated = e.target.checked
                            ? [...field.value, issue]
                            : field.value.filter((v) => v !== issue);
                          field.onChange(updated);
                        }}
                      />
                      <span className="text-sm text-gray-700">{issue}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-3">
                  {field.value.includes("Other") && (
                    <Input
                      label="Please specify"
                      placeholder="Enter your health issue"
                      {...register("healthIssuesOther", { required: field.value.includes("Other") ? "Please specify your issue" : false })}
                      error={errors.healthIssuesOther?.message}
                    />
                  )}
                </div>
                {errors.healthIssues?.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.healthIssues.message}</p>
                )}
              </>
            )}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
          <Target className="h-5 w-5 text-emerald-600" />
          Coaching & Commitment
        </h3>

        <div className="space-y-5">
          <Controller
            name="currentCoaching"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <div>
                <p className="mb-2.5 text-sm font-semibold text-gray-900">
                  Are you currently taking guidance/coaching/nutrition from any other coach? <span className="text-red-500">*</span>
                </p>
                <div className="space-y-2">
                  {CURRENT_COACHING.map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                    >
                      <input
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        checked={field.value === option}
                        onChange={() => field.onChange(option)}
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.currentCoaching?.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.currentCoaching.message}</p>
                )}
              </div>
            )}
          />

          <Controller
            name="seriousness"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <div>
                <p className="mb-2.5 text-sm font-semibold text-gray-900">
                  How seriously are you looking for WEIGHT LOSS and FITNESS? <span className="text-red-500">*</span>
                </p>
                <div className="space-y-2">
                  {SERIOUSNESS.map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                    >
                      <input
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        checked={field.value === option}
                        onChange={() => field.onChange(option)}
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.seriousness?.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.seriousness.message}</p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
          <Target className="h-5 w-5 text-emerald-600" />
          Budget Plan
        </h3>

        <Controller
          name="budget"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <div>
              <p className="mb-2.5 text-sm font-semibold text-gray-900">
                What is your budget for a monthly weight loss + fitness plan with 1-1 support? <span className="text-red-500">*</span>
                <span className="block mt-1 text-xs font-normal text-gray-500">
                  (The cost is inclusive of Meal plan, workout, nutrition, 1-1 guidance and Community Support)
                </span>
              </p>
              <div className="space-y-2">
                {BUDGET.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                  >
                    <input
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      checked={field.value === option}
                      onChange={() => field.onChange(option)}
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {errors.budget?.message && (
                <p className="mt-1.5 text-xs text-red-500">{errors.budget.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
          {...register("terms", { required: true })}
        />
        <label htmlFor="terms" className="text-sm text-gray-500">
          I agree to the terms and conditions and understand that the registration fee of ₹99 is non-refundable.
        </label>
      </div>
      {errors.terms && (
        <p className="text-xs text-red-500 -mt-4">You must agree to the terms</p>
      )}

      <Button type="submit" size="lg" className="w-full" loading={isSubmitting}>
        Proceed to Payment — ₹99
      </Button>
    </form>
  );
};
