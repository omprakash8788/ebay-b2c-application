
import { assets } from "../assets/assets";

const policies = [
  {
    icon: assets.exchange_icon,
    title: "Easy Exchange",
    description:
      "Shop with confidence with our hassle-free exchange policy.",
    detail: "7-day easy exchanges",
  },
  {
    icon: assets.quality_icon,
    title: "Premium Quality",
    description:
      "Carefully selected products made for comfort, quality, and style.",
    detail: "Quality you can trust",
  },
  {
    icon: assets.support_img,
    title: "Dedicated Support",
    description:
      "Our support team is here to help you with every step of your order.",
    detail: "We're here to help",
  },
];

const OurPolicy = () => {
  return (
    <section className="w-full bg-gray-100 rounded px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      {/* Section heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
          The Promise We Make
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Shopping, made better.
        </h2>

        <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
          More than just fashion. Enjoy a shopping experience built
          around quality, convenience, and care.
        </p>
      </div>

      {/* Policy cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {policies.map((policy) => (
          <div
            key={policy.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/60 sm:p-8"
          >
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gray-50 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 transition-colors duration-300 group-hover:bg-gray-900">
                <img
                  src={policy.icon}
                  alt=""
                  className="h-7 w-7 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>

              {/* Card content */}
              <h3 className="text-lg font-semibold text-gray-900">
                {policy.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-gray-500">
                {policy.description}
              </p>

              {/* Bottom label */}
              <div className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-700">
                  ✓
                </span>

                <span className="text-xs font-medium text-gray-700">
                  {policy.detail}
                </span>

                <span className="ml-auto text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gray-900">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;
