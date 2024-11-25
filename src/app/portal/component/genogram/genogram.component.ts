import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatCheckbox} from '@angular/material/checkbox'
import {MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-genogram',
  templateUrl: './genogram.component.html',
  styleUrls: ['./genogram.component.scss'],
  standalone: true,
  imports: [CommonModule,MatCardModule,MatCheckbox, MatTableModule,MatIconModule,MatButtonModule]
})
export class GenogramComponent {
  user = {
    name: 'Alina Hug',
    address: 'Wiesenstrasse 10, 3000 Bern',
    nationality: 'Swiss',
    language: 'EN',
    dob: '21.04.2014',
    photo: 'assets/alina-hug.jpg', 
  };

  contacts = [
    { firstName: 'Anna', lastName: 'Hug-Meier', relation: 'Mother', phone: '044 745 17 77', email: 'anna.hug@mail.com', isPrimary: true, notes: '' },
    { firstName: 'Herbert', lastName: 'Hug', relation: 'Father', phone: '044 745 17 77', email: 'herbert.hug@mail.com', isPrimary: false, notes: '' },
    { firstName: 'Hilde', lastName: 'Meier', relation: 'Grandmother', phone: '044 746 13 23', email: '', isPrimary: false, notes: '' },
    { firstName: 'Petra', lastName: 'Sturzenegger', relation: 'Daycare Manager', phone: '044 747 18 28', email: 'p.sturzenegger@kita.com', isPrimary: false, notes: '' },
    { firstName: 'Kevin', lastName: 'Hug', relation: 'Brother', phone: '', email: '', isPrimary: false, notes: '' }
  ];
  displayedColumns = ['firstName', 'lastName', 'relation', 'phone', 'email', 'primary', 'notes'];

}
