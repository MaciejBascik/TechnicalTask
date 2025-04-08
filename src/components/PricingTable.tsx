"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

const plans = [
  {
    name: "START",
    price: 19,
    features: ["2 GB of hosting space", "14 days of free backups"],
    unavailable: ["Social integrations", "Advanced client billing"],
    buttonStyle: "border border-gray-300 text-[#1E0E62]",
    bgHeader: "bg-white",
    textColor: "text-[#1E0E62]",
    descriptionColor: "text-[#15143966]",
    border: "border-2 border-gray-200",
  },
  {
    name: "ENTERPRISE",
    price: 49,
    features: [
      "2 GB of hosting space",
      "14 days of free backups",
      "Social integrations",
    ],
    unavailable: ["Advanced client billing"],
    buttonStyle: "bg-[#25DAC5] text-white",
    bgHeader: "bg-[#2F1893]",
    textColor: "text-white",
    isHighlighted: true,
    descriptionColor: "text-[#FFFFFF]",
    border: "border-none",
  },
  {
    name: "ENTERPRISE",
    price: 99,
    features: [
      "2 GB of hosting space",
      "14 days of free backups",
      "Social integrations",
      "Advanced client billing",
    ],
    unavailable: [],
    buttonStyle: "border border-gray-300 text-[#1E0E62]",
    bgHeader: "bg-white",
    textColor: "text-[#1E0E62]",
    border: "border-2 border-gray-200",
    descriptionColor: "text-[#15143966]",
  },
];

export function PricingTable() {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 text-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4">
          Simple & flexible pricing built <br />
          for everyone
        </h2>
        <p className="text-gray-500 mb-12">
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={clsx(
              "w-full max-w-xs rounded-2xl  flex flex-col justify-between bg-white"
            )}
          >
            <div
              className={clsx(
                "rounded-xl px-8 py-12",
                plan.bgHeader,
                plan.textColor,
                plan.border
              )}
            >
              <h3 className="text-sm font-bold uppercase mb-6 tracking-widest">
                {plan.name}
              </h3>
              <div className="flex justify-center items-start gap-2 mb-4 py-3">
                <div className="flex items-start">
                  <span className="text-sm mr-2">$</span>
                  <span className="text-5xl font-bold ml-1">{plan.price}</span>
                </div>
                <div className="text-left text-sm leading-tight mt-1 ml-3">
                  <p>per user</p>
                  <p>per month</p>
                </div>
              </div>

              <p className={clsx("text-sm px-6", plan.descriptionColor)}>
                All the features you need to keep your personal files safe,
                accessible, and easy to share.
              </p>
            </div>

            <div className="px-14 py-8">
              <ul className="space-y-3 text-left text-sm">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[#25DAC5]"
                  >
                    <Check size={18} />{" "}
                    <span className="text-[#15143966]">{feature}</span>
                  </li>
                ))}
                {plan.unavailable.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-200 ml-[26px]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={clsx(
                  "mt-8 w-fit px-11 py-3 rounded-full text-md",
                  plan.buttonStyle
                )}
              >
                Start Free Trial
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
