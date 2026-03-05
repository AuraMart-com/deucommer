import { motion } from 'motion/react';
import { Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://picsum.photos/seed/startup/1920/600" 
            alt="Startup Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <img 
                src="/founder.jpg" 
                alt="Founder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center md:text-left flex-1"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">EduCommerce</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Empowering the next generation of developers through practical, hands-on e-commerce experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              EduCommerce started as a simple idea: what if we could bridge the gap between theoretical learning and real-world application? We realized that most educational platforms focus on snippets of code, but rarely show how a full-scale application comes together.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2025, we've grown from a small side project into a comprehensive learning tool used by thousands of aspiring developers worldwide. Our mission is to provide a "sandbox" where anyone can explore the complexities of full-stack development in a safe, guided environment.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-orange-50 p-8 rounded-2xl text-center">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <span className="block text-2xl font-bold text-gray-900">10k+</span>
                <span className="text-sm text-gray-500">Students</span>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl text-center">
                <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <span className="block text-2xl font-bold text-gray-900">100%</span>
                <span className="text-sm text-gray-500">Practical</span>
              </div>
            </div>
            <div className="pt-8">
              <div className="bg-green-50 p-8 rounded-2xl text-center h-full flex flex-col justify-center">
                <Heart className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <span className="block text-2xl font-bold text-gray-900">Open</span>
                <span className="text-sm text-gray-500">Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet the Founder</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/3 h-64 md:h-auto">
              <img 
                src="/founder.jpg" 
                alt="Founder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jashuva</h3>
              <p className="text-orange-500 font-medium mb-6">Lead Product Designer & Engineer</p>
              <p className="text-gray-600 italic mb-8">
                "I believe that the best way to learn is by doing. EduCommerce is my contribution to the developer community, designed to make the journey from beginner to professional a little less daunting."
              </p>
              <div className="flex flex-col space-y-2 text-sm text-gray-500">
                <p>Email: jashuva467@gmail.com</p>
                <p>Location: Web City, Digital World</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
