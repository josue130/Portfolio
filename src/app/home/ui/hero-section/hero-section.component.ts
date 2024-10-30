import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  openEmail() {
    const email = 'josuelopez4301@gmail.com';
    const subject = encodeURIComponent('Hello!');
    const body = encodeURIComponent('I wanted to get in touch with you.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
  openPdf() {
    const pdfUrl = 'assets/pdf/Resume.pdf';
    window.open(pdfUrl, '_blank');
  }

}
