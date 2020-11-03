function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	let unit = [ [1,3], [1,1], [3,1],[3,3]];
	background(51,122,92);
	// console.log(rotatess([[-1,-1],[1,-1],[1,1],[-1,1]], 90));
	// drawCurve(extention(extention(unit)));	
	curve = makeCurve(unit);
}
let curve;
let i = 0;
function draw() {
	drawCurve(curve);
}

function makeCurve(unit){
		let curve = extention(unit);
	// for(let i = 0; i<10; i++){
		let curve1 = extention(curve);
		let curve2 = extention(curve1);
		let curve3 = extention(curve2);
		let curve4 = extention(curve3);
		let curve5 = extention(curve4);
	// }
	//console.log(curve1);
	return curve3;

}

function drawCurve(arr){
	let size = 10;
	let xmargin = 10;
	let ymargin = 10;
	strokeWeight(10);
	
	stroke(10*i/20,21*i*0.1,10+i);
	if(i === arr.length-1){
		noLoop();
		i = arr.length-2;
	}
	// for(let i = 0; i<arr.length-1; i++){
		line(arr[i][0]*size + xmargin, arr[i][1]*size + ymargin, arr[i+1][0]*size + xmargin, arr[i+1][1]*size+ ymargin);
	i++;
	// }
}

function extention(arr){
	let extendedArr = [];
	let arr0 = rotatess(arr, 90);

	let move = Math.pow(2, Math.log(arr.length)/Math.log(4) + 1);
		// move = move + 2;
	for(let i = arr0.length-1; i>=0; i--){
		extendedArr.push([arr0[i][0] ,arr0[i][1]+move]);
	}

	for(let p of arr){
		extendedArr.push([p[0], p[1]]);
	}
	for(let p of arr){
		extendedArr.push([p[0] + move, p[1]]);
	}
	let arr3 = rotatess(arr, -90);
	for(let p of arr3){
	//	extendedArr.push([p[0]+move, p[1]+move]);
	}
	for(let i = arr3.length-1; i>=0; i--){
		extendedArr.push([arr3[i][0]+move ,arr3[i][1]+move]);
	}

	return extendedArr;
}

function rotatess(arr , angle){
	let sumx = 0,  sumy = 0; // for finding origin to rotate about
	for(let p of arr){
		sumx = sumx + p[0];
		sumy = sumy + p[1];
	}

	let originx = sumx/arr.length;
	let originy = sumy/arr.length;

	let rotatedPoints = [];
	for(let p of arr){
		let rx = p[0] - originx;
		let ry = p[1] - originy;
		// console.log(rx, ry);
		let rrx = rx*cos(angle) - ry*sin(angle);
		let rry = rx*sin(angle) + ry*cos(angle);
		// console.log(rrx, rry);

		rotatedPoints.push([rrx + originx, rry + originy]);
	}

	return rotatedPoints;
}
