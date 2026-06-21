import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';

import { Plot } from '../../models/plot';
import { PlotService } from '../../services/plot.service';

@Component({
  selector: 'app-plot-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plot-list.html',
  styleUrl: './plot-list.scss'
})
export class PlotListComponent implements OnInit {

  plots: Plot[] = [];

  constructor(private plotService: PlotService) { }

  ngOnInit(): void {
  this.loadPlots();
}

  loadPlots(): void {
  this.plotService.getAllPlots().subscribe({
    next: (data) => {
      this.plots = [...data];
  },
    error: (err) => {
      console.error("Error fetching plots", err);
    }
  });
}

  @Output()
  editClicked = new EventEmitter<Plot>();
  
  editPlot(plot: Plot): void {
  this.editClicked.emit(plot);
}

  deletePlot(id: number): void {
  if(confirm("Are you sure you want to delete this plot?")) {
    this.plotService.deletePlot(id)
      .subscribe(response => {
        console.log("Plot deleted successfully");
        location.reload();
      });
  }
}

}
