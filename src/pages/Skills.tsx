
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { useIsMobile } from "@/hooks/use-mobile";

const Skills = () => {
  const isMobile = useIsMobile();
  
  const skillCategories = [
    {
      category: "Design",
      items: ["UI/UX Design", "Figma", "Adobe XD", "Sketch", "Responsive Design", "Prototyping"]
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Methods",
      items: ["Git", "GitHub", "VS Code", "Agile", "Scrum", "User Testing", "Accessibility"]
    }
  ];
  
  // Data for the radar chart
  const radarData = [
    { subject: 'Frontend', A: 90, fullMark: 100 },
    { subject: 'Backend', A: 75, fullMark: 100 },
    { subject: 'Design', A: 85, fullMark: 100 },
    { subject: 'DevOps', A: 70, fullMark: 100 },
    { subject: 'Mobile', A: 65, fullMark: 100 },
  ];
  
  // Data for bar chart
  const barData = [
    { name: 'JavaScript', value: 90 },
    { name: 'React', value: 85 },
    { name: 'TypeScript', value: 80 },
    { name: 'Node.js', value: 75 },
    { name: 'UI/UX', value: 85 },
    { name: 'HTML/CSS', value: 90 },
  ];

  const chartConfig = {
    skills: { label: "Skills" },
    proficiency: { label: "Proficiency" }
  };

  return (
    <div className="py-8 sm:py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">My Skills</h1>
      
      <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10">
        I've spent years honing my craft and building expertise in various technologies and methodologies. 
        Here's what I bring to the table:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Technical Proficiency</h2>
          <div className="h-64 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ChartContainer className="h-64 sm:h-80" config={chartConfig}>
                <BarChart 
                  data={isMobile ? barData.slice(0, 5) : barData} 
                  margin={{ 
                    top: 20, 
                    right: 0, 
                    left: 0, 
                    bottom: 5 
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={isMobile ? 10 : 12} tick={{ fontSize: isMobile ? 8 : 12 }} />
                  <YAxis width={30} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--primary)" name="Proficiency" />
                </BarChart>
              </ChartContainer>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Skill Areas</h2>
          <div className="h-64 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ChartContainer className="h-64 sm:h-80" config={chartConfig}>
                <RadarChart 
                  outerRadius={isMobile ? "60%" : "70%"}
                  data={radarData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" fontSize={isMobile ? 8 : 12} />
                  <PolarRadiusAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Radar name="Skills" dataKey="A" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.6} />
                </RadarChart>
              </ChartContainer>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="space-y-6 sm:space-y-8">
        {skillCategories.map((skillGroup) => (
          <div key={skillGroup.category} className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">{skillGroup.category}</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skillGroup.items.map((skill) => (
                <Card key={skill} className="bg-secondary border-none">
                  <CardContent className="py-1 sm:py-2 px-3 sm:px-4 text-sm sm:text-base">
                    <span>{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
