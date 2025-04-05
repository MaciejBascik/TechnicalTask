"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { simulateRequest } from "@/utils/simulateRequest";
import { useAuthStore } from "@/store/auth";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  agree: z
    .boolean()
    .refine((val) => val, { message: "You must agree to terms." }),
});

type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const logIn = useAuthStore((s) => s.logIn);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await simulateRequest(data.email, data.password);
      logIn();
      toast.success("Zalogowano!");
    } catch (e: any) {
      toast.error(e.message || "Logowanie nieudane.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-white p-10 rounded-xl shadow-xl w-full max-w-md "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-4xl font-bold text-center text-indigo-900">
        Sign Up Now
      </h2>
      <div className="w-full max-w-sm min-w-[200px] mt-3 px-10">
        <input
          {...register("email")}
          placeholder="Your email"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 rounded-full "
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder="Your password"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-slate-200 border-2 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 rounded-full mt-5"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <div className="inline-flex items-center my-6">
          <label className="flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#25DAC5] checked:border-[#25DAC5]"
              {...register("agree")}
              id="check1"
            />

            <span className="absolute text-[#1E0E62] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <p className="text-[#15143966] text-xs ml-2">
            I agree to the Terms of Service.
          </p>
        </div>

        {errors.agree && (
          <p className="text-red-500 text-sm">{errors.agree.message}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary bg-[#482BE7] w-full p-3 rounded-4xl mb-3"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <div className="py-3 flex items-center text-sm text-gray-400 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
          <p className="text-gray-400">or</p>
        </div>
        <a href="x.com">
          <button
            type="submit"
            className="btn-primary bg-[#1DA1F2] w-full p-3 rounded-4xl my-3"
          >
            Login via Twitter
          </button>
        </a>
      </div>

      <div className="text-center text-sm text-gray-500">
        Do you have an Account?{" "}
        <span className="text-[#25DAC5] cursor-pointer">Sign In</span>
      </div>
    </motion.form>
  );
}
