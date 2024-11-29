import { Component } from '@angular/core';
import { HeroSectionComponent } from "./ui/hero-section/hero-section.component";
import { ExperienceComponent } from "./ui/experience/experience.component";
import { ProjectsComponent } from './ui/projects/projects.component';
import { AboutMeComponent } from "./ui/about-me/about-me.component";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

interface Projects{
  title:string;
  description:string;
  technologies:string[];
  codeSource:string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ExperienceComponent,
    ProjectsComponent, AboutMeComponent, ProgressSpinnerModule, MessagesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects : Projects[] = [];
  messages: Message[] = [];
  ngOnInit() {
    this.projects = [
      {
        title: 'Spending Tracker',
        description: 'A financial tracking tool that allows users to record their expenses and incomes by categories, and get monthly balances.',
        technologies: ["C#", ".NET", "ASP.NET", "SQL Server","Redis",
          "FreecurrencyAPI"],
        codeSource: "https://github.com/josue130/SpendingTracker"
      },
      {
        title: 'Shoe Store',
        description: 'This project demonstrates a simple microservices architecture using three APIs',
        technologies: ["C#", ".NET", "ASP.NET", "SQL Server"],
        codeSource: "https://github.com/josue130/ShoeStore"
      },
      {
        title: 'Workout Tracker',
        description: 'This project involves creating a backend system for a workout tracker application.',
        technologies: ["C#", ".NET", "ASP.NET", "SQL Server"],
        codeSource: "https://github.com/josue130/WorkoutTracker"
      },
      {
        title: 'Portfolio',
        description: 'On this website, you will find information about my experience, the projects I have worked on, and some details about me.',
        technologies: ["Angular", "Boostrap", "PRIMENG"],
        codeSource: "https://github.com/josue130/Portfolio"
      }
    ];
    this.messages = [
      { severity: 'error', detail: 'Something went wrong. Please check your internet connection and try again.' }
    ];
  
  }
  
  
}
