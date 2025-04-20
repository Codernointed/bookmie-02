
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bookmie-space-cadet via-bookmie-space-cadet-2 to-bookmie-space-cadet-3 z-0"></div>
      
      {/* Animated Shapes */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 rounded-full bg-bookmie-orange opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-bookmie-orange opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      
      {/* Code Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("/code-bg.svg")`,
          backgroundSize: '600px',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-bookmie-orange">Transform</span> Your Digital Vision?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10">
              Let's collaborate to build innovative, scalable, and user-friendly solutions that drive your business forward.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
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
                className="border-white text-white hover:bg-white hover:text-bookmie-space-cadet font-medium px-8 py-6 rounded-md hover-scale"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
