//========================= Main Scripts ==================================//

$(document).ready(function () {

  /***************************************************************
  * Active Class
  ****************************************************************/
  let navMenu = document.querySelectorAll('.nav-menu');
  navMenu.forEach(button => {
    button.addEventListener('click', function () {
      navMenu.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /***************************************************************
  * Dropdown Menu
  ****************************************************************/
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var items = this.el.find('.item');
    items.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.subItems').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('#accordion'), false);

  /***************************************************************
  * Bar Chart 1
  ****************************************************************/
  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
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
      // maintainAspectRatio: false,
      responsive: true,
    }
  });

  /***************************************************************
  * Bar Chart 2
  ****************************************************************/
  const ctx2 = document.getElementById('myChart2').getContext('2d');

  const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
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
      // maintainAspectRatio: false,
      responsive: true,
    }
  });

  /***************************************************************
  * Bar Chart 3
  ****************************************************************/
  const ctx3 = document.getElementById('myChart3').getContext('2d');

  const myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
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
      // maintainAspectRatio: false,
      responsive: true,
      indexAxis: 'y',
    }
  });

  /***************************************************************
  * Bar Chart 4
  ****************************************************************/
  const ctx4 = document.getElementById('myChart4');

  const myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
        data: [3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    },
  });

  /*************************************************************** 
  * Data table
  ****************************************************************/
  $('#myTable').DataTable({
    responsive: true,
    select: true,
    colReorder: true,
    buttons: [
      {
        extend: 'collection',
        text: 'Export',
        buttons: [
          'copy',
          'excel',
          'csv',
          'pdf',
          'print'
        ]
      }
    ]
  });


  /*************************************************************** 
  *  Right Sidebar Responsive Behaviors
  ****************************************************************/
  var bg = document.getElementById('bg-overlay');

  $('.sidebar-toggle').on('click', function () {
    $('.right-sidebar').addClass('w-[240px]');
    $('#bg-overlay').addClass('bg-overlay');
  });

  $('.icon-open').on('click', function () {
    $('.right-sidebar').removeClass('w-[240px]');
    $('#bg-overlay').removeClass('bg-overlay');
  });

  $(window).on('click', function () {
    $('.right-sidebar').removeClass('w-[240px]');
    $('#bg-overlay').removeClass('bg-overlay');
  });

  $('.sidebar-toggle').on('click', function (event) {
    event.stopPropagation();
  });

  $('.right-sidebar').on('click', function (event) {
    event.stopPropagation();
  });

});

/***************************************************************
 * Toggle Dark/Light Mode
 * *************************************************************/
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
  '(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}


function toggleMode() {
  const theme = localStorage.getItem('theme');

  if (typeof theme === 'string' && theme === 'dark') {
    localStorage.removeItem('theme');
    document.documentElement.classList.remove('dark');
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }
}