
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail, Download } from "lucide-react";

const navItems = [
  { name: "Home", path: "/#home", id: "home", icon: <Home className="h-4 w-4 mr-2" /> },
  { name: "About Me", path: "/#about", id: "about", icon: <User className="h-4 w-4 mr-2" /> },
  { name: "Skills", path: "/#skills", id: "skills", icon: <Download className="h-4 w-4 mr-2" /> },
  { name: "Projects", path: "/#projects", id: "projects", icon: <Briefcase className="h-4 w-4 mr-2" /> },
  { name: "Contact", path: "/#contact", id: "contact", icon: <Mail className="h-4 w-4 mr-2" /> },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop < 200 && sectionTop >= -200 && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    
    // Check if there's a hash in the URL when the component mounts or location changes
    if (location.hash) {
      // Remove the # character
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          // Get the height of the fixed header (approx 64px)
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  // Handle smooth scrolling for navigation items with offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the fixed header (approx 64px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close the menu on mobile
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={`fixed top-0 w-full z-10 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/#home" className="font-bold text-xl" onClick={(e) => handleNavClick(e, 'home')}>
            Portfolio
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-[60px] left-0 w-full h-auto bg-background/95 backdrop-blur-md shadow-md animate-fade-in z-50">
            <nav className="container mx-auto py-4 flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-1 animate-fade-in">
        {children}
      </main>
      
      <footer className="py-6 border-t border-border mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
