"use client"

import { motion } from "framer-motion"

export const Hallowen = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Animated orange glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 leading-tight text-balance">
                Haz que la rodada del terror sea divertida
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 text-balance">
                con nuestras máscaras
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Diseños únicos que combinan estilo y misterio para tu próxima aventura nocturna.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-500 text-black font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              <a href="https://wa.me/573172313500">Contactanos por WhatsApp</a>
            </motion.button>
          </motion.div>

          {/* Right side - Images */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Biker with mask - Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="absolute top-0 right-0 w-full h-[400px] lg:h-[500px]"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/50"
              >
                <img
                  src="/images/fondoHallowen.png"
                  alt="Motero con máscara de Halloween"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Mask only - Secondary image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="absolute bottom-0 left-0 w-3/4 h-[300px] lg:h-[350px]"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-600/50 border-2 border-orange-600/30"
              >
                <img
                  src="/images/fondoHallowenMascara.png"
                  alt="Máscara de Halloween"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-orange-600/20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-orange-500 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}
