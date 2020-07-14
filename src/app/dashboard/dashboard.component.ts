import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
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
        manager: [],
        teamAmount: 0
      }
    ],
    departmentAmount: 0
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
      this.finalDepartments[deptNo]["manager"][
        managerNo
      ].teamAmount += this.developer.cost;
      this.finalDepartments[deptNo]["departmentAmount"] += this.developer.cost;
    } else if (type == "qaTester") {
      this.finalDepartments[deptNo]["manager"][managerNo]["qaTester"].push(
        this.qaTester
      );
      this.finalDepartments[deptNo]["manager"][
        managerNo
      ].teamAmount += this.qaTester.cost;
      this.finalDepartments[deptNo]["departmentAmount"] += this.qaTester.cost;
    } else if (type == "manager") {
      this.finalDepartments[deptNo]["manager"][managerNo]["manager"].push(
        this.manager
      );
      this.finalDepartments[deptNo]["manager"][
        managerNo
      ].teamAmount += this.manager.cost;
      this.finalDepartments[deptNo]["departmentAmount"] += this.manager.cost;
    }
  }

  addDept() {
    this.finalDepartments.push({
      manager: [
        {
          developer: [],
          qaTester: [],
          manager: [],
          teamAmount: this.manager.cost
        }
      ],
      departmentAmount: this.manager.cost
    });
  }

  addManager(department, deptNo) {
    console.log(this.finalDepartments[deptNo]);
    this.finalDepartments[deptNo]["manager"].push({
      developer: [],
      qaTester: [],
      manager: [],
      teamAmount: this.manager.cost
    });
    this.finalDepartments[deptNo]["departmentAmount"] += this.manager.cost;
  }
}
