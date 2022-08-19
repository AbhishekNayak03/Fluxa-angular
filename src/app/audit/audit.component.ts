import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import auditData from '../../assets/abhi.json';
import { FormsModule } from '@angular/forms';
import { ElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  public totalPageSizee: any;
  public nextPageAvailablee: Boolean =false;
  public prePageAvailable: Boolean = true;
  public showFlag: Boolean = false;
  public auditData: Array<any>=[];
  public auditHeaders: Array<any>=[];
  public dropdownn:any;
  public searchText:any;
  public subsequenceText:any;
  public messageText:any;
  public typeText:any;
  public actionText:any;
  public labelText:any;
  public versionText:any;
  public item:any;
  public body :Array<any>=[];
  public pageDetail = {
    pageSizee: 5,
    pageNu: 1,
    
  }

  constructor() { }
  
  ngOnInit(): void {
    
     let tempData=(<any>auditData);
    for(let i=0;i<tempData.Audit.length;i++)
    {
      this.auditData.push(tempData.Audit[i]);
      
    }
    for(let i=0;i<tempData.Headers.length;i++)
    {
      this.auditHeaders.push(tempData.Headers[i]);
      
    }
    this.body=this.auditData;
    this.totalPageSizee = Math.ceil(this.body.length / this.pageDetail.pageSizee);
  }
  
  // dropDown() {
  //   if (this.dropdownn == "") {
  //     this.body = this.auditData;
  //   }
  //   else{
  //     this.search('User',this.dropdownn);
  //   }
  // }

  idSearch() {
    if (this.searchText == "") {
      this.body = this.auditData;
    }
    else{
      this.search('ID',this.searchText);
    }

  }

  subSearch() {
    console.log("works")
    if (this.subsequenceText == "") {
      this.body = this.auditData;
    }
    else{
      this.search('Subsequence',this.subsequenceText);
    }
  }

  msgSearch() {
    if (this.messageText == "") {
      this.body = this.auditData;
    }
    else{
      this.search('Message',this.messageText);
    }
  }

  actSearch() {
    if (this.actionText == "") {
      this.body = this.auditData;
    }
    else{
      this.search('Action',this.actionText);
    }
  }
  typeSearch() {
    if (this.typeText == "") {
      this.body = this.auditData;
    }
    else{
      this.search('Type',this.typeText);
    }
  }
  labelSearch() {
    if (this.labelText == "") {
      this.body = this.auditData;
    }
    else{
      this.search('Label',this.labelText);
    }
  }
  verSearch() {
    if (this.versionText == "") {
      this.body = this.auditData;
    }
    else{
      this.search('Version',this.versionText);
    }
  }

  userSearch(name:string){
    this.search('User','Chanjal N C (chanjal)');
    this.search('User','shahil cc (shahil)');
    // this.search('User','Bishwadeep Chaudhary (bishwadeep)');
    // this.search('User','Ankitha naik (Ankitha)');
  }

  search(value: string, type: any) {
    console.log("value",value);
    console.log("type",type);
    this.body = [];
    this.auditData.forEach(element => {
      console.log("element",element);
      if (element[value] == type) {
        this.body.push(element);
      }
    });
  }

  assignData(){
    for (let i = ((this.pageDetail.pageSizee * this.pageDetail.pageNu) - this.pageDetail.pageSizee); i < (this.pageDetail.pageSizee * this.pageDetail.pageNu); i++) {
      if(this.auditData && this.auditData[i] && this.auditData[i].ID){
      this.body.push({ 'User': this.auditData[i].User, 'ID': this.auditData[i].ID, 'Subsequence': this.auditData[i].Subsequence, 'Message': this.auditData[i].Message, 'Action':this.auditData[i].Action ,'Type':this.auditData[i].Type,'Label':this.auditData[i].Label,'Version':this.auditData[i].Version});
    }
  }
    // this.loaders=false;
  }
 
  reverse(){
    for (let i = ((this.pageDetail.pageSizee * this.pageDetail.pageNu) - this.pageDetail.pageSizee); i < (this.pageDetail.pageSizee * this.pageDetail.pageNu); i++) {
      this.body.push({ 'User': this.auditData[i].User,'ID': this.auditData[i].ID, 'Subsequence': this.auditData[i].Subsequence, 'Message': this.auditData[i].Message, 'Action':this.auditData[i].Action ,'Type':this.auditData[i].Type,'Label':this.auditData[i].Label,'Version':this.auditData[i].Version});
    }
    // this.loaders=false;
  }

  disable(){
if(this.pageDetail.pageNu==1){

this.prePageAvailable=true;
if(this.pageDetail.pageNu<this.totalPageSizee){
  this.nextPageAvailablee=false;

}
}
else
{
this.prePageAvailable=false;
if(this.pageDetail.pageNu<this.totalPageSizee){
this.nextPageAvailablee=false;
}
else{
this.nextPageAvailablee=true;
}
}
    
}
    
gotoNext() {
  // this.loaders=true;
  this.pageDetail.pageNu = this.pageDetail.pageNu + 1;
  this.body = [];
  this.assignData();
  this.disable();
}
gotoPre() {
  // this.loaders=true;
  this.pageDetail.pageNu = this.pageDetail.pageNu - 1;
  this.body = [];
  this.reverse();
  this.disable();
}

show(){
  this.showFlag=!this.showFlag;
}

}


