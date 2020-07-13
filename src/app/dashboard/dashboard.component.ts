import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  displayArray: any[] = [];
  department: any = {
    manager: [{ developer: [], qaTester: [], manager: [] }]
  };
  developer: any = {
    name: "Developer",
    cost: 1000
  };
  qaTester: any = {
    name: "QA Tester",
    cost: 500
  };
  manager: any = {
    name: "Manager",
    cost: 300
  };
  finalDepartments: any[] = [this.department];
  departmentForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    // this.departmentForm = this.formBuilder.group({
    //   departmentNumber: [],
    //   managers: this.formBuilder.array([this.addManagerGroup()])
    // });
  }

  ngOnInit() {
    this.displayArray.push(this.finalDepartments);
  }

  // private addManagerGroup(): FormGroup {
  //   return this.formBuilder.group({
  //     manager: [],
  //     developers: [],
  //     state: [],
  //     contacts: this.formBuilder.array([])
  //   });
  // }

  addDept(departmentNumber: any) {
    this.finalDepartments.push(this.department);
  }
}
