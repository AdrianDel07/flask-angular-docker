import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

import { UserService } from './service/service.module';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]);
  family_name = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]);
  email = new FormControl('', [Validators.email]);
  phone = new FormControl('', [Validators.pattern("^[0-9]*$")]);
  program = new FormControl('');
  comment = new FormControl('');

  selectProgram: any[] = [];

  constructor(private form: FormBuilder,
    private userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSelectProgram();
  }

  getSelectProgram(): void {
    this.userService.getSelectProgram().subscribe(data => {
      let hash: any = {};
      let result_filter: any[] = data.filter((item: any) => {
        let exists = !hash[item.id];
        hash[item.id] = true;
        return exists;
      });

      this.selectProgram = result_filter;
    })
  }

  onSubmit(): void {
    const data: any = {
      name: this.name.value,
      family_name: this.family_name.value,
      email: this.email.value,
      phone: this.phone.value,
      program: this.program.value,
      comment: this.comment.value
    }
    this.userService.postUserData(data).subscribe(
      (res) => {
        // is validated by response status, but this endPoint does not return anything.
      this.dialog.open(DialogComponent, {
        data: {
          title: 'Operación Exitosa',
          description: 'Se ha Guardado exitosamente la información',
        }
      });
    },
    (err) => {
      console.log(err);
      this.dialog.open(DialogComponent, {
        data: {
          title: 'Error',
          description: 'No se ha podido guardar la información',
        }
      });
    });
    console.log(data)
  }

  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'Este campo es requerido, ingrese un nombre';
    }
    return this.name.hasError('pattern') ? 'Solo se permiten letras' : '';
  }

  getErrorMessageFamilyName() {
    if (this.family_name.hasError('required')) {
      return 'Este campo es requerido, ingrese un apellido';
    }
    return this.family_name.hasError('pattern') ? 'Solo se permiten letras' : '';
  }

  getErrorMessageEmail() {
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }

  getErrorMessagePhone() {
    return this.phone.hasError('pattern') ? 'Solo se permiten numeros' : '';
  }

  validateInputs() {
    return !this.name.valid || !this.family_name.valid || !this.email.valid || !this.phone.valid;
  }
}
