import { Component, Input, ViewContainerRef, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { api } from '../../../services/api';
import { Customer } from '../../interfaces/customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css',
  animations: [
    trigger('modalAnimation',[
      state('open',style({
          opacity: 1,
          transition: 'translateY(100%)'
      })),
      transition('closed => open',[
        animate('300ms ease-in')
      ]),
    ])
  ]
})

export class CreateFormComponent {
  //O módulo ViewContainerRef() esta sendo utilizado para limpar, atravez da propriedade clear(), o componente filho da tela_
  constructor(private viewContainer: ViewContainerRef, private snacBar:MatSnackBar){}

  /*Esse OutPut() é responsável por emitir o evento de click, ao clicar no botão de fechar o popUp no componente filho, 
  ele vai emitir esse evento de click para o componente pai, e no template do componente pai, ele vai chamar uma função, 
  onde essa função estará responsável por reatribuir o valor false a variavel popUpCreated, cuja variavel vai receber o valor 
  da variavel (validar) do componente filho.*/
  @Output() emiter:EventEmitter<void> = new EventEmitter();
 
  /*Já esse evento é emitido para o componente pai quando um usuário novo é criado, ou seja, quando eu clico no botão de criar,
  além disso, ele também esta mandando os dados como argumento na emissão do evento_ */
  @Output() DataNewCustomer = new EventEmitter<any>();
  @Input() validar!:boolean;
  visible: boolean = true;
  listDados:Customer[] = [];

  //Os dados do formulário do novo customer serão armazenados nesse objeto_
  newCustomer:Customer = {
      id: '',
      name: '',
      email: '',
      age: 0,
      status:0
  };

  isInvisible = () => {
    //Retirando o componente quando essa função for chamada_
    this.viewContainer.clear();
    this.visible = false;
    //Emitindo o evento quando essa função for chamada_
    this.emiter.emit();
  }

  //Basicamente esse método tem a funcionalidade de cadastrar/inserir um novo customer no BD,
  //e além disso, ele esta mandando os dados para o componente pai, para que esse novo dado seja inserido na lista de customer e atualiza-la_
  stopPropagation = async ($event: Event) =>{
      $event.preventDefault();//Impedindo o evento de envio submit;

      //Verificando se já exista um mesmo email cadastrado no banco_
      const dadosBD = await api.get('/ListCustomers');
      this.listDados = dadosBD.data;
      if(this.listDados.filter(dado => dado.email.toLowerCase() === this.newCustomer.email.toLowerCase()).length > 0){
        this.snacBar.open('Email já existe!', 'Fechar',{
          duration: 5000,
          panelClass: ["snackBarValidation"],
        });
        return;
      }

      //Fazendo uma validação com try/catch_
      try{
        if(this.newCustomer.name == '' || this.newCustomer.email == '' || (this.newCustomer.age == 0 || this.newCustomer.age > 100)){
          this.snacBar.open('Campos Inválidos', 'Fechar',{
            duration: 5000,
            panelClass: ["snackBarValidation"],
          });
          return;
        }
        
        //Fazendo uma requisição HTTP do tipo POST para a rota especificada, e mandando os dados do novo customer_
        const response = await api.post("/createCustomer",this.newCustomer);
        //Mandando para o componente pai esse novo customer afim de atualizar a lista no front_
        await this.DataNewCustomer.emit(this.newCustomer);
      }
      catch(err){
          console.error('Error ao criar: '+err);
      }
        //Fechando o PopUp após o cadatro_
        this.visible = false;
        this.emiter.emit();
  }
}