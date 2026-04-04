import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowUpRight,
  CalendarDays,
  Instagram,
  Mail,
  Phone,
} from 'lucide-react';
import Footer from '../components/Footer';

type BookingForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  eventDate: string;
  location: string;
  details: string;
};

const initialForm: BookingForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: 'Photoshoot Studio',
  eventDate: '',
  location: '',
  details: '',
};

const bookingServices = [
  'Photoshoot Studio',
  'Wooden Photo Frames',
  'Wedding Coverage',
  'Birthday Shoot',
  'Graduation Photo',
  'Business Card',
  'Wall Watch Clock',
  'Key Chains',
  'White Sublimation Mugs',
  'Crystal Awards',
];

const locationRequiredServices = ['Wedding Coverage', 'Graduation Photo'];
const today = new Date().toISOString().split('T')[0];

export default function ContactPage() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const isEmailJsConfigured = Boolean(publicKey && serviceId && templateId);
  const showLocationField = locationRequiredServices.includes(form.service);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const whatsappNumber = '250784809323';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    if (!isEmailJsConfigured) {
      setStatus({
        type: 'error',
        message:
          'Email sending is not configured yet. Add your EmailJS keys to the Vite environment variables first.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          full_name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          service: form.service,
          event_date: form.eventDate,
          location: form.location,
          details: form.details,
          title: `New booking request for ${form.service}`,
        },
        { publicKey }
      );

      const whatsappMessage = [
        '*New Booking Request*',
        `*Name:* ${form.firstName} ${form.lastName}`,
        `*Email:* ${form.email}`,
        `*Phone:* ${form.phone}`,
        `*Service:* ${form.service}`,
        `*Preferred Date:* ${form.eventDate}`,
        form.location ? `*Location:* ${form.location}` : null,
        `*Details:* ${form.details}`,
      ]
        .filter(Boolean)
        .join('%0A');

      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        '_blank'
      );

      setStatus({
        type: 'success',
        message:
          'Your booking request has been sent successfully. We will get back to you shortly.',
      });
      setForm(initialForm);
    } catch {
      setStatus({
        type: 'error',
        message:
          'Something went wrong while sending your booking request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openDatePicker = () => {
    const input = dateInputRef.current;
    if (!input) return;

    input.focus();

    if ('showPicker' in input) {
      input.showPicker();
    }
  };

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
                    href="https://www.instagram.com/catamaran__studio/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
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
                  href="mailto:catamaranstudio0@gmail.com"
                  className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <p className="text-xs tracking-[0.22em] text-gray-500">
                    EMAIL
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="text-lg text-white">catamaranstudio0@gmail.com</p>
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
                  BOOK A SESSION
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                  Use this booking form to share the key details for your shoot.
                  Once it arrives in our inbox, we can confirm availability,
                  pricing, and the next steps with you.
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-gray-400">
                  Booking requests include your preferred service, date,
                  location, and project notes so we can respond with something
                  useful right away.
                </div>
              </div>

              <form className="grid gap-8" onSubmit={handleSubmit}>
                <div className="grid gap-8 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      First Name
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="FIRST NAME"
                      required
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      Last Name
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="LAST NAME"
                      required
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="EMAIL ADDRESS"
                      required
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="PHONE NUMBER"
                      required
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      Service
                    </span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border-b border-white/10 bg-black pb-3 text-sm text-white outline-none transition-colors focus:border-white/40"
                    >
                      {bookingServices.map((service) => (
                        <option key={service}>{service}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      Preferred Date
                    </span>
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3 transition-colors focus-within:border-white/40">
                      <input
                        ref={dateInputRef}
                        type="date"
                        name="eventDate"
                        value={form.eventDate}
                        onChange={handleChange}
                        min={today}
                        required
                        className="booking-date-input w-full bg-transparent text-sm text-white outline-none [color-scheme:dark]"
                      />
                      <button
                        type="button"
                        onClick={openDatePicker}
                        aria-label="Open calendar"
                        className="text-gray-400 transition-colors hover:text-white"
                      >
                        <CalendarDays className="h-5 w-5" />
                      </button>
                    </div>
                  </label>
                </div>

                {showLocationField && (
                  <label className="block">
                    <span className="mb-3 block text-sm text-gray-400">
                      Location
                    </span>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="CITY / VENUE / AREA"
                      required={showLocationField}
                      className="w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                    />
                  </label>
                )}

                <label className="block">
                  <span className="mb-3 block text-sm text-gray-400">
                    Booking Details
                  </span>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="TELL US ABOUT THE SESSION, NUMBER OF PEOPLE, STYLE, TIMING, OR ANYTHING IMPORTANT"
                    required
                    className="w-full resize-none border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-white/40"
                  />
                </label>

                {!isEmailJsConfigured && (
                  <p className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                    EmailJS keys are missing. Add `VITE_EMAILJS_PUBLIC_KEY`,
                    `VITE_EMAILJS_SERVICE_ID`, and `VITE_EMAILJS_TEMPLATE_ID`
                    to your environment before using this booking form.
                  </p>
                )}

                {status && (
                  <p
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      status.type === 'success'
                        ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-200'
                        : 'border-red-500/20 bg-red-500/10 text-red-200'
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-fit items-center gap-3 text-2xl font-semibold tracking-tight text-white"
                  >
                    {isSubmitting ? 'SENDING BOOKING...' : 'SEND BOOKING'}
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
