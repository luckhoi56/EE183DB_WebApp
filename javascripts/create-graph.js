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
		count.push(data[i][1]);
		X.push(data[i][2]);
		Y.push(data[i][3]);
		Z.push(data[i][4]);
	}

	console.log(X);
	console.log(Y);

var chart1 = c3.generate({
    bindto: '#chart1',
    data: {
    	x:'count',
      columns: [
        X,
        count
        
      ],
      axes: {
        count: 'count'
      }
    },
    axis: {

      y: {
        label: { // ADD
          text: 'X',
          position: 'upper-middle'
        }
      }
      



    }
});


var chart2 = c3.generate({
    bindto: '#chart2',
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
    axis: {

      y: {
        label: { // ADD
          text: 'Y',
          position: 'upper-middle'
        }
      }
      



    }
});


	var chart2 = c3.generate({
    bindto: '#chart3',
    data: {
    	x:'count',
      columns: [
        Z,
        count
        
      ],
      axes: {
        count: 'count'
      }
    },
    axis: {

      y: {
        label: { // ADD
          text: 'Z ',
          position: 'upper-middle'
        }
      }
      



    }
});

}

parseData(createGraph);