import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Color, Label } from "ng2-charts";
import { environment } from "src/environments/environment";
// import moment from 'moment'
import "moment/locale/es";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  allDates: string[] = [];

  constructor() {
    const mood = JSON.parse(localStorage.getItem("mood"));
    this.chartData[0].data = [];
    this.chartLabels = [];
    mood.length = 14;
    mood.map((mood) => {
      mood.date = mood.date[0] + mood.date[1] + mood.date[2] + mood.date[3];

      this.allDates.push(mood.date);
      this.chartLabels.push(mood.date);
      this.chartData[0].data.push(mood.score);
    });
  }

  chartData: ChartDataSets[] = [{ data: [] }];
  chartLabels: Label[];

  chartOptions = {
    responsive: true,
    pan: {
      enabled: true,
      mode: "xy",
    },
    zoom: {
      enabled: false,
      mode: "xy",
    },
    legend: {
      display: false,
    },
  };

  chartColors: Color[] = [
    {
      borderColor: "#000000",
      backgroundColor: "#ff00ff",
    },
  ];

  chartType = "bar";
  showLegend = false;

  stock = "AAPL";

  changeData(goTo) {
    if (goTo === "5") {
      let auxLabels = [];
      auxLabels = auxLabels.concat(auxLabels, this.allDates);
      auxLabels.reverse();
      auxLabels.length = 5;
      this.chartLabels = auxLabels.reverse();
    } else {
      this.chartLabels = this.allDates;
    }
  }
}
