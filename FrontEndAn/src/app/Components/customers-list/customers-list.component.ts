import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { api } from '../../../services/api';
import { Customer } from '../../interfaces/customer';
import { CreateFormComponent } from '../create-form/create-form.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { ModelConfirmDelComponent } from '../model-confirm-del/model-confirm-del.component';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [
    CommonModule,
    CreateFormComponent, 
    UpdateCustomerComponent,
    ModelConfirmDelComponent
  ],
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})

export class CustomersListComponent implements OnInit{
    ngOnInit(): void {this.execute()}
    constructor(private snackBar: MatSnackBar){}

    //Todos os customers serão inseridos nessa lista_
    dados:Customer[] = [];
    dadosFilter:Customer[] = [];
    value:string = '';
    //Essa variavel será responsável por obter os dados de um Customer específico referenciando o seu id_
    dadosCustomerUniq!:Customer;
    //Essa variável é responsável por armazenar a quantidade de Customers que há na lista de Customers_
    lengthList: number = 0;
    //Armazenando um customer para deleta-lo_
    dadosDeleteCustomerUniq!:Customer;
    
    //Mantem o popup do componente de criação de um novo customer fechado_
    popUpCreated: boolean = false;
    //Mantém o popup de Update fechado_
    popUpUpdated:boolean = false;
    //Mantém o PopUp do componente de deletar o usuário fechado_
    popUpDelete:boolean = false;

    //Esse método é responsável por fazer uma requisiçao ao banco de dados, e armazenando na lista todos os customers_
    execute = async () => {
      //Usando o axios para fazer requisições as rotas do servidor_
      const res = await api.get('/ListCustomers');
      //Armazenando todos os customers na lista_
      this.dados = res.data;
      //Verificando a quantidade de customers na lista_
      this.lengthList = this.dados.length;
    }

    SearchCustomer = (event:Event): void => {
      const customer = event.target as HTMLInputElement;
      this.value = customer.value;
      this.dadosFilter = this.dados.filter(customer => {
        return customer.name.toLowerCase().includes(this.value);
      });
    }

    //---------------------------------------------------------------------------------------------------------------------
    //Após essas funcões serem chamadas, o popup do componente de criação de um novo customer é aberto ou fechado_
    visiblePopUpCreateCustomer = () => this.popUpCreated = true;
    inVisiblePopUpCreateCustomer = () => this.popUpCreated = false;

    //Esse método é responsável por atualizar a lista quando um customer é cadastrado_
    UpdateListHome = async (NewCustomer: Customer) => {
      //Atualizando a lista de customer quando um novo customer é cadastrado_
      this.dados.push(NewCustomer);
      //Atualizando a quantidade de customer_
      this.lengthList = await this.dados.length;
      //Executando essa animção ao abrir o popup do formulário de cadastrar um novo customer_
      this.snackBar.open('Usuario Criado com Sucesso', 'Fechar',{
        duration: 5000,
        panelClass: ["MatSnackBarSucess"],
      });

      //Esse método execute() é responsável por inserir dados assim que todo o componente é iniciado_
      this.execute();
    }

    //---------------------------------------------------------------------------------------------------------------------
    visiblePopUpDeleteCustomer = () => this.popUpDelete = true;
    InvisiblePopUpDeleteCustomer = () => this.popUpDelete = false;

    CustomerDelete = async (id: string) => {
      const res = (await api.get(`/api/${id}/ListCustomerUnique/`));
      this.dadosDeleteCustomerUniq = await res.data;
      return this.dadosDeleteCustomerUniq;
    }

    DeleteSucessfuly = (id:string) =>{
      this.dados = this.dados.filter(dado => dado.id !== id);
      this.lengthList = this.dados.length;
    }

    visiblePopUpUpdateCustomer = () => this.popUpUpdated = true;
    inVisiblePopUpUpdateCustomer = () => this.popUpUpdated = false;

    //Localizando o objeto específico atravez do seu id passado na chamada dessa função dentro do template_
    UpdateCustomer = async (id:string) => {
      const res = (await api.get(`/api/${id}/ListCustomerUnique/`));
      this.dadosCustomerUniq = await res.data;
      return this.dadosCustomerUniq;
    }

    //--------------------------------------------------------------------------------------------------------------------

    UpdatedListDatas = (newCustomer: Customer) => {
      /*Buscar o indice do elemento dentro da lista com base no seu id; Se não tiver nenhum 
      elemento que satisfaça a essa lógica, ele retorna -1; Mas se for diferente de -1, 
      significa que ele encontrou algum elemento que correspoda_*/
      const index = this.dados.findIndex(customer => customer.id === newCustomer.id);
      //Se tiver algum dado com esse id : se não tiver algum dado com esse id_
      index !== -1 ? this.dados[index] = newCustomer : this.dados.push(newCustomer);//se encontrou, ele esta substituindo o elemento atual pelo novo;
      this.snackBar.open('Dados atualizados com Sucesso', 'Fechar',{
        duration: 5000,
        panelClass: ["MatSnackBarSucess"],
      });
    }
}