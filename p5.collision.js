p5.prototype.pointPoint = function(x1,y1,x2,y2) {
	if (x1 == x2 && y1 == y2) {
		return true;
	}
	return false;
}

p5.prototype.pointCircle = function(px,py,cx,cy,r) {
	float distx = px - cx;
	float disty = py - cy;
	float distance = sqrt((distx*distx) + (disty*disty));
	
	if (distance <= r) {
		return true;
	}
	return false;
}

p5.prototype.circleCircle = function(c1x,c1y,c1r,c2x,c2y,c2r) {
	float distx = c1x - c2x;
	float disty = c1y - c2y;
	float distance = sqrt((distx*distx) + (disty*disty));
	
	if (distance <= c1r+c2r) {
		return true;
	}
	return false;
}

p5.prototype.pointRect = function(px,py,rx,ry,rw,rh) {
	if (px >= rx && px <= rx + rw && py >= ry && py <= ry + rh) {
		return true;
	}
	return false;
}

p5.prototype.rectRect = function(r1x,r1y,r1w,r1h,r2x,r2y,r2w,r2h) {
	if (r1x + r1w >= r2x && r1x <= r2x + r2w && r1y + r1h >= r2y && r1y <= r2y + r2h) {
		return true;
	}
	return false;
}

p5.prototype.circleRect = function(cx,cy,r,rx,ry,rw,rh) {
	float testx = cx;
	float testy = cy;
	
	if (cx < rx) testx = rx;
	else if (cx > rx+rw) testx = rx+rw;
	
	if (cy < ry) testy = ry;
	else if (cy > ry+rh) testy = ry+rh;
	
	float distx = cx-testx;
	float disty = cy-testy;
	float distance = sqrt((distx*distx) + (disty*disty));
	
	if (distance <= r) {
		return true;
	}
	return false;
}
