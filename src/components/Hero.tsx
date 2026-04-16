import { motion } from "framer-motion";
import logo from "../assets/tdme-logo.png";
import londonImg from "../assets/london.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-24 flex items-center justify-between">
          <img src={logo.src} alt="tdme" className="h-14" />
          <a href="mailto:wmellaart@mac.com" className="text-sm text-white/80 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </nav>
      <section className="relative h-screen w-full overflow-hidden">
        <img src={londonImg.src} alt="London skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Helderheid in complexiteit.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed font-light"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Strategisch advies voor marketing, management en groei.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
