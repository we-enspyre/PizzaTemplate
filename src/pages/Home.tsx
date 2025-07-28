import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import restaurantHero from "@/assets/restaurant-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${restaurantHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Autentisk Italiensk Pizza
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Frisklavet pizza med de fineste ingredienser, leveret direkte til din dør
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/bestil">
                Bestil Nu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Velkommen til Bella Pizza
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Din lokale italienske restaurant i hjertet af Danmark
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location Card */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                <p className="text-muted-foreground">
                  Pollenvænget 26<br />
                  8381 Tilst, Danmark
                </p>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Åbningstider</h3>
                <p className="text-muted-foreground">
                  Man-Tors: 15:00-22:00<br />
                  Fre-Søn: 15:00-23:00
                </p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                <p className="text-muted-foreground">
                  +45 12 34 56 78<br />
                  Ring og bestil nu!
                </p>
              </CardContent>
            </Card>

            {/* Delivery Card */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Truck className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Levering</h3>
                <p className="text-muted-foreground">
                  Gratis levering<br />
                  ved køb over 200 kr
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klar til at bestille?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Oplev de bedste pizzaer i Danmark. Frisk, varm og leveret på under 30 minutter.
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link to="/bestil">
              Bestil Din Pizza Nu
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;