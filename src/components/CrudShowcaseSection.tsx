"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit3, Trash2, XCircle } from "lucide-react";
import toast from "react-hot-toast";

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

  const clearSelection = () => {
    setSelectedProduct(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.category || !formState.price) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (isEditing) {
      // Update
      setProducts(
        products.map((p) =>
          p.id === selectedProduct?.id
            ? { ...p, ...formState, price: parseFloat(formState.price) }
            : p
        )
      );
      toast.success("Product updated successfully!");
    } else {
      // Add
      const newProduct: Product = {
        id: Date.now(),
        name: formState.name,
        category: formState.category,
        price: parseFloat(formState.price),
      };
      setProducts([...products, newProduct]);
      toast.success("Product added successfully!");
    }
    clearSelection();
  };

  const handleDeleteProduct = () => {
    if (!selectedProduct) return;
    setProducts(products.filter((p) => p.id !== selectedProduct.id));
    toast.success("Product deleted!");
    clearSelection();
  };

  return (
    <section id="crud-demo" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Effortless Database Management
          </h2>
          <p className="text-md md:text-lg text-white/70 max-w-3xl mx-auto">
            Our interfaces make CRUD operations intuitive and seamless. This demo
            simulates interaction with a live database.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Admin Panel */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm h-fit sticky top-28"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                {isEditing ? "Edit Product" : "Add New Product"}
              </h3>
              {isEditing && (
                <button onClick={clearSelection} className="text-white/60 hover:text-white transition-colors">
                  <XCircle size={20} />
                </button>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" value={formState.name} onChange={handleInputChange} placeholder="Product Name" className="w-full p-3 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
              <input type="text" name="category" value={formState.category} onChange={handleInputChange} placeholder="Category" className="w-full p-3 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
              <input type="number" name="price" value={formState.price} onChange={handleInputChange} placeholder="Price" step="0.01" className="w-full p-3 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
              <div className="flex items-center gap-4 pt-2">
                <motion.button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-full font-medium p-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {isEditing ? <Edit3 size={18} /> : <Plus size={18} />}
                  {isEditing ? "Update Product" : "Add Product"}
                </motion.button>
                {isEditing && (
                  <motion.button type="button" onClick={handleDeleteProduct} className="flex-shrink-0 bg-red-600/80 text-white rounded-full p-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Trash2 size={18} />
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Live Database View */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-3 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Live Product Database</h3>
            <div className="space-y-3">
              <AnimatePresence>
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border ${
                      selectedProduct?.id === product.id
                        ? "bg-white/20 border-white/30"
                        : "bg-white/5 border-transparent hover:bg-white/10"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-white">{product.name}</p>
                        <p className="text-sm text-white/60">{product.category}</p>
                      </div>
                      <p className="font-semibold text-lg text-white">${product.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {products.length === 0 && (
                <p className="text-center text-white/60 py-8">
                  Database is empty. Add a product to get started!
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CrudShowcaseSection;