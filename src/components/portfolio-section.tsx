
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    description: "A comprehensive financial analytics dashboard with real-time data visualization.",
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Health Tracking App",
    description: "Mobile application for tracking health metrics with personalized insights.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React Native", "Firebase", "GraphQL"]
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with inventory management and payment processing.",
    category: "web",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"]
  },
  {
    id: 4,
    title: "Smart Home IoT System",
    description: "IoT platform connecting smart home devices with a unified control interface.",
    category: "iot",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2069&auto=format&fit=crop",
    technologies: ["AWS IoT", "React", "Node.js", "MQTT"]
  },
  {
    id: 5,
    title: "Supply Chain Management",
    description: "Blockchain-based supply chain tracking and management system.",
    category: "blockchain",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=2021&auto=format&fit=crop",
    technologies: ["Ethereum", "Solidity", "React", "Node.js"]
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "Machine learning tool that generates marketing content based on brand guidelines.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenAI API", "React"]
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI & ML" },
  { id: "blockchain", label: "Blockchain" },
  { id: "iot", label: "IoT" }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-bookmie-floral-white dark:bg-bookmie-space-cadet">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bookmie-space-cadet dark:text-white mb-4">
            Our <span className="text-bookmie-orange">Portfolio</span>
          </h2>
          <p className="text-lg text-bookmie-space-cadet-2 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and discover how we've helped our clients achieve their goals.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="flex flex-wrap justify-center bg-white dark:bg-bookmie-space-cadet-2 p-1 rounded-lg mx-auto mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="data-[state=active]:bg-bookmie-orange data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <Card className="overflow-hidden group cursor-pointer hover-scale">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bookmie-space-cadet/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <Button size="sm" variant="ghost" className="text-white border border-white hover:bg-white hover:text-bookmie-space-cadet">
                            View Details <ArrowUpRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-bold text-bookmie-space-cadet dark:text-white mb-2">{project.title}</h3>
                      <p className="text-bookmie-space-cadet-2/80 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-bookmie-space-cadet-2 text-bookmie-space-cadet dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-bookmie-orange text-bookmie-orange hover:bg-bookmie-orange hover:text-white transition-colors hover-scale"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
