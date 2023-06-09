var xValuesRoster = ["School_Name_01", "School_Name_02", "School_Name_03", "School_Name_04"];
var xValuesTeacher = ["Teacher_Name_01", "Teacher_Name_02", "Teacher_Name_03", "Teacher_Name_04"];
var barColors = "#F9AC32";

var rosterData = [
  [150, 210, 350, 250],
  [50, 90, 50, 60],
]

var teacherData = [
  [190, 270, 250, 225],
  [10, 79, 120, 160],
]

new Chart("roster-plot", {
  type: "bar",
  data: {
    labels: xValuesRoster,
    datasets: [{
      label: "Active",
      backgroundColor: barColors,
      hoverBackgroundColor: "#5BCDA2",
      data: rosterData[0],
      barThickness: 18
    }, {
      label: "Inactive",
      backgroundColor: "#EEEEEE",
      data: rosterData[1],
      barThickness: 18
    }]
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
        // position: 'right',
        // align: "start",
        // labels: {
        //   usePointStyle: true,
        //   pointStyle: "circle",
        //   fontColor: '#444B48',
        //   boxWidth: 6,
        //   boxHeight: 6,
        //   borderRadius: "50",
        // }
      },
      tooltip: {
        enabled: false,
        yAlign: "top",
        external: (context) => {
          let tooltipEl = document.getElementById('chartjs-tooltip');
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = `
            <div class="tooltip-container">`;
            document.body.appendChild(tooltipEl);
          }

          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }
          if (tooltipModel.body) {
            const titleLines = tooltipModel.title || [];

            let data = tooltipModel.dataPoints;
            // design your tooltip
            let innerHtml = `
            <div class="tooltip-total">
              <b>${data[0].raw + data[1].raw}</b>
              <span>Total</span>
            </div>
            <div class="tooltip-data-point">
              <div>Inactive <i id="inactive-icon"></i></div>
              <div>${data[1].raw}</div>
            </div>
            <div class="tooltip-data-point">
              <div>Active<i id="active-icon"></i></div>
              <div>${data[0].raw}</div>
            </div>
            `;


            innerHtml += '</div>';

            let tableRoot = tooltipEl.querySelector('.tooltip-container');
            tableRoot.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 18 + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 20 + 'px';
          // tooltipEl.style.font = bodyFont.string;
          tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
          tooltipEl.style.pointerEvents = 'none';
        }
      }
    },

    scales: {
      x: {
        stacked: true,
        grid: { display: false },
      },

      y: {
        stacked: true,
        border: {
          display: false
        },
        ticks: {
          stepSize: 100,   // forces step size to be 50 units
          min: 0,
          max: 400
        },
      },
    },
    responsive: true,
    aspectRatio: 2
  },
});

new Chart("teacher-plot", {
  type: "bar",
  data: {
    labels: xValuesTeacher,
    datasets: [{
      label: "Active",
      backgroundColor: barColors,
      hoverBackgroundColor: "#5BCDA2",
      data: teacherData[0],
      barThickness: 18
    }, {
      label: "Inactive",
      backgroundColor: "#EEEEEE",
      data: teacherData[1],
      barThickness: 18
    }]
  },
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: false,
        yAlign: "top",
        external: (context) => {
          let tooltipEl = document.getElementById('chartjs-tooltip-2');
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip-2';
            tooltipEl.innerHTML = `
            <div class="tooltip-container">`;
            document.body.appendChild(tooltipEl);
          }

          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }
          if (tooltipModel.body) {
            const titleLines = tooltipModel.title || [];

            let data = tooltipModel.dataPoints;
            // design your tooltip
            let innerHtml = `
            <div class="tooltip-total">
              <b>${data[0].raw + data[1].raw}</b>
              <span>Total</span>
            </div>
            <div class="tooltip-data-point">
              <div>Inactive <i id="inactive-icon"></i></div>
              <div>${data[1].raw}</div>
            </div>
            <div class="tooltip-data-point">
              <div>Active<i id="active-icon"></i></div>
              <div>${data[0].raw}</div>
            </div>
            `;


            innerHtml += '</div>';

            let tableRoot = tooltipEl.querySelector('.tooltip-container');
            tableRoot.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 18 + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 20 + 'px';
          // tooltipEl.style.font = bodyFont.string;
          tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
          tooltipEl.style.pointerEvents = 'none';
        }
      },
      legend: {
        display: false,
        // position: 'right',
        // align: "start",
        // labels: {
        //   usePointStyle: true,
        //   pointStyle: "circle",
        //   fontColor: '#444B48',
        //   boxWidth: 6,
        //   boxHeight: 6,
        //   borderRadius: "50",
        // }
      },
    },

    scales: {
      x: {
        stacked: true,
        grid: { display: false },
      },

      y: {
        stacked: true,
        border: {
          display: false
        },
        ticks: {
          stepSize: 100,   // forces step size to be 50 units
          min: 0,
          max: 400
        },
      },
    },
    responsive: true,
    aspectRatio: 2
  },
});


function createRosterPlot() {
  document.getElementById("teacher-plot").style.display = "none";
  let ctx = document.getElementById("roster-plot");
  ctx.style.display = "block";
}


function createTeacherPlot() {
  document.getElementById("roster-plot").style.display = "none";
  let ctx = document.getElementById("teacher-plot");
  ctx.style.display = "block";
}


function showRosterPlot() {
  let [rosterButton, teacherButton] = document.getElementsByClassName("bar-tab");
  rosterButton.classList.add("active");
  rosterButton.classList.remove("deactive");
  teacherButton.classList.add("deactive");
  teacherButton.classList.remove("active");
  createRosterPlot();
}

function showTeacherPlot() {
  let [rosterButton, teacherButton] = document.getElementsByClassName("bar-tab");
  rosterButton.classList.add("deactive");
  rosterButton.classList.remove("active");
  teacherButton.classList.add("active");
  teacherButton.classList.remove("deactive");
  createTeacherPlot();
}


showRosterPlot();