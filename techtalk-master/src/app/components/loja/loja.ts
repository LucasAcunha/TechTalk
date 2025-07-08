import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Declare Swiper to avoid TypeScript errors
declare var Swiper: any;

// Interface para produtos
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  discount?: number;
  description?: string;
  quantity?: number;
}

@Component({
  selector: 'app-loja',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './loja.html',
  styleUrl: './loja.scss',
  standalone: true
})
export class Loja implements OnInit, AfterViewInit {
  // Propriedades para produtos
  products: Product[] = [];
  filteredProducts: Product[] = [];
  featuredProducts: Product[] = [];
  
  // Propriedades para filtros
  activeCategory: string = 'todos';
  searchTerm: string = '';
  loading: boolean = true;
  
  // Propriedades para carrinho
  cartItems: Product[] = [];
  cartOpen: boolean = false;
  cartTotal: number = 0;
  
  constructor() {}
  
  ngOnInit(): void {
    // Scroll para o topo ao carregar a página
    window.scrollTo(0, 0);
    
    // Carregar produtos (simulando API)
    this.loadProducts();
  }
  
  ngAfterViewInit(): void {
    // Inicializar o Swiper para o slider de produtos em destaque
    setTimeout(() => {
      this.initSwiper();
    }, 1000);
  }
  
  // Inicializa o slider Swiper
  private initSwiper(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }
  
  // Simula carregamento de produtos (em um app real, seria uma chamada a API)
  private loadProducts(): void {
    setTimeout(() => {
      // Dados mockados de produtos
      this.products = [
        {
          id: 1,
          name: 'Tablet Adapta Sênior 10"',
          category: 'dispositivos',
          price: 1299.90,
          originalPrice: 1499.90,
          image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop&auto=format',
          rating: 4.8,
          reviews: 156,
          isNew: true,
          discount: 15,
          description: 'Tablet com interface simplificada, ícones grandes e funções essenciais para o público sênior.'
        },
        {
          id: 2,
          name: 'Teclado com Teclas Ampliadas',
          category: 'acessibilidade',
          price: 199.90,
          image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop&auto=format',
          rating: 4.5,
          reviews: 87,
          description: 'Teclado ergonômico com teclas ampliadas e alto contraste para facilitar a visualização.'
        },
        {
          id: 3,
          name: 'Livro: Internet sem Complicações',
          category: 'aprendizado',
          price: 59.90,
          originalPrice: 79.90,
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&auto=format',
          rating: 4.9,
          reviews: 213,
          discount: 25,
          description: 'Guia completo para usar a internet de forma segura e proveitosa, com linguagem simples e muitas ilustrações.'
        },
        {
          id: 4,
          name: 'Mouse Ergonômico com Trackball',
          category: 'acessibilidade',
          price: 149.90,
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&auto=format',
          rating: 4.3,
          reviews: 65,
          description: 'Mouse com design ergonômico e trackball que facilita a navegação para pessoas com limitações motoras.'
        },
        {
          id: 5,
          name: 'Smartphone Sênior Facilitado',
          category: 'dispositivos',
          price: 999.90,
          originalPrice: 1299.90,
          image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop&auto=format',
          rating: 4.7,
          reviews: 128,
          isNew: true,
          discount: 23,
          description: 'Smartphone com interface simplificada, botão SOS e funções essenciais ampliadas.'
        },
        {
          id: 6,
          name: 'Kit 3 Apostilas Digitais',
          category: 'aprendizado',
          price: 89.90,
          originalPrice: 129.90,
          image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop&auto=format',
          rating: 4.6,
          reviews: 94,
          discount: 30,
          description: 'Conjunto de apostilas digitais sobre WhatsApp, Email e Redes Sociais com tutoriais passo a passo.'
        },
        {
          id: 7,
          name: 'Suporte para Tablet Ajustável',
          category: 'acessibilidade',
          price: 79.90,
          image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format',
          rating: 4.4,
          reviews: 47,
          description: 'Suporte ajustável para tablet que permite utilização sem esforço em diferentes ângulos.'
        },
        {
          id: 8,
          name: 'Curso Digital: Redes Sociais',
          category: 'aprendizado',
          price: 129.90,
          image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop&auto=format',
          rating: 4.8,
          reviews: 175,
          description: 'Curso completo sobre como utilizar Facebook, Instagram e WhatsApp de forma segura.'
        },
        {
          id: 9,
          name: 'Amplificador de Som para Celular',
          category: 'acessibilidade',
          price: 49.90,
          originalPrice: 69.90,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
          rating: 4.2,
          reviews: 38,
          discount: 28,
          description: 'Amplificador de som para celulares que aumenta o volume das chamadas para pessoas com dificuldade auditiva.'
        },
        {
          id: 10,
          name: 'Smartwatch Monitor Saúde',
          category: 'dispositivos',
          price: 399.90,
          originalPrice: 499.90,
          image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format',
          rating: 4.6,
          reviews: 83,
          isNew: true,
          discount: 20,
          description: 'Relógio inteligente com monitoramento de saúde, batimentos cardíacos e alertas para medicamentos.'
        },
        {
          id: 11,
          name: 'Lupa Digital Portátil',
          category: 'acessibilidade',
          price: 259.90,
          image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop&auto=format',
          rating: 4.7,
          reviews: 59,
          description: 'Lupa digital portátil com iluminação LED e zoom ajustável para leitura facilitada.'
        },
        {
          id: 12,
          name: 'Kit Conexão Familiar Premium',
          category: 'aprendizado',
          price: 199.90,
          originalPrice: 249.90,
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format',
          rating: 4.9,
          reviews: 107,
          discount: 20,
          description: 'Kit completo com livro, apostilas e acesso a curso online sobre como manter-se conectado com a família.'
        }
      ];
      
      // Inicializar produtos filtrados com todos os produtos
      this.filteredProducts = [...this.products];
      
      // Definir produtos em destaque (aqueles com maior avaliação)
      this.featuredProducts = this.products
        .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
        .slice(0, 6);
      
      this.loading = false;
    }, 1500); // Simulando tempo de carregamento
  }
  
  // Filtrar produtos por categoria
  filterByCategory(category: string): void {
    this.activeCategory = category;
    this.filterProducts();
  }
  
  // Filtrar produtos por termo de busca e categoria
  filterProducts(): void {
    this.loading = true;
    
    setTimeout(() => {
      let filtered = [...this.products];
      
      // Filtrar por categoria
      if (this.activeCategory !== 'todos') {
        if (this.activeCategory === 'ofertas') {
          filtered = filtered.filter(product => product.discount);
        } else {
          filtered = filtered.filter(product => product.category === this.activeCategory);
        }
      }
      
      // Filtrar por termo de busca
      if (this.searchTerm && this.searchTerm.trim() !== '') {
        const searchLower = this.searchTerm.toLowerCase();
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(searchLower) || 
          product.category.toLowerCase().includes(searchLower) ||
          (product.description && product.description.toLowerCase().includes(searchLower))
        );
      }
      
      this.filteredProducts = filtered;
      this.loading = false;
    }, 500); // Pequeno delay para mostrar o loading
  }
  
  // Resetar os filtros
  resetFilters(): void {
    this.activeCategory = 'todos';
    this.searchTerm = '';
    this.filteredProducts = [...this.products];
  }
  
  // Adicionar produto ao carrinho
  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // Se o produto já existe no carrinho, aumentar a quantidade
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      // Caso contrário, adicionar como novo item
      this.cartItems.push({...product, quantity: 1});
    }
    
    // Mostrar o carrinho
    this.cartOpen = true;
    
    // Recalcular o total
    this.calculateCartTotal();
    
    // Fechar o carrinho após alguns segundos
    setTimeout(() => {
      this.cartOpen = false;
    }, 3000);
  }
  
  // Remover produto do carrinho
  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.calculateCartTotal();
  }
  
  // Calcular total do carrinho
  calculateCartTotal(): void {
    this.cartTotal = this.cartItems.reduce(
      (total, item) => total + (item.price * (item.quantity || 1)), 
      0
    );
  }
  
  // Alternar visibilidade do carrinho
  toggleCart(): void {
    this.cartOpen = !this.cartOpen;
  }
}
