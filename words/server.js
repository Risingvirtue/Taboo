var fs = require('fs');

function generateWords() {
	fs.readFile('./easyList.txt', function(err, data) {
		if (err) {
			console.log(err);
		} else {
			dataArr = data.toString().split('\r\n');
			var connectedCount = 0;
			var mainWord = "";
			var words = [];
			var currDict = {};
			
			for (var i = 0; i < dataArr.length; i++) {
				
				var word = dataArr[i].toString().trim();
				
				if (!word) {
					continue;
				}
				
				
				if (mainWord === '') {
					
					mainWord = word;
					currDict[word] = [];
				} else {
					currDict[mainWord].push(word);
					connectedCount++;
					if (connectedCount == 4) {
						connectedCount = 0;
						mainWord = "";
						words.push(currDict);
						currDict = {};
					}
				}
				
			}
			saveFile('hard.txt', JSON.stringify(words));
			
		}
	})
}
generateWords();


function saveFile(name, body) {
	fs.writeFile(name, body, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('File Saved');
		}
	})
}
