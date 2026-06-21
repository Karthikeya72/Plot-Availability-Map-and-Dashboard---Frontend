import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plot } from '../models/plot';

@Injectable({
  providedIn: 'root'
})
export class PlotService {

  private apiUrl = 'http://localhost:8080/api/plots';


  constructor(private http: HttpClient) { }

  getAllPlots(): Observable<Plot[]> {
    return this.http.get<Plot[]>(this.apiUrl);
  }

  savePlot(plot: Plot): Observable<Plot> {
    return this.http.post<Plot>(this.apiUrl, plot);
  }
  
  updatePlot(id: number, plot: Plot): Observable<Plot> {
  return this.http.put<Plot>(`${this.apiUrl}/${id}`, plot);
  }

  deletePlot(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}