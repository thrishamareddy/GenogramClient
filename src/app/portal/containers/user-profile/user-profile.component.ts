import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatCard,MatIconModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  
  @Input() user!: {
    name: string;
    address: string;
    nationality: string;
    language: string;
    dob: string;
    photo: string;
  };
}
