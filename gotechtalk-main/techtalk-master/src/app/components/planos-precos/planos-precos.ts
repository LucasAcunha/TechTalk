import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planos-precos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planos-precos.html',
  styleUrl: './planos-precos.scss'
})
export class PlanosPrecos implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Inicialização do componente
  }

  filterFAQs(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
      const question = item.querySelector('.accordion-button')?.textContent?.toLowerCase() || '';
      const answer = item.querySelector('.accordion-body')?.textContent?.toLowerCase() || '';
      
      if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        (item as HTMLElement).style.display = 'block';
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
  }
}
