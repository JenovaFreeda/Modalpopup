import { HttpClient } from '@angular/common/http';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  id='';
  url='';
  values: any;
  value: any;

  constructor(private userService:UserService, private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.url = 'https://jsonplaceholder.typicode.com/users';

    this.getAll();
  }

  getAll(){
    this.http.get(this.url).subscribe((data) => {
      this.values = data;
      let index = this.values.findIndex((value: {id: String}) => value.id == this.id);

      if(index > -1){
        this.value = this.values[index];
      }
    })
  }

}
