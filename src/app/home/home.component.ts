import { Component } from '@angular/core';
import { HeroSectionComponent } from "./ui/hero-section/hero-section.component";
import { ExperienceComponent } from "./ui/experience/experience.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
