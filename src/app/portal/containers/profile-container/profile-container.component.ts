import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { GuardianTableComponent } from '../guardian-table/guardian-table.component';
import { User } from '../../../core/models/user';
import { Guardian } from '../../../core/models/guardian';
import { ChildService } from '../../../core/services/child.service';
import { GuardianService } from '../../../core/services/guardian.service';
@Component({
  selector: 'app-profile-container',
  standalone: true,
  imports: [CommonModule,MatTabsModule,UserProfileComponent,GuardianTableComponent],
  templateUrl:'./profile-container.component.html',
  styleUrl: './profile-container.component.scss'
})

export class ProfileContainerComponent implements OnInit {
  user:User= {
    name: '',
    address: '',
    nationality: '',
    language: '',
    dob:'',
    photo: ''
  };
  guardians: Guardian[]=[] ;
  selectedTabIndex = 2;
  constructor(private childService: ChildService, private guardianService:GuardianService) {}
  fetchChildDetails(): void {
    this.childService.getChildDetails().subscribe({
      next: (data) => {
        this.user = {
          name: data.name,
          address: data.address,
          nationality: data.nationality,
          language: data.language,
          dob: data.dateOfBirth,
          photo: data.imagePath
        };
      },
      error: (err) => {
        console.error('Failed to fetch child details:', err);
      }
    });
  }
  fetchGuardianDetails(): void {
    this.guardianService.getGuardianDetails().subscribe({
      next: (data) => {
        console.log(data.$values);
        this.guardians = data.$values; 
      },
      error: (err) => {
        console.error('Failed to fetch guardian details:', err);
      }
    });
  }

  ngOnInit() {
    this.fetchChildDetails();
    this.fetchGuardianDetails(); 
  }
}

