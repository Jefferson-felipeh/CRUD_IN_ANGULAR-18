import { Component} from '@angular/core';
import { CustomersListComponent } from './Components/customers-list/customers-list.component';
import { CreateFormComponent } from './Components/create-form/create-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomersListComponent, CreateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
