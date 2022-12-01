jQuery(document).ready(function ($) {





function createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
  };

  $.each($(".menu-item-has-children"), function (i, d) {
    $(d).append(`
          <button class="dropdown-toggle">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </button>
      `)
  });

  var headHeight = $(".header").height();
  console.log(headHeight);
  $(".sidebar").css("top",headHeight+20,"px");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.sidebar').css('top',"0");
    }
    else {
      $('.sidebar').css('top',headHeight+20,"px");
    }
});

// ----Porgressbar
  var bars = document.querySelectorAll('.progressbar>span');
console.clear();

setInterval(function(){
  bars.forEach(function(bar){
    var getWidth = parseFloat(bar.dataset.progress);
    
    for(var i = 0; i < getWidth; i++) {
      bar.style.width = (i + 1) +  '%';
    }
  });
}, 500);

// -----------chartjs

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Present', 'Absent'],
    datasets: [{
      label: 'Days',
      data: [40, 60],
      backgroundColor: [
        '#3CB878',
        '#FFA001',
       
      ],
      borderColor: [
        '#3CB878',
        '#FFA001',
     
      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: true,

  }
});
});