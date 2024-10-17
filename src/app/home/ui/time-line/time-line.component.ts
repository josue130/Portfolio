import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  description?: string[];
}


@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [TimelineModule,CardModule,ButtonModule,CommonModule,AnimateOnScrollModule],
  template: `
  <p-timeline [value]="events" align="alternate" styleClass="customized-timeline">
            <ng-template pTemplate="marker" let-event>
                <span>
                    <i [class]="event.icon"></i>
                </span>
            </ng-template>
            <ng-template pTemplate="content" let-event>
                <p><strong>{{event.status}}</strong></p>
                <p>{{event.date}}</p>
                @if(event.description)
                {
                  <ul>
                  @for (item of event.description; track item) 
                    {
                      <li>{{item}}</li>
                    }
                  </ul>
                }
                <button type="button" class="btn btn-outline-dark">Read more</button>

            </ng-template>
        </p-timeline>
  `
})
export class TimeLineComponent {
  events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Kuarctech', 
              icon:'pi pi-briefcase',
              date: 'feb. 2024 - ago. 2024',
              description: [
                'Developed the "Project Manager" module using Angular and C#.',
                'Proposed new ideas such as using NGRX in the frontend to manage component states.',
                'Collaborated with cross-functional teams to translate business needs into technical solutions.',
                'Refactored repetitive code, improving efficiency and reducing potential errors.',
                
              ]},
            { status: 'Bachelor Degree in Computer Engineering', 
              icon:'pi pi-graduation-cap',
              date: 'ene. 2020 - ago. 2024' }
        ];
    }
}
