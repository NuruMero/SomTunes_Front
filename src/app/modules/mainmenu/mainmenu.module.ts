import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentboxComponent } from './components/contentbox/contentbox.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreateformComponent } from './components/createform/createform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BanddetailsComponent } from './components/banddetails/banddetails.component';
import { EditformComponent } from './components/editform/editform.component';
import { ContentboxsongsComponent } from './components/contentboxsongs/contentboxsongs.component';
import { SongdetailsComponent } from './components/songdetails/songdetails.component';
import { CreateformsongsComponent } from './components/createformsongs/createformsongs.component';
import { EditformsongsComponent } from './components/editformsongs/editformsongs.component';
import { SearchentryComponent } from './components/searchentry/searchentry.component';
import { MatRadioModule } from '@angular/material/radio';
import { SearchbandsComponent } from './components/searchbands/searchbands.component';
import { SearchsongsComponent } from './components/searchsongs/searchsongs.component';
import { MatDividerModule } from '@angular/material/divider';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { RemovedialogComponent } from './components/removedialog/removedialog.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    ToolbarComponent,
    ContentboxComponent,
    CreateformComponent,
    BanddetailsComponent,
    EditformComponent,
    ContentboxsongsComponent,
    SongdetailsComponent,
    CreateformsongsComponent,
    EditformsongsComponent,
    SearchentryComponent,
    SearchbandsComponent,
    SearchsongsComponent,
    RemovedialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatRadioModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule
  ],
  exports: [
    ToolbarComponent,
    ContentboxComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class MainmenuModule { }
