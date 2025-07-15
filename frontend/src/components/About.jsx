import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/api/placeholder/400/400"
                  alt="Ankit Kumar Yadav"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Profile Summary
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {data.summary}
            </p>

            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className="flex items-center text-gray-300">
                <GraduationCap className="h-5 w-5 text-purple-400 mr-3" />
                <span>{data.education}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 text-purple-400 mr-3" />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-purple-400 mr-3" />
                <span>{data.email}</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4">Specializations</h4>
              <div className="grid grid-cols-2 gap-2">
                {data.specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-2 rounded-lg text-sm text-gray-300 border border-purple-500/30"
                  >
                    {spec}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;