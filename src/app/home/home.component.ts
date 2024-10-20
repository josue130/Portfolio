import { Component } from '@angular/core';
import { HeroSectionComponent } from "./ui/hero-section/hero-section.component";
import { ExperienceComponent } from "./ui/experience/experience.component";
import { ProjectsComponent } from './ui/projects/projects.component';
import { AboutMeComponent } from "./ui/about-me/about-me.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ExperienceComponent, ProjectsComponent, AboutMeComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
