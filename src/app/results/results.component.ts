import {Component, inject, OnInit} from '@angular/core';
import {SurveysService} from '../services/surveys.service';
import {RouterModule} from '@angular/router';
import {Result} from '../model/result.interface';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [RouterModule, NgxChartsModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export default class ResultsComponent implements OnInit {
  private surveysService = inject(SurveysService);

  results: Result[] = [];
  single: any[] = []; // Datos para el gráfico
  view: [number, number] = [700, 400];

  // Options for the chart
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  async ngOnInit(): Promise<void> {
    try {
      this.results = await firstValueFrom(this.surveysService.list());
      this.updateChartData();
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  }

  updateChartData(): void {
    const musicStyles = this.results.map(result => result.musicStyle);
    const uniqueStyles = [...new Set(musicStyles)];
    const votes = uniqueStyles.map(style => ({
      name: style,
      value: musicStyles.filter(s => s === style).length
    }));

    this.single = votes;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
