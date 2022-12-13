import { AfterViewInit, Component, ElementRef, ViewChild ,OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AuthService } from '../services/auth.service';
import { ConstatService } from '../services/constat.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit,AfterViewInit  {
  nbraccident:number[]=[];
  accidentSite:string[]=[];
  username:string=localStorage.getItem('username');
  @ViewChild('barCanvas') private barCanvas: ElementRef;

  barChart: any;

  constructor(private constatService:ConstatService,private serviceAuth:AuthService) { }
  ngOnInit(): void {
    this.accidentSite=[];
    this.nbraccident=[];
    this.constatService.getAllConstat().subscribe((data)=>{
      data.forEach(element => {
        this.accidentSite.push(element.accidentSite);
        this.constatService.getSizeOfConstatByAccidentSite(element.accidentSite).subscribe((data2)=>{
          this.nbraccident.push(data2);
        })
      });
    })
  }
  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {
    this.barChartMethod();
  }
  logoutAction(){
    this.serviceAuth.logout();
  }
  barChartMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.accidentSite,
        datasets: [{
          label: '# of Accident By Site',
          data: this.nbraccident,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  }

  

}
