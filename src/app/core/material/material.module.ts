import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule,MatError,MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
const MaterialModules=[
  CommonModule,
  MatListModule,
  MatIcon,
  MatSidenav,
  MatSidenavContainer,
  MatToolbar,
  MatSidenavContent,
  MatTableModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatError,
  MatLabel,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatOption,
  MatSelect,
  MatButtonToggleModule,
  RouterLink,
  RouterLinkActive,
  MatPaginator,
  MatSort
]

@NgModule({
  imports: [
    MaterialModules
  ],
  exports:[
    MaterialModules
  ]
})
export class MaterialModule { }
