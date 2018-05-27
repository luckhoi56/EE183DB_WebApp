/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/record0.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var count =['count']
	var X = ['X'];
	var Y = ['Y'];
	var Z = ['Z'];
	for (var i = 1; i < data.length; i++) {
		count.push(data[i][2]);
		X.push(data[i][2]);
		Y.push(data[i][3]);
		Z.push(data[i][4]);
	}

	console.log(X);
	console.log(Y);
	console.log (document.doctype);
var chart3 = c3.generate({
   
    bindto: '#chart1',
    data: {
    	x:'count',
      columns: [
        Y,
        count
        
      ],
      axes: {
        count: 'count'
        
      }
    },

    grid: {
    	x: {
    		show: true
    	},
    	y: {
    		show: true
    	}
    },
    axis: {

      x: {
      //	max: 100,
     // 	min: 0,
        label: { // ADD
          text: 'X ',
          position: 'upper-middle'
        }
      },

      y: {
      //	max: 190,
      //	min: 0,
        label: { // ADD
          text: 'Y ',
          position: 'upper-middle'
        }
      }


     






      

    }



});

}

parseData(createGraph);