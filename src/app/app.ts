import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from './services/project';
import { PlotListComponent } from './components/plot-list/plot-list';
import { AddPlotComponent } from './components/add-plot/add-plot';
import { Plot } from './models/plot';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlotListComponent, AddPlotComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  projects: any[] = [];
  selectedPlot?: Plot;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // this.projectService.getProjects().subscribe(data => {
      // this.projects = data;
    // });
  }
}
