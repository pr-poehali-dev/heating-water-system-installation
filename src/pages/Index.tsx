import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: "Flame",
      title: "Системы отопления",
      description: "Проектирование и монтаж систем отопления любой сложности: радиаторное отопление, теплые полы, котельные.",
      features: ["Газовые котлы", "Радиаторы", "Теплые полы", "Автоматика"]
    },
    {
      icon: "Droplets",
      title: "Водоснабжение",
      description: "Установка и обслуживание систем холодного и горячего водоснабжения для частных домов и коммерческих объектов.",
      features: ["Водопровод", "Насосные станции", "Бойлеры", "Фильтрация"]
    },
    {
      icon: "Wrench",
      title: "Сервисное обслуживание",
      description: "Регулярное техническое обслуживание, диагностика и ремонт инженерных систем.",
      features: ["Диагностика", "Ремонт", "Замена узлов", "Профилактика"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Частный дом 250 м²",
      description: "Система отопления с газовым котлом",
      image: "https://cdn.poehali.dev/projects/2172913a-0eaa-4613-9e56-21aa5ce8a2f5/files/04becdfe-95e3-41da-a0c7-bfcb8db22fc4.jpg"
    },
    {
      id: 2,
      title: "Таунхаус 180 м²",
      description: "Водоснабжение и теплые полы",
      image: "https://cdn.poehali.dev/projects/2172913a-0eaa-4613-9e56-21aa5ce8a2f5/files/36612881-9b44-4dbe-bcac-3976370812ba.jpg"
    },
    {
      id: 3,
      title: "Коттедж 320 м²",
      description: "Комплексная система отопления",
      image: "https://cdn.poehali.dev/projects/2172913a-0eaa-4613-9e56-21aa5ce8a2f5/files/04becdfe-95e3-41da-a0c7-bfcb8db22fc4.jpg"
    },
    {
      id: 4,
      title: "Загородный дом 200 м²",
      description: "Автономное водоснабжение",
      image: "https://cdn.poehali.dev/projects/2172913a-0eaa-4613-9e56-21aa5ce8a2f5/files/d289549b-dd16-45ac-8295-6dc8984a5dad.jpg"
    },
    {
      id: 5,
      title: "Дуплекс 280 м²",
      description: "Радиаторное отопление",
      image: "https://cdn.poehali.dev/projects/2172913a-0eaa-4613-9e56-21aa5ce8a2f5/files/04becdfe-95e3-41da-a0c7-bfcb8db22fc4.jpg"
    },
    {
      id: 6,
      title: "Коммерческий объект",
      description: "Промышленная котельная",
      image: "https://cdn.poehali.dev/projects/2172913a-0eaa-4613-9e56-21aa5ce8a2f5/files/d289549b-dd16-45ac-8295-6dc8984a5dad.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">ТеплоМастер</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <Button>Связаться с нами</Button>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Профессиональный монтаж систем отопления и водоснабжения
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Более 15 лет опыта. Гарантия качества. Индивидуальный подход к каждому проекту.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="Phone" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline">Наши работы</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-primary">15+</h3>
                <p className="text-muted-foreground">лет опыта</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" className="text-secondary" size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-secondary">500+</h3>
                <p className="text-muted-foreground">реализованных проектов</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-primary" size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-primary">5 лет</h3>
                <p className="text-muted-foreground">гарантия на работы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по проектированию, монтажу и обслуживанию инженерных систем
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-none">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Галерея выполненных работ — каждый проект реализован с заботой о качестве и надежности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-none group"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы начать ваш проект?</h2>
            <p className="text-lg mb-8 opacity-90">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости работ
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Icon name="Phone" size={20} />
                +7 (999) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-muted/50 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" className="text-primary" size={28} />
                <span className="text-xl font-bold">ТеплоМастер</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональный монтаж систем отопления и водоснабжения с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@teplomaster.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Примерная, 123</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
            © 2024 ТеплоМастер. Все права защищены.
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={24} />
            </Button>
            <img 
              src={selectedImage} 
              alt="Проект" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;