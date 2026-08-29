export const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Works" },
  { href: "#process", label: "Our Process" },
  { href: "#contact", label: "Contact Us" },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "We learn your goals, audience and what makes your business different.",
  },
  {
    n: "02",
    title: "Design",
    body: "We create a distinctive visual direction with a conversion-first structure.",
  },
  {
    n: "03",
    title: "Build",
    body: "Your site is developed fast, responsive and ready for real customers.",
  },
  {
    n: "04",
    title: "Launch",
    body: "We test, polish and hand over a website you can confidently grow.",
  },
] as const;

export const projects = [
  { title: "Northline", category: "Logistics / B2B", tone: "orange" },
  { title: "Morrow", category: "Beauty / Lifestyle", tone: "violet" },
  { title: "Café No. 7", category: "Hospitality", tone: "blue" },
  { title: "Atelier 24", category: "Architecture", tone: "green" },
  { title: "Pulse", category: "Technology", tone: "pink" },
  { title: "Studio Haus", category: "Creative / Retail", tone: "gold" },
] as const;

export const services = [
  {
    n: "01",
    title: "Websites",
    body: "Fast, strategic marketing websites that turn attention into enquiries.",
  },
  {
    n: "02",
    title: "Landing pages",
    body: "Focused pages for campaigns, launches and paid traffic.",
  },
  {
    n: "03",
    title: "Online shops",
    body: "Elegant storefronts with simple paths from product to checkout.",
  },
  {
    n: "04",
    title: "Brand systems",
    body: "Digital-ready typography, color and visual direction.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "from €1,990",
    blurb: "For focused launches",
    features: ["1–3 pages", "Custom design", "Responsive build", "Basic SEO"],
    featured: false,
  },
  {
    name: "Growth",
    price: "from €3,490",
    blurb: "For growing businesses",
    features: [
      "Up to 8 pages",
      "Advanced interactions",
      "CMS setup",
      "Analytics + SEO",
    ],
    featured: true,
  },
  {
    name: "Shop",
    price: "from €4,990",
    blurb: "For selling online",
    features: [
      "Online store",
      "Product templates",
      "Checkout setup",
      "Conversion polish",
    ],
    featured: false,
  },
] as const;

export const testimonials = [
  {
    quote:
      "“The process felt incredibly personal. We had a clear direction within days and the final site feels exactly like us.”",
    name: "Mia K.",
    role: "Founder, Morrow",
  },
  {
    quote:
      "“A rare mix of design taste and practical thinking. The new site immediately made our sales conversations easier.”",
    name: "Daniel R.",
    role: "Director, Northline",
  },
  {
    quote:
      "“Fast, thoughtful and technically excellent. We finally have a digital presence we are proud to send people to.”",
    name: "Lea S.",
    role: "Owner, Atelier 24",
  },
] as const;

export const faqs = [
  {
    q: "How long does a website take?",
    a: "Most projects launch in 2–6 weeks depending on scope and feedback speed.",
  },
  {
    q: "Do you work with existing brands?",
    a: "Yes. We can work from your current brand system or refine it for digital.",
  },
  {
    q: "Can I edit the site myself?",
    a: "Yes. CMS-ready builds can be structured so your team can update key content.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Absolutely. We can provide maintenance, content updates and ongoing optimization.",
  },
] as const;

export const proofAvatars = ["JS", "MK", "AR", "+"] as const;

export const teamMembers = [
  {
    name: "Devy Rahmawati",
    role: "Project Manager",
    image: "/images/team/devy.jpg",
    bio: "With a background in multimedia, UI/UX, video, and digital marketing, she brings diverse disciplines together to drive successful project delivery. She works closely with designers, editors, and developers to ensure projects stay aligned, efficient, and on track.",
  },
  {
    name: "Rizka Hapsari",
    role: "Digital Marketing Specialist",
    image: "/images/team/rizka.jpg",
    bio: "She crafts campaigns that connect brands with the right audience. From content strategy to performance ads, she turns insights into growth and keeps every touchpoint consistent with the brand voice.",
  },
  {
    name: "Septian",
    role: "Senior Video Editor",
    image: "/images/team/septian.jpg",
    bio: "He shapes stories through motion, pacing, and visual polish. With a sharp eye for detail, he delivers video work that feels intentional, engaging, and ready for every platform.",
  },
  {
    name: "Rahmat Tomy",
    role: "Tech Lead",
    image: "/images/team/tomy.jpg",
    bio: "He leads technical decisions with clarity and pragmatism. From architecture to delivery, he helps the team build reliable systems that scale with the product and the business.",
  },
  {
    name: "Yuanfi",
    role: "Front End Developer",
    image: "/images/team/yuanfi.jpg",
    bio: "He turns designs into fast, accessible interfaces. Focused on clean interaction and solid craft, he builds frontends that feel smooth and stay maintainable as products grow.",
  },
  {
    name: "Irwansyah",
    role: "Back End Developer",
    image: "/images/team/irwansyah.jpg",
    bio: "He builds the systems behind the experience — APIs, data, and infrastructure. Reliable, secure, and efficient backends are his priority so products can run with confidence.",
  },
] as const;
