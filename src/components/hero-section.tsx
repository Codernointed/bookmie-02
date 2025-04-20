
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from "lucide-react";

const codeSnippet = `
function Bookmie() {
  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'AI Integration'
  ];
  
  return {
    build: (idea) => transform(idea),
    scale: (product) => optimize(product),
    innovate: () => true
  };
}

// Your vision, our code.
const future = Bookmie().build(yourIdea);
`;

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const xOffset = ((x / rect.width) - 0.5) * 20;
      const yOffset = ((y / rect.height) - 0.5) * 20;
      
      containerRef.current.style.setProperty('--x-offset', `${xOffset}px`);
      containerRef.current.style.setProperty('--y-offset', `${-yOffset}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-bookmie-floral-white dark:from-bookmie-space-cadet-3 dark:to-bookmie-space-cadet"
      ref={containerRef}
    >
      {/* Background code pattern */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `url("/code-bg.svg")`,
          backgroundSize: '1000px',
          transform: 'translate(var(--x-offset, 0), var(--y-offset, 0))',
          transition: 'transform 0.2s ease',
        }}
      />
      
      {/* Abstract shapes */}
      <motion.div 
        className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-bookmie-orange opacity-10 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-bookmie-space-cadet opacity-10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center z-10 px-4">
        <motion.div 
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-bookmie-space-cadet dark:text-white">
            We <span className="text-bookmie-orange">Build.</span> We <span className="text-bookmie-orange">Scale.</span> We <span className="text-bookmie-orange">Innovate.</span>
          </h1>
          
          <div className="py-4">
            <TypeAnimation
              sequence={[
                'Your Vision. Our Code. Infinite Possibilities.',
                2000,
                'Turn Ideas Into Powerful Software.',
                2000,
                'Software Development Reimagined.',
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-xl md:text-2xl text-bookmie-space-cadet-2 dark:text-gray-300"
              repeat={Infinity}
            />
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-bookmie-orange hover:bg-bookmie-orange/90 text-white font-medium px-8 py-6 rounded-md animate-pulse-glow hover-scale hover-glow"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-bookmie-space-cadet dark:border-white text-bookmie-space-cadet dark:text-white hover:bg-bookmie-space-cadet hover:text-white dark:hover:bg-white dark:hover:text-bookmie-space-cadet font-medium px-8 py-6 rounded-md hover-scale"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-bookmie-space-cadet to-bookmie-space-cadet-2 text-bookmie-floral-white p-8 rounded-lg shadow-xl">
            <pre className="font-mono text-sm md:text-base overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          </div>
          
          <motion.div 
            className="absolute -bottom-6 -right-6 w-12 h-12 bg-bookmie-orange rounded-full flex items-center justify-center shadow-lg"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity 
            }}
          >
            <span className="font-bold text-white">{'>'}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
