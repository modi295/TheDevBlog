import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  constructor(private postServices:PostService, private route:ActivatedRoute){}

  post:Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>{
        const id =params.get('id');
        if(id){
          this.postServices.getPostById(id)
          .subscribe(
            response=>{
              this.post=response;
            }
          )
        }
      }
    )
  }

}
