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
import { ChildService } from '../../../core/services/child.service';
import { Relationship } from '../../../core/Enums/relationship.enum';

@Component({
  selector: 'app-add-guardian',
  templateUrl: './add-guardian.component.html',
  styleUrls: ['./add-guardian.component.scss'],
  standalone: true,
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
  guardianForm: FormGroup;
  guardians: any[] = []; 
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  relationships = Object.values(Relationship);

  constructor(
    private fb: FormBuilder,
    private guardianService: GuardianService,
    private childService: ChildService,
    public dialogRef: MatDialogRef<AddGuardianComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { guardianId: number | null; guardians: any[] }
  ) {
    this.guardianForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      lastName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      relationship: ['', Validators.required],
      email: ['', [Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      phone: [''],
      isPrimaryContact: [false],
      remarks: [''],
    });

    if (data?.guardians) {
      this.guardians = data.guardians; 
    }

    if (data?.guardianId) {
      this.loadGuardianDetails(data.guardianId);
    }
  }

  private loadGuardianDetails(id: number): void {
    const guardian = this.guardians.find(g => g.id === id);
    if (guardian) {
      this.guardianForm.patchValue({
        firstName: guardian.firstName,
        lastName: guardian.lastName,
        relationship: guardian.relationship,
        email: guardian.email,
        phone: guardian.phone,
        isPrimaryContact: guardian.isPrimaryContact,
        remarks: guardian.remarks,
      });
    }
  }
  

  getAvailableRelationships(): string[] {
    const maxCounts = {
      [Relationship.Father]: 1,
      [Relationship.Mother]: 1,
      [Relationship.Grandfather]: 2,
      [Relationship.Grandmother]: 2,
    };
  
    const currentCounts = (this.guardians || []).reduce(
      (acc: Record<string, number>, guardian) => {
        acc[guardian.relationship] = (acc[guardian.relationship] || 0) + 1;
        return acc;
      },
      {}
    );
  
    const currentRelationship = this.guardianForm.get('relationship')?.value;
  
    return this.relationships.filter((rel) => {
      const maxCount = maxCounts[rel as keyof typeof maxCounts] || Infinity;
      const currentCount = currentCounts[rel] || 0;
  
      return rel === currentRelationship || currentCount < maxCount;
    });
  }
  
  getRemainingRelationshipMessage(): string {
    const remainingRelationships = this.getAvailableRelationships();
    return `Available relationships: ${remainingRelationships.join(', ')}`;
  }

  onSave(): void {
    if (this.guardianForm.valid) {
      const guardianData = this.guardianForm.value;
      const childId = this.childService.getChildId();

      this.guardianService
        .addOrUpdateGuardian(this.data?.guardianId, guardianData, childId)
        .subscribe({
          next: (response) => {
            this.save.emit(response);
            this.dialogRef.close(response);
            window.location.reload();
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
