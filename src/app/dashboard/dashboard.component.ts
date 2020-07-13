import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  displayArray: any[] = [];

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
  department: any = {
    manager: [
      {
        developer: [],
        qaTester: [],
        manager: []
      }
    ]
  };
  finalDepartments: any[] = [];
  constructor() {}

  ngOnInit() {
    this.finalDepartments.push();
  }

  addInternalTeam(type, deptNo, managerNo) {
    if (type == "developer") {
      this.finalDepartments[deptNo]["manager"][managerNo][type].push(
        this.developer
      );
    } else if (type == "qaTester") {
      this.finalDepartments[deptNo]["manager"][managerNo]["qaTester"].push(
        this.qaTester
      );
    } else if (type == "manager") {
      this.finalDepartments[deptNo]["manager"][managerNo]["manager"].push(
        this.manager
      );
    }
  }

  addDept() {
    this.finalDepartments.push({
      manager: [
        {
          developer: [],
          qaTester: [],
          manager: []
        }
      ]
    });
  }

  addManager(department, deptNo) {
    console.log(this.finalDepartments[deptNo]);
    this.finalDepartments[deptNo]["manager"].push({
      developer: [],
      qaTester: [],
      manager: []
    });
  }
}
