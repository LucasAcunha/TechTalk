import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, AfterViewInit {
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Inicialização do componente
  }

  ngAfterViewInit(): void {
    // Inicializar Bootstrap após a view estar pronta
    if (isPlatformBrowser(this.platformId)) {
      this.initializeBootstrap();
    }
  }

  // Listener para fechar menu ao clicar fora
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const navbar = document.querySelector('.navbar');
    
    if (navbar && !navbar.contains(target) && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  // Listener para fechar menu com tecla ESC
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  // Função para alternar o menu mobile
  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Função para fechar o menu quando clicar em um link
  closeMobileMenu(): void {
    this.isMenuOpen = false;
  }

  // Inicializar componentes Bootstrap
  private initializeBootstrap(): void {
    // Verificar se o Bootstrap está disponível
    if (typeof (window as any).bootstrap !== 'undefined') {
      // Bootstrap já está carregado
      return;
    }

    // Aguardar um pouco para garantir que o script foi carregado
    setTimeout(() => {
      if (typeof (window as any).bootstrap !== 'undefined') {
        console.log('Bootstrap JavaScript carregado com sucesso');
      }
    }, 1000);
  }
}
