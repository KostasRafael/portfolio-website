
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import ScrollablePage from "./pages/ScrollablePage";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<ScrollablePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

// If it encounters a component, it calls it and keeps descending down to the returned react elements.
// The virtual DOM is the tree of elements
// Needs to sync the virtual DOM with the real DOM
// On the initial render React has to insert the full tree in the DOM
// The tree chanfes, for example, the state of a component might change which will result to a different return value, which will in turn 
// affect and change some react element.
// React generates a new tree of elements (a tree that accounts for the state change and consequently the new returned value)
// we now have 2 tees, the old and the new


// How React communicates with the renderer?
// updater
// Effect = activity like DOM mutation or lifecycle method call
// Commits face

export default App;
