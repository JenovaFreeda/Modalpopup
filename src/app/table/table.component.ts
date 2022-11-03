import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataContent: any;
  data: any;

  constructor(private userService: UserService, private route: Router) { 
    
  }

  ngOnInit(){
    this.userService.getDetail().subscribe((resp) => {
      console.log(resp);
      this.dataContent = resp;
  },(err)=>{
    alert()
  }
  )
  }
  edit(id:any){
    this.route.navigate(['open',id])
  }
  pop(item:any){
     this.data = item;
  }

  
}
