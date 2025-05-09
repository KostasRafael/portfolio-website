
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Art of Minimalist Design",
      excerpt: "Exploring how less can truly be more in modern digital design, and why minimalism continues to dominate UI trends.",
      date: "April 20, 2025",
      readTime: "5 min read",
      category: "Design",
    },
    {
      id: 2,
      title: "Building Better Components with React and TypeScript",
      excerpt: "A deep dive into creating reusable, type-safe components that improve development workflow and reduce bugs.",
      date: "April 15, 2025",
      readTime: "8 min read",
      category: "Development",
    },
    {
      id: 3,
      title: "Accessibility First: Designing for Everyone",
      excerpt: "Why accessibility should be a primary concern in design rather than an afterthought, and how to implement it effectively.",
      date: "April 10, 2025",
      readTime: "6 min read",
      category: "Accessibility",
    },
    {
      id: 4,
      title: "The Psychology of User Experience",
      excerpt: "Understanding how cognitive biases and psychological principles influence user behavior and design decisions.",
      date: "April 5, 2025",
      readTime: "7 min read",
      category: "UX",
    },
  ];

  return (
    <div className="py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Thoughts, insights, and perspectives on design, development, and the digital world.
      </p>
      
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="block">
            <Card className="overflow-hidden hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="bg-secondary px-2 py-0.5 rounded-full">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="text-base">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter>
                <span className="text-sm text-primary font-medium">Read article →</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
