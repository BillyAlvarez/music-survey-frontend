import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterModule} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {SurveysService} from "../services/surveys.service";

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [
    RouterLink, RouterModule, ReactiveFormsModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export default class SurveyFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private surveysService = inject(SurveysService);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    musicStyle: ['', [Validators.required]]
  });

  create() {
    const body = this.form.value;
    this.surveysService.create(body)
      .subscribe(() => {
        this.router.navigate(['/results']).then(r => {
        });
      });
  }

}
