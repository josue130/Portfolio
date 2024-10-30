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
  projects = [
    {
      title: 'Workout Tracker',
      description: 'This project involves creating a backend system for a workout tracker application with clean architecture.',
      imageUrl: 'https://assets.clevelandclinic.org/transform/71749feb-e22a-468c-8538-5d4f1b70d2a6/seven-minute-workout-exercises-1310070967-770x533-1_jpg',
      technologies: ["C#", ".NET","ASP.NET","SQL Server"],
      codeSource:"https://github.com/josue130/WorkoutTracker"
    },
    {
      title: 'Shoe Store',
      description: 'This project demonstrates a simple microservices architecture using three APIs',
      imageUrl: 'assets/images/ShoeStoreDiagram.webp',
      technologies: ["C#", ".NET","ASP.NET","SQL Server"],
      codeSource:"https://github.com/josue130/ShoeStore"
    }
    ,
    {
      title: 'Portfolio',
      description: 'On this website, you will find information about my experience, the projects I have worked on, and some details about me.',
      imageUrl: 'assets/images/MyPortfolio.webp',
      technologies: ["Angular","Boostrap","PRIMENG"],
      codeSource:"https://github.com/josue130/Portfolio"
    }
  ];

}
