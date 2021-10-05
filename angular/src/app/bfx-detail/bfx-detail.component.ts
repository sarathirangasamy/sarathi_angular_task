import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { environment } from 'src/environments/environment';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bfx-detail',
  templateUrl: './bfx-detail.component.html',
  styleUrls: ['./bfx-detail.component.css']
})
export class BfxDetailComponent implements OnInit {

  title = 'sarathi-bfx-project';

  li:any;
  tags : any[] = [];
  //Add API KEY//
  public api_url= environment.api_url;
  constructor(private formBuilder: FormBuilder,private http : HttpClient,private titleService:Title,private router: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this.bfx_detail();
  }

  delete($id:any){
    this.http.delete(this.api_url+'/api/delete-bfx/'+$id).subscribe(
      (response) => this.bfx_detail(),
      (error) => console.log(error)
    )
    alert('Deleted Successfully');
    
    
  }

  bfx_detail() {
    this.http.get(this.api_url+'/api/bfx-detail')
    .subscribe(Response => {
      this.li=Response;
      this.tags=this.li.data;
    });
  }

}
