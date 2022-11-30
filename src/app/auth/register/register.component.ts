import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';
import { Register } from '../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registers:Register =new Register();
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    // console.log('ooooo');
      this.registers.imageUrl=environment.imageUrl
      // console.log('bbbb',this.registers);

     this.authservice.postRegister(this.registers).subscribe((res:any)=>{
           console.log('register',res);
           this.router.navigateByUrl('/auth/login')
     })
    //  this.toastr.success('Sucessfully')

  }

}
