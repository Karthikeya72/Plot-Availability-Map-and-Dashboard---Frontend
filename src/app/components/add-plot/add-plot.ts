import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { Plot } from '../../models/plot';
import { PlotService } from '../../services/plot.service';

@Component({
  selector: 'app-add-plot',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-plot.html',
  styleUrl: './add-plot.scss'
})
export class AddPlotComponent implements OnChanges {

  @Input()
  plot?: Plot;

  @Output()
  cancelEdit = new EventEmitter<void>();

  formPlot: Plot = {
    plotNumber: '',
    ownerName: '',
    area: 0,
    price: 0,
    status: 'SELECT',
    facing: 'SELECT'
  };

  constructor(private plotService: PlotService) { }

  savePlot(): void {
  if (this.formPlot.id) {
    this.plotService.updatePlot(this.formPlot.id, this.formPlot)
      .subscribe(response => {
        console.log("Plot updated successfully");
        location.reload();
      });

  } else {
    this.plotService.savePlot(this.formPlot)
      .subscribe(response => {
        console.log("Plot saved successfully");
        location.reload();
      });
  }
}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['plot'] && this.plot) {
    this.formPlot = {
      ...this.plot
    };
  }

}

   resetForm(): void {
    this.formPlot = {
      plotNumber: '',
      ownerName: '',
      area: 0,
      price: 0,
      status: 'SELECT',
      facing: 'SELECT'
    };
  }

  cancel(): void {
    this.resetForm();
    this.cancelEdit.emit();
  }

}
