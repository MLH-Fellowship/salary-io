// import React, { Component} from 'react';
// import CanvasJSReact from '/Users/gerlad/code/salary-io/node_modules/chart.js/dist/Chart';



// var dataPoints=[]
// class AjaxChart extends Component {
    
//     render() {
//         const options = {
//             theme: "light2",
//             title: {
//                 text: "Salaries"
//             },
//             axisY: {
//                 title: 'People'
//             },
//             data: [{
//                 type: "line",
//                 dataPoints: dataPoints
//             }]
//         }
//         return (
//             <div>
//                 <CanvasJSChart options = {options} 
//                     onRef={ref => this.chart = ref}
//                 />
//             </div>
//         );
//     }

//     componentDidMount() {
//         var chart = this.chart;
//         fetch('https://raw.githubusercontent.com/MLH-Fellowship/salary-io/main/salaryData.json')
//         .then(function(response) {
//             return response.json();            
//         })
//         .then(function(data) {
//             for (var i = 0; i < data.length; i++) {
//                 dataPoints.push({
//                     x: new Date(data[i].x),
//                     y: data[i].y
//                 });
//             }
//             chart.render()
//         });
//     }
// }

// export default AjaxChart