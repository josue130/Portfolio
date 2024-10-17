import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CarouselComponent } from "./ui/carousel/carousel.component";
interface Skill
{
  src:string;
  title:string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ImageModule, CarouselComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[];

  constructor(){
    this.skills = [
      {src:"assets/svg/cshrp.svg",title:"C#"},
      {src:"assets/svg/dotnet.svg",title:".NET"},
      {src:"assets/svg/python.svg",title:"PYTHON"},
      {src:"assets/svg/angular.svg",title:"agunlar"},
      {src:"assets/svg/html.svg",title:"HTML"},
      {src:"assets/svg/css.svg",title:"CSS"},
      {src:"assets/svg/git.svg",title:"GIT"},
      {src:"assets/svg/SqlServer.svg",title:"SQLServer"},
      {src:"assets/svg/oracle.svg",title:"Oracle"}];
  }
}
