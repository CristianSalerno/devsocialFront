import { Component, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';
import { TemasService } from 'services/temas.service';
import { Router } from '@angular/router';



@Component({
  selector: "app-new-idea",
  templateUrl: "./new-idea.component.html",
  styleUrls: ["./new-idea.component.css"]
})
export class NewIdeaComponent implements OnInit {
  form: FormGroup;

  constructor(private temasService: TemasService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      perfil1: new FormControl('', [Validators.required]),
      perfil2: new FormControl(''),
      perfil3: new FormControl(''),
      perfil4: new FormControl(''),
      perfil5: new FormControl(''),
      imgUrl: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() { }



  async onSubmit(e) {
    const formularioValue = await this.temasService.create(this.form.value);
    await this.router.navigate(['/projects']);

  }
}
