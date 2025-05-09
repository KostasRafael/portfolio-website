
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="py-8 sm:py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Have a project in mind or just want to say hello? Feel free to reach out.
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4">
              <Mail className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <CardTitle className="text-lg sm:text-xl">Email</CardTitle>
            <CardDescription>
              <a 
                href="mailto:hello@example.com" 
                className="text-primary hover:underline text-sm sm:text-base"
              >
                hello@example.com
              </a>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4">
              <MessageSquare className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <CardTitle className="text-lg sm:text-xl">Social</CardTitle>
            <CardDescription className="flex flex-col space-y-1">
              <a 
                href="https://twitter.com/username" 
                className="text-primary hover:underline text-sm sm:text-base"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/username" 
                className="text-primary hover:underline text-sm sm:text-base"
              >
                LinkedIn
              </a>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4">
              <Send className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <CardTitle className="text-lg sm:text-xl">Schedule</CardTitle>
            <CardDescription>
              <a 
                href="https://calendly.com/username" 
                className="text-primary hover:underline text-sm sm:text-base"
              >
                Book a call
              </a>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      
      <Card className="mt-8 sm:mt-12">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Send me a message</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Fill out the form below and I'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
