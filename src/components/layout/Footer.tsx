import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-xl font-semibold">Seven Star Tex</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                International
              </p>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Crafting quality textiles for the world. Your trusted partner for premium knits,
              woven garments, and home textiles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Our Products</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/products?category=knits" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Knits
              </Link>
              <Link to="/products?category=woven" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Woven & Garments
              </Link>
              <Link to="/products?category=home" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Home Textiles
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  Masbool Road, Shahid Pura Batala Colony,<br />
                  Faisalabad, Pakistan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:0418718442" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  0418718442
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:Info@sevenstartexinternational.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Info@sevenstartexinternational.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} Seven Star Tex International. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Worldwide Textile Exporters | Made in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
