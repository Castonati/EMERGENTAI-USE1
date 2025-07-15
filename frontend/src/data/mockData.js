export const mockData = {
  hero: {
    name: "Ankit Kumar Yadav",
    title: "Creative Video Editor",
    subtitle: "Transforming stories through dynamic video editing, specializing in podcasts, interviews, and engaging content for influential personalities and brands."
  },
  
  about: {
    summary: "A passionate and creative video editor with proven skills in editing podcasts, interviews, and YouTube content. Experienced with storytelling, post-production workflows, and visual effects. Demonstrated ability to handle dynamic, long-form content for influential personalities and channels. Comfortable with collaborative projects, tight deadlines, and both Hindi and English content.",
    education: "B.Tech in Computer Science and Engineering (2021-2025), UIET, CSJM University Kanpur (CPI: 8.88)",
    location: "Kanpur, India",
    phone: "+91-9905159591",
    email: "ankityadav41160@gmail.com",
    specializations: [
      "Podcast Editing",
      "Multi-cam Sync",
      "Audio Optimization",
      "Motion Graphics",
      "Color Grading",
      "Subtitle Creation",
      "YouTube Optimization",
      "Content Planning"
    ]
  },

  longFormVideos: [
    {
      id: 1,
      title: "पुष्पम प्रिया चौधरी का धमाकेदार पॉडकास्ट",
      description: "Full podcast editing including audio optimization, video synchronization, highlight creation, caption integration, and thumbnail design for maximum engagement.",
      videoUrl: "https://youtu.be/l2wEZ_oYPrc?si=lhMDfz-CmfG15iS7",
      thumbnail: "/api/placeholder/600/400",
      duration: "1:45:32",
      views: "250K",
      category: "Podcast",
      skills: ["Multi-cam Editing", "Audio Mixing", "Captions", "Thumbnail Design"]
    },
    {
      id: 2,
      title: "Haribhushan Thakur Bachaul Interview",
      description: "Professional interview editing with multi-camera setup, custom intro/outro sequences, branded overlays, and seamless transitions for storytelling impact.",
      videoUrl: "https://youtu.be/l2wEZ_oYPrc?si=lhMDfz-CmfG15iS7",
      thumbnail: "/api/placeholder/600/400",
      duration: "58:24",
      views: "180K",
      category: "Interview",
      skills: ["Multi-cam Sync", "Intro/Outro", "Overlays", "Transitions"]
    },
    {
      id: 3,
      title: "Discussion Clip - Social Issues",
      description: "Dynamic discussion editing featuring smooth transitions, strategic B-roll integration, professional color grading, and emphasis visuals for key moments.",
      videoUrl: "https://youtu.be/l2wEZ_oYPrc?si=lhMDfz-CmfG15iS7",
      thumbnail: "/api/placeholder/600/400",
      duration: "42:18",
      views: "320K",
      category: "Discussion",
      skills: ["Transitions", "B-roll", "Color Grading", "Emphasis Visuals"]
    },
    {
      id: 4,
      title: "Special Feature Highlights",
      description: "Compelling highlights reel showcasing expert storytelling techniques, precise video syncing, and engaging narrative flow for maximum viewer retention.",
      videoUrl: "https://youtu.be/l2wEZ_oYPrc?si=lhMDfz-CmfG15iS7",
      thumbnail: "/api/placeholder/600/400",
      duration: "35:45",
      views: "195K",
      category: "Feature",
      skills: ["Storytelling", "Video Syncing", "Narrative Flow", "Retention Strategy"]
    }
  ],

  shortFormVideos: [
    {
      id: 1,
      title: "Cleando Digital Brand Showcase",
      description: "Professional brand showcase with dynamic transitions, engaging graphics, and optimized pacing for social media engagement.",
      videoUrl: "https://www.youtube.com/shorts/czvCHCpcg2Y",
      thumbnail: "/api/placeholder/400/600",
      duration: "0:45",
      views: "50K",
      platform: "LinkedIn",
      skills: ["Brand Video", "Social Media", "Graphics", "Pacing"]
    },
    {
      id: 2,
      title: "Digital Marketing Promo",
      description: "High-energy promotional content featuring motion graphics, strategic cuts, and compelling call-to-action elements for maximum conversion.",
      videoUrl: "https://www.youtube.com/shorts/czvCHCpcg2Y",
      thumbnail: "/api/placeholder/400/600",
      duration: "0:38",
      views: "75K",
      platform: "LinkedIn",
      skills: ["Motion Graphics", "Promotional", "CTA", "Conversion"]
    },
    {
      id: 3,
      title: "SEO Services Highlight",
      description: "Informative short-form content with clean animations, professional typography, and strategic information delivery for business growth.",
      videoUrl: "https://www.youtube.com/shorts/czvCHCpcg2Y",
      thumbnail: "/api/placeholder/400/600",
      duration: "0:52",
      views: "35K",
      platform: "LinkedIn",
      skills: ["Animations", "Typography", "Information Design", "Business Content"]
    },
    {
      id: 4,
      title: "Castonati Channel Short",
      description: "Engaging short-form content with dynamic pacing, attention-grabbing visuals, and optimized for YouTube Shorts algorithm.",
      videoUrl: "https://www.youtube.com/shorts/czvCHCpcg2Y",
      thumbnail: "/api/placeholder/400/600",
      duration: "0:29",
      views: "120K",
      platform: "YouTube",
      skills: ["YouTube Shorts", "Algorithm Optimization", "Visual Appeal", "Engagement"]
    }
  ],

  skills: [
    { name: "Adobe Premiere Pro", level: 95, category: "Editing Software" },
    { name: "After Effects", level: 90, category: "Editing Software" },
    { name: "DaVinci Resolve", level: 85, category: "Editing Software" },
    { name: "Multi-cam Editing", level: 92, category: "Specialization" },
    { name: "Audio Mixing", level: 88, category: "Specialization" },
    { name: "Color Correction", level: 85, category: "Specialization" },
    { name: "Motion Graphics", level: 90, category: "Specialization" },
    { name: "YouTube Optimization", level: 88, category: "Specialization" },
    { name: "Podcast Editing", level: 95, category: "Specialization" },
    { name: "Subtitle Creation", level: 90, category: "Specialization" }
  ],

  testimonials: [
    {
      id: 1,
      name: "Pradyumna Aadvik",
      role: "Digital Marketing Expert",
      company: "Cleando Digital",
      content: "Ankit's video editing skills transformed our brand presence. His attention to detail and creative approach to storytelling made our content stand out in the competitive digital marketing space.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Castonati Team",
      role: "Content Creators",
      company: "Castonati Channel",
      content: "Working with Ankit has been exceptional. His ability to handle long-form podcasts while maintaining viewer engagement is remarkable. Our channel growth speaks to his expertise.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Rohit Sharma",
      role: "Podcast Host",
      company: "Independent Creator",
      content: "Ankit's expertise in podcast editing is unmatched. He understands the nuances of long-form content and delivers polished, professional results every time.",
      rating: 5,
      image: "/api/placeholder/100/100"
    }
  ],

  contact: {
    email: "ankityadav41160@gmail.com",
    phone: "+91-9905159591",
    location: "Kanpur, India",
    availability: "Available for freelance projects"
  },

  social: {
    linkedin: "https://www.linkedin.com/in/ankit-kumar-yadav-03a2491b8",
    youtube: "https://www.youtube.com/@castonati",
    twitter: "https://twitter.com/castonati0",
    instagram: "https://www.instagram.com/castonati0/"
  }
};