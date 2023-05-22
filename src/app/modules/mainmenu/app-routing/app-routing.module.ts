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
import { RegisterFormComponent } from '../components/register-form/register-form.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'bands', component: ContentboxComponent},
  { path: 'bandinfo/:id', component: BanddetailsComponent},
  { path: 'createBand', component: CreateformComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  { path: 'editBand/:id', component: EditformComponent, ...canActivate(() => redirectUnauthorizedTo(['/register'])) },
  { path: 'songs', component: ContentboxsongsComponent },
  { path: 'songinfo/:id', component: SongdetailsComponent },
  { path: 'createSong', component: CreateformsongsComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  { path: 'createSong/:band', component: CreateformsongsComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  { path: 'editSong/:id', component: EditformsongsComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  { path: 'search', component:SearchentryComponent},
  { path: 'register', component:RegisterFormComponent},
  { path: 'login', component:LoginFormComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
