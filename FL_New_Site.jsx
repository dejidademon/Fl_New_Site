import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import firstLookLogo from "./src/firstlook_logo_extra_large.webp";

const topDeals = [
  "BEATBOX", "IQBAR", "SOURSE", "AAVRANI", "BREZ", "JAVY",
  "HALFDAY", "MELA", "ec", "cadence", "COCONUT CULT", "goodwipes",
  "BelliWelli", "obvi", "biöm", "OAT HAUS", "CURE", "GAINFUL",
  "snif", "HVMN", "mosh", "hiyo", "slate", "HOMECOURT",
  "BUOY", "WOO MORE PLAY", "LAUNDRY SAUCE", "NGUYEN", "saalt", "ROSY SOIL"
];

const venturesDeals = ["HALFDAY", "slate", "The Absorption Company.", "tally KIDS"];

function FirstLookMark() {
  return (
    <img src={firstLookLogo} alt="FirstLook" className="w-[360px] max-w-full h-auto mx-auto" />
  );
}

function TopApplyButtons() {
  return (
    <div className="flex items-center justify-center gap-8 pt-6">
      <button className="rounded-full bg-[#18b7cd] text-white text-[12px] font-semibold px-5 py-2.5 shadow-sm hover:scale-[1.02] transition-transform">
        Brands Apply
      </button>
      <button className="rounded-full bg-[#39d66f] text-white text-[12px] font-semibold px-5 py-2.5 shadow-sm hover:scale-[1.02] transition-transform">
        Investors Apply
      </button>
    </div>
  );
}

function TopLogoGrid() {
  return (
    <div className="grid grid-cols-6 gap-y-10 gap-x-8 items-center justify-items-center max-w-6xl mx-auto pt-10">
      {topDeals.map((item, idx) => (
        <motion.div
          key={item + idx}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.25, delay: idx * 0.015 }}
          className="text-center"
        >
          <div className="text-[14px] md:text-[17px] font-semibold tracking-tight text-black/80 whitespace-nowrap">
            {item}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function NewsletterCard() {
  return (
    <div className="max-w-[430px] mx-auto mt-16 bg-white/70 border border-black/5 shadow-sm px-8 py-7 text-center">
      <div className="flex justify-center mb-3 scale-[0.55] origin-center">
        <FirstLookMark />
      </div>
      <div className="text-[#4c5550] text-[11px] leading-4 max-w-[260px] mx-auto">
        Welcome to the FirstLook Newsletter covering all things funding and consumer goods.
      </div>
      <div className="text-[10px] text-[#4fd57e] mt-1 mb-4">Over 1000 subscribed.</div>
      <div className="flex items-center gap-2 justify-center">
        <input
          placeholder="Type your email..."
          className="w-[180px] h-8 px-3 text-[11px] border border-[#6cd697] rounded-md bg-white outline-none"
        />
        <button className="h-8 px-4 rounded-md bg-[#69d684] text-white text-[11px] font-semibold">
          Subscribe
        </button>
      </div>
      <div className="text-[9px] text-black/40 mt-3 max-w-[260px] mx-auto leading-4">
        By subscribing you agree to Substack&apos;s Terms of Use and acknowledge its Information Collection Notice.
      </div>
    </div>
  );
}

function VentLogo({ name, className = "" }) {
  return (
    <div className={`bg-white text-black flex items-center justify-center ${className}`}>
      <span className="font-semibold tracking-tight text-center leading-none">{name}</span>
    </div>
  );
}

function BottomButtons() {
  return (
    <div className="flex items-center justify-center gap-36 pt-5">
      <button className="border border-white rounded-2xl px-8 py-4 text-white text-[22px] font-semibold hover:bg-white/10 transition-colors">
        Brands Apply
      </button>
      <button className="border border-white rounded-2xl px-8 py-4 text-white text-[22px] font-semibold hover:bg-white/10 transition-colors">
        Investors Apply
      </button>
    </div>
  );
}

export default function FirstLookScrollGradientBlend() {
  const { scrollYProgress } = useScroll();

  const pageBackground = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.72, 1],
    [
      "linear-gradient(180deg, #dce6de 0%, #dce6de 100%)",
      "linear-gradient(180deg, #dce6de 0%, #cfd8d2 65%, #bcc3bf 100%)",
      "linear-gradient(180deg, #dce6de 0%, #8f9694 45%, #343535 82%, #0b0b0b 100%)",
      "linear-gradient(180deg, #8b908e 0%, #252627 30%, #060606 72%, #000000 100%)",
      "linear-gradient(180deg, #2a2b2c 0%, #060606 45%, #000000 100%)"
    ]
  );

  const darkOverlayOpacity = useTransform(scrollYProgress, [0.28, 0.52, 1], [0, 0.5, 0.88]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);
  const topFade = useTransform(scrollYProgress, [0, 0.5, 0.72], [1, 0.92, 0.25]);
  const bottomFade = useTransform(scrollYProgress, [0.35, 0.6, 0.75], [0.05, 0.55, 1]);

  return (
    <motion.div style={{ background: pageBackground }} className="min-h-screen w-full overflow-x-hidden relative">
      <motion.div
        style={{ opacity: darkOverlayOpacity }}
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(55,55,55,0.15)_0%,rgba(0,0,0,0.7)_48%,rgba(0,0,0,0.95)_100%)]"
      />

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-[#18b7cd] to-[#39d66f]"
      />

      <motion.section style={{ opacity: topFade, scale: heroScale }} className="relative z-10 min-h-screen flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-6xl text-center">
          <div className="pt-2">
            <FirstLookMark />
          </div>

          <p className="max-w-[760px] mx-auto pt-8 text-[18px] leading-[1.9] tracking-[0.02em] text-[#6a706d]">
            A members-only investor group providing intimate community and proprietary access to top tier Pre-seed to Series B consumer brand deals
          </p>

          <TopApplyButtons />

          <div className="pt-24 text-[12px] tracking-[0.35em] text-[#969d97] uppercase">Past Deals</div>
          <TopLogoGrid />

          <NewsletterCard />
        </div>
      </motion.section>

      <motion.section style={{ opacity: bottomFade }} className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.015)_18%,rgba(0,0,0,0.25)_44%,rgba(0,0,0,0.86)_100%)]" />
          <div className="absolute left-1/2 top-[7%] -translate-x-1/2 w-[1050px] h-[1050px] rounded-full border-[26px] border-white/12" />
          <div className="absolute left-1/2 top-[13%] -translate-x-1/2 w-[840px] h-[840px] rounded-full border-[18px] border-white/10" />
          <div className="absolute left-1/2 top-[22%] -translate-x-1/2 w-[620px] h-[620px] rounded-full bg-black/65 shadow-[0_0_100px_rgba(0,0,0,0.9)_inset]" />
          <div className="absolute right-[-8%] top-[18%] w-[560px] h-[900px] rotate-[28deg] rounded-[999px] border-[20px] border-white/7" />
          <div className="absolute left-[6%] top-[20%] w-4 h-4 rounded-full bg-[#d8cfb0]/70 shadow-[0_0_12px_rgba(255,237,196,0.45)]" />
          <div className="absolute left-[19%] top-[12%] w-3 h-3 rounded-full bg-[#d8cfb0]/65 shadow-[0_0_10px_rgba(255,237,196,0.4)]" />
          <div className="absolute right-[14%] top-[24%] w-4 h-4 rounded-full bg-[#d8cfb0]/70 shadow-[0_0_12px_rgba(255,237,196,0.45)]" />
        </div>

        <div className="relative w-full max-w-[1450px] text-center text-white">
          <div className="text-[92px] md:text-[104px] font-semibold tracking-[-0.06em] leading-none">
            <span className="text-white/95">firstlook</span><span className="font-black">ventures</span>
          </div>

          <div className="max-w-[980px] mx-auto pt-10 text-[34px] md:text-[39px] leading-[1.45] font-normal text-white">
            $400K to $1M Investments in Seed to Series B Consumer Brands
          </div>

          <BottomButtons />

          <div className="grid grid-cols-4 gap-14 items-center justify-items-center max-w-[1120px] mx-auto pt-28">
            <VentLogo name="HALFDAY" className="w-[180px] h-[180px] text-[40px] bg-[#ffe900] text-[#ff6c39]" />
            <VentLogo name="slate" className="w-[180px] h-[180px] text-[54px] font-serif" />
            <VentLogo name="The Absorption Company." className="w-[220px] h-[180px] text-[27px] px-6" />
            <div className="w-[190px] h-[180px] flex items-center justify-center text-[66px] font-bold text-[#1ea0ff] leading-none">
              <div>
                <div>tally</div>
                <div className="text-[34px] text-[#ffd250] rotate-[-8deg]">KIDS</div>
              </div>
            </div>
          </div>

          <div className="pt-24 text-[13px] tracking-[0.35em] uppercase text-white/90">
            © 2025 FirstLook Venture Co. All Rights Reserved
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
