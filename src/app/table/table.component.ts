import { Component, OnInit, Type } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient) { }


  public search:any = '';
  public searchFilter: any = '';
  public dataSource :Array<any>=[];
  public searchtext: any;
  public tempTable: any;
  public body: Array<any> = [];
  public header:Array<any>=[];
  public inputPayload: any;
  public pageDetails = {
    pageSize: 4,
    pageNo: 1,
    searchKey: '',
  }
  
  public searchArray :Array<any>=[];
  public loaders:Boolean= false;
  public tableData: Array<any> = [];
  public totalPageSize: any;
  public nextPageAvailable: Boolean =true;
  public prevPageAvailable: Boolean = true;
  ngOnInit() {
    
    this.getdata();
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  }
  getdata() {
    try {
      this.loaders=true;
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      this.inputPayload = {
        "object_type": "tab_data",
        "user_id": "admin",
        "pageSize": 14,
        "pageNo": this.pageDetails.pageNo,
        "searchKey": this.searchtext ? this.searchtext : '',
      }

      this.http.post('http://127.0.0.1:8000/get_tabledata', this.inputPayload, { headers: httpHeaders }).subscribe(data => {
        this.tempTable = data;
        this.dataSource = this.tempTable.message.content.tableData.equipment.bodyContent;
        // this.locked=this.tempTable.message.content.tableData.equipment.bodyContent;
        this.header= this.tempTable.message.content.tableData.equipment.headerContent;
        // this.pageDetails.pageNo = this.tempTable.message.content.tableData.equipment.pageNo;
        // this.nextPageAvailable = this.tempTable.message.content.tableData.equipment.nextPageAvailable ? false : true;
        // this.prevPageAvailable = this.tempTable.message.content.tableData.equipment.prevPageAvailable ? false : true;
        this.totalPageSize = Math.ceil(this.tempTable.message.content.tableData.equipment.count / this.pageDetails.pageSize);
        this.disable();
        this.assignStepData();
        
      })

    } catch (error) {

      console.log(error);

    }
     
    
  }
  assignStepData(){
      for (let i = ((this.pageDetails.pageSize * this.pageDetails.pageNo) - this.pageDetails.pageSize); i < (this.pageDetails.pageSize * this.pageDetails.pageNo); i++) {
        if(this.dataSource && this.dataSource[i] && this.dataSource[i].id){
        this.body.push({ 'id': this.dataSource[i].id, 'equipment': this.dataSource[i].equipment, 'equipmentID': this.dataSource[i].equipmentID, 'equipmentDisplayName':this.dataSource[i].equipmentDisplayName });
      }
    }
      this.loaders=false;
    }
   
    reverse(){
      for (let i = ((this.pageDetails.pageSize * this.pageDetails.pageNo) - this.pageDetails.pageSize); i < (this.pageDetails.pageSize * this.pageDetails.pageNo); i++) {
        this.body.push({ 'id': this.dataSource[i].id, 'equipment': this.dataSource[i].equipment, 'equipmentID': this.dataSource[i].equipmentID, 'equipmentDisplayName':this.dataSource[i].equipmentDisplayName });
      }
      this.loaders=false;
    }

    disable(){
if(this.pageDetails.pageNo==1){
  this.prevPageAvailable=true;

  if(this.pageDetails.pageNo<this.totalPageSize){
    this.nextPageAvailable=false;

  }
}
else
{
 this.prevPageAvailable=false;
 if(this.pageDetails.pageNo<this.totalPageSize){
  this.nextPageAvailable=false;
 }
 else{
  this.nextPageAvailable=true;
 }
}
      
}
      
  gotoNext() {
    // this.loaders=true;
    this.pageDetails.pageNo = this.pageDetails.pageNo + 1;
    this.body = [];
    this.assignStepData();
    this.disable();
  }
  gotoPrevious() {
    // this.loaders=true;
    this.pageDetails.pageNo = this.pageDetails.pageNo - 1;
    this.body = [];
    this.reverse();
    this.disable();
  }
  // search() {
    
  //   if (this.searchtext=="this.dataSource.equipment" || this.searchtext=="this.body.equipmentID" || this.searchtext=="this.body.equipmentDisplayName")

  //   {
  //     this.searchArray=this.searchtext;
  //     console.log(this.searchtext);
  //   }
  //   this.body = [];
  //   this.body=this.searchArray;

  //   // this.pageDetails = {
  //   //   pageSize: 4,
  //   //   pageNo: 1,
  //   //   searchKey: '',
  //   }

  // openModal(x: any, y: any) {

  //   console.log(x, y);
  // }
}

