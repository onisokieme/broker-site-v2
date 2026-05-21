import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function LearnSection() {
  return (
    <section className="w-full bg-[#d9ff00] overflow-hidden relative">
      
      {/* MAIN CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1200px] mx-auto px-6 md:px-10 xl:px-20 pt-24 pb-0 flex flex-col items-center text-center"
      >

        {/* HEADLINE */}
        <motion.h2
          variants={item}
          className="text-black font-medium leading-[0.95] tracking-[-2px]
          text-[clamp(52px,7vw,105px)] max-w-[980px]"
          style={{
            fontFamily: `'Geist Variable', sans-serif`,
          }}
        >
          Become a better investor
          <br />
          on the go, right in the app
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          variants={item}
          className="mt-10 text-black/80 text-[17px] md:text-[18px]"
          style={{
            fontFamily: `'Geist Variable', sans-serif`,
          }}
        >
          Here's a preview of the things you can learn when you sign up.
        </motion.p>

        {/* BUTTON */}
        <motion.div variants={item} className="mt-10">
          <button
            className="
              bg-black text-white
              px-10 md:px-14
              h-[58px]
              rounded-full
              text-[16px]
              font-semibold
              transition-all duration-300
              hover:scale-[1.03]
              hover:opacity-90
              active:scale-[0.98]
            "
          >
            Sign up to access Northbridge Learn
          </button>
        </motion.div>

        {/* CARD PREVIEW */}
        <motion.div
          variants={item}
          className="
            mt-24
            w-full
            max-w-[760px]
            h-[420px]
            rounded-t-[38px]
            bg-[#ececec]
            shadow-[0_-10px_50px_rgba(0,0,0,0.08)]
            relative
            overflow-hidden
          "
        >

          {/* CARD CONTENT */}
          <div className="absolute inset-0 p-10 flex flex-col">

            {/* TITLE */}
            <div>
              <p className="text-[34px] font-medium text-black">
                Learn the Basics
              </p>
            </div>

            {/* MOCK CONTENT */}
            <div className="mt-10 space-y-5">

              {[
                "Why invest?",
                "How the stock market works",
                "Understanding crypto",
                "Long-term investing",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-2xl
                    px-6
                    h-[72px]
                    flex items-center
                    justify-between
                    shadow-sm
                  "
                >
                  <span className="text-[17px] text-[#111] font-medium">
                    {item}
                  </span>

                  <div
                    className="
                      w-10 h-10
                      rounded-full
                      bg-[#d9ff00]
                      flex items-center justify-center
                      text-black font-bold
                    "
                  >
                    →
                  </div>
                </div>
              ))}

            </div>

          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}