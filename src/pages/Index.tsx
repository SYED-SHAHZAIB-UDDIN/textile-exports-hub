import { Link } from "react-router-dom";
import { ArrowRight, Globe, Award, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { categories } from "@/data/products";

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Countries Served", icon: Globe },
  { value: "1000+", label: "Products Delivered", icon: Package },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-in-up">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
                Worldwide Textile Exporters
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight mb-6 text-balance">
                Crafting Quality Textiles for the World
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Premium knits, woven garments, and home textiles. Fabrication excellence 
                from Pakistan to destinations across the globe.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="fade-in-up" delay={index * 100}>
                <div className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-accent" />
                  <p className="font-display text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Our Product Categories"
              subtitle="Discover our comprehensive range of premium textile products, crafted with expertise and delivered worldwide."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} animation="fade-in-up" delay={index * 100}>
                <Link 
                  to={`/products?category=${category.slug}`}
                  className="group block relative overflow-hidden rounded-lg hover-lift"
                >
                  <div className="aspect-[4/5] img-zoom">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>View Products</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                  alt="Textile manufacturing"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="font-display text-3xl font-bold">15+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="space-y-6">
                <p className="text-accent font-medium tracking-widest uppercase text-sm">
                  About Us
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                  Worldwide Exporters Based in Pakistan
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Seven Star Tex International is a leading textile manufacturer and exporter 
                  based in Faisalabad, Pakistan. We specialize in fabrication, custom manufacturing, 
                  and export of premium quality textiles to clients across the globe.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our state-of-the-art facilities and experienced team ensure that every product 
                  meets international quality standards while maintaining competitive pricing.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
                Ready to Partner With Us?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                Let's discuss your textile requirements. Get a custom quote tailored to your 
                specific needs and volume requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/products">Browse Products</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
