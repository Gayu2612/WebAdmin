import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CothService } from 'src/app/admin/service/coth.service';

@Component({
  selector: 'app-cloth-list',
  templateUrl: './cloth-list.component.html',
  styleUrls: ['./cloth-list.component.scss']
})
export class ClothListComponent implements OnInit {

  public clothList: any;
  closeResult = '';
  public id: any;
  constructor(private clothService: CothService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllcloth()
  }
  getAllcloth() {
    this.clothService.getAllCloth().subscribe((res: any) => {
      // console.log('get all', res);
      this.clothList = res?.result;
      // console.log('this.clothList', this.clothList);

    })
  }

  open(model: any, item: any) {
    console.log('id',item);
    this.modalService.open(model, { ariaLabelledBy: 'modal-basic' })
    this.id = item._id
    console.log('this.id',this.id);
  }

 deleteCloth() {
    this.clothService.deleteCloth(this.id).subscribe((res: any) => {
      console.log('deleteCloth',res);
      this.getAllcloth()
      this.modalService.dismissAll();

    },(error)=>{
      console.log(error);

    })
  }
}
