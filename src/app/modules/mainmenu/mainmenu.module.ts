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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchentryComponent } from './components/searchentry/searchentry.component';
import { MatRadioModule } from '@angular/material/radio';
import { SearchbandsComponent } from './components/searchbands/searchbands.component';
import { SearchsongsComponent } from './components/searchsongs/searchsongs.component';
import { MatDividerModule } from '@angular/material/divider';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
    SidebarComponent,
    SearchentryComponent,
    SearchbandsComponent,
    SearchsongsComponent
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
    MatIconModule
  ],
  exports: [
    ToolbarComponent,
    ContentboxComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class MainmenuModule { }
