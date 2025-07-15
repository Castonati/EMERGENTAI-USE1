import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Eye, Clock, ExternalLink, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ShortFormPortfolio = ({ data }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const getYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/shorts\/|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const VideoModal = ({ video, onClose }) => {
    const videoId = getYouTubeVideoId(video.videoUrl);
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-900 rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">{video.title}</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:bg-white/10"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-white hover:bg-white/10"
              >
                ✕
              </Button>
            </div>
          </div>
          
          <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden mb-4 max-h-96">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Project Details</h4>
              <p className="text-gray-300 mb-4">{video.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {video.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {video.views} views
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 rounded text-xs border border-purple-500/30">
                  {video.platform}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Skills Used</h4>
              <div className="flex flex-wrap gap-2">
                {video.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 rounded text-xs text-gray-300 border border-purple-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <Button
              onClick={() => window.open(video.videoUrl, '_blank')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Original
            </Button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Short-Form <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Content</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engaging short-form content optimized for social media platforms and maximum viewer retention
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-[9/16] bg-gradient-to-br from-purple-600/20 to-pink-600/20 overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          onClick={() => setSelectedVideo(video)}
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full p-3"
                        >
                          <Play className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded text-xs font-medium text-white">
                        {video.platform}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 mb-3 line-clamp-2 text-sm">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {video.views}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {video.skills.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 rounded text-xs text-gray-300 border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {video.skills.length > 2 && (
                        <span className="text-xs text-gray-400">+{video.skills.length - 2}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </section>
  );
};

export default ShortFormPortfolio;