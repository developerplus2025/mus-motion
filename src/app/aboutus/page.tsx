import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MailIcon,
  PhoneIcon,
  GlobeIcon,
  MusicIcon,
  ZapIcon,
  UsersIcon,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: MusicIcon,
      title: "Advanced Audio Engine",
      description: "High-quality sound processing for professional results",
    },
    {
      icon: ZapIcon,
      title: "Real-time Collaboration",
      description: "Work seamlessly with other musicians around the world",
    },
    {
      icon: UsersIcon,
      title: "Active Community",
      description: "Join a vibrant community of music creators and enthusiasts",
    },
  ];

  const teamMembers = [
    { name: "John Doe", role: "Founder & CEO", avatar: "JD" },
    { name: "Jane Smith", role: "Lead Developer", avatar: "JS" },
    { name: "Alex Johnson", role: "Head of Design", avatar: "AJ" },
    { name: "Emily Brown", role: "Community Manager", avatar: "EB" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Company History */}
      <Card className="mb-8 bg-[#000000]">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Founded in 2015, our company has been at the forefront of music
            production software innovation. What started as a passion project by
            a group of musicians and developers has grown into a leading
            platform used by creators worldwide. Our journey is driven by the
            belief that everyone should have access to professional-grade music
            production tools.
          </p>
        </CardContent>
      </Card>

      {/* Mission Statement */}
      <Card className="mb-8 bg-[#000000]">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">
            &quot;To empower musicians of all levels with innovative tools that
            inspire creativity and push the boundaries of music
            production.&quot;
          </p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="bg-[#000000]">
            <CardHeader>
              <feature.icon className="mb-2 h-8 w-8" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Section */}
      <h2 className="mb-4 text-2xl font-bold">Our Team</h2>
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-[#000000]">
            <CardContent className="flex flex-col items-center pt-6">
              <Avatar className="mb-4 h-24 w-24">
                <AvatarImage
                  src={`/placeholder.svg?text=${member.avatar}`}
                  alt={member.name}
                />
                <AvatarFallback>{member.avatar}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Information */}
      <Card className="bg-[#000000]">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center">
            <MailIcon className="mr-2 h-4 w-4" />
            <span>support@musicsoft.com</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="mr-2 h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <GlobeIcon className="mr-2 h-4 w-4" />
            <span>www.musicsoft.com</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Get in Touch</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
