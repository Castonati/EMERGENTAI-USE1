import React from "react";
import { motion } from "framer-motion";
import { 
  Youtube, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone,
  MapPin,
  Heart
} from "lucide-react";

const Footer = ({ data }) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: data.linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      url: data.youtube,
      color: "hover:text-red-400"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: data.twitter,
      color: "hover:text-blue-300"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: data.instagram,
      color: "hover:text-pink-400"
    }
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ankit Kumar <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Yadav</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creative video editor specializing in podcasts, interviews, and engaging content. 
              Transforming stories through professional editing and post-production.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`bg-white/10 backdrop-blur-sm p-3 rounded-full text-gray-300 ${link.color} transition-all duration-300 hover:bg-white/20`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Long-form Portfolio", href: "#portfolio" },
                { name: "Short-form Content", href: "#shortform" },
                { name: "Skills", href: "#skills" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 text-purple-400 mr-3" />
                <span className="text-sm">ankityadav41160@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 text-purple-400 mr-3" />
                <span className="text-sm">+91-9905159591</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 text-purple-400 mr-3" />
                <span className="text-sm">Kanpur, India</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
              <p className="text-white font-medium mb-2">Ready to collaborate?</p>
              <p className="text-gray-300 text-sm">
                Available for freelance projects and long-term partnerships
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ankit Kumar Yadav. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 mx-1 fill-current" />
              <span>for creative storytelling</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;