
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Cloud, Brain, Rocket } from "lucide-react";

const services = [
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Beautiful, responsive websites and web apps built with the latest technologies for optimal user experience.",
    technologies: "React, Angular, Vue, Next.js"
  },
  {
    icon: <Smartphone size={40} />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications built for iOS and Android with smooth performance.",
    technologies: "React Native, Flutter, Swift, Kotlin"
  },
  {
    icon: <Server size={40} />,
    title: "Backend Development",
    description: "Scalable, secure, and efficient backend systems that power your applications.",
    technologies: "Node.js, Python, Java, Go"
  },
  {
    icon: <Cloud size={40} />,
    title: "Cloud Solutions",
    description: "Cloud-native architectures designed for scale, security, and cost optimization.",
    technologies: "AWS, Azure, Google Cloud"
  },
  {
    icon: <Brain size={40} />,
    title: "AI Integration",
    description: "Leverage the power of artificial intelligence to transform your data into insights and actions.",
    technologies: "Machine Learning, NLP, Computer Vision"
  },
  {
    icon: <Rocket size={40} />,
    title: "DevOps & CI/CD",
    description: "Streamlined development operations with automated testing, deployment, and monitoring.",
    technologies: "Docker, Kubernetes, Jenkins, GitHub Actions"
  }
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="services" className="py-24 bg-white dark:bg-bookmie-space-cadet-3">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-bookmie-space-cadet dark:text-white mb-4">
              Our <span className="text-bookmie-orange">Services</span>
            </h2>
            <p className="text-lg text-bookmie-space-cadet-2 dark:text-gray-300 max-w-3xl mx-auto">
              We deliver end-to-end solutions tailored to your unique business needs, from concept to deployment and beyond.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-white dark:bg-bookmie-space-cadet-2 border border-gray-100 dark:border-bookmie-space-cadet hover-scale">
                <CardHeader>
                  <div className="mb-2 text-bookmie-orange">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-bookmie-space-cadet dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-bookmie-space-cadet-2/80 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium text-bookmie-space-cadet dark:text-gray-200">
                    <span className="font-semibold">Tech Stack:</span> {service.technologies}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full h-1 bg-gradient-to-r from-bookmie-orange to-bookmie-orange/50 rounded-full opacity-70"></div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
