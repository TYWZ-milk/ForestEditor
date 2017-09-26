var canvas,width,height,renderer,scene,camera,tracontrols,Orbitcontrols,rotcontrols,scacontrols;
var tree=[];
var forest=[];
var forests=[];
var branches=[];
var sequence=-1;
var lbbs;
var forestsize=4;
var treecs = new Array([6]);
function init() {
    lbbs = new LBBs();
    canvas = document.getElementById("canvas");
    width = window.innerWidth;
    height = window.innerHeight;
    renderer = new THREE.WebGLRenderer({
        antialias:true,
        canvas:canvas
    });
    renderer.setSize(width,height);
    renderer.setClearColor(0xaaaaaa,1.0);

    scene = new THREE.Scene();
    scene.frustumCulled = false;
    scene.matrixAutoUpdate = false;

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0,1,1).normalize();
    scene.add(light);
    light = new THREE.AmbientLight(0xffffff,1);
    scene.add(light);


    camera = new THREE.PerspectiveCamera(45,width/height,1,10000);
    camera.position.y = 20;
    camera.position.z = 20;

    tracontrols = new THREE.TransformControls(camera,canvas);
    tracontrols.addEventListener( 'change', render );
    tracontrols.setMode("translate","rotate");
    scene.add(tracontrols);

    rotcontrols = new THREE.TransformControls(camera,canvas);
    rotcontrols.addEventListener( 'change', render );
    rotcontrols.setMode("rotate");
    scene.add(rotcontrols);

    scacontrols = new THREE.TransformControls(camera,canvas);
    scacontrols.addEventListener( 'change', render );
    scacontrols.setMode("scale");
    scene.add(scacontrols);
    Orbitcontrols = new THREE.OrbitControls( camera, renderer.domElement );

    initScene();

    initGUI();

    canvas.addEventListener("click",onclick);

    animate();
}
function initScene() {
    scene.add(loadGround());
    scene.add(loadSky());
}

var parameter = {
    x: 0, y: 30, z: 0,
    build:build,
    undo:undo,
    redo:redo,
    showWireframe:false,
    Trunk1:false,
    Trunk2:false,
    Trunk3:false,
    Trunk4:false,
    Branch1:false,
    Branch2:false,
    Branch3:false,
    Branch4:false,
    Branch5:false
};
var treeParameter = {
    scale:false,
    copy:copy,
    cut:cut
};
function undo(){
    if(forests.length>1){
        scene.remove(forests[sequence]);
        scene.add(forests[sequence-1]);
        sequence--;
    }
}
function redo(){
    if(sequence<forests.length-1){
        scene.remove(forests[sequence]);
        scene.add(forests[sequence+1]);
        sequence++;
    }
}
function cut(){
    forest.remove(selected);
    forests.push(forest);
    sequence=forests.length-1;
    removeByValue(branches, cutTree);
    scene.remove(selected);
    forestsize--;
}
function removeByValue(arr, val) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}
function copy(){
    forestsize++;
    var copy=selected.clone();
    copy.position.x=0;
    copy.position.z=0;
    forest.add(copy);
    forests.push(forest);
    branches.push(copy.children[0]);
    sequence=forests.length-1;
    scene.add(forest);
}
function build(){
    forestsize=4;
    scene.remove(forest);
    forest= new THREE.Group();
    branches=[];
    for(var i=0;i<forestsize/2;i++){
        for(var j=0;j<forestsize/2;j++){
            buildTree();
            tree.position.x=i*50;
            tree.position.z=j*50;
            forest.add(tree);
        }
    }
    scene.add(forest);
    forests.push(forest);
    sequence=forests.length-1;
}
function buildTree() {
    treecs = new Array([6]);
    tree = new THREE.Group();
    cs = [];
    if(parameter.Trunk1)
        MainBranch1();
    else if(parameter.Trunk2)
        MainBranch2();
    else if(parameter.Trunk3)
        MainBranch3();
    else
        MainBranch4();
    treecs.push(cs);
    drawBranch();
    tree.add(branch);
    branches.push(branch);
    addBranch();
    addLeaf();

}
var leafMat =null;
var leafMesh = null;
function addLeaf(){
    leafMat = new THREE.MeshLambertMaterial({
        map:THREE.ImageUtils.loadTexture("../textures/tree/leaf01.png"),
        color:0x253F08,
        side:THREE.DoubleSide,
        transparent:true,
        depthTest:false
    });
    for(var i = 1;i<treecs.length;i++) {
        for(var j = Math.floor(treecs[i].length/2+Math.floor(Math.random()*4 + 1));j<treecs[i].length;j+=Math.floor(Math.random()*3 + 1)) {
            for (var k = Math.floor(Math.random() * 6 + 1); k < 6; k++) {
                var phi = Math.random() * 60 + 20;
                var theta = Math.random() * 360;
                var selfRotate = Math.random() * 360;
                var leaf_size = 20;
                var geo = new THREE.PlaneGeometry(leaf_size, leaf_size);
                leafMesh = new THREE.Mesh(geo, leafMat);
                leafMesh.geometry.translate(0, leaf_size / 2.0, 0);
                leafMesh.rotateY(theta / 180 * Math.PI);
                leafMesh.rotateZ(phi / 180 * Math.PI);
                leafMesh.rotateY(selfRotate / 180 * Math.PI);
                leafMesh.position.x = treecs[i][j].pos.x;
                leafMesh.position.z = treecs[i][j].pos.z;
                leafMesh.position.y = treecs[i][j].pos.y;
                tree.add(leafMesh);
            }
        }
    }
}
function addBranch(){
    if(parameter.Branch1) {
        Branch1();
        drawBranch1();
        tree.add(branch);
        treecs.push(branchcs);
    }
    if(parameter.Branch2){
        Branch2();
        drawBranch2();
       tree.add(branch);
        treecs.push(branchcs);
    }
    if(parameter.Branch3){
        Branch3();
        drawBranch3();
        tree.add(branch);
        treecs.push(branchcs);
    }
    if(parameter.Branch4){
        Branch4();
        drawBranch4();
        tree.add(branch);
        treecs.push(branchcs);
    }
    if(parameter.Branch5){
        Branch5();
        drawBranch5();
        tree.add(branch);
        treecs.push(branchcs);
    }
}
function drawBranch() {
    var seg = 30;
    var geo = new THREE.Geometry();
    for(var i = 0, l = cs.length; i < l; i ++){
        var circle = cs[i];
        for(var s=0;s<seg;s++){//for each point in the circle
            var rd = circle.radius;
            var pos = new THREE.Vector3(0,0,0);
            pos.x = rd*Math.sin(2*Math.PI/seg*s);
            pos.y = 0;
            pos.z = rd*Math.cos(2*Math.PI/seg*s);
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
var gui,gui2;
function initGUI() {
    gui = new dat.gui.GUI();
    gui2 = new dat.gui.GUI();
    gui.remember(parameter);
    gui2.remember(treeParameter);

    gui.add(parameter,"showWireframe").name("show wireframe").onFinishChange(function (e) {
        if(forest)
            for(var i =0;i<forestsize;i++)
                for(var j=0;j<forest.children[i].children.length;j++)
                    forest.children[i].children[j].material.wireframe = e;
    });
    var folder1 = gui.addFolder('Trunk');
    var cubeX = folder1.add( parameter, 'Trunk1').onFinishChange(function (e) {
        parameter.Trunk1=e;
    });
    var cubeY = folder1.add( parameter, 'Trunk2').onFinishChange(function(e){
        parameter.Trunk2=e;
    });
    var cubeZ = folder1.add( parameter, 'Trunk3').onFinishChange(function(e){
        parameter.Trunk3=e;
    });
    var cube4 = folder1.add( parameter, 'Trunk4').onFinishChange(function(e){
        parameter.Trunk4=e;
    });
    folder1.open();
    var folder2 = gui.addFolder('Branch');
    var Branch1 = folder2.add( parameter, 'Branch1').onFinishChange(function (e) {
        parameter.Branch1=e;
    });
    var Branch2 = folder2.add( parameter, 'Branch2').onFinishChange(function(e){
        parameter.Branch2=e;
    });
    var Branch3 = folder2.add( parameter, 'Branch3').onFinishChange(function(e){
        parameter.Branch3=e;
    });
    var Branch4 = folder2.add( parameter, 'Branch4').onFinishChange(function(e){
        parameter.Branch4=e;
    });
    var Branch5 = folder2.add( parameter, 'Branch5').onFinishChange(function(e){
        parameter.Branch5=e;
    });
    folder2.open();
    gui.add(parameter,"build");
    gui.add(parameter,"undo");
    gui.add(parameter,"redo");

    gui2.add( treeParameter, 'scale').onFinishChange(function (e) {
        parameter.scale=e;
    });
    gui2.add(treeParameter,"copy");
    gui2.add(treeParameter,"cut");
}


var mouse = new THREE.Vector2();
var selected = null;
var cutTree = null;
function onclick(event) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );

    //屏幕和场景转换工具根据照相机，把这个向量从屏幕转化为场景中的向量
    vector.unproject(camera);

    //vector.sub( camera.position ).normalize()变换过后的向量vector减去相机的位置向量后标准化
    //新建一条从相机的位置到vector向量的一道光线
    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    var intersects = raycaster.intersectObjects( branches);
    if(intersects.length) {
        gui2.domElement.hidden = false;
        for (var i = forestsize-1; i >= 0; i--)
            if (intersects[0].object == branches[i])
                selected = forest.children[i];
        cutTree = intersects[0].object;
        if (!parameter.scale) {
            tracontrols.attach(selected);
            rotcontrols.attach(selected);
        }
        else{
            scacontrols.attach(selected);
        }

    }else{
        gui2.domElement.hidden = true;
        tracontrols.detach(selected);
        rotcontrols.detach(selected);
        scacontrols.detach(selected);
    }
}

function animate() {
    tracontrols.update();
    rotcontrols.update();
    scacontrols.update();
    Orbitcontrols.update();
    render();
    lbbs.update();
    requestAnimationFrame(animate);
}

function render() {

    renderer.clear();
    renderer.render(scene,camera);
}