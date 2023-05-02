import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentboxComponent } from '../components/contentbox/contentbox.component';
import { CreateformComponent } from '../components/createform/createform.component';
import { BanddetailsComponent } from '../components/banddetails/banddetails.component';
import { EditformComponent } from '../components/editform/editform.component';
import { ContentboxsongsComponent } from '../components/contentboxsongs/contentboxsongs.component';
import { SongdetailsComponent } from '../components/songdetails/songdetails.component';
import { CreateformsongsComponent } from '../components/createformsongs/createformsongs.component';
import { EditformsongsComponent } from '../components/editformsongs/editformsongs.component';
import { SearchentryComponent } from '../components/searchentry/searchentry.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'bands', component: ContentboxComponent},
  { path: 'bandinfo/:id', component: BanddetailsComponent},
  { path: 'createBand', component: CreateformComponent},
  { path: 'editBand/:id', component: EditformComponent },
  { path: 'songs', component: ContentboxsongsComponent },
  { path: 'songinfo/:id', component: SongdetailsComponent },
  { path: 'createSong', component: CreateformsongsComponent},
  { path: 'createSong/:band', component: CreateformsongsComponent },
  { path: 'editSong/:id', component: EditformsongsComponent},
  { path: 'search', component:SearchentryComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
