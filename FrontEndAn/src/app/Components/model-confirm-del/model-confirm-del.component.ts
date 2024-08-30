import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../interfaces/customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { api } from '../../../services/api';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-model-confirm-del',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-confirm-del.component.html',
  styleUrl: './model-confirm-del.component.css',
  animations: [
    trigger('modalAnimation',[
      state('open',style({
          opacity: 1,
          transition: 'translateY(100%)'
      })),
      transition('closed => open',[
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ModelConfirmDelComponent{

  constructor(private snackBar: MatSnackBar){}

  @Input() popUpDelete!:boolean;
  @Output() emiter: EventEmitter<any> = new EventEmitter();
  @Output() dadosDelected = new EventEmitter();
  @Input() idCustomerDelete!: Customer;

  CancelDeleteCustomer = () =>{
    this.popUpDelete = false;
    this.emiter.emit();
  }

  //Método para deletar Customer_
  DeleteCustomer = async () => {
    this.CancelDeleteCustomer();
    this.dadosDelected.emit(this.idCustomerDelete.id);
    if(!this.idCustomerDelete.id){
      console.error('Id inválido. Não é possivel deletar!');
      return;
    }

    try{
      await api.delete('/deleteCustomer', ({
        params:{
          id: this.idCustomerDelete.id
        }
      }));

      this.snackBar.open(`Usuario ${this.idCustomerDelete.name} Deletado com Sucesso!`,'Fechar',{
        duration: 5000,
        panelClass: ["MatSnackBarError"],
      });
    }catch(err){
      console.log("Erro ao deletar!");
    }
  }
}
