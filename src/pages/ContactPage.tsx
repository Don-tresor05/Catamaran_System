import {
  ArrowUpRight,
  Instagram,
  Mail,
  Phone,
} from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-24">
      <section className="w-full px-4 sm:px-6 pb-16 md:pb-20">
        <div className="w-[90%] mx-auto">
          <div className="mb-10 rounded-[32px] border border-white/10 bg-neutral-950 p-4 sm:p-6 md:p-8">
            <div className="mb-4 flex h-8 w-full rounded-full bg-gradient-to-r from-neutral-200 via-white to-neutral-300/90 sm:mb-6 sm:h-12" />

            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.9fr]">
              <div className="rounded-[28px] bg-black px-5 py-6 sm:px-8 sm:py-8">
                <p className="mb-3 text-xs tracking-[0.28em] text-gray-500">
                  CONTACT ME
                </p>
                <h1 className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
                  GET IN TOUCH WITH ME
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                  Step into a world of timeless photography with Catamaran
                  Studio. Explore our range of portrait, event, and commercial
                  photography services, each crafted to tell your story with
                  clarity, emotion, and style.
                </p>

                <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10">
                  {/* <img
                    src="/assets/hero/CAT_0515.png"
                    alt="Catamaran Studio landscape preview"
                    className="h-[180px] w-full object-cover sm:h-[240px]"
                  /> */}
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900">
                <img
                  src="/assets/about/about-1.png"
                  alt="Photographer holding a camera"
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3 py-3 backdrop-blur-sm">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="rounded-full bg-white/10 p-2 text-gray-200 transition-colors hover:bg-white/20 hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
                <div className="absolute bottom-4 right-4 max-w-[140px] rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-[10px] tracking-[0.18em] text-gray-300 backdrop-blur-sm sm:text-xs">
                  SCROLL DOWN TO SEND ME A MESSAGE
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-2xl font-semibold text-gray-200 sm:text-4xl">
                  CONTACT INFORMATION
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                  Feel free to reach out through your preferred channel. We are
                  available by phone, email, and social media for bookings,
                  pricing, and project discussions.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="tel:+250788217387"
                  className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <p className="text-xs tracking-[0.22em] text-gray-500">
                    PHONE
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="text-lg text-white">+250 788 217 387</p>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                </a>

                <a
                  href="mailto:catamaranstudio@gmail.com"
                  className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <p className="text-xs tracking-[0.22em] text-gray-500">
                    EMAIL
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="text-lg text-white">catamaranstudio@gmail.com</p>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h2 className="text-2xl font-semibold text-gray-200 sm:text-4xl">
                  SEND ME A MESSAGE
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                  Have a specific inquiry or a session in mind? Use this form to
                  share the essentials and we will get back to you promptly.
                </p>
              </div>

              <form className="grid gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-8 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      First Name
                    </span>
                    <input
                      type="text"
                      placeholder="FIRST NAME"
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      Last Name
                    </span>
                    <input
                      type="text"
                      placeholder="LAST NAME"
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">Email</span>
                    <input
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      placeholder="PHONE NUMBER"
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-3 block text-sm text-gray-400">
                    Your Message
                  </span>
                  <textarea
                    rows={4}
                    placeholder="MESSAGE"
                    className="w-full resize-none border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                  />
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="group inline-flex w-fit items-center gap-3 text-2xl font-semibold tracking-tight text-white"
                  >
                    SEND MESSAGE
                    <span className="flex h-10 w-14 items-center justify-center rounded-full bg-blue-600 transition-colors group-hover:bg-blue-500">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
