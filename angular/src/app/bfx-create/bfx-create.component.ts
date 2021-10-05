import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { environment } from 'src/environments/environment';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-bfx-create',
  templateUrl: './bfx-create.component.html',
  styleUrls: ['./bfx-create.component.css']
})
export class BfxCreateComponent implements OnInit {
  BfxForm: FormGroup
  submitted = false;

  public api_url= environment.api_url;
  constructor(private formBuilder: FormBuilder,private http : HttpClient,private titleService:Title,private router: ActivatedRoute,private _router: Router) {

    this.BfxForm = this.formBuilder.group({
      name: ['',Validators.required ],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      website: ['',Validators.required],
      contact_name: ['',Validators.required],
      contact_phone: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      contact_email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      type: [''],
      category: ['',Validators.required],
      commission_percentege: [''],
      activate_from: [''],
      notes: [''],
      critical_account: [''],
      payment_option: this.formBuilder.array([]),
    });
   }


  id = this.router.snapshot.params['id'];
  ngOnInit(): void {
    this.http.get<any>(this.api_url+'/api/edit-tag/'+this.id).subscribe(
      (response)=>{
        this.BfxForm.patchValue(response['data']),
        console.log(response)
        const formArray: FormArray = this.BfxForm.get('payment_option') as FormArray;
      this.payment_method_type.forEach(function(payment:any){
        formArray.push(new FormControl(payment));
      })
      },
      (error) => console.log(error)
      
    )

  }

  get f() { return this.BfxForm.controls; }

  //Register Method
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.BfxForm.invalid) {
      return;
  }

    if((this.id != '') && (typeof this.id != undefined) && (typeof this.id != 'undefined')){
      this.http.post<any>(this.api_url+'/api/update-bfx/'+this.id,this.BfxForm.value).subscribe(
        (response)=>{
          this.BfxForm.patchValue(response),
          this._router.navigateByUrl('/Bfx-Detail'); 
        },
        (error) => console.log(error)
      )
    }else{
      this.http.post(this.api_url+'/api/store-bfx', this.BfxForm.value).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
      this.BfxForm.reset();
  }

  }
  payment_method_type:any = [];


  ChangeCheckbox(event:any) {
    const formArray: FormArray = this.BfxForm.get('payment_option') as FormArray;
    if(event.target.checked){
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl) => {
        if(ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  numberOnly(event :any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  
}
