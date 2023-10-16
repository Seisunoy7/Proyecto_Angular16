import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})




export class HomeComponent implements OnInit {


  shearchForm: FormGroup;
  formModal: any;

  constructor(private _fb: FormBuilder, private router: Router) {

    this.shearchForm = this._fb.group({
      Campo1: ['', Validators.required],
      Campo2: [''],
      Campo3: [''],
      Campo4: ['']
    });
  }

  ngOnInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("ModalExample")
    );
  }

  clickSuccess() {

    //Resalta los campos que no pasen las validaciones
    this.shearchForm.markAllAsTouched();

    //Si todo el formulario cumple la validacion
    if (this.shearchForm.valid) {
      let campo1 = this.shearchForm.get('Campo1')?.value;

      //Muestra modal con mensaje y botones
      Swal
        .fire({
          title: "Titulo",
          text: "mensaje a mostrar: " + campo1,
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí',
          cancelButtonText: 'Cancelar'
        })
        .then(result => {

          //Acción si se preciona el boton de confirmacion
          if (result.isConfirmed) {
            let campo1 = this.shearchForm.get('Campo1')?.value;
            alert(campo1);
          }

        });
    }



  }

  clickReset() {
    this.shearchForm.reset();
  }

  clickOpenModal() {
    this.formModal.show();
  }
  closeModal() {
    this.formModal.hide();
  }

  clickPage2() {
    this.router.navigate(['/Page2']);
  }


}
