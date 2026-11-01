import type { FormEvent } from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    console.log("Subscribed email:", email);

    e.currentTarget.reset();
  };

  return (
    <section className="mx-4 my-16 overflow-hidden rounded-xl bg-gray-950 px-5 py-14 text-white sm:mx-6 sm:my-20 sm:px-10 sm:py-20 lg:mx-12">
      <div className="mx-auto max-w-3xl text-center">
        {/* Label */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
          Stay in Style
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Get 30% Off Your First Order
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Subscribe to our newsletter and be the first to discover new
          collections, exclusive offers, and the latest trends.
        </p>

        {/* Subscription form */}
        <form
          onSubmit={onSubmitHandler}
          className="mx-auto mt-9 flex max-w-xl flex-col gap-3 rounded bg-white p-2 sm:flex-row sm:items-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            autoComplete="email"
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="rounded-lg bg-gray-950 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700 active:scale-95"
          >
            Subscribe Now
          </button>
        </form>

        {/* Footer note */}
        <p className="mt-5 text-xs text-gray-500">
          By subscribing, you agree to receive promotional emails. Unsubscribe
          anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsLetterBox;
