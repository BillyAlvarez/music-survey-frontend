import { Component } from '@angular/core';
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [
    RouterLink, RouterModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export default class SurveyFormComponent {

}
