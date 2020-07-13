import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

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

  getInternalCost(manager, deptNo) {
    console.log(manager);
    let total = this.manager.cost;
    for (const member of Object.keys(manager)) {
      if (member == "developer") {
        total += manager[member].length * this.developer.cost;
      } else if (member == "qaTester") {
        total += manager[member].length * this.qaTester.cost;
      } else if (member == "manager") {
        total += manager[member].length * this.manager.cost;
      }
    }
    this.finalDepartments[deptNo]["manager"]["teamAmount"] = total;
    console.log("Hey", this.finalDepartments[deptNo]["manager"]);
    return total;
  }
}
