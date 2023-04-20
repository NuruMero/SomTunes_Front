import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Band } from 'src/app/shared/models/band';
import { BandService } from 'src/app/shared/services/bandservice/bandservice.service';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent {

  bandForm = this.formBuilder.group({
    name : ['', Validators.required],
    mainGenre : [''],
    origin : [''],
  });

  members: string[] = [];

  tempmember: string = "";

  id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private bandService: BandService
  ) {}

  ngOnInit(): void {
    this.getBand();
  }

  getBand(): void {
    this.bandService.getById(this.id)
      .subscribe(band => {
        this.bandForm.setValue({
          name: band.name,
          mainGenre: band.mainGenre,
          origin: band.origin
        })
        this.members = band.members
        this.id = band.id
      });
  }

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
    let id = this.id;
    let name = this.bandForm.get('name')?.value;
    let mainGenre = this.bandForm.get('mainGenre')?.value;
    let members = this.members;
    let origin = this.bandForm.get('origin')?.value;

    this.bandService.edit({
      id, name, mainGenre, members, origin
    } as Band).subscribe(() => {
      this.goBack();
    });
  }
}
