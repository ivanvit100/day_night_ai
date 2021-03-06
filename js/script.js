document.addEventListener("DOMContentLoaded", function(event){ 
    setTimeout(function() {
        preloader.seen = false;
    }, 500);
});
function guide(){
    introJs().setOptions({
        steps: [{
            intro: lang_intro(0)
        }, {
            element: document.querySelector('#l1'),
            intro: lang_intro(1)
        }, {
            element: document.querySelector("#selected-image"),
            intro: lang_intro(2)
        }, {
            element: document.querySelector('#predict-button'),
            intro: lang_intro(3)
        }, {
            element: document.querySelector('#theory'),
            intro: lang_intro(4)
        }
    ], 
    'scrollToElement': true, 
    'scrollTo': 'tooltip',
    'disableInteraction': true
    }).start();
}
function close(){
	dark.seen = false; 
	document.querySelector("#picture").removeChild(document.querySelector('.d-img'));
}
function zoom(){
	if(!document.querySelector(".d-img")){
		dark.seen = true;
		let parent = document.getElementById('picture');
		let elem = parent.querySelector('#selected-image');
		let clone = elem.cloneNode(true);
		clone.classList.add('d-img');
		parent.appendChild(clone);
    }
}

function t1(){
	document.getElementById("predict-button").classList.add("animate__pulse");
	let to1 = setTimeout(() => document.getElementById("predict-button").classList.remove("animate__pulse"), 2000);
}
function t2(){
	document.getElementById("theory").classList.add("animate__headShake");
	let to2 = setTimeout(() => document.getElementById("theory").classList.remove("animate__headShake"), 2000);
}
let timer1 = setInterval(t1, 5000);
let timer2 = setInterval(t2, 8000);

document.getElementById("image-selector").addEventListener('change', (event) => {
    let reader = new FileReader();
	var imgtag = document.getElementById("selected-image");
    reader.onload = function(readerEvt){
    	er = 13;
    	imgtag.src = event.target.result;
    	let dataURL = reader.result;
		name = readerEvt.target.fileName;
		let l1 = document.getElementById("l1").innerHTML = name;
    	name = name.toLowerCase();
    	formats = [".png", ".jpg", ".jpeg", ".jfif", ".pjpeg", ".pjp", ".webp"];
		for(var i = 0; i < 13; i++){
    		if(name.endsWith(formats[i])){
    			er = 100;
    		}
			else{
    			er = er - 1;
    		}
    	}
    	document.getElementById("selected-image").setAttribute("src", dataURL);
    }
    let file = document.getElementById("image-selector").files[0];
    reader.readAsDataURL(file);
    reader.fileName = file.name;
    state = 0;
    final.message = lang_state(state);
});

document.getElementById("predict-button").onclick = async function(){

    if(document.querySelector("#l1").innerHTML != rus[9] && document.querySelector("#l1").innerHTML != en[9]){
    	state = 1;
        final.message = lang_state(state);
        let image = document.getElementById('selected-image');
        let tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224,224]).toFloat().expandDims();
        const resize_image = tf.reshape(tensor, [1, 224, 224, 3],'resize');
    
        const label = ['????????', '????????'];
        const sLabel = Array.from(new Set(label));
    
        try{
            const model = await tf.loadModel("/my-model-1.json");
            const t = model.predict(resize_image);
            pred = t.argMax(1).dataSync();
            labelsPred = Array.from(pred).map(e => sLabel[e]);
            if(er != 0 && labelsPred[0] == "????????"){
                state = 3;
                final.message = lang_state(state);
            }
            else if(er != 0 && labelsPred[0] == "????????"){
                state = 4;
                final.message = lang_state(state);
            }
            else{
                state = 2;
                final.message = lang_state(state);
            }
        }
        catch(e){
            state = 5;
            final.message = lang_state(state);
            console.log(e);
        }
    }
    else{
    	state = 6;
    	final.message = lang_state(state);
    }
};

document.getElementById("theory").onclick = function(){
    document.location.href = "http://cloud.ivanvit.ru/index.php/s/BSdWJf34XBSieBW";
}