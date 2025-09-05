"use client";

import { useState, useEffect } from "react";
import { Plus, Edit3, Trash2 } from "lucide-react"; // Using lucide-react for icons

// You might need to install lucide-react: npm install lucide-react

// --- TypeScript Interface ---
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

// --- Initial Mock Data ---
const initialProducts: Product[] = [
  { id: 1, name: "Quantum Processor", category: "Hardware", price: 2999.99 },
  { id: 2, name: "AI Analytics Suite", category: "Software", price: 499.0 },
  { id: 3, name: "Cloud Storage (1TB)", category: "Service", price: 99.99 },
];

const CrudShowcaseSection = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formState, setFormState] = useState({ name: "", category: "", price: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Effect to populate form when a product is selected
  useEffect(() => {
    if (selectedProduct) {
      setFormState({
        name: selectedProduct.name,
        category: selectedProduct.category,
        price: selectedProduct.price.toString(),
      });
      setIsEditing(true);
    } else {
      setFormState({ name: "", category: "", price: "" });
      setIsEditing(false);
    }
  }, [selectedProduct]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };
  
  const clearSelection = () => {
    setSelectedProduct(null);
  }

  // --- CRUD Operations ---
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.category || !formState.price) return;

    const newProduct: Product = {
      id: Date.now(), // simple unique id
      name: formState.name,
      category: formState.category,
      price: parseFloat(formState.price),
    };
    setProducts([...products, newProduct]);
    clearSelection();
  };
  
  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    
    setProducts(products.map(p => 
      p.id === selectedProduct.id 
        ? { ...p, name: formState.name, category: formState.category, price: parseFloat(formState.price) } 
        : p
    ));
    clearSelection();
  };
  
  const handleDeleteProduct = () => {
    if (!selectedProduct) return;
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    clearSelection();
  };

  return (
    <section id="crud-demo" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Effortless Database Management
        </h2>
        <p className="text-md md:text-lg text-center max-w-3xl mx-auto mb-12">
          Interact with the panel below to see how our interfaces make CRUD
          operations intuitive. This demo is powered by a simulated{" "}
          <span className="font-bold text-primary">Supabase</span> backend.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Admin Panel */}
          <div className="lg:col-span-2 bg-background shadow-neumorphic p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-xl font-bold">{isEditing ? "Edit Product" : "Add Product"}</h3>
               {isEditing && <button onClick={clearSelection} className="text-sm hover:text-primary">Cancel</button>}
            </div>
            <form onSubmit={isEditing ? handleUpdateProduct : handleAddProduct} className="space-y-4">
              <input type="text" name="name" value={formState.name} onChange={handleInputChange} placeholder="Product Name" className="w-full p-3 rounded-lg bg-background shadow-neumorphic-inset focus:outline-none" />
              <input type="text" name="category" value={formState.category} onChange={handleInputChange} placeholder="Category" className="w-full p-3 rounded-lg bg-background shadow-neumorphic-inset focus:outline-none" />
              <input type="number" name="price" value={formState.price} onChange={handleInputChange} placeholder="Price" className="w-full p-3 rounded-lg bg-background shadow-neumorphic-inset focus:outline-none" />
              <div className="flex items-center gap-4">
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-background shadow-neumorphic rounded-full font-medium p-3 active:shadow-neumorphic-inset">
                  {isEditing ? <Edit3 size={18} /> : <Plus size={18} />}
                  {isEditing ? "Update Product" : "Add Product"}
                </button>
                {isEditing && (
                    <button type="button" onClick={handleDeleteProduct} className="flex-shrink-0 bg-red-500/80 text-white shadow-neumorphic rounded-full p-3 active:shadow-neumorphic-inset">
                        <Trash2 size={18} />
                    </button>
                )}
              </div>
            </form>
          </div>

          {/* Live Database View */}
          <div className="lg:col-span-3 bg-background shadow-neumorphic-inset p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Live Product Database</h3>
            <div className="space-y-3">
              {products.map((product) => (
                <div key={product.id} onClick={() => handleSelectProduct(product)} className={`p-4 rounded-lg cursor-pointer transition-all ${selectedProduct?.id === product.id ? "bg-primary/20 shadow-neumorphic-inset" : "bg-background shadow-neumorphic"}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">{product.name}</p>
                      <p className="text-sm text-foreground/60">{product.category}</p>
                    </div>
                    <p className="font-semibold text-lg">${product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
              {products.length === 0 && <p className="text-center text-foreground/60 py-8">Database is empty. Add a product!</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrudShowcaseSection;