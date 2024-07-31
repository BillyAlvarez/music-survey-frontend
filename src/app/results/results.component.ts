import {Component, inject, OnInit} from '@angular/core';
import {SurveysService} from "../services/surveys.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {RouterModule} from "@angular/router";
import {Result} from "../model/result.interface";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export default class ResultsComponent  implements OnInit{
private surveysService = inject(SurveysService);

results : Result[] = []

ngOnInit(): void {
  this.surveysService.list()
    .subscribe(results => { this.results = results});
}

}
