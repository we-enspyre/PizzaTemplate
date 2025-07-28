import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pizzaHawaii from "@/assets/pizza-hawaii.jpg";
import burgerChicken from "@/assets/burger-chicken.jpg";
import kebabMixed from "@/assets/kebab-mixed.jpg";
import pastaCarbonara from "@/assets/pasta-carbonara.jpg";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Tomatsauce, mozzarella, frisk basilikum",
    price: 85,
    image: pizzaMargherita,
    category: "pizza"
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Tomatsauce, mozzarella, pepperoni, champignon",
    price: 95,
    image: pizzaPepperoni,
    category: "pizza"
  },
  {
    id: 3,
    name: "Hawaii",
    description: "Tomatsauce, mozzarella, skinke, ananas",
    price: 90,
    image: pizzaHawaii,
    category: "pizza"
  },
  {
    id: 4,
    name: "Quattro Stagioni",
    description: "Tomatsauce, mozzarella, skinke, champignon, artiskok, oliven",
    price: 105,
    image: pizzaMargherita,
    category: "pizza"
  },
  {
    id: 5,
    name: "Vegetariana",
    description: "Tomatsauce, mozzarella, paprika, løg, champignon, oliven",
    price: 90,
    image: pizzaPepperoni,
    category: "pizza"
  },
  {
    id: 6,
    name: "Chicken Burger",
    description: "Kyllingeburger med salat, tomat og dressing",
    price: 75,
    image: burgerChicken,
    category: "burger"
  },
  {
    id: 7,
    name: "Blandet Kebab",
    description: "Grillet kød med friske grøntsager, salat og dressing i pitabrød",
    price: 80,
    image: kebabMixed,
    category: "kebab"
  },
  {
    id: 8,
    name: "Pasta Carbonara",
    description: "Pasta med bacon, ost, fløde og frisk peber",
    price: 95,
    image: pastaCarbonara,
    category: "pasta"
  }
];

const categories = [
  { id: "pizza", name: "Pizza", count: 5 },
  { id: "burger", name: "Burger", count: 1 },
  { id: "kebab", name: "Kebab", count: 1 },
  { id: "pasta", name: "Pasta", count: 1 },
  { id: "salat", name: "Salater", count: 0 },
  { id: "drikke", name: "Drikkevarer", count: 0 }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredItems = menuData.filter(item => item.category === selectedCategory);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Vores Menu</h1>
          <p className="text-muted-foreground">Vælg fra vores udsøgte udvalg af autentiske italienske retter</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-card border-0 shadow-card sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4 text-foreground">Kategorier</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-between"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Card key={item.id} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 sm:h-full object-cover"
                          />
                        </div>
                        <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                          <div>
                            <h3 className="font-semibold text-xl mb-2 text-foreground">{item.name}</h3>
                            <p className="text-muted-foreground mb-4">{item.description}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">{item.price} kr</span>
                            <Button 
                              variant="add" 
                              onClick={() => addToCart(item)}
                              className="gap-2"
                            >
                              <Plus className="w-4 h-4" />
                              Tilføj
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="bg-gradient-card border-0 shadow-card">
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">Ingen retter tilgængelige i denne kategori endnu.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Cart */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-card border-0 shadow-card sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-lg text-foreground">
                    Kurv ({getTotalItems()})
                  </h2>
                </div>

                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Din kurv er tom</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-secondary/50 rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="h-6 w-6 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="h-6 w-6 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {item.price * item.quantity} kr
                          </span>
                        </div>
                      </div>
                    ))}

                    <Separator />
                    
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary">{getTotalPrice()} kr</span>
                    </div>

                    {getTotalPrice() < 200 && (
                      <div className="bg-accent/20 border border-accent rounded-lg p-3">
                        <p className="text-sm text-accent-foreground">
                          Tilføj {200 - getTotalPrice()} kr mere for gratis levering
                        </p>
                      </div>
                    )}

                    <Button variant="default" className="w-full mt-4">
                      Bestil Nu - {getTotalPrice()} kr
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;