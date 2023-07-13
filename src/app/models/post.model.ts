export interface Post{
    id:string;
    title:string;
    content:string;
    summary:string;
    urlHandle:string;
    author:string;
    visible:Boolean;
    publishDate:Date;
    updatedDate:Date;
    featuredImageUrl:string;
}