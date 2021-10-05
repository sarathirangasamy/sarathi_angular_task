import { Component, OnInit,ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { environment } from 'src/environments/environment';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sarathi-bfx-project';

  li:any;
  tags : any[] = [];


  //Add API KEY//
  public api_url= environment.api_url;
  constructor(private formBuilder: FormBuilder,private http : HttpClient,private titleService:Title,private router: ActivatedRoute,private _router: Router) { }


  ngOnInit(): void {

    this.http.get(this.api_url+'/api/bfx-detail')
    .subscribe(Response => {
      this.li=Response;
      this.tags=this.li.data;
    });
  }

  delete($id:any){
    this.http.delete(this.api_url+'/api/delete-bfx/'+$id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this._router.navigateByUrl('/bfx-update');
    
  }
  
}
