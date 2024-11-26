import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { Guardian } from '../../../core/models/guardian';
import { NameOf } from '../../../core/services/NameOf';
@Component({
  selector: 'app-guardian-table',
  standalone: true,
  imports: [MatCheckboxModule,MatCardModule, MatTableModule,MatIconModule],
  templateUrl: './guardian-table.component.html',
  styleUrl: './guardian-table.component.scss'
})
export class GuardianTableComponent {
  @Input() guardians: Guardian[] = []; 

  displayedColumns: string[] = NameOf.those<Guardian>([
    'firstName',
    'lastName',
    'relationship',
    'phone',
    'email',
    'isPrimary',
    'remarks',
    'actions'
  ]);
}
