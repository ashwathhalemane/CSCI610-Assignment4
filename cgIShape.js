//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//

function makeCube (subdivisions)  {
    let steps = 1 / subdivisions;
	for (let i = 0; i < subdivisions; i++) {	
		let a0 = i * steps - 0.5;
		let a1 = (i + 1) * steps - 0.5;
		for (let j = 0; j < subdivisions; j++) {
			let b0 = j * steps - 0.5;
			let b1 = (j + 1) * steps - 0.5;
            addTriangle(a0, b0, 0.5, a1, b0, 0.5, a0, b1, 0.5);
			addTriangle(a0, b1, 0.5, a1, b0, 0.5, a1, b1, 0.5);
            addTriangle(a0, 0.5, b1, a1, 0.5, b0, a0,0.5, b0);
			addTriangle(a1, 0.5, b1, a1, 0.5, b0, a0, 0.5, b1);
			addTriangle(a1, -0.5, b0, a0, -0.5, b1, a0, -0.5, b0);
			addTriangle(a1, -0.5, b0, a1, -0.5, b1, a0, -0.5, b1);
            addTriangle(a1, b0, -0.5, a0, b0, -0.5, a0, b1, -0.5);
			addTriangle(a1, b0, -0.5, a0, b1, -0.5, a1, b1, -0.5);
            addTriangle(0.5, a1, b0, 0.5, a0, b1, 0.5, a0, b0);
			addTriangle(0.5, a1, b0, 0.5, a1, b1, 0.5, a0, b1);
            addTriangle(-0.5, a0, b1, -0.5, a1, b0, -0.5, a0, b0);
			addTriangle(-0.5, a1, b1, -0.5, a1, b0, -0.5, a0, b1);
		}
	}
}

// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.

function makeCylinder (radialdivision,heightdivision){
    let y0 = -0.5, x0, x1, z0, z1, y1;
    for (let i = 0; i < radialdivision; i++) {    
        x0 = 0.5 * Math.cos(i * 2 * Math.PI / radialdivision);
        z0 = 0.5 * Math.sin(i * 2 * Math.PI / radialdivision);
        x1 = 0.5 * Math.cos((i+1) * 2 * Math.PI / radialdivision);
        z1 = 0.5 * Math.sin((i+1) * 2 * Math.PI / radialdivision);
        addTriangle(0, -0.5, 0, x0, -0.5, z0, x1, -0.5, z1);        
        addTriangle(x1, 0.5, z1, x0, 0.5, z0, 0, 0.5, 0);
        for (let j = 0; j < heightdivision; j++) {
            y0 = (j) / heightdivision - 0.5;
            y1 = (j + 1) /heightdivision - 0.5;
            addTriangle(x0, y1, z0, x1, y1, z1, x0, y0, z0);
            addTriangle(x1, y1, z1, x1, y0, z1, x0, y0, z0);
        }
    }
}

// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.

function makeCone (radialdivision, heightdivision) {
    for (let i = 0; i < radialdivision; i++) {

        let x0 = 0.5 * Math.cos(i * 2 * Math.PI / radialdivision);
        let z0 = 0.5 * Math.sin(i * 2 * Math.PI / radialdivision);
        let x1 = 0.5 * Math.cos((i + 1) * 2 * Math.PI / radialdivision);
        let z1 = 0.5 * Math.sin((i + 1) * 2 * Math.PI / radialdivision);
        addTriangle(x0, -0.5, z0, x1, -0.5, z1, 0.0, -0.5, 0.0);
        let y0 = -0.5;
        let ax0 = -x0 / heightdivision;
        let az0 = -z0 / heightdivision;
        let ax1 = -x1 / heightdivision;
        let az1 = -z1 / heightdivision;
        let y1 = 1.0 / heightdivision;
        for (let j = 0; j < heightdivision - 1; j++) {
            addTriangle(x0, y0, z0, x0+ax0, y0+y1, z0+az0, x1, y0, z1);
            addTriangle(x0+ax0, y0+y1, z0+az0, x1+ax1, y0+y1, z1+az1, x1, y0, z1);
            x0 += ax0;
            z0 += az0;
            x1 += ax1;
            z1 += az1;
            y0 += y1;
        }
        addTriangle(x0, y0, z0, 0.0, 0.5, 0.0, x1, y0, z1);
    }  
}

// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//

function makeSphere (slices, stacks) {
    // fill in your code here.
}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

