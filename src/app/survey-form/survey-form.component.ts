import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterModule} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {SurveysService} from "../services/surveys.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [
    RouterLink, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export default class SurveyFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private surveysService = inject(SurveysService);
  successMessage: string = '';
  errorMessage: string = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    musicStyle: ['', [Validators.required]]
  });

  create(): void {
    if (this.form.invalid) {
      return;
    }

    const body = this.form.value;
    this.surveysService.create(body).subscribe(
      () => {
        this.successMessage = '¡Encuesta guardada exitosamente!';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/results']);
        }, 1000);
      },
      error => {
        this.errorMessage = 'Hubo un error al guardar la encuesta, El Email ya fue registrado.';
        this.successMessage = '';
        this.form.reset();
      }
    );
  }
}
