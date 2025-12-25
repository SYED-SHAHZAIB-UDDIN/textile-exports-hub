import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { categories, products, type Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const subcategories = useMemo(() => {
    if (activeCategory === "all") {
      return [...new Set(products.map((p) => p.subcategory))];
    }
    const category = categories.find((c) => c.slug === activeCategory);
    return category?.subcategories || [];
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Our Products"
              subtitle="Explore our comprehensive range of premium textiles, from knits to woven garments and home textiles."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => handleCategoryChange("all")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryChange(category.slug)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Subcategories */}
      {activeCategory !== "all" && (
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {subcategories.map((sub) => (
                <span
                  key={sub}
                  className="px-4 py-1.5 bg-background border border-border rounded-full text-xs text-muted-foreground"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <AnimatedSection key={product.id} animation="fade-in-up" delay={(index % 4) * 100}>
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover-lift"
                >
                  <div className="aspect-square img-zoom">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">
                      {product.subcategory}
                    </span>
                    <h3 className="font-medium text-foreground mt-1 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs text-accent font-medium uppercase tracking-wider">
                  {selectedProduct.subcategory}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Category: <span className="text-foreground capitalize">{selectedProduct.category}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Need Custom Products?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We offer custom fabrication and manufacturing services. Contact us to discuss your 
              specific requirements and get a personalized quote.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              Request Custom Quote
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
