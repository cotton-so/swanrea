import Image from "next/image";
import BookingForm from "./booking-form";
import {
  ThermometerIcon,
  CurrencyIcon,
  BoltIcon,
  SoundWaveIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  GlobeIcon,
  AwardIcon,
  PhoneIcon,
  MapPinIcon,
  MailIcon,
} from "./icons";

const problems = [
  {
    icon: ThermometerIcon,
    title: "Not heating or cooling properly?",
    description:
      "Reduced performance can be caused by low refrigerant, dirty filters, or an aging unit.",
    diy: [
      "Clean or replace your filters (every 2-4 weeks in winter)",
      "Make sure the outdoor unit isn't blocked by plants or debris",
      "Check that your unit is set to the correct mode (heat/cool/auto)",
    ],
    callUs:
      "If it's still not warming up after cleaning, you may have a refrigerant leak or compressor issue.",
  },
  {
    icon: CurrencyIcon,
    title: "Power bills too high?",
    description:
      "An inefficient or incorrectly sized unit can spike your electricity costs.",
    diy: [
      "Set the temperature to 18-21°C instead of blasting it at 25°C+",
      "Use the timer function so it's not running all night",
      "Clean filters regularly, as a clogged filter makes the unit work harder",
    ],
    callUs:
      "If your bills are still high, your unit may be undersized for the room or losing efficiency with age.",
  },
  {
    icon: BoltIcon,
    title: "Unit won't turn on?",
    description:
      "Electrical faults, faulty remote controls, or PCB board issues can prevent startup.",
    diy: [
      "Replace the remote control batteries",
      "Check your circuit breaker hasn't tripped",
      "Turn the unit off at the wall, wait 30 seconds, then turn it back on",
    ],
    callUs:
      "If it still won't start, there may be a PCB board fault or wiring issue that needs a professional.",
  },
  {
    icon: SoundWaveIcon,
    title: "Strange noises from your unit?",
    description:
      "Rattling, buzzing, or grinding sounds often signal worn parts or installation issues.",
    diy: [
      "Check if the front panel or filter cover is loose and clip it back in",
      "Clear any leaves or debris from around the outdoor unit",
      "Listen to whether the noise is from the indoor or outdoor unit",
    ],
    callUs:
      "Grinding or screeching sounds usually mean worn bearings or a failing fan motor.",
  },
];

const services = [
  {
    title: "Installation",
    description:
      "New heat pump and air conditioning installation for homes and businesses. We help you choose the right size and brand, then install it to the highest standard.",
    features: [
      "Free on-site assessment",
      "All major brands",
      "Clean, tidy installation",
      "Warranty-backed work",
    ],
  },
  {
    title: "Servicing & Repairs",
    description:
      "Regular maintenance keeps your heat pump or air conditioner running efficiently. We service all brands and fix any issue, big or small.",
    features: [
      "Full system health check",
      "Filter cleaning & replacement",
      "Refrigerant top-up",
      "Fault diagnosis & repair",
    ],
  },
];

const areas = [
  "North Shore",
  "Albany",
  "Hibiscus Coast",
  "Orewa",
  "Whangaparaoa",
  "Browns Bay",
  "Takapuna",
  "Milford",
  "Auckland CBD",
  "West Auckland",
  "East Auckland",
  "South Auckland",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <Image
            src="/logo-dark.png"
            alt="SWANREA Heat Pump & Air Conditioning"
            width={200}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#problems" className="hover:text-brand-red transition">
              Common Issues
            </a>
            <a href="#services" className="hover:text-brand-red transition">
              Services
            </a>
            <a href="#about" className="hover:text-brand-red transition">
              About
            </a>
            <a href="#areas" className="hover:text-brand-red transition">
              Areas
            </a>
            <a
              href="#booking"
              className="bg-brand-red text-white px-5 py-2 rounded-lg hover:bg-brand-red-dark transition"
            >
              Get in Touch
            </a>
          </div>
          <a
            href="#booking"
            className="md:hidden bg-brand-red text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden min-h-[600px] md:min-h-[700px]">
        {/* Background texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/bg-texture.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/90 to-warm-50/95" />
        {/* Hero image - mobile: full background, desktop: right side */}
        <div className="absolute inset-0 md:left-1/2">
          <Image
            src="/hero-placeholder.jpg"
            alt="SWANREA technician"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Mobile: stronger overlay so text is readable */}
          <div className="absolute inset-0 bg-warm-50/80 md:bg-transparent" />
          {/* Desktop: gradient fade into left content */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-warm-50 via-warm-50/60 to-transparent" />
          {/* Desktop: fade to bottom */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-warm-50 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Auckland&apos;s trusted
              <br />
              <span className="text-brand-red">HVAC experts</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Heat pump and air conditioning installation, servicing, and repairs across Auckland.
              Specialising in North Shore, Albany, and Hibiscus Coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center bg-brand-red text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-brand-red-dark transition shadow-lg shadow-brand-red/25"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+6421427713"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 text-lg font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:text-brand-red transition"
              >
                <PhoneIcon className="!w-5 !h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problems / Pain Points (SEO section) */}
      <section id="problems" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Having heating or cooling problems?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These are the most common issues Auckland homeowners face. We fix
              them all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center p-2 mb-4">
                  <problem.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 text-brand-orange">
                      <LightbulbIcon />
                    </div>
                    <p className="text-sm font-semibold text-gray-700">
                      Try this first
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {problem.diy.map((tip) => (
                      <li
                        key={tip}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-brand-orange mt-0.5">
                          &#8226;
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-brand-red font-semibold shrink-0">
                    Still not fixed?
                  </span>
                  <span className="text-gray-500">{problem.callUs}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#booking"
              className="inline-flex items-center text-brand-red font-semibold text-lg hover:underline"
            >
              Describe your problem and we&apos;ll get back to you
              <span className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              From new installations to ongoing maintenance, we&apos;ve got you
              covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className="h-2 bg-gradient-to-r from-brand-red to-brand-orange" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red text-xs font-bold">
                          &#10003;
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why SWANREA?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              With years of experience across Australia and New Zealand, SWANREA
              brings international-standard workmanship to Auckland homes. We are
              fully licensed, insured, and committed to getting the job done
              right the first time.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center p-2.5 mx-auto mb-3">
                  <ShieldCheckIcon />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Licensed &amp; Insured
                </h3>
                <p className="text-gray-500 text-sm">
                  Fully qualified and compliant with NZ regulations
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center p-2.5 mx-auto mb-3">
                  <GlobeIcon />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  International Experience
                </h3>
                <p className="text-gray-500 text-sm">
                  Honed skills across Australia before settling in Auckland
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center p-2.5 mx-auto mb-3">
                  <AwardIcon />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Quality Guaranteed
                </h3>
                <p className="text-gray-500 text-sm">
                  Every job backed by our workmanship warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our customers say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "Albany",
                text: "Alaivanu was professional and on time. He explained everything clearly and fixed our heat pump the same day. Highly recommend!",
              },
              {
                name: "James T.",
                location: "Browns Bay",
                text: "Great service from start to finish. New heat pump installed cleanly and efficiently. Very happy with the result.",
              },
              {
                name: "Rachel K.",
                location: "Hibiscus Coast",
                text: "Our air con was making a terrible noise. SWANREA diagnosed and repaired it quickly. Fair pricing and friendly service.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 text-brand-orange mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="text-sm">
                  <span className="font-semibold text-gray-900">{review.name}</span>
                  <span className="text-gray-400"> &middot; {review.location}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            * Placeholder reviews for mockup purposes. Real testimonials coming soon.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-gray-600 text-lg">
              Based on the North Shore, serving all of Auckland.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, i) => (
              <span
                key={area}
                className={`px-5 py-2.5 rounded-full text-sm font-medium ${
                  i < 3
                    ? "bg-brand-red text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/bg-texture.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        <div className="relative max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 text-lg">
              Fill in the form below and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/logo-light.png"
                alt="SWANREA"
                width={160}
                height={38}
                className="mb-4"
              />
              <p className="text-sm">
                Heat pump and air conditioning installation, servicing, and
                repairs across Auckland.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#problems"
                    className="hover:text-white transition"
                  >
                    Common Issues
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-gray-500"><MapPinIcon /></span>
                  North Shore, Auckland
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-gray-500"><PhoneIcon /></span>
                  <a href="tel:+6421427713" className="hover:text-white transition">021 427 713</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-gray-500"><MailIcon /></span>
                  <a href="mailto:info@swanrea.com" className="hover:text-white transition">info@swanrea.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs">
            <p>
              &copy; {new Date().getFullYear()} SWANREA Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
