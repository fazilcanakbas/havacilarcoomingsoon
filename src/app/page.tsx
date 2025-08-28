"use client"
import { motion } from "framer-motion"
import { Award, Phone, Mail, Building2, Plane } from "lucide-react"
import Image from "next/image"


const MouseIcon = () => (
  <motion.div
    className="flex justify-center my-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1.7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
  >
    <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center items-start bg-white/10">
      <div className="w-1 h-4 bg-white rounded-full mt-2 animate-bounce"></div>
    </div>
  </motion.div>
)

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-30 p-6">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              
              <div className="text-white">
                <Image
                src={'/havacilarlogo.png'}
                alt="havacilar"
                width={250}
                height={250}
                
                
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Coming Soon */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background with gradient overlay */}
     
 <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent z-10"></div>
        {/* Background video placeholder with aviation theme */}
                  <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/havacilar.mp4" type="video/mp4" />
          </video>
       

        <div className="container mx-auto px-4 z-20 relative">
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="text-center text-white space-y-10 max-w-5xl mx-auto w-full">
              

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className="block text-white mb-4">Sitemiz Şuan</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Güncelleniyor
                </span>
                <span className="block text-white text-3xl md:text-4xl lg:text-5xl">
                  Yakın Zamanda Erişime Açılacak
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Gayrimenkul ve havacılık sektörlerinde öncü projelerle,
                <span className="text-cyan-300 font-semibold"> güvenilir yatırım </span>
                fırsatları sunmaya hazırlanıyoruz. Yeni sitemizle daha iyi bir deneyim için çalışıyoruz.
              </motion.p>

              <motion.div
                className="flex flex-col items-center gap-6 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                  <a
                    href="tel:+908501234567"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <Phone className="mr-3 w-5 h-5" />
                    İletişim: +90 530 620 06 85
                  </a>
                  <a
                    href="mailto:info@havacilar.com.tr"
                    className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="mr-3 w-5 h-5" />
                    Bilgi Al
                  </a>
                </div>

                {/* Services Preview */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                    <Building2 className="w-6 h-6 text-cyan-300 mr-3" />
                    <span className="text-white font-medium">Gayrimenkul Yatırımları</span>
                  </div>
                  <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                    <Plane className="w-6 h-6 text-cyan-300 mr-3" />
                    <span className="text-white font-medium">Havacılık Yatırımları</span>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}