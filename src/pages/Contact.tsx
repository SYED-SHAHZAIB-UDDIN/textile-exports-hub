import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().optional(),
  company: z.string().optional(),
  productInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: ["Masbool Road, Shahid Pura", "Batala Colony, Faisalabad", "Pakistan"],
  },
  {
    icon: Phone,
    title: "Phone",
    content: ["0418718442"],
    href: "tel:0418718442",
  },
  {
    icon: Mail,
    title: "Email",
    content: ["Info@sevenstartexinternational.com"],
    href: "mailto:Info@sevenstartexinternational.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: ["Monday - Saturday", "9:00 AM - 6:00 PM (PKT)"],
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@sevenstartexinternational.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _captcha: "false",
          _subject: "New Inquiry from Textile Exports Hub"
        })
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24-48 hours.",
        });
        reset();
      } else {
        console.error("FormSubmit Error:", result);
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Contact Us"
              subtitle="Ready to discuss your textile requirements? Get in touch with our team for a personalized quote."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <AnimatedSection animation="slide-in-left">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email")}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        {...register("phone")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your company"
                        {...register("company")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productInterest">Product Interest</Label>
                    <Select onValueChange={(value) => setValue("productInterest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="knits">Knits</SelectItem>
                        <SelectItem value="woven">Woven & Garments</SelectItem>
                        <SelectItem value="home">Home Textiles</SelectItem>
                        <SelectItem value="custom">Custom Manufacturing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info & Map */}
            <AnimatedSection animation="slide-in-right">
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="bg-secondary p-6 rounded-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent flex-shrink-0">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.content.map((line, i) => (
                            info.href ? (
                              <a
                                key={i}
                                href={info.href}
                                className="text-sm text-muted-foreground hover:text-accent transition-colors block"
                              >
                                {line}
                              </a>
                            ) : (
                              <p key={i} className="text-sm text-muted-foreground">
                                {line}
                              </p>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Google Map */}
                <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.8842392837!2d73.0784!3d31.4181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269e77f5f8a67%3A0x8a06ece1b5b5c3a0!2sFaisalabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703000000000!5m2!1sen!2s"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Seven Star Tex International Location"
                  />
                </div>

                {/* Additional Note */}
                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Why Partner With Us?
                  </h3>
                  <ul className="space-y-2 text-sm text-primary-foreground/80">
                    <li>✓ Competitive pricing with no compromise on quality</li>
                    <li>✓ Flexible MOQ for all business sizes</li>
                    <li>✓ Quick turnaround time and reliable delivery</li>
                    <li>✓ Dedicated account manager for your business</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
