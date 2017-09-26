
var cs = [];
var branchcs=[];
//var circleMesh = new THREE.Group();
function MainBranch1(){
    var circle = {radius: 5, pos: new THREE.Vector3(0, 0, 0)};
    cs.push(circle);
    var circleNum = 30;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = cs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        nc.pos = new THREE.Vector3(Math.random()-0.5,2.5,Math.random()-0.5).add(cs[i-1].pos);
        cs.push(nc);
    }
}
function MainBranch2(){
    var circle = {radius: 4, pos: new THREE.Vector3(0, 0, 0)};
    cs.push(circle);
    var circleNum = 25;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = cs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        nc.pos = new THREE.Vector3(Math.random()-0.5,2.5,Math.random()-0.5).add(cs[i-1].pos);
        cs.push(nc);
    }
}
function MainBranch3(){
    var circle = {radius: 3, pos: new THREE.Vector3(0, 0, 0)};
    cs.push(circle);
    var circleNum = 20;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = cs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        nc.pos = new THREE.Vector3(Math.random()-0.5,2.5,Math.random()-0.5).add(cs[i-1].pos);
        cs.push(nc);
    }
}
function MainBranch4(){
    var circle = {radius: 5, pos: new THREE.Vector3(0, 0, 0)};
    cs.push(circle);
    var circleNum = 40;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = cs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        nc.pos = new THREE.Vector3(Math.random()-0.5,2.5,Math.random()-0.5).add(cs[i-1].pos);
        cs.push(nc);
    }
}
var direct;
function Branch1(){
    branchcs=[];
    direct=direction();
    var layer = Math.floor(Math.random()*(1-treecs.length)+treecs.length);
    if(layer == 1)
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*((cs.length-5)-cs.length/2+1)+cs.length/2+1)].pos};
    else
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*(4-1)+1)].pos};
    branchcs.push(circle);
    var circleNum = 20;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = branchcs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        if(direct==1)
            nc.pos = new THREE.Vector3(1,Math.random()-1,Math.random()-1).add(branchcs[i-1].pos);
        if(direct==2)
            nc.pos = new THREE.Vector3(Math.random()-1,1,Math.random()-1).add(branchcs[i-1].pos);
        if(direct==3)
            nc.pos = new THREE.Vector3(Math.random()-1,Math.random()-1,1).add(branchcs[i-1].pos);
        branchcs.push(nc);
    }
}
function Branch2(){
    branchcs=[];
    direct=direction();
    var layer = Math.floor(Math.random()*(1-treecs.length)+treecs.length);
    if(layer == 1)
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*((cs.length-5)-cs.length/2+1)+cs.length/2+1)].pos};
    else
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*(4-1)+1)].pos};
    branchcs.push(circle);
    var circleNum = 15;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = branchcs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        if(direct==1)
            nc.pos = new THREE.Vector3(1,Math.random()+1,Math.random()-1).add(branchcs[i-1].pos);
        if(direct==2)
            nc.pos = new THREE.Vector3(Math.random()-1,1,Math.random()-1).add(branchcs[i-1].pos);
        if(direct==3)
            nc.pos = new THREE.Vector3(Math.random()-1,Math.random()+1,1).add(branchcs[i-1].pos);
        branchcs.push(nc);
    }
}
function Branch3(){
    branchcs=[];
    direct=direction();
    var layer = Math.floor(Math.random()*(1-treecs.length)+treecs.length);
    if(layer == 1)
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*((cs.length-5)-cs.length/2+1)+cs.length/2+1)].pos};
    else
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*(4-1)+1)].pos};
    branchcs.push(circle);
    var circleNum = 18;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = branchcs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        if(direct==1)
            nc.pos = new THREE.Vector3(1,Math.random()+0.5,Math.random()-0.6).add(branchcs[i-1].pos);
        if(direct==2)
            nc.pos = new THREE.Vector3(Math.random()-0.5,1,Math.random()-0.6).add(branchcs[i-1].pos);
        if(direct==3)
            nc.pos = new THREE.Vector3(Math.random()-0.5,Math.random()+0.6,1).add(branchcs[i-1].pos);
        branchcs.push(nc);
    }
}
function Branch4(){
    branchcs=[];
    direct=direction();
    var layer = Math.floor(Math.random()*(1-treecs.length)+treecs.length);
    if(layer == 1)
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*((cs.length-5)-cs.length/2+1)+cs.length/2+1)].pos};
    else
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*(5-1)+1)].pos};
    branchcs.push(circle);
    var circleNum = 10;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = branchcs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        if(direct==1)
            nc.pos = new THREE.Vector3(1,Math.random()+1,Math.random()+0.6).add(branchcs[i-1].pos);
        if(direct==2)
            nc.pos = new THREE.Vector3(Math.random()-1,1,Math.random()-0.6).add(branchcs[i-1].pos);
        if(direct==3)
            nc.pos = new THREE.Vector3(Math.random()-1,Math.random()+0.6,1).add(branchcs[i-1].pos);
        branchcs.push(nc);
    }
}
function Branch5(){
    branchcs=[];
    direct=direction();
    var layer = Math.floor(Math.random()*(1-treecs.length)+treecs.length);
    if(layer == 1)
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*((cs.length-5)-cs.length/2+1)+cs.length/2+1)].pos};
    else
        var circle = {radius: 0.9,pos:treecs[layer][Math.floor(Math.random()*(4-1)+1)].pos};
    branchcs.push(circle);
    var circleNum = 15;
    for(var i = 1;i < circleNum;i++){
        var nc = {};
        nc.radius = branchcs[i-1].radius - circle.radius/(circleNum-1);
        nc.radius = nc.radius || 0.00001;
        if(direct==1)
            nc.pos = new THREE.Vector3(-1,Math.random()+0.7,Math.random()).add(branchcs[i-1].pos);
        if(direct==2)
            nc.pos = new THREE.Vector3(Math.random()+0.7,-1,Math.random()).add(branchcs[i-1].pos);
        if(direct==3)
            nc.pos = new THREE.Vector3(Math.random()+0.7,Math.random(),-1).add(branchcs[i-1].pos);
        branchcs.push(nc);
    }
}
function drawBranch1() {
    var seg = 30;
    var geo = new THREE.Geometry();
    for(var i = 0, l = branchcs.length; i < l; i ++){
        var circle = branchcs[i];
        for(var s=0;s<seg;s++){//for each point in the circle
            var rd = circle.radius;
            var pos = new THREE.Vector3(0,0,0);
            if(direct==1) {
                pos.x = 0;
                pos.y = rd * Math.sin(2 * Math.PI / seg * s);
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==2) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = 0;
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==3) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = rd * Math.cos(2 * Math.PI / seg * s);
                pos.z = 0;
            }
            geo.vertices.push(pos.add(circle.pos));
        }
    }

    for(i=0;i<l-1;i++){
        for(s=0;s<seg;s++){
            var v1 = i*seg+s;
            var v2 = i*seg+(s+1)%seg;
            var v3 = (i+1)*seg+(s+1)%seg;
            var v4 = (i+1)*seg+s;

            geo.faces.push(new THREE.Face3(v1,v2,v3));
            geo.faceVertexUvs[0].push([new THREE.Vector2(s/seg,0),new THREE.Vector2((s+1)/seg,0),new THREE.Vector2((s+1)/seg,1)]);
            geo.faces.push(new THREE.Face3(v3,v4,v1));
            geo.faceVertexUvs[0].push([new THREE.Vector2((s+1)/seg,1),new THREE.Vector2((s)/seg,1),new THREE.Vector2((s)/seg,0)]);
        }
    }//add faces and uv
    geo.computeFaceNormals();
    branch = new THREE.Mesh(geo,new THREE.MeshLambertMaterial({
        // wireframe:true,
        color:0x804000,
        side:THREE.DoubleSide,
        map:THREE.ImageUtils.loadTexture("../textures/tree/branch01.png")
    }));
}
function drawBranch2() {
    var seg = 30;
    var geo = new THREE.Geometry();
    for(var i = 0, l = branchcs.length; i < l; i ++){
        var circle = branchcs[i];
        for(var s=0;s<seg;s++){//for each point in the circle
            var rd = circle.radius;
            var pos = new THREE.Vector3(0,0,0);
            if(direct==1) {
                pos.x = 0;
                pos.y = rd * Math.sin(2 * Math.PI / seg * s);
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==2) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = 0;
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==3) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = rd * Math.cos(2 * Math.PI / seg * s);
                pos.z = 0;
            }
            geo.vertices.push(pos.add(circle.pos));
        }
    }

    for(i=0;i<l-1;i++){
        for(s=0;s<seg;s++){
            var v1 = i*seg+s;
            var v2 = i*seg+(s+1)%seg;
            var v3 = (i+1)*seg+(s+1)%seg;
            var v4 = (i+1)*seg+s;

            geo.faces.push(new THREE.Face3(v1,v2,v3));
            geo.faceVertexUvs[0].push([new THREE.Vector2(s/seg,0),new THREE.Vector2((s+1)/seg,0),new THREE.Vector2((s+1)/seg,1)]);
            geo.faces.push(new THREE.Face3(v3,v4,v1));
            geo.faceVertexUvs[0].push([new THREE.Vector2((s+1)/seg,1),new THREE.Vector2((s)/seg,1),new THREE.Vector2((s)/seg,0)]);
        }
    }//add faces and uv
    geo.computeFaceNormals();
    branch = new THREE.Mesh(geo,new THREE.MeshLambertMaterial({
        // wireframe:true,
        color:0x804000,
        side:THREE.DoubleSide,
        map:THREE.ImageUtils.loadTexture("../textures/tree/branch01.png")
    }));
}
function drawBranch3() {
    var seg = 30;
    var geo = new THREE.Geometry();
    for(var i = 0, l = branchcs.length; i < l; i ++){
        var circle = branchcs[i];
        for(var s=0;s<seg;s++){//for each point in the circle
            var rd = circle.radius;
            var pos = new THREE.Vector3(0,0,0);
            if(direct==1) {
                pos.x = 0;
                pos.y = rd * Math.sin(2 * Math.PI / seg * s);
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==2) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = 0;
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==3) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = rd * Math.cos(2 * Math.PI / seg * s);
                pos.z = 0;
            }
            geo.vertices.push(pos.add(circle.pos));
        }
    }

    for(i=0;i<l-1;i++){
        for(s=0;s<seg;s++){
            var v1 = i*seg+s;
            var v2 = i*seg+(s+1)%seg;
            var v3 = (i+1)*seg+(s+1)%seg;
            var v4 = (i+1)*seg+s;

            geo.faces.push(new THREE.Face3(v1,v2,v3));
            geo.faceVertexUvs[0].push([new THREE.Vector2(s/seg,0),new THREE.Vector2((s+1)/seg,0),new THREE.Vector2((s+1)/seg,1)]);
            geo.faces.push(new THREE.Face3(v3,v4,v1));
            geo.faceVertexUvs[0].push([new THREE.Vector2((s+1)/seg,1),new THREE.Vector2((s)/seg,1),new THREE.Vector2((s)/seg,0)]);
        }
    }//add faces and uv
    geo.computeFaceNormals();
    branch = new THREE.Mesh(geo,new THREE.MeshLambertMaterial({
        // wireframe:true,
        color:0x804000,
        side:THREE.DoubleSide,
        map:THREE.ImageUtils.loadTexture("../textures/tree/branch01.png")
    }));
}
function drawBranch4() {
    var seg = 30;
    var geo = new THREE.Geometry();
    for(var i = 0, l = branchcs.length; i < l; i ++){
        var circle = branchcs[i];
        for(var s=0;s<seg;s++){//for each point in the circle
            var rd = circle.radius;
            var pos = new THREE.Vector3(0,0,0);
            if(direct==1) {
                pos.x = 0;
                pos.y = rd * Math.sin(2 * Math.PI / seg * s);
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==2) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = 0;
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==3) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = rd * Math.cos(2 * Math.PI / seg * s);
                pos.z = 0;
            }
            geo.vertices.push(pos.add(circle.pos));
        }
    }

    for(i=0;i<l-1;i++){
        for(s=0;s<seg;s++){
            var v1 = i*seg+s;
            var v2 = i*seg+(s+1)%seg;
            var v3 = (i+1)*seg+(s+1)%seg;
            var v4 = (i+1)*seg+s;

            geo.faces.push(new THREE.Face3(v1,v2,v3));
            geo.faceVertexUvs[0].push([new THREE.Vector2(s/seg,0),new THREE.Vector2((s+1)/seg,0),new THREE.Vector2((s+1)/seg,1)]);
            geo.faces.push(new THREE.Face3(v3,v4,v1));
            geo.faceVertexUvs[0].push([new THREE.Vector2((s+1)/seg,1),new THREE.Vector2((s)/seg,1),new THREE.Vector2((s)/seg,0)]);
        }
    }//add faces and uv
    geo.computeFaceNormals();
    branch = new THREE.Mesh(geo,new THREE.MeshLambertMaterial({
        // wireframe:true,
        color:0x804000,
        side:THREE.DoubleSide,
        map:THREE.ImageUtils.loadTexture("../textures/tree/branch01.png")
    }));
}
function drawBranch5() {
    var seg = 30;
    var geo = new THREE.Geometry();
    for(var i = 0, l = branchcs.length; i < l; i ++){
        var circle = branchcs[i];
        for(var s=0;s<seg;s++){//for each point in the circle
            var rd = circle.radius;
            var pos = new THREE.Vector3(0,0,0);
            if(direct==1) {
                pos.x = 0;
                pos.y = rd * Math.sin(2 * Math.PI / seg * s);
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==2) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = 0;
                pos.z = rd * Math.cos(2 * Math.PI / seg * s);
            }
            if(direct==3) {
                pos.x = rd * Math.sin(2 * Math.PI / seg * s);
                pos.y = rd * Math.cos(2 * Math.PI / seg * s);
                pos.z = 0;
            }
            geo.vertices.push(pos.add(circle.pos));
        }
    }

    for(i=0;i<l-1;i++){
        for(s=0;s<seg;s++){
            var v1 = i*seg+s;
            var v2 = i*seg+(s+1)%seg;
            var v3 = (i+1)*seg+(s+1)%seg;
            var v4 = (i+1)*seg+s;

            geo.faces.push(new THREE.Face3(v1,v2,v3));
            geo.faceVertexUvs[0].push([new THREE.Vector2(s/seg,0),new THREE.Vector2((s+1)/seg,0),new THREE.Vector2((s+1)/seg,1)]);
            geo.faces.push(new THREE.Face3(v3,v4,v1));
            geo.faceVertexUvs[0].push([new THREE.Vector2((s+1)/seg,1),new THREE.Vector2((s)/seg,1),new THREE.Vector2((s)/seg,0)]);
        }
    }//add faces and uv
    geo.computeFaceNormals();
    branch = new THREE.Mesh(geo,new THREE.MeshLambertMaterial({
        // wireframe:true,
        color:0x804000,
        side:THREE.DoubleSide,
        map:THREE.ImageUtils.loadTexture("../textures/tree/branch01.png")
    }));
}
function direction(){
    return(Math.floor(Math.random()*(3-1)+1));
}