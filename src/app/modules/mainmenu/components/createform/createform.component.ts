import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Band } from 'src/app/shared/models/band';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent {

  bandForm = this.formBuilder.group({
    name : ['', Validators.required],
    mainGenre : [''],
    origin : [''],
  });

  members: string[] = [];

  tempmember: string = "";

  checkband : Band = {
    id: 0,
    name: "",
    mainGenre: "",
    members: [],
    origin: ""
  };

  constructor(
    private formBuilder: UntypedFormBuilder,
    private location: Location,
    private bandService: BandService
  ) {}

  onSaveMember() {
    this.members.push(this.tempmember);
    this.tempmember = "";
  }

  onDeleteMember(member: string) {
    this.members = this.members.filter(m => m !== member);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    if (!this.bandForm.get('name')?.getRawValue()) {
      alert('You need to add a name!');
      return;
    }
    let name = this.bandForm.get('name')?.value;
    let mainGenre = this.bandForm.get('mainGenre')?.value;
    let members = this.members;
    let origin = this.bandForm.get('origin')?.value;

    this.bandService.getByName(
      (this.bandForm.get('name')?.getRawValue()))
      .subscribe(band => {
        this.checkband = band;

        if (this.checkband.name) {
          alert("Incorrecto");
        } else {
          this.bandService.create({
            name, mainGenre, members, origin
          } as Band).subscribe(() => {
            this.goBack();
          });
        }
      });
  }
}
