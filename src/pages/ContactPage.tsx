import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-24">
      <section className="w-full px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm tracking-widest mb-2">CONTACT</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">LET'S TALK</h1>
          <p className="text-gray-400 leading-relaxed mb-8">
            Share a few details about your project and I will get back to you
            with availability and next steps.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-sm text-gray-400 mb-2">Email</p>
              <p className="text-white">catamaran@gmail.com</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-sm text-gray-400 mb-2">Phone</p>
              <p className="text-white">+00 000000000</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
