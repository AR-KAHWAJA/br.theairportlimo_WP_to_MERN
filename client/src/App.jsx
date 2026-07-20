import { useEffect, useRef, useState } from "react";

const A = "/assets/";

function IconBase({ size = 24, fill = "none", children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function Menu(props) {
  return (
    <IconBase {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </IconBase>
  );
}

function X(props) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </IconBase>
  );
}

function ChevronRight(props) {
  return (
    <IconBase {...props}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

function Car(props) {
  return (
    <IconBase {...props}>
      <path d="M5 17h14M7 17l1.5-5h7L17 17M8 17v1M16 17v1M6 12l2-4h8l2 4" />
    </IconBase>
  );
}

function CalendarCheck(props) {
  return (
    <IconBase {...props}>
      <path d="M7 3v4M17 3v4M4 9h16M5 5h14v15H5zM8 14l2 2 5-5" />
    </IconBase>
  );
}

function CalendarBlank(props) {
  return (
    <IconBase {...props}>
      <path d="M7 3v4M17 3v4M4 9h16M5 5h14v15H5z" />
    </IconBase>
  );
}

function Clock(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}

function Plane(props) {
  return (
    <IconBase {...props}>
      <path d="M2 16l20-7-20-7 5 7-5 7zM7 9h8" />
    </IconBase>
  );
}

function CheckCircle2(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </IconBase>
  );
}

function Utensils(props) {
  return (
    <IconBase {...props}>
      <path d="M6 3v8M9 3v8M6 7h3M14 3v18M18 3c1.5 2 1.5 6 0 8h-4" />
    </IconBase>
  );
}

function Smartphone(props) {
  return (
    <IconBase {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </IconBase>
  );
}

function Mail(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconBase>
  );
}

function Phone(props) {
  return (
    <IconBase {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3 19 19 0 0 1-6-6A19 19 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.5a2 2 0 0 1-.5 1.8L7.7 9.3a16 16 0 0 0 7 7l1.3-1.3a2 2 0 0 1 1.8-.5l2.5.4a2 2 0 0 1 1.7 2z" />
    </IconBase>
  );
}

function MapPin(props) {
  return (
    <IconBase {...props}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

function Users(props) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c1-4 11-4 12 0M16 11a3 3 0 1 0-1-5.8M17 20c.7-2.5 3-3.6 5-3" />
    </IconBase>
  );
}

function Eye(props) {
  return (
    <IconBase {...props}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

function HandCoins(props) {
  return (
    <IconBase {...props}>
      <path d="M3 15h4l4 3h5l4-4M3 11h5l3 3h4M15 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </IconBase>
  );
}

function Gem(props) {
  return (
    <IconBase {...props}>
      <path d="M6 3h12l4 6-10 12L2 9zM2 9h20M7 9l5 12 5-12M6 3l1 6M18 3l-1 6" />
    </IconBase>
  );
}

function Star(props) {
  return (
    <IconBase {...props}>
      <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9" />
    </IconBase>
  );
}

function Facebook(props) {
  return (
    <IconBase {...props}>
      <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" />
    </IconBase>
  );
}

function Instagram(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <path d="M17 7h.01" />
    </IconBase>
  );
}

function MessageCircle(props) {
  return (
    <IconBase {...props}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.3-5A8.5 8.5 0 1 1 21 11.5z" />
    </IconBase>
  );
}

function MinusSquare(props) {
  return (
    <IconBase {...props} fill="currentColor" stroke="none">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="11" width="8" height="2" fill="#ffffff" />
    </IconBase>
  );
}

const BadgeCheck = CheckCircle2;
const Bus = Car;
const CalendarDays = CalendarCheck;
const PackageCheck = CheckCircle2;
const Timer = Clock;

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Customers", href: "/customers/" },
  { label: "Drivers", href: "/drivers/" },
  { label: "Affiliates", href: "/affiliates/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Fleet", href: "/fleet/" },
  { label: "Contact Us", href: "/contact-us/" }
];

const services = [
  {
    title: "One-Way Trips",
    text: "Convenient and reliable rides customized for your everyday travel needs.",
    icon: Car,
    image: "One-Way-trip-image.webp"
  },
  {
    title: "Round Trips",
    text: "Hassle-free transportation with seamless pickups and returns.",
    icon: CalendarCheck,
    image: "Round-trip-image.webp"
  },
  {
    title: "Hourly Trips",
    text: "Flexible ride options are designed for errands, meetings, and personalized travel.",
    icon: Timer,
    image: "hourly-car-image-1024x939.webp"
  },
  {
    title: "Airport Pickups",
    text: "Select from economy, premium, or luxury options to match your comfort and preferences.",
    icon: Plane,
    image: "Airport-Transfer-1-1024x939.webp"
  },
  {
    title: "Package",
    text: "Enjoy prompt, secure package delivery, ensuring every item arrives in perfect condition.",
    icon: PackageCheck,
    image: "package-delivery-1-1024x939.webp"
  },
  {
    title: "Food",
    text: "Discover the convenience of fresh food delivery from your favorite restaurants. On-time!",
    icon: Utensils,
    image: "food-deliver-2-1024x939.webp"
  }
];

const footerOfferings = [
  "One-Way Trips",
  "Round Trips",
  "Hourly Trips",
  "Airport Pickups",
  "Package Deliveries"
];

const homeSlides = [
  {
    highlight: "Start Your Journey",
    title: "with BlinkRide",
    image: "br_hero_image_h1.webp",
    href: "/customers/#welcome",
    button: "Learn more"
  },
  {
    highlight: "Business",
    title: "Smart Solutions\nfor Business",
    image: "bussiness-trip-image-hero-1.webp",
    href: "/customers/#Corporate",
    button: "Learn more"
  },
  {
    highlight: "Family",
    title: "Safe Rides for\nYour Family",
    image: "family_gift_ride_iamge__3_-2.webp",
    href: "/customers/#family_and_friends",
    button: "Learn More"
  },
  {
    highlight: "Package",
    title: "Fast & Reliable Deliveries",
    image: "Parcel-delivery-BR-1.webp",
    href: "/customers/#deliveries",
    button: "Learn More"
  },
  {
    highlight: "Food",
    title: "Groceries at\nYour Doorstep",
    image: "food-delivery-home-page-hero-1.webp",
    href: "/customers/#deliveries",
    button: "Learn more",
    lightText: true
  },
  {
    highlight: "Kids",
    title: "Safe Rides\nfor Kids",
    image: "kids-hero-section-iamge-1.webp",
    href: "/customers/#family_and_friends",
    button: "Learn more"
  }
];

function parseCounterValue(value) {
  const text = String(value);
  const match = text.match(/^([^0-9-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/);

  if (!match) return null;

  const target = Number(match[2].replaceAll(",", ""));
  if (!Number.isFinite(target)) return null;

  return {
    prefix: match[1],
    target,
    suffix: match[3],
    decimals: (match[2].split(".")[1] || "").length
  };
}

function formatCounterValue(value, parsed) {
  const fixed = parsed.decimals > 0 ? value.toFixed(parsed.decimals) : String(Math.round(value));
  const [whole, fraction] = fixed.split(".");
  const formattedWhole = Number(whole).toLocaleString("en-US");

  return `${parsed.prefix}${formattedWhole}${fraction ? `.${fraction}` : ""}${parsed.suffix}`;
}

function CountUpValue({ value, duration = 1500 }) {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState(() => {
    const parsed = parseCounterValue(value);
    return parsed ? formatCounterValue(0, parsed) : value;
  });

  useEffect(() => {
    const parsed = parseCounterValue(value);
    if (!parsed) {
      setDisplayValue(value);
      return undefined;
    }

    let frameId;
    let observer;
    let cancelled = false;
    hasAnimated.current = false;
    setDisplayValue(formatCounterValue(0, parsed));

    function animate() {
      if (hasAnimated.current || cancelled) return;
      hasAnimated.current = true;

      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        setDisplayValue(value);
        return;
      }

      const startTime = window.performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setDisplayValue(formatCounterValue(parsed.target * eased, parsed));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      }

      frameId = window.requestAnimationFrame(step);
    }

    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      animate();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            animate();
            observer.disconnect();
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(element);
    }

    return () => {
      cancelled = true;
      if (frameId) window.cancelAnimationFrame(frameId);
      if (observer) observer.disconnect();
    };
  }, [duration, value]);

  return (
    <span className="stat-value" ref={elementRef} style={{ "--stat-width": `${String(value).length}ch` }}>
      {displayValue}
    </span>
  );
}

function currentPath() {
  const path = window.location.pathname.replace(/\/$/, "");
  return path || "/";
}

function ButtonLink({ href = "/get-the-app/", children, className = "" }) {
  return (
    <a className={`btn ${className}`} href={href}>
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = currentPath();

  useEffect(() => {
    function updateHeader() {
      setScrolled(window.scrollY > 150);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  function HeaderBar({ className }) {
    return (
      <header className={className}>
        <a className="brand" href="/" aria-label="BlinkRide home">
          <img src={`${A}LOGO-BR-WEBSITE-300x109.webp`} alt="BlinkRide" />
        </a>
        <div className="header-actions">
          <button
            className="icon-btn menu-toggle"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
          <ButtonLink className="header-cta">Get the App</ButtonLink>
        </div>
      </header>
    );
  }

  return (
    <>
      <HeaderBar className="site-header hero-header" />
      <HeaderBar className={`site-header sticky-header ${scrolled ? "headershow" : ""}`} />

      {open && (
        <div className="drawer-backdrop" onClick={() => setOpen(false)}>
          <aside
            className="menu-drawer"
            aria-label="Main navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="icon-btn close-toggle"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <X size={26} />
            </button>
            <nav>
              {navItems.map((item) => {
                const itemPath = item.href.replace(/\/$/, "") || "/";
                return (
                  <a
                    key={item.href}
                    className={path === itemPath ? "active" : ""}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

function Hero({ eyebrow, title, highlight, image, children, stats }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${A}${image})` }}>
      <div className="hero-shade" />
      <div className="hero-content">
        {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
        <h1>
          {title}
          {highlight && <span>{highlight}</span>}
        </h1>
        {children}
        {stats && (
          <div className="hero-stats">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>
                  <CountUpValue value={item.value} />
                </strong>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % homeSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused]);

  function goTo(index) {
    setActive((index + homeSlides.length) % homeSlides.length);
  }

  return (
    <section
      className="hero-slider"
      aria-label="BlinkRide featured services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="slides-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {homeSlides.map((slide) => (
          <article
            className={`home-slide ${slide.lightText ? "light-slide" : ""}`}
            key={slide.image}
            style={{ backgroundImage: `url(${A}${slide.image})` }}
          >
            <div className="slide-shade" />
            <div className="slide-inner">
              <div className="slide-copy">
                <span className="slide-highlight">{slide.highlight}</span>
                <h1>
                  {slide.title.split("\n").map((line) => (
                    <span className="slide-title-line" key={line}>
                      {line}
                    </span>
                  ))}
                </h1>
                <a className="slide-button" href={slide.href}>
                  {slide.button}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className="slider-arrow prev" aria-label="Previous slide" onClick={() => goTo(active - 1)}>
        <ChevronRight size={28} />
      </button>
      <button className="slider-arrow next" aria-label="Next slide" onClick={() => goTo(active + 1)}>
        <ChevronRight size={28} />
      </button>
      <div className="slider-dots" aria-label="Slide navigation">
        {homeSlides.map((slide, index) => (
          <button
            key={slide.image}
            className={index === active ? "active" : ""}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}

function SectionIntro({ chip, title, text, dark = false }) {
  return (
    <div className={`section-intro ${dark ? "section-intro-dark" : ""}`}>
      {chip && <span className="chip">{chip}</span>}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
}

function ServiceGrid({ compact = false }) {
  return (
    <div className={`service-grid ${compact ? "compact" : ""}`}>
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <article className="service-card" key={service.title}>
            {service.image ? (
              <img src={`${A}${service.image}`} alt="" />
            ) : (
              <div className="card-symbol">
                <Icon size={34} />
              </div>
            )}
            <div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function SplitPanel({
  eyebrow,
  title,
  text,
  image,
  imageAlt = "",
  reverse = false,
  bullets,
  steps,
  buttonText,
  blank = false
}) {
  return (
    <article className={`split-panel ${reverse ? "reverse" : ""}`}>
      <div className={`split-media ${blank ? "blank-media" : ""}`}>
        {!blank && image && <img src={`${A}${image}`} alt={imageAlt} />}
      </div>
      <div className="split-copy">
        {eyebrow && <span className="line-label">{eyebrow}</span>}
        {title && <h3>{title}</h3>}
        {text && <p>{text}</p>}
        {bullets && (
          <ul className="check-list">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {steps && (
          <ol className="step-list">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <small>{step.text}</small>
                </div>
              </li>
            ))}
          </ol>
        )}
        {buttonText && <ButtonLink className="outline-btn">{buttonText}</ButtonLink>}
      </div>
    </article>
  );
}

function DarkFeatureBand({ title, text, items }) {
  return (
    <section className="dark-band">
      <SectionIntro dark title={title} text={text} />
      <div className="dark-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article className="dark-card" key={item.title}>
              <Icon size={36} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={`${A}LOGO-BR-WEBSITE-300x109.webp`} alt="BlinkRide" />
          <p>
            BlinkRide delivers reliable, safe, and modern ride-hailing solutions
            customized to your everyday needs. From quick trips to seamless
            transfers, we ensure comfort, convenience, and transparency every
            step of the way.
          </p>
          <ButtonLink>Get the App</ButtonLink>
          <div className="socials" aria-label="Social links">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/19876543210" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        <FooterList title="Our Offerings" items={footerOfferings} />
        <FooterList
          title="Quick Links"
          items={["About us", "Services", "Customers", "Drivers", "Affiliates"]}
        />
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <MapPin size={16} /> 123 Transport Lane, Metropolis
          </p>
          <p>
            <Mail size={16} /> support@blinkride.com
          </p>
          <p>
            <Phone size={16} /> (987) 654-3210
          </p>
          <p>
            <Clock size={16} /> Mon-Fri 9:00AM - 5:00PM
          </p>
        </div>
      </div>
      <div className="copyright">&copy; 2026 All Rights Reserved.</div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div className="footer-list">
      <h3>{title}</h3>
      {items.map((item) => (
        <a href={`/${item.toLowerCase().replaceAll(" ", "-")}/`} key={item}>
          <ChevronRight size={15} />
          {item}
        </a>
      ))}
    </div>
  );
}

function ReservationForm() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    date: "",
    time: "",
    pickup: "",
    dropoff: "",
    name: "",
    phone: "",
    email: ""
  });

  async function submit(event) {
    event.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setStatus(response.ok ? "Request received." : "Please complete the required fields.");
    } catch {
      setStatus("The request could not be sent.");
    }
  }

  return (
    <form className="reservation-form" onSubmit={submit}>
      <div className="mini-row">
        <input
          placeholder="Prefered Date"
          value={form.date}
          onChange={(event) => setForm({ ...form, date: event.target.value })}
        />
        <input
          placeholder="Prefered Time"
          value={form.time}
          onChange={(event) => setForm({ ...form, time: event.target.value })}
        />
      </div>
      <input
        placeholder="Pick up"
        value={form.pickup}
        onChange={(event) => setForm({ ...form, pickup: event.target.value })}
      />
      <input
        placeholder="Drop off"
        value={form.dropoff}
        onChange={(event) => setForm({ ...form, dropoff: event.target.value })}
      />
      <input
        placeholder="Name"
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
      />
      <div className="mini-row">
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />
      </div>
      <button type="submit">Send</button>
      {status && <small className="form-status">{status}</small>}
    </form>
  );
}

function BookingClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      setTime(
        new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        })
      );
    }

    updateTime();
    const timer = window.setInterval(updateTime, 60000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="booking-clock" aria-label="Current time">
      <Clock size={14} />
      <span>{time}</span>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroSlider />
      <main>
        <section className="section">
          <SectionIntro chip="Services" title="One app, All your transportation needs" />
          <ServiceGrid />
        </section>

        <section className="section">
          <SectionIntro chip="Customer" title="Where Safety Leads." />
          <SplitPanel
            image="Customer-Security.webp"
            eyebrow="Experience Unmatched Safety"
            title="Ride with Confidence and Peace of Mind"
            text="Safety is non-negotiable. Your safety is our top priority, every ride, every time."
            bullets={[
              "Verified drivers with strict background checks.",
              "Real-time trip tracking and live ride monitoring.",
              "24/7 emergency support for your safety at every step."
            ]}
            buttonText="Get the App"
          />
        </section>

        <section className="section">
          <SectionIntro chip="Book Now" title="Plan for later" />
          <div className="booking-card">
            <div className="booking-art">
              <h3>Fast, Easy Reservations Request</h3>
              <BookingClock />
              <ReservationForm />
            </div>
            <div className="benefits">
              <h3>Benefits</h3>
              <p>
                <CalendarBlank size={16} /> Choose your exact pickup time up to 90 days in advance.
              </p>
              <p>
                <Clock size={16} /> Extra wait time included to meet your ride.
              </p>
              <p>
                <MinusSquare size={16} /> Cancel at no charge up to 60 minutes in advance.
              </p>
            </div>
          </div>
        </section>

        <section className="stats-band">
          <SectionIntro
            dark
            title="Complete Transportation Solutions"
            text="We provide reliable rides, multiple vehicle options, excellent customer service, and 24/7 support."
          />
          <div className="stats-grid">
            {[
              ["10,000", "Happy Rides"],
              ["95%", "Customer Satisfaction"],
              ["5,000+", "Vehicles Available"],
              ["365", "24/7 Support Team"]
            ].map(([value, label]) => (
              <div key={label}>
                <strong>
                  <CountUpValue value={value} />
                </strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionIntro chip="Driver" title="Drive Smart. Earn Big." />
          <SplitPanel
            image="Driver-section.webp"
            eyebrow="Drive More. Earn More. Stay in Control."
            title="Drive on your schedule and earn without limits."
            bullets={[
              "Earn more with flexible driving opportunities anytime, anywhere.",
              "Choose rides that fit your schedule and preferences.",
              "Enjoy fast payouts, safe trips, and dedicated driver support anytime."
            ]}
            buttonText="Get the App"
          />
        </section>

        <section className="section affiliate-home">
          <SectionIntro chip="Affiliate" title="Join Our Affiliate Network" />
          <div className="two-col">
            <div>
              <span className="line-label">Partner With BlinkRide</span>
              <h3>Join Our Trusted Affiliate & Partner Network</h3>
              <p>
                Become a part of BlinkRide's growing affiliate network and help shape the future
                of smart, reliable transportation. We partner with providers, airport transfer
                services, travel agencies, and corporate partners to deliver seamless mobility.
              </p>
              <ButtonLink className="outline-btn" href="/affiliates/">
                Discover More
              </ButtonLink>
            </div>
            <div className="blank-media raised" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function GetAppPage() {
  return (
    <>
      <Hero title="Ride Smart Drive Better" highlight="with BlinkRide" image="GET_THE_APP_HERO_IMAGE.webp">
        <div className="hero-actions">
          <ButtonLink className="dark-btn">Get the Customer App</ButtonLink>
          <ButtonLink className="dark-btn">Get the Driver App</ButtonLink>
        </div>
      </Hero>
      <main>
        <section className="section">
          <SectionIntro chip="Get the App" title="Ride or drive with BlinkRide anytime." />
          <SplitPanel
            image="app-in-phone--768x838.webp"
            eyebrow="Drive with BlinkRide"
            title="Download the Customer App"
            text="Book premium rides, track your driver in real time, manage reservations, and enjoy a smooth travel experience with the BlinkRide Customer App."
            buttonText="Get the App"
          />
          <SplitPanel
            reverse
            blank
            eyebrow="Travel with BlinkRide"
            title="Download the Driver App"
            text="Accept ride requests, manage trips, track earnings, and stay connected with passengers through the BlinkRide Driver App."
            buttonText="Get the App"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Hero title="One App," highlight="All travel needs" image="SERVICES-HERO.webp" />
      <main>
        <section className="section">
          <SectionIntro chip="Services" title="One app, All your transportation needs" />
          <ServiceGrid />
        </section>
        <section className="section">
          <SectionIntro chip="Get started" title="How to get started" />
          <SplitPanel
            image="Customer-Security.webp"
            steps={[
              { title: "Download Our App", text: "Enter your phone number and confirm it with the code." },
              { title: "Choose a Service", text: "Select your location and choose the service you want to use." },
              { title: "Book Your Ride", text: "Enter pickup and drop-off location to confirm your ride." },
              { title: "Enjoy Your Trip", text: "Travel safely and comfortably with our trusted drivers." }
            ]}
            title=""
            buttonText="Get App"
          />
        </section>
        <DarkFeatureBand
          title="Why Choose Us?"
          items={[
            { title: "Verified Drivers", text: "Travel with trained and trusted drivers.", icon: BadgeCheck },
            { title: "Easy Booking", text: "Book your trip in just a few seconds.", icon: Smartphone },
            { title: "On-Time Pickup", text: "We arrive on time, every time.", icon: Timer },
            { title: "Comfortable Rides", text: "A clean, smooth, and relaxing journey.", icon: Car }
          ]}
        />
      </main>
      <Footer />
    </>
  );
}

function ContactPage() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "General Inquiry",
    message: ""
  });

  async function submit(event) {
    event.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setStatus(response.ok ? "Message sent." : "Please complete the required fields.");
    } catch {
      setStatus("The message could not be sent.");
    }
  }

  return (
    <>
      <Hero title="We're Here" highlight="to Help" image="contact-us-page-hero-section.webp" />
      <main>
        <section className="section">
          <SectionIntro
            chip="Contact us"
            title="Get in Touch"
            text="Discover our range of vehicles designed for comfort and efficiency."
          />
          <div className="contact-card">
            <div>
              <ContactLine icon={Mail} title="Email Us" text="You can reach us via email for any inquiries." value="support@blinkride.com" />
              <ContactLine icon={Phone} title="Call Us" text="Feel free to reach us by phone anytime." value="(987) 654-3210" />
              <ContactLine icon={MapPin} title="Our Office" text="123 Transport Ave, Citytown, Countryland" />
            </div>
            <div className="blank-media" />
          </div>
        </section>
        <section className="section">
          <SectionIntro
            chip="Reach Out"
            title="Connect With Us"
            text="If you have questions or need assistance, we're here to help you out."
          />
          <div className="form-split">
            <form className="contact-form" onSubmit={submit}>
              <h3>Get in Touch</h3>
              <div className="mini-row">
                <input placeholder="Full Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
                <input placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
              </div>
              <input placeholder="Phone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
              <select value={form.topic} onChange={(event) => setForm({ ...form, topic: event.target.value })}>
                <option>General Inquiry</option>
                <option>Ride Support</option>
                <option>Driver Support</option>
                <option>Affiliate Partnership</option>
              </select>
              <textarea placeholder="Type your message here" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
              <button type="submit">Submit</button>
              {status && <small className="form-status">{status}</small>}
            </form>
            <img src={`${A}contact-us-1024x555.webp`} alt="BlinkRide support specialist" />
          </div>
        </section>
        <section className="section">
          <SectionIntro
            chip="FAQs"
            title="Frequently Asked Questions"
            text="Explore the answers to your common questions about our services and processes."
          />
          <div className="faq-layout">
            <img src={`${A}iamge-customer-app-mobile-screen-939x1024.webp`} alt="BlinkRide customer app" />
            <FAQList
              items={[
                ["How do I book a ride?", "Use the app, choose your pickup and drop-off, select a vehicle, and confirm."],
                ["What payment methods do you accept?", "Card and account payment options can be handled from your BlinkRide profile."],
                ["Is your service available in my area?", "Availability depends on active local drivers and partner fleets."],
                ["What if I need to cancel my ride?", "Scheduled rides can be canceled before the cutoff shown in the app."],
                ["How do you ensure driver safety?", "Drivers are verified and rides can be monitored in real time."]
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactLine({ icon: Icon, title, text, value }) {
  return (
    <div className="contact-line">
      <Icon size={26} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        {value && <strong>{value}</strong>}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <Hero title="Effortless Travel Solutions at" highlight="Your Fingertips" image="about-hero-iamge-3.webp" />
      <main>
        <section className="section">
          <SectionIntro
            chip="BlinkRide's Story"
            title="Explore Our Journey"
            text="From a simple idea to a growing mobility platform, our journey is driven by innovation and reliability. We continue to evolve, improving our services to deliver a seamless and trusted experience every day."
          />
        </section>
        <section className="section">
          <SectionIntro chip="Mission" title="Our Mission" />
          <div className="two-col">
            <div>
              <h3>Mission That Moves Us</h3>
              <p>
                At BlinkRide, our mission is to transform everyday transportation into a fast,
                reliable, and seamless experience. We aim to make mobility simple, safe, and
                accessible for everyone through smart technology and dependable service.
              </p>
              <ul className="check-list">
                <li>Deliver fast and reliable transportation solutions</li>
                <li>Ensure safety and security in every ride</li>
                <li>Maintain transparent and fair pricing</li>
                <li>Provide consistent, high-quality customer experience</li>
                <li>Continuously innovate to improve convenience and efficiency</li>
              </ul>
            </div>
            <img className="rounded-media" src={`${A}our-mission-300x275.webp`} alt="Team mission" />
          </div>
        </section>
        <section className="section">
          <SectionIntro chip="Vision" title="Our Vision" />
          <SplitPanel
            reverse
            blank
            title="Our Vision for the Future"
            text="Our vision is to become a leading name in smart mobility by setting new standards in convenience, reliability, and innovation."
            bullets={[
              "Become a trusted leader in modern transportation solutions",
              "Expand services to meet evolving customer needs",
              "Leverage technology to create smarter mobility experiences",
              "Maintain excellence in service quality and reliability",
              "Build long-term value for customers, partners, and communities"
            ]}
          />
        </section>
        <section className="section">
          <SectionIntro chip="Why us?" title="Why BlinkRide?" />
          <SplitPanel
            blank
            title="Why choose BlinkRide?"
            text="BlinkRide stands out with reliable and innovative services that cater to your every transportation need."
            bullets={[
              "Convenient app-based platform for easy bookings.",
              "Real-time tracking ensures your ride is just a tap away.",
              "Safety measures that prioritize your well-being.",
              "Transparent pricing with no hidden fees.",
              "Reliable service that you can count on, day or night.",
              "Options for every need: rides, food delivery, and more."
            ]}
          />
        </section>
        <CTA title="Join BlinkRide for Comfortable Journeys" button="Get the App" />
      </main>
      <Footer />
    </>
  );
}

function AffiliatesPage() {
  return (
    <>
      <Hero title="Join Our" highlight="Affiliate Program" image="affilate-page-hero-section.webp" />
      <main>
        <section className="section">
          <SectionIntro chip="Global" title="Global Coverage" />
          <div className="two-col">
            <div>
              <h3>Expanding Global Mobility & Delivery</h3>
              <p>BlinkRide is dedicated to providing seamless transportation and delivery services worldwide.</p>
              <ul className="check-list">
                <li>Affiliate Partnerships help local collaborators join our active network.</li>
                <li>Seamless Rides Everywhere connects customers with trusted direct service.</li>
              </ul>
            </div>
            <img className="rounded-media" src={`${A}affilate-imge-hero-section-2-1024x705.webp`} alt="BlinkRide affiliate partners" />
          </div>
        </section>
        <AlternatingSections
          sections={[
            {
              chip: "Exceptional Service",
              title: "Deliver Exceptional Service",
              heading: "Set New Standards for Excellence",
              text: "At BlinkRide, quality and customer satisfaction are non-negotiable.",
              bullets: ["Strict compliance with quality standards.", "Enhanced customer satisfaction through seamless operations.", "Dedicated support for affiliates."]
            },
            {
              chip: "Transparent System",
              title: "Trust & Accountability at Every Step",
              heading: "Built on Trust",
              text: "Every service is tracked with clear records, fair charges, and transparent support.",
              reverse: true,
              bullets: ["Upfront pricing with no hidden charges", "Real-time ride and delivery tracking", "Detailed trip and payment summaries"]
            },
            {
              chip: "Partner",
              title: "Partner with BlinkRide",
              heading: "Expand Your Business with BlinkRide's Global Network",
              text: "Join BlinkRide's growing affiliate program and connect your fleet to new opportunities.",
              bullets: ["Global Reach", "Seamless Integrations", "Increased Demand"]
            },
            {
              chip: "Tools for Management",
              title: "Advanced Tools for Fleet Management",
              heading: "Streamline Operations with Innovative Solutions",
              text: "BlinkRide equips you with tools to manage fleet operations efficiently.",
              reverse: true,
              bullets: ["Real-time driver and fleet tracking", "Automated billing and transparent revenue sharing", "Reporting and performance analytics"]
            }
          ]}
        />
        <section className="section">
          <SectionIntro chip="Global Opportunities" title="Explore Global Opportunities" text="Join a dynamic affiliate network that spans across continents." />
          <div className="small-card-row">
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
        <section className="section">
          <SectionIntro chip="FAQs" title="Common Questions" />
          <FAQList
            items={[
              ["What is the BlinkRide Affiliate Program?", "A partner program for transportation and fleet owners to receive ride and delivery requests."],
              ["Who can join the affiliate program?", "Fleet operators, delivery partners, travel teams, and mobility businesses."],
              ["What are the benefits of becoming an affiliate?", "More requests, management tools, transparent tracking, and partner support."],
              ["Does BlinkRide provide ride requests to affiliates?", "Yes, active partners can receive requests through the BlinkRide network."],
              ["Are there any hidden fees?", "No, pricing and partner charges are presented transparently."]
            ]}
          />
        </section>
        <CTA title="Partner with Us for a Brighter Future" button="Join Us" />
      </main>
      <Footer />
    </>
  );
}

function DriversPage() {
  return (
    <>
      <Hero title="Experience Seamless" highlight="Driving with us" image="driver-page-hero.webp" />
      <main>
        <section className="section">
          <SectionIntro chip="Driver" title="Drive Beyond Limits with BlinkRide" />
          <div className="two-col">
            <div>
              <h3>Flexible Driving Opportunities with Unlimited Potential</h3>
              <p>
                Join BlinkRide and become part of a professional driver network built for success.
                Earn through rides, deliveries, parcel services, and airport transfers.
              </p>
            </div>
            <img className="rounded-media" src={`${A}driver-page-768x411.webp`} alt="BlinkRide driver" />
          </div>
        </section>
        <AlternatingSections
          sections={[
            {
              chip: "One Way Trips",
              title: "One Platform. Multiple Earning Streams.",
              heading: "Rides, Food & Parcel Deliveries",
              text: "Drivers can earn through one-way transportation, food delivery, and parcel delivery services.",
              image: null
            },
            {
              chip: "Round Trips",
              title: "Double the Journey, Double the Earnings",
              heading: "Round Trip Opportunities",
              text: "BlinkRide provides drivers with profitable round-trip booking opportunities.",
              reverse: true
            },
            {
              chip: "Hourly Trips",
              title: "Drive on Your Time, Your Schedule",
              heading: "Flexible Hourly Ride Opportunities",
              text: "Hourly ride services allow drivers to complete multiple stops and scheduled bookings.",
            },
            {
              chip: "Airport Transfer",
              title: "Professional Airport Rides That Reward Drivers",
              heading: "Airport Pickup & Drop Opportunities",
              text: "Airport transfer services provide drivers with premium ride opportunities.",
              reverse: true
            }
          ]}
        />
        <section className="section">
          <SectionIntro chip="Driver app" title="One app, multiple services" />
          <SplitPanel
            reverse
            blank
            steps={[
              { title: "Step 1: Register", text: "Start by completing the registration form." },
              { title: "Step 2: Self Training", text: "Engage in our driver onboarding materials." },
              { title: "Step 3: Drive", text: "Once training is complete, you are ready to hit the road." }
            ]}
            title=""
          />
        </section>
        <section className="pricing-band">
          <div className="pricing-lead">
            <div className="ring" />
            <h2>Transparent Pricing for Peace of Mind</h2>
          </div>
          <div className="pricing-grid">
            {[
              { title: "Transparent Pricing", icon: Eye, text: "Know exactly what you earn with upfront details." },
              { title: "Flexible Hours", icon: Clock, text: "Work on your schedule, wherever your drive takes you." },
              { title: "Supportive Community", icon: Users, text: "Join a network that respects drivers." },
              { title: "Empowerment and Growth", icon: HandCoins, text: "Access steady opportunities." }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={26} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section className="section">
          <SectionIntro chip="Testimonials" title="Rated by Our Valued Customers" />
          <Testimonials />
        </section>
        <CTA title="Start Your Driving Journey Today" button="Get the App" />
      </main>
      <Footer />
    </>
  );
}

function CustomersPage() {
  return (
    <>
      <Hero title="Exceptional Services" highlight="Every Customer, Every Ride" image="customer-page-hero-section-1.webp" />
      <main>
        <section className="section">
          <SectionIntro chip="Trust & Safety" title="Safe Journeys Start Here" />
          <div className="two-col">
            <div>
              <h3>Built on Safety, Transparency & Reliability</h3>
              <p>
                Customer trust is at the center of everything we do. BlinkRide maintains strict
                driver verification, transparent pricing, real-time ride tracking, and secure
                communication.
              </p>
            </div>
            <img className="rounded-media" src={`${A}Customer-Security.webp`} alt="Secure BlinkRide passenger" />
          </div>
        </section>
        <section className="section">
          <SectionIntro chip="One Way Trips" title="One Destination. Endless Convenience." />
          <SplitPanel
            image="one-way-trip-customer-page.webp"
            title="Reliable Rides for Everyday"
            text="Convenient and reliable rides customized for your everyday travel needs."
          />
        </section>
        <section className="dark-band compact-band">
          <SectionIntro dark title="Rides, Food & Deliveries" />
          <div className="white-card-grid">
            {[
              ["Customer Ride", "Enjoy convenient one-way rides customized for your daily needs."],
              ["Food Delivery", "Get your favorite meals delivered quickly and safely."],
              ["Parcel Delivery", "Send and receive parcels with confidence using live tracking."]
            ].map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <AlternatingSections
          sections={[
            {
              chip: "Round Trips",
              title: "Round Trips Made Effortless",
              heading: "Comfortable Rides with Guaranteed Return",
              text: "Round-trip transportation is designed for convenient, comfortable, and flexible returns.",
              reverse: true
            },
            {
              chip: "Hourly Trips",
              title: "Your Time. Your Ride. Your Schedule.",
              heading: "Flexible Hourly Transportation Services",
              text: "Hourly ride services provide complete travel flexibility for meetings, errands, shopping, events, and multiple destinations."
            },
            {
              chip: "Airport Pickup",
              title: "Airport Travel Perfected",
              heading: "Professional Airport Pickup & Drop Services",
              text: "Travel stress-free with airport pickup and drop-off services backed by tracking and trained drivers.",
              reverse: true
            }
          ]}
        />
        <section className="section">
          <SectionIntro chip="Book a Ride" title="How to book a ride" />
          <SplitPanel
            reverse
            blank
            steps={[
              { title: "Enter your trip", text: "Add your pickup and drop-off location." },
              { title: "Choose a driver", text: "Select your preferred driver with confidence." },
              { title: "Confirm your ride", text: "Book instantly and enjoy a smooth journey." },
              { title: "Enjoy Your Trip", text: "Travel safely and comfortably with our trusted drivers." }
            ]}
            title=""
            buttonText="Get App"
          />
        </section>
        <section className="section">
          <SectionIntro chip="Our Offers" title="Discover Our Offerings" text="Explore the range of services designed for families and groups." />
          <MiniCards
            cards={[
              ["Family Rides", "Enjoy comfortable and spacious rides customized for families."],
              ["Group Outings", "Make every group outing memorable with flexible van and shuttle options."],
              ["Corporate Transport", "Ensure timely arrivals for business functions."]
            ]}
          />
        </section>
        <section className="section">
          <SectionIntro chip="Corporate Ride Solutions" title="Efficient and Reliable Transport for Businesses" />
          <MiniCards
            cards={[
              ["Corporate Transfers", "Seamless transportation for employees and clients."],
              ["Airport Services", "Reliable pickup and drop-off to major airports."],
              ["Special Events", "Host events with confidence using professional transport."]
            ]}
          />
        </section>
        <section className="dark-info">
          <div>
            <h2>Real-Time Tracking for Peace of Mind</h2>
            <p>Stay connected to every ride with location updates and service transparency.</p>
          </div>
          <div>
            <h3>Stay Informed</h3>
            <p>Receive live updates as your vehicle arrives and completes the trip.</p>
            <h3>Feel Secure</h3>
            <p>Our tracking system enhances safety by allowing you to view your service in real time.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FleetPage() {
  return (
    <>
      <Hero
        title="Experience Our Premium"
        highlight="Fleet Services"
        image="fleet_hero_iamge.webp"
        stats={[
          { value: "120+", label: "10,000 Happy Rides" },
          { value: "832", label: "98% Customer Satisfaction" },
          { value: "48", label: "500+ Vehicles Available" },
          { value: "24", label: "24/7 Support Team" }
        ]}
      />
      <main>
        <section className="section">
          <SectionIntro chip="Our Fleet" title="Our Fleet Services" />
          <div className="two-col">
            <div>
              <h3>Explore Our Fleet Services</h3>
              <p>
                Discover our wide range of fleet services tailored to meet your transportation
                needs. From personal rides and food delivery to corporate solutions, our vehicles
                are equipped for every situation.
              </p>
            </div>
            <img className="rounded-media" src={`${A}fleet-image.webp`} alt="BlinkRide fleet lineup" />
          </div>
        </section>
        <section className="section">
          <SectionIntro chip="Our Vehicles" title="Explore Our Vehicle Options" />
          <SplitPanel
            blank
            title="Vehicle Options"
            text="Explore our diverse range of vehicles tailored to meet various needs. This section highlights the different types available in our fleet, ensuring you find the right fit for your journey."
          />
        </section>
        <section className="section">
          <SectionIntro chip="Our Fleet" title="Explore Our Vehicle Collection" text="Discover our range of vehicles designed for comfort and efficiency." />
          <div className="fleet-grid">
            {[
              ["Executive Sedan", "Reliable and comfortable transportation designed for everyday travel."],
              ["Luxury Sedan", "Travel in style with premium luxury sedans and first-class service."],
              ["Executive SUV", "Spacious and sophisticated transportation for corporate groups."],
              ["Luxury SUV", "Premium travel in spacious seating and advanced comfort."],
              ["Corporate Shuttle", "Reliable transportation designed for teams and organizations."]
            ].map(([title, text]) => (
              <article key={title}>
                <div className="vehicle-space" />
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tags">
                  <span>Reliable</span>
                  <span>Secure</span>
                  <span>Comfort</span>
                </div>
              </article>
            ))}
            <a className="app-card" href="/get-the-app/">
              Get the App
              <ChevronRight size={38} />
            </a>
          </div>
        </section>
        <DarkFeatureBand
          title=""
          items={[
            { title: "Compact Car Rentals", text: "Ideal for travel with efficient fuel use and smooth driving.", icon: Car },
            { title: "Luxury Executive Cars", text: "Premium vehicles for business professionals.", icon: Gem },
            { title: "Flexible Delivery Options", text: "Reliable delivery services for packages and food.", icon: CalendarCheck },
            { title: "Family Van Services", text: "Spacious interiors and safety features for families.", icon: Bus }
          ]}
        />
      </main>
      <Footer />
    </>
  );
}

function AlternatingSections({ sections }) {
  return (
    <>
      {sections.map((section) => (
        <section className="section slim-section" key={section.title}>
          <SectionIntro chip={section.chip} title={section.title} />
          <SplitPanel
            reverse={section.reverse}
            blank={!section.image}
            image={section.image}
            title={section.heading}
            text={section.text}
            bullets={section.bullets}
          />
        </section>
      ))}
    </>
  );
}

function MiniCards({ cards }) {
  return (
    <div className="mini-card-grid">
      {cards.map(([title, text]) => (
        <article key={title}>
          <div className="mini-space" />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function FAQList({ items }) {
  return (
    <div className="faq-list">
      {items.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

function Testimonials() {
  const quotes = [
    ["Alex J., Driver", "The tools helped me optimize driving with this platform."],
    ["Maria K., Driver", "Being part of this service has changed my outlook on ride-sharing."],
    ["James R., Driver", "I love driving for this company. The flexibility and support are excellent."],
    ["Linda T., Driver", "This platform truly values its drivers and respects schedules."]
  ];

  return (
    <div className="testimonial-grid">
      {quotes.map(([name, quote]) => (
        <article key={name}>
          <div className="stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={15} fill="currentColor" />
            ))}
          </div>
          <p>"{quote}"</p>
          <strong>{name}</strong>
        </article>
      ))}
    </div>
  );
}

function CTA({ title, button }) {
  return (
    <section className="cta-panel">
      <h2>{title}</h2>
      <p>
        Experience seamless travel with BlinkRide. Our services offer reliability
        and safety at your fingertips.
      </p>
      <ButtonLink className="outline-light">{button}</ButtonLink>
    </section>
  );
}

function App() {
  const path = currentPath();

  const Page =
    {
      "/get-the-app": GetAppPage,
      "/services": ServicesPage,
      "/contact-us": ContactPage,
      "/about-us": AboutPage,
      "/affiliates": AffiliatesPage,
      "/drivers": DriversPage,
      "/customers": CustomersPage,
      "/fleet": FleetPage,
      "/": HomePage
    }[path] || HomePage;

  return (
    <>
      <Header />
      <Page />
    </>
  );
}

export default App;
