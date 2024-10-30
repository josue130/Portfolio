import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  codeSource:string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,TagModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
}
