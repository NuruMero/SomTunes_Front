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

@NgModule({
  declarations: [
    ToolbarComponent,
    ContentboxComponent,
    CreateformComponent,
    BanddetailsComponent,
    EditformComponent,
    ContentboxsongsComponent,
    SongdetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ToolbarComponent,
    ContentboxComponent
  ]
})
export class MainmenuModule { }
