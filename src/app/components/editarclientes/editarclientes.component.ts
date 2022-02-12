import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/interfaces/customer.interface';

@Component({
  selector: 'app-editarclientes',
  templateUrl: './editarclientes.component.html',
  styleUrls: ['./editarclientes.component.scss']
})
export class EditarclientesComponent implements OnInit {
  customers: Array<Customer> = new Array<Customer>();

  constructor(private cstmrService: CustomerService, private router: Router,) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.cstmrService.getAll()
      .subscribe(customers => {
        this.customers = customers;
        console.log('Customers', customers);
      });
  }

  goToEditClient() {
    this.router.navigateByUrl('/registroclientes');
  }

}
