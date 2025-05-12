
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import imageBarcelona from '../../src/images/my-profile-image-barcelona.jpg';
import meWithAnimalImage from '../../src/images/me-animal.jpg';
import thailandImage from '../../src/images/thailand.jpg';
import amsterdamImage from '../../src/images/bike-amsterdam.jpg';

const About = () => {
  const handleDownloadResume = () => {
    // In a real scenario, this would be a link to a PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file
    link.download = 'john-doe-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-8 sm:py-12 max-w-4xl mx-auto px-4">
     
      
      <div className="flex space-y-0 sm:space-y-0">
        <div className= "border">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-2">Creative Thinker. Logical Coder. People-Centric Developer.</h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
             From philosophy to web development, with years of customer-facing experience, I bring critical thinking, logical problem-solving, and real-world people skills to create thoughtful, user-focused digital experiences.
          </p>
        </div>
        <div className="w-full md:w-1/2 border">
            <img 
              src={imageBarcelona} 
              alt="me Barcelona" 
              className="rounded-lg shadow-md w-full h-auto object-cover aspect-[3/4]"
            />
        </div>
        </div>
        {/* Image and Intro Section */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src={amsterdamImage} 
              alt="me in Amsterdam on a bike" 
              className="rounded-lg shadow-md w-full h-auto object-contain aspect-[3/4]"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
             Hey, I’m Konstantinos Rafael Manousoudakis — but honestly, feel free to just call me Konstantinos or Rafael, whatever’s easier!
             </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              I’m from the beautiful island of Crete in Greece, and I genuinely feel lucky to call this place home.
            </p>
          </div>
        </div>
        
        {/* Personal Story Section */}
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I’ve got a big love for traveling. I’ve explored a bunch of amazing places around Europe, and I’ve also had the chance to visit parts of Asia and the U.S. Each trip has left me with stories, memories, and a deeper curiosity about the world and its people.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
               I’m someone who thrives around others — I really enjoy working with people, especially when we’re all aiming for something bigger than ourselves. Whether it’s through work, a project, or just sharing ideas, I love the energy that comes from collaboration.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                When I'm not designing or coding, you'll find me hiking in the mountains, experimenting with new recipes in the kitchen, or getting lost in a good book. I believe these diverse interests help fuel my creativity and bring fresh perspectives to my work.
              </p>
            </div>
            <div>
              <img 
                src={meWithAnimalImage} 
                alt="my with an animal" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Philosophy Section */}
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="md:order-2">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                 I’m also a bit of a lifelong learner. Over the years, I’ve picked up the guitar, taught myself how to sing, and learned two languages (so far!). Yes, I do love learning! I’m naturally pretty driven — I can be lighthearted and easygoing, but when it comes to getting something done, I bring discipline and focus. I like solving problems, paying attention to the little things, and pushing through challenges.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                 Anyway, that’s a little bit about me. Always happy to connect and share more — especially if it involves travel stories, good music, or interesting ideas.
                </p>
              </div>
            </div>
            <div className="md:order-1">
              <img 
                src={thailandImage}
                alt="me in Thailand" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-8">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={handleDownloadResume} className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
  );
};

export default About;
