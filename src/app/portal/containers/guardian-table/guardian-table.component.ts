import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Guardian } from '../../../core/models/guardian';
import { NameOf } from '../../../core/services/NameOf';
import { AddGuardianComponent } from '../add-guardian/add-guardian.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'
@Component({
  selector: 'app-guardian-table',
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule, 
    ReactiveFormsModule, 
  ],
  
  templateUrl: './guardian-table.component.html',
  styleUrls: ['./guardian-table.component.scss']
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
    'actions',
  ]);

  guardianForm: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.guardianForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      relationship: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.email]],
      isPrimary: [false],
      remarks: [''],
    });
  }

  openAddGuardianDialog(): void {
    const dialogRef = this.dialog.open(AddGuardianComponent, {
      width: '400px',
    });

    dialogRef.componentInstance.save.subscribe((guardianData: Guardian) => {
      this.onSave(guardianData);
      dialogRef.close();
    });

    dialogRef.componentInstance.cancel.subscribe(() => {
      dialogRef.close();
    });
  }

  onSave(guardianData: Guardian): void {
    console.log('Saved Guardian:', guardianData);
    this.guardians.push(guardianData); // Simulate adding to the list
  }

  onCancel(): void {
    this.dialog.closeAll();
  }
  viewGenogram(){

  }
}
