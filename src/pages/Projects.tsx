
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import onlineShopImage from '../../src/images/online-shop.png';
import myFlixImage from '../../src/images/myflix-cover.png';
import meetImage from '../../src/images/meetapp.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  longDescription?: string;
  features?: string[];
  technologies?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Online Shop",
      description: "A modern, fully functional online shop built with Node.js and React",
      tags: ["React",  "Context API", "Node.js", "MongoDB"],
      image: onlineShopImage,
      longDescription: "A full-stack e-commerce application built with Node.js and Express on the backend, and React with TypeScript on the frontend. The UI features a clean, minimal design focused on usability and responsiveness. Core features include product browsing, cart management, and secure order placement. This project showcases my ability to develop scalable, user-friendly web applications with a modern tech stack.",
      features: ["Displays a list of products", "add to and remove from cart", "checkout", "products grouped into categories", "search products", "Dark/Light mode", "Real-time data visualization", "Cross-device synchronization"],
      technologies: ["React", "TypeScript", "Node.js", "Express.js"]
    },
    {
      id: 2,
      title: "myFlix movies application",
      description: "A movies application built with Node.js and React",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      image: myFlixImage,
      longDescription: "myFlix client is a movies application that displays a list of movies. Users can create an account and then login using their user credentials. Once logged in, users can add movies to their list of favorite movies, as well as remove movies from that list. Additionally, users can edit their user details and delete their account.",
      features: ["Display a list of movies", "Users can signup and login", "Users can add movies to their list of favorite movies", "Users can edid or delete their account"],
      technologies: ["React", "redux", "JSX", "Node.js", "Expres.js"]
    },
    {
      id: 3,
      title: "Meet App events application",
      description: "An events application that allows users to browse different events",
      tags: ["Mobile", "React Native", "Health"],
      image: meetImage,
      longDescription: "Meet App is a React-based event discovery application that fetches event data from the Google Calendar API. Users can explore events worldwide, filter them by city, view detailed event information, and customize how many events are displayed. The app supports offline access through cached data and is installable as a Progressive Web App (PWA). It also features interactive scatter and pie charts for visual insights into event distribution and attendee data.",
      features: ["Progressive Web App (PWA)", "Google Calendar API Integration", "Data Visualization", "Offline Access", "Responsive UI", "Search Events by City", "Search Events by Name", "Customizable Event Display", "Event Detail View", "Bank synchronization"],
      technologies: ["React Native", "Firebase", "HealthKit API", "Google Fit API"]
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "An application that helps users visualize spending habits and set saving goals.",
      tags: ["Web App", "Data Visualization", "React"],
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      longDescription: "This personal finance application empowers users to take control of their finances through intuitive visualization of spending patterns and automated savings recommendations.",
      features: ["Progressive Web App (PWA)", "Google Calendar API Integration", "Data Visualization", "Offline Access", "Responsive UI", "Search Events by City", "Search Events by Name", "Customizable Event Display", "Event Detail View", "Bank synchronization"],
      technologies: ["React", "D3.js", "Node.js", "Plaid API"]
    },
  ];

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <div className="py-8 sm:py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
      <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl">
        A showcase of my latest work, including personal projects and client collaborations.
        Each project represents a unique challenge and solution approach.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden border">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="ghost" 
                className="group text-sm flex items-center gap-1"
                onClick={() => handleOpenDialog(project)}
              >
                View details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-lg max-w-[95%] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-sm sm:text-base text-foreground mt-2">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-sm sm:text-base">{selectedProject.longDescription}</p>
                
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg font-medium mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg font-medium mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Projects;
