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
      this.chartLabels.push(mood.date);
      this.chartData[0].data.push(mood.score);
    });
  }

  chartData: ChartDataSets[] = [{ data: [], label: "Stock Price" }];
  chartLabels: Label[];

  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Bla bla",
    },
    pan: {
      enabled: true,
      mode: "xy",
    },
    zoom: {
      enabled: true,
      mode: "xy",
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

  changeLabels() {
    for (var i = 0; i < this.chartLabels.length; i++) {
      this.chartLabels[i] = "Today";
    }
  }
}
