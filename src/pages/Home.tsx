
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from '../../src/images/me-professional.jpg';


const Home = () => {
  const handleDownloadResume = () => {
    // In a real app, this would be a link to an actual PDF file
    const link = document.createElement('a');
    link.href = '../../Konstantinos Rafael Manousoudakis.pdf'; // Path to your resume file
    link.download = 'Konstantinos Rafael Manousoudakis.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="min-h-[calc(100vh-theme(spacing.20))] flex flex-col justify-center items-center px-4 py-6 md:py-12">
      <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 mt-16 md:mt-20">
        <div className="mx-auto mb-4 md:mb-6 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
          <img 
            src={profileImage} 
            alt="profile image" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold tracking-tight">
        I Build Scalable Web Applications That Drive Real Business Results.
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
         As a MERN stack developer, I specialize in crafting fast, responsive, and fully functional web solutions using MongoDB, Express, React, and Node.js.
        </p>
        <div className="pt-4 md:pt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" onClick={handleDownloadResume} className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
