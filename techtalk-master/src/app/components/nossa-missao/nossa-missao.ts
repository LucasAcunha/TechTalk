import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nossa-missao',
  imports: [CommonModule, RouterModule],
  templateUrl: './nossa-missao.html',
  styleUrl: './nossa-missao.scss',
  standalone: true
})
export class NossaMissao implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
    // Scroll para o topo ao carregar a página
    window.scrollTo(0, 0);
    
    // Adicionar animações aos elementos
    this.setupAnimations();
  }
  
  // Configuração das animações
  private setupAnimations(): void {
    // Animação para estatísticas de impacto usando IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('impact-stat')) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          } else if (entry.target.classList.contains('mission-card')) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
          } else if (entry.target.classList.contains('vision-point')) {
            entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
          } else if (entry.target.classList.contains('impact-card')) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    // Observar elementos para animação
    document.querySelectorAll('.impact-stat, .mission-card, .vision-point, .impact-card').forEach(el => {
      observer.observe(el);
    });
  }
}
