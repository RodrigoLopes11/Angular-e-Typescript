import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
  ngOnInit(){
}
export class CadastroAlunoComponent{
  aluno = {
    ra: '',
    nome: '',
    email: '',
    celular: ''
  };

  submitForm(form: any) {
    console.log('Formulário enviado:', this.aluno);
    form.resetForm();
  }
}
