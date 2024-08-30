import { Component, Input, Output, EventEmitter, OnChanges, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Customer } from '../../interfaces/customer';
import { api } from '../../../services/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css',
})

export class UpdateCustomerComponent implements OnChanges{

  constructor(private snacBar: MatSnackBar){}

  @Output() emiter = new EventEmitter();
  @Output() UpdateListDatas = new EventEmitter();
  @Input() visiblePopUpUpdated!: boolean;
  @Input() dadosCustomer!:Customer;
  listDados:Customer[] = [];

  newDados:Customer = {
        id: '',
        name: '',
        email: '',
        age: 0,
        status: 0
  }

  //Esse método onChange() tem a funcionalidade de executar uma determinada funcionalidade somente quando esses ados forem carregados completamente_
  ngOnChanges(): void {
    if(this.dadosCustomer){
      this.newDados = {...this.dadosCustomer}
    }
  }

  isInvisiblePopUp = () => {
    this.visiblePopUpUpdated = false;
    this.emiter.emit();
  }

  stopPropagation = async ($event: Event) => {
    $event.preventDefault();

    try{
      if((this.newDados.name == '' || this.newDados.name == null) || (this.newDados.email == '' || this.newDados.email == null)){
        this.snacBar.open('Campos Inválidos!', 'Fechar',{
          duration: 5000,
          panelClass: ["MatSnackBar"],
        });
        return;
      }

      this.isInvisiblePopUp();
      this.UpdateListDatas.emit(this.newDados);
      //Ao inves de passar o id usado como parametro na chamada dessa função, eu passo o passado pelo próprio objeto_
      await api.put(`/api/${this.newDados.id}/updatecustomer/`,this.newDados);
    }catch(err){
      console.error('Erro ao atualizar informações!');
    }
  }
}