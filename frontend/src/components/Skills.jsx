import React from "react";
import { motion } from "framer-motion";
import { Award, Code, Palette, Zap } from "lucide-react";

const Skills = ({ data }) => {
  const getSkillIcon = (category) => {
    switch (category) {
      case "Editing Software":
        return <Code className="h-5 w-5" />;
      case "Specialization":
        return <Palette className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  const skillCategories = [...new Set(data.map(skill => skill.category))];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastery across industry-leading tools and specialized techniques for professional video production
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                  {getSkillIcon(category)}
                </div>
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>

              <div className="space-y-4">
                {data
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-purple-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <Award className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Certified Professional</h4>
              <p className="text-gray-300">Adobe Premiere Pro Certified (2023)</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <Palette className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Creative Specialist</h4>
              <p className="text-gray-300">Certificate in Motion Graphics</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <Zap className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Fast Turnaround</h4>
              <p className="text-gray-300">Efficient workflow & project management</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;