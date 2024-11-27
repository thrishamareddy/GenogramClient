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
import { CommonModule } from '@angular/common';
import { GenogramComponent } from '../genogram/genogram.component';
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
    CommonModule
  ],
  
  templateUrl: './guardian-table.component.html',
  styleUrls: ['./guardian-table.component.scss']
})
export class GuardianTableComponent {
editGuardian(_t16: any) {
throw new Error('Method not implemented.');
}
  @Input() guardians: Guardian[] = [];
  displayedColumns: string[] = NameOf.those<Guardian>([
    'actions',
    'firstName',
    'lastName',
    'relationship',
    'phone',
    'email',
    'isPrimary',
    'remarks',
  ]);

  guardianForm: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.guardianForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      relationship: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.email]],
      isPrimaryContact: [false],
      remarks: [''],
    });
  }
  
  openAddGuardianDialog(guardianId?: number | null): void {
    const dialogRef = this.dialog.open(AddGuardianComponent, {
      data: { guardians: this.guardians, guardianId: guardianId },
      width: '600px',
    });
  
    dialogRef.componentInstance.save.subscribe((guardianData: Guardian) => {
      if (guardianId) {
        this.onEditSave(guardianData);
      } else {
        this.onSave(guardianData);
      }
      dialogRef.close();
    });
  
    dialogRef.componentInstance.cancel.subscribe(() => {
      dialogRef.close();
    });
  }
  
  onEditSave(updatedGuardian: Guardian): void {
    const index = this.guardians.findIndex(g => g.id === updatedGuardian.id);
    if (index !== -1) {
      this.guardians[index] = updatedGuardian; // Update the existing guardian details
    }
  }
  

  onSave(guardianData: Guardian): void { 
    this.guardians = [...this.guardians, guardianData];
  }

  onCancel(): void {
    this.dialog.closeAll();
  }
  viewGenogram() {
    const dialogRef = this.dialog.open(GenogramComponent, {
      data: {
        nodes: [
          { id: 'child', label: 'Child' },
          { id: 'father', label: 'Father' },
          { id: 'mother', label: 'Mother' }
        ],
        links: [
          { source: 'child', target: 'father', label: 'Father' },
          { source: 'child', target: 'mother', label: 'Mother' }
        ]
      }
    });
  }
  
}
