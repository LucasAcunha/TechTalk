import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quem-somos',
  imports: [CommonModule, RouterModule],
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.scss',
  standalone: true
})
export class QuemSomos implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
    // Scroll para o topo ao carregar a página
    window.scrollTo(0, 0);
    
    // Aqui podemos adicionar animações para os elementos ao carregar
    this.animateOnScroll();
  }
  
  // Função para animar elementos ao rolar a página
  private animateOnScroll(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observar elementos da timeline, cards de equipe e valores
    document.querySelectorAll('.timeline-item, .team-card, .value-card').forEach(el => {
      observer.observe(el);
    });
  }
}
