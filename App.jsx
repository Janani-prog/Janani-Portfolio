import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Award, Brain, Code, Cpu, Sparkles, Scroll, Smartphone } from 'lucide-react';

// --- UTILS & HOOKS ---

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const Reveal = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform 
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'} 
        ${className}`}
    >
      {children}
    </div>
  );
};

// --- ASSETS & LOGOS ---

const BrandLogo = ({ issuer, className = "w-6 h-6" }) => {
  const logos = {
    "Amazon Web Services": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.5 21.8c-1.4 0-2.5-.3-2.5-.3l-.3-1.8s1 .5 2.1.5c1.3 0 1.6-.6 1.6-1.4v-7h-2.5s-2.2-.1-2.2 2c0 1.8 1.5 2.2 2.2 2.2.6 0 1-.1 1-.1v1.4s-.5.2-1.3.2c-1.9 0-3.9-1-3.9-3.7 0-2.8 2.3-3.6 4.4-3.6h2.1v-.5c0-1.1-.9-1.5-2-1.5-1.4 0-2 .4-2 .4L9.8 7s.9-.7 2.8-.7c2.4 0 3.7 1.3 3.7 3.4v8.2c0 2.4-1.3 3.9-2.8 3.9zM7.3 16.7c0-1.6-.8-5.1-4.6-5.1l-1.1.2.2 1.7s.6-.2 1.3-.2c1.9 0 2.1 1.9 2.1 2.2v.8l1.2.3c.7.2.9.1.9.1zm11.1-1.5s-1.6.5-2.1.5c-.3 0-.5-.1-.5-.5v-1.7h.5c.9 0 2.1.4 2.1 1.7z"/>
        <path d="M18.9 8.3l-1.7 7.2-2.6-7.2h-2l3.5 9.3h2.1l2.8-9.3z"/>
      </svg>
    ),
    "Google": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
      </svg>
    ),
    "Stanford University / DeepLearning.AI": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
         <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 20h-15L12 5.5z"/> 
      </svg>
    ),
    "Columbia University": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
         <path d="M4 4h16v16H4z"/> 
         <path d="M8 8h8v8H8z" fill="black"/>
      </svg>
    ),
    "default": (
       <Award className={className} />
    )
  };

  return logos[issuer] || logos[Object.keys(logos).find(key => issuer.includes(key.split(" ")[0]))] || logos["default"];
};

// --- DATA ---
const ALL_CERTIFICATIONS = [
  {
    title: "AWS Academy Graduate - Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "Oct 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: true
  },
  {
    title: "Prompt Engineering & Programming with OpenAI",
    issuer: "Columbia University",
    date: "Jul 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: true
  },
  {
    title: "Supervised Machine Learning",
    issuer: "Stanford University / DeepLearning.AI",
    date: "Jun 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: true
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Google",
    date: "Jul 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: false
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google",
    date: "Jul 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: false
  },
  {
    title: "Build Rag Chatbot with Python",
    issuer: "LetsUpgrade",
    date: "May 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: false
  },
  {
    title: "AIQOD Hackathon",
    issuer: "VIT Chennai",
    date: "Mar 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: false
  },
  {
    title: "Flutter Frames",
    issuer: "GDG on Campus",
    date: "Feb 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: false
  },
  {
    title: "Break-A-thon",
    issuer: "IEEE Computer Society",
    date: "Jan 2025",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: false
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "Oct 2024",
    link: "https://www.linkedin.com/in/janani-jayalakshmi/details/certifications/",
    featured: false
  }
];

// --- COMPONENTS ---

// 1. Neural Starfield (Responsive Resize)
const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let width, height;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = [];
      // Adjust density for mobile vs desktop
      const density = width < 768 ? 8000 : 10000;
      const numStars = Math.floor((width * height) / density);
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3, 
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
          color: Math.random() > 0.8 ? '#22d3ee' : '#ffffff'
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Stars
      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        // Bounce
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color === '#ffffff' ? '255, 255, 255' : '34, 211, 238'}, ${star.alpha})`;
        ctx.fill();
      });

      // Neural Connections (Distance adjusted for mobile)
      const maxDist = width < 768 ? 60 : 100;
      
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDist) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            const opacity = 1 - distance / maxDist;
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.2})`; // Cyan lines
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();
    
    // Efficient resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(init, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

// 2. Navbar (Responsive Overlay)
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[980px] mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-white z-50 relative hover:text-cyan-400 transition-colors">
          Janani
        </a>
        <div className="hidden md:flex space-x-8 text-xs font-semibold tracking-widest text-gray-400">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white transition-colors uppercase relative group"
            >
              {item}
            </a>
          ))}
        </div>
         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 relative p-2 -mr-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
         
         {/* Mobile Menu Overlay */}
         {isOpen && (
            <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in backdrop-blur-xl">
               {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsOpen(false)} 
                    className="text-3xl font-bold text-white tracking-tighter hover:text-cyan-400 transition-colors py-2"
                  >
                     {item}
                  </a>
               ))}
            </div>
         )}
      </div>
    </nav>
  );
};

// 3. Hero Section (Responsive Typography)
const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden z-10 px-6 pt-12">
      <div className="w-full max-w-[980px] mx-auto">
        
        {/* Main Name - Scaled for Mobile */}
        <div className={`transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 leading-[1.1] md:leading-[0.9] text-left break-words">
            Janani <br />
            Jayalakshmi
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-200 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl sm:text-2xl md:text-4xl font-light text-gray-300 mb-10 leading-relaxed text-left max-w-4xl tracking-tight">
            Product-Focused AI Engineer converting complex research into scalable, <span className="text-cyan-400">human-centric solutions</span>.
          </p>
        </div>
        
        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-5 justify-start mt-2 transition-all duration-1000 delay-300 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
            View Mission Logs <ArrowRight size={18} />
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors text-center text-sm sm:text-base">
            Establish Uplink
          </a>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hidden md:block transition-opacity duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-gradient-to-b from-blue-900/10 to-transparent blur-[80px] md:blur-[120px] rounded-full pointer-events-none opacity-40"></div>
    </section>
  );
};

// 4. About & Stats Section
const About = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const featuredCerts = ALL_CERTIFICATIONS.filter(c => c.featured);

  return (
    <section id="about" className="relative py-16 md:py-20 z-10 border-t border-white/5 bg-transparent">
      <div className="max-w-[980px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <Reveal>
          <h2 className="text-sm font-bold text-cyan-400 mb-6 tracking-[0.2em] uppercase">The Source Code</h2>
          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed mb-8 font-light">
            Currently pursuing <span className="text-white font-medium">B.Tech in CSE (AI & Robotics)</span> at VIT Chennai. 
            I bridge the gap between theoretical AI research and tangible, user-centric products.
          </p>
          <p className="text-gray-400 text-base md:text-xl leading-relaxed font-light border-l-2 border-cyan-500/30 pl-6 italic">
            "Off-duty, I’m into music, psychological thrillers, murder mysteries, and writing spontaneous blogs—plus a bit of 'vibe coding'."
          </p>
        </Reveal>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Stat Cards */}
          <Reveal delay={100} className="p-6 md:p-8 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-3xl transition-colors hover:border-cyan-500/20">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">8.4</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">CGPA</div>
          </Reveal>
          
          <Reveal delay={200} className="p-6 md:p-8 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-3xl transition-colors hover:border-purple-500/20">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Prototypes</div>
          </Reveal>
          
          {/* Certifications Block */}
          <Reveal delay={300} className="col-span-2 p-6 md:p-8 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-colors">
            <div className="flex justify-between items-center mb-6">
               <div className="flex items-center gap-2">
                  <Award className="text-yellow-500" size={20} />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Certified Architect</span>
               </div>
               <button 
                 onClick={() => setShowAllCerts(true)}
                 className="text-xs text-gray-500 hover:text-white font-mono uppercase tracking-wider flex items-center gap-1 group transition-colors"
               >
                 View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            
            <div className="space-y-4">
               {featuredCerts.map((cert, i) => (
                  <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-b border-white/5 pb-3 hover:bg-white/5 p-2 rounded-lg transition-colors group">
                     <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-all shrink-0">
                        <BrandLogo issuer={cert.issuer} className="w-4 h-4" />
                     </div>
                     <div className="flex-1 min-w-0">
                        <div className="text-gray-300 text-sm font-medium group-hover:text-white truncate pr-4 transition-colors">{cert.title}</div>
                        <div className="text-xs text-gray-600 truncate">{cert.issuer}</div>
                     </div>
                  </a>
               ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Full Certifications Modal */}
      {showAllCerts && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
            <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 max-h-[85vh] overflow-y-auto shadow-2xl">
               <button 
                 onClick={() => setShowAllCerts(false)}
                 className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full p-2 hover:bg-white/10"
               >
                 <X size={20} />
               </button>

               <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Credentials</h3>
               <p className="text-gray-400 mb-8">Verified technical achievements.</p>

               <div className="grid gap-3">
                  {ALL_CERTIFICATIONS.map((cert, index) => (
                     <a 
                        key={index} 
                        href={cert.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
                     >
                        <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-cyan-400 transition-colors shrink-0">
                           <BrandLogo issuer={cert.issuer} className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                           <div className="text-white font-medium group-hover:text-cyan-400 transition-colors truncate">{cert.title}</div>
                           <div className="text-xs text-gray-500">{cert.issuer}</div>
                        </div>
                        
                        <div className="flex items-center gap-4 shrink-0">
                           <span className="text-xs font-mono text-gray-600 hidden sm:block">{cert.date}</span>
                           <ExternalLink size={14} className="text-gray-600 group-hover:text-white" />
                        </div>
                     </a>
                  ))}
               </div>
            </div>
         </div>
      )}
    </section>
  );
};

// 5. Skills Bento Grid
const Skills = () => {
  return (
    <section id="skills" className="relative py-16 md:py-20 z-10 bg-transparent">
      <div className="max-w-[980px] mx-auto px-6">
        <Reveal className="mb-12">
          <h2 className="text-sm font-bold text-purple-400 mb-4 tracking-[0.2em] uppercase">Command Center</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Full-Stack Capabilities.</h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          
          {/* Card 1 */}
          <Reveal delay={100} className="md:col-span-2 md:row-span-2 p-8 md:p-10 rounded-[2rem] bg-[#080808]/80 backdrop-blur-sm border border-white/10 transition-colors hover:border-cyan-500/20 group relative overflow-hidden flex flex-col justify-start gap-8">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 rounded-full bg-cyan-900/10 text-cyan-400"><Brain size={24} /></div>
                   <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Primary Engine</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">AI & Data Science</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                   Expertise in Neural Networks and RAG architectures. I build models that don't just predict, but reason.
                </p>
             </div>
             <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Generative AI', 'RAG Systems', 
                  'NLP / LLMs', 'Computer Vision',
                  'Graph Neural Networks', 'Prompt Engineering',
                  'OCR / Document AI', 'TensorFlow / PyTorch', 
                  'Pandas / NumPy', 'Data Visualization'
                ].map(skill => (
                  <div key={skill} className="flex items-center gap-2 text-sm text-gray-300 border-l border-white/10 pl-3 hover:text-cyan-400 transition-colors cursor-default">
                     <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> {skill}
                  </div>
                ))}
             </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={200} className="p-8 rounded-[2rem] bg-[#080808]/80 backdrop-blur-sm border border-white/10 transition-colors hover:border-blue-500/20 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
            <div className="relative z-10 flex-1">
               <div className="p-3 rounded-full bg-blue-900/10 text-blue-400 w-fit mb-6"><Code size={24} /></div>
               <h3 className="text-xl font-bold text-white mb-6">Engineering</h3>
               <div className="space-y-5">
                  {[
                     { l: 'Python', level: '95%' },
                     { l: 'C / C++', level: '90%' },
                     { l: 'Java', level: '85%' },
                     { l: 'JavaScript / Node', level: '85%' },
                     { l: 'Flutter / Swift', level: '80%' }
                  ].map((item, i) => (
                     <div key={i}>
                        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                           <span>{item.l}</span>
                           <span>{item.level}</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500/50 rounded-full" style={{ width: item.level }}></div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={300} className="p-8 rounded-[2rem] bg-[#080808]/80 backdrop-blur-sm border border-white/10 transition-colors hover:border-purple-500/20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
             <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                   <Cpu className="text-purple-400" size={24} />
                   <h3 className="text-xl font-bold text-white">Infrastructure & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                   {['AWS', 'Git', 'MongoDB', 'MySQL', 'Express', 'Gemini API', 'Docker', 'Linux'].map(tool => (
                      <span key={tool} className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1.5 rounded-lg bg-white/5 transition-colors cursor-default hover:bg-white/10">{tool}</span>
                   ))}
                </div>
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// 6. Projects Section
const Projects = () => {
  const projects = [
    {
      title: "Molecular Graph NN",
      subtitle: "Drug Safety Assessment",
      desc: "Designed a complete ML pipeline with Graph Attention Networks achieving 87.2% accuracy in predicting molecular toxicity.",
      tags: ["PyTorch", "Graph ML", "Healthcare"],
      color: "from-emerald-500 to-teal-600",
      stat: "87.2%",
      statLabel: "Accuracy"
    },
    {
      title: "Aura Response",
      subtitle: "AI Disaster Management",
      desc: "Developed a bilingual NLP engine (English & Tamil) processing 90+ commands with <100ms response time.",
      tags: ["Flask", "NLP", "Leaflet.js"],
      color: "from-orange-500 to-red-600",
      stat: "<100ms",
      statLabel: "Latency"
    },
    {
      title: "Invisibl RAG",
      subtitle: "Invisibl Cloud Intern",
      desc: "Researched and developed robust RAG architectures reducing AI hallucinations by 35% for enterprise use cases.",
      tags: ["GenAI", "AWS Bedrock", "LLMs"],
      color: "from-violet-500 to-purple-600",
      stat: "-35%",
      statLabel: "Hallucinations"
    }
  ];

  return (
    <section id="projects" className="relative py-16 md:py-20 z-10 bg-transparent">
       <div className="max-w-[980px] mx-auto px-6 mb-16">
          <Reveal>
             <h2 className="text-sm font-bold text-white mb-4 tracking-[0.2em] uppercase opacity-50">Mission Logs</h2>
             <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Selected Work.</h3>
          </Reveal>
       </div>

       <div className="max-w-[980px] mx-auto px-6 space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  
                  {/* Content Side */}
                  <Reveal delay={100} className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="text-gray-600" size={16} />
                      <span className="text-xs font-bold tracking-widest uppercase text-gray-500">{project.subtitle}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-gray-200 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-light">{project.desc}</p>
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5">{tag}</span>
                      ))}
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:translate-x-2 transition-transform">
                      View Case Study <ArrowRight size={14} />
                    </a>
                  </Reveal>

                  {/* Visual Side */}
                  <Reveal className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className={`aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.color} p-[1px] shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                       <div className="w-full h-full bg-[#050505]/90 rounded-[23px] flex items-center justify-center relative overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 blur-xl group-hover:opacity-15 transition-opacity duration-500`}></div>
                          
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite] opacity-20"></div>
                             <div className="absolute w-[60%] h-[60%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-20"></div>
                          </div>

                          <div className="text-center z-10 transform group-hover:scale-105 transition-transform duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)">
                             <div className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter">{project.stat}</div>
                             <div className="text-sm text-white/50 uppercase tracking-[0.3em]">{project.statLabel}</div>
                          </div>
                       </div>
                    </div>
                  </Reveal>

               </div>
            </div>
          ))}
       </div>
    </section>
  );
};

// 7. Experience Section
const Experience = () => {
  const jobs = [
    {
      role: "AI/ML Intern",
      company: "FLSmidth",
      period: "Aug 2025 - Present",
      desc: "Building an iOS app integrating ML outputs for miller analysis. Improving industrial performance modeling."
    },
    {
      role: "Summer Intern",
      company: "Invisibl Cloud",
      period: "Jun 2025",
      desc: "Evaluated AWS Bedrock, OpenAI, and Gemini models. Guided client adoption of Scalable GenAI frameworks."
    },
    {
      role: "Summer Research Intern",
      company: "NIT Trichy",
      period: "Summer 2024",
      desc: "Developed 'Aura', a bilingual NLP disaster response engine processing 90+ commands with <100ms latency."
    },
    {
      role: "Music Club Core",
      company: "VIT Chennai",
      period: "2024 - 2027",
      desc: "Performed in 20+ college events for audiences of 500+. Enhanced cultural visibility through musical leadership."
    },
    {
      role: "Cultural Secretary",
      company: "PSBB",
      period: "2022 - 2023",
      desc: "Led and organized 20+ cultural events for 1,000+ students. Leadership in action."
    }
  ];

  return (
    <section id="experience" className="relative py-16 md:py-20 z-10 border-t border-white/5 bg-transparent">
      <div className="max-w-[980px] mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tighter">Trajectory.</h2>
        </Reveal>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent md:-ml-px ml-4"></div>

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'}`}>
                
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-black border-2 border-cyan-400 rounded-full md:-translate-x-1.5 translate-y-1.5 z-10"></div>

                <Reveal delay={index * 100} className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <h3 className="text-2xl font-bold text-white mb-1">{job.company}</h3>
                  <p className="text-cyan-400 font-mono text-xs mb-3 uppercase tracking-wider">{job.role} | {job.period}</p>
                  <p className="text-gray-400 text-lg leading-relaxed">{job.desc}</p>
                </Reveal>
                
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 8. Footer
const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 md:py-20 z-10 bg-transparent border-t border-white/10">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Let's Connect.</h2>
          <p className="text-gray-400 mb-12 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Ready to deploy next-gen AI solutions? <br/>Initialising communication protocols...
          </p>
          
          <a href="mailto:ksjananijayalakshmi@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform mb-16 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <Mail size={20} />
            Send Message
          </a>

          <div className="flex justify-center gap-10 mb-16">
            <a href="https://github.com/Janani-prog" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/janani-jayalakshmi-2a978228a/" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
          </div>

          <div className="text-gray-700 text-xs uppercase tracking-[0.2em]">
            <p>© 2025 Janani Jayalakshmi. All systems nominal.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

// --- MAIN APP ---

const App = () => {
  useEffect(() => {
    document.title = "Janani | AI Engineer";
  }, []);

  return (
    <div className="bg-black min-h-screen text-gray-200 selection:bg-cyan-500/30 selection:text-white font-sans overflow-x-hidden">
      <Starfield />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />

      <style>{`
        @keyframes fade-in {
           from { opacity: 0; }
           to { opacity: 1; }
        }
        .animate-fade-in {
           animation: fade-in 0.3s ease-out forwards;
        }
        
        /* Smooth Scrolling for Anchor Links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
