import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from './../services/util.service';
import { NgForm } from '@angular/forms';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {


  @ViewChild('newCribForm') newCribForm: NgForm;
  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor(
    private cribsService: CribsService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    this.cribsService.addCrib(data);
  }

}
