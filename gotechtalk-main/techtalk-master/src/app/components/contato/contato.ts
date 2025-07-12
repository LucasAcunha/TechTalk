import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  standalone: true
})
export class Contato implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;
  formSuccess = false;
  formError = false;
  isSubmitting = false;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    // Scroll para o topo ao carregar a página
    window.scrollTo(0, 0);
    
    // Inicializar o formulário com validações
    this.initForm();
    
    // Inicializar os acordeões do Bootstrap
    this.initAccordion();
  }
  
  // Getter para facilitar acesso aos controles do formulário
  get f() {
    return this.contactForm.controls;
  }
  
  // Inicializa o formulário com validações
  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(20)]],
      terms: [false, [Validators.requiredTrue]]
    });
  }
  
  // Inicializa os acordeões do Bootstrap
  private initAccordion(): void {
    // Aguardar carregamento do DOM
    setTimeout(() => {
      // Verificar se o Bootstrap está disponível
      const bootstrap = (window as any).bootstrap;
      if (bootstrap && bootstrap.Collapse) {
        // Os acordeões são inicializados automaticamente pelo Bootstrap
        console.log('Bootstrap accordion initialized');
      }
    }, 500);
  }
  
  // Manipula o envio do formulário
  onSubmit(): void {
    this.formSubmitted = true;
    this.formSuccess = false;
    this.formError = false;
    
    // Verificar se o formulário é válido
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    
    // Simulação de envio para um servidor (em um caso real, seria uma chamada HTTP)
    setTimeout(() => {
      // Simulando sucesso (em 90% dos casos)
      if (Math.random() > 0.1) {
        this.formSuccess = true;
        this.contactForm.reset();
        this.formSubmitted = false;
      } else {
        this.formError = true;
      }
      
      this.isSubmitting = false;
    }, 1500);
  }
  
  // Filtra as FAQs com base no termo de busca
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
