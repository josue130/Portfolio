import { Component } from '@angular/core';
import { HeroSectionComponent } from "./ui/hero-section/hero-section.component";
import { TimeLineComponent } from "./ui/time-line/time-line.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, TimeLineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
