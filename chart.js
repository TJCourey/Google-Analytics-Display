const lineLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
const barLabels = [
   'Total Sales',
   'Subscription Sales',
   'Returning Users'
  ];

  const lineData = {
    labels: lineLabels,
    datasets: [
    {
      label: 'Previous Years Users',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [7, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'This Years Users',
      backgroundColor: 'rgb(50, 168, 82)',
      borderColor: 'rgb(50, 168, 82)',
      data: [5, 7, 22, 18, 29, 36, 55],
    }
]
  };
  const barData = {
    labels: barLabels,
    datasets: [
    {
      label: 'Previous Years Users',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10500, 7000, 1250],
    },
    {
      label: 'This Years Users',
      backgroundColor: 'rgb(50, 168, 82)',
      borderColor: 'rgb(50, 168, 82)',
      data: [13000, 9500,  1100],
    }
]
  };

  const lineConfig = {
    type: 'line',
    data: lineData,
    options: {}
  };
  const barConfig = {
    type: 'bar',
    data: barData,
    options: {}
  };
  const myLineChart = new Chart(
    document.getElementById('myLineChart'),
    lineConfig
  );
  const mybarChart = new Chart(
    document.getElementById('myBarChart'),
    barConfig
  );