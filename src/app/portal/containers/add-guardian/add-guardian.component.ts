import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    ReactiveFormsModule
  ],
})
export class AddGuardianComponent {
  guardianForm: FormGroup;

  @Output() save = new EventEmitter<any>(); 
  @Output() cancel = new EventEmitter<void>(); 

  relationships = ['Father', 'Mother', 'Guardian', 'Brother', 'Sister', 'Grandfather', 'Grandmother'];

  constructor(private fb: FormBuilder) {
    this.guardianForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      relationship: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isPrimary: [false]
    });
  }

  onSave(): void {
    if (this.guardianForm.valid) {
      this.save.emit(this.guardianForm.value); 
    }
  }

  onCancel(): void {
    this.cancel.emit(); 
  }
}
