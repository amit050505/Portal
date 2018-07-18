import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { peopledata } from './peopledata';
@Component({
  selector: 'app-empjunk',
  templateUrl: './empjunk.component.html',
  styleUrls: ['./empjunk.component.css']
})
export class EmpjunkComponent {
  
  selectedEmp:any;
  employeeList:any;

  constructor(private http: HttpClient, public dialog: MatDialog){
    //this.employeeList = require('static-mock-data/employees.json');
    //------------------
    // this.http.get("../assets/static-mock-data/employees.json").subscribe(data=>{
    //   this.employeeList= data;     
    //   console.log(data);          
    // });
    //--------------
    this.employeeList=peopledata;
  }

  
  openDialog(uname): void {
    this.getEmpDetails(uname)
    
    const diaConfig=new MatDialogConfig();
    diaConfig.height='80%';
    diaConfig.width='80%';
    diaConfig.hasBackdrop=true;
    
    diaConfig.data=this.selectedEmp;
    

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, diaConfig);
  }
  

    getEmpDetails(uname)
    {      
      this.selectedEmp=this.employeeList.find(k=>k.username==uname);    
    }
}



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
  styleUrls: ['./empjunk.component.css']
})

export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
    this.data=null;
  }


}