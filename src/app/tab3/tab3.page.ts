import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Color, Label } from "ng2-charts";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  constructor() {
    const mood = JSON.parse(localStorage.getItem("mood"));
    this.chartData[0].data = [];
    this.chartLabels = [];
    mood.length = 14;
    mood.map((mood) => {
      mood.date = "today";
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
      enabled: true,
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
}
