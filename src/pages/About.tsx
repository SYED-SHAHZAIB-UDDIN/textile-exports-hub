import { Link } from "react-router-dom";
import { ArrowRight, Globe, Award, Users, Factory, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Every product undergoes rigorous quality checks to meet international standards.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients in over 50 countries with reliable and timely delivery.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building lasting partnerships through transparent communication and service.",
  },
  {
    icon: Factory,
    title: "Modern Facilities",
    description: "State-of-the-art manufacturing equipped with latest textile technology.",
  },
];

const services = [
  "Custom Fabrication",
  "Private Label Manufacturing",
  "OEM & ODM Services",
  "Quality Inspection",
  "Worldwide Shipping",
  "Custom Packaging",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="About Seven Star Tex International"
              subtitle="Your trusted partner for premium textile manufacturing and worldwide export."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                  alt="Textile manufacturing facility"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="font-display text-3xl font-bold">15+</p>
                  <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="space-y-6">
                <p className="text-accent font-medium tracking-widest uppercase text-sm">
                  Our Story
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                  Worldwide Textile Exporters Based in Pakistan
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Seven Star Tex International was founded with a vision to bring Pakistan's
                  rich textile heritage to the global market. Based in Faisalabad, the textile
                  hub of Pakistan, we have grown to become a leading manufacturer and exporter
                  of premium quality textiles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our expertise spans across knitted apparel, woven garments, and home textiles.
                  We pride ourselves on delivering exceptional quality, competitive pricing,
                  and reliable service to clients across the globe.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a dedicated team of textile professionals and state-of-the-art
                  manufacturing facilities, we are committed to exceeding our clients'
                  expectations in every aspect of our partnership.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide everything we do at Seven Star Tex International."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-in-up" delay={index * 100}>
                <div className="bg-card p-8 rounded-lg border border-border text-center hover-lift">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-6">
                <p className="text-accent font-medium tracking-widest uppercase text-sm">
                  What We Offer
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                  Comprehensive Textile Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  From concept to delivery, we provide end-to-end textile solutions tailored
                  to your specific needs. Our experienced team ensures seamless execution
                  at every stage.
                </p>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">
                    Discuss Your Requirements
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80"
                  alt="Textile samples"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80"
                  alt="Fabric production"
                  className="rounded-lg shadow-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1616627561839-074385245ff6?w=600&q=80"
                  alt="Home textiles"
                  className="rounded-lg shadow-lg -mt-4"
                />
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80"
                  alt="Manufacturing"
                  className="rounded-lg shadow-lg mt-4"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection animation="fade-in-up">
              <p className="font-display text-4xl md:text-5xl font-bold">15+</p>
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mt-2">
                Years Experience
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={100}>
              <p className="font-display text-4xl md:text-5xl font-bold">50+</p>
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mt-2">
                Countries Served
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="font-display text-4xl md:text-5xl font-bold">1000+</p>
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mt-2">
                Products Delivered
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={300}>
              <p className="font-display text-4xl md:text-5xl font-bold">500+</p>
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mt-2">
                Happy Clients
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you need custom manufacturing, private label production, or bulk orders,
                we're here to help bring your textile vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products">View Our Products</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
