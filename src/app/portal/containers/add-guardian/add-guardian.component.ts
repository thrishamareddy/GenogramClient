import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GuardianService } from '../../../core/services/guardian.service';
import { MatIcon } from '@angular/material/icon';
import { ChildService } from '../../../core/services/child.service';

@Component({
  selector: 'app-add-guardian',
  templateUrl: './add-guardian.component.html',
  styleUrls: ['./add-guardian.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class AddGuardianComponent {
editGuardian(_t14: any) {
throw new Error('Method not implemented.');
}
  guardianForm: FormGroup;

  @Output() save = new EventEmitter<any>(); 
  @Output() cancel = new EventEmitter<void>(); 

  relationships = ['Father', 'Mother', 'Guardian', 'Brother', 'Sister', 'Grandfather', 'Grandmother'];

  constructor(private fb: FormBuilder, 
    private guardianService:GuardianService,
    private childService:ChildService,
    public dialogRef: MatDialogRef<AddGuardianComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { guardianId: number | null }
  ) {
    this.guardianForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      relationship: ['', Validators.required],
      email: ['', [Validators.email]],
      phone: [''],
      isPrimary: [false],
      remarks: [''],
    });
    if (data?.guardianId) {
      this.loadGuardianDetails(data.guardianId);
    }
  }
  private loadGuardianDetails(id: number): void {
    
  }
  onSave(): void {
    if (this.guardianForm.valid) {
      const guardianData = this.guardianForm.value;
      var childId=this.childService.getChildId();
      this.guardianService
        .addOrUpdateGuardian(this.data?.guardianId, guardianData,childId)
        .subscribe({
          next: (response) => {
            this.save.emit(response);
            this.dialogRef.close(response);
          },
          error: (err) => {
            console.error('Error saving guardian:', err);
          },
        });
    }
  }

  onCancel(): void {
    this.cancel.emit(); 
    this.dialogRef.close();
  }
}
