import {Component, inject, OnInit} from '@angular/core';
import {SurveysService} from "../services/surveys.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export default class ResultsComponent  implements OnInit{
private surveysService = inject(SurveysService);

results : any[] = []

ngOnInit(): void {
  this.surveysService.list()
    .subscribe((results: any) => { this.results = results});
}

}