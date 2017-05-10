/*************************************************************
 * This script is developed by Arturs Sosins aka ar2rsawseen, http://webcodingeasy.com
 * Feel free to distribute and modify code, but keep reference to its creator
 *
 * Isoworld provides a way to create an illusion of isometric view for a website,
 * by transforming provided HTML elements. It can create ground and
 * infinite amount of isometric cubes.
 *
 * For more information, examples and online documentation visit:
 * http://webcodingeasy.com/JS-classes/CSS3-Isoworld
**************************************************************/
var isoworld = function(config){
	var conf = {
		ground: null,
		size: 500,
		maxSize: 1000,
		x: 400,
		y: 50,
		offsetTop: 50,
		animationSteps: 10,
		animationInterval: 10,
		toggleOnClick: true,
		onToggle: function(expanding){},
		onExpandStart: null,
		onExpandEnd: null,
		onShrinkStart: null,
		onShrinkEnd: null
	};
	var obj = [];
	var vp;
	var a;
	this.construct = function(){
		a = document.getElementsByTagName("a");
		vp = viewport();
		vp.halfWidth = Math.round(vp.width/2);
		//copying configuration
		for(var opt in config){
			conf[opt] = config[opt];
		}
		if(conf.ground)
		{
			var ob = {
				id: conf.ground,
				form:{
					rotate: -45,
					skewX: 15,
					skewY: 15,
					width: conf.size,
					height: conf.size,
					maxTop: conf.offsetTop,
					maxWidth: conf.maxSize,
					maxHeight: 0,
					left: conf.x,
					maxLeft: Math.round((vp.width-conf.maxSize)/2),
					top: conf.y,
					zIndex: 1,
					offsetX: 0,
					offsetY: 0
				},
				cur:{
					rotate: -45,
					skewX: 15,
					skewY: 15,
					width: conf.size,
					left: conf.x,
					top: conf.y,
					step: 1
				},
				transformed: true,
				onToggle: conf.onToggle,
				onExpandStart: conf.onExpandStart,
				onExpandEnd: conf.onExpandEnd,
				onShrinkStart: conf.onShrinkStart,
				onShrinkEnd: conf.onShrinkEnd,
				steps: conf.animationSteps,
				interval: conf.animationInterval
			};
			var ground = (typeof conf.ground == "string") ? document.getElementById(conf.ground) : conf.ground;
			ground.style.width = conf.size + "px";
			ground.style.height = conf.size + "px";
			ground.style.overflow = "hidden";
			ground.style.position = "absolute";
			if(isIE())
			{
				ground.style.top = conf.y+(20*conf.size/200) + "px";
				ground.style.left = conf.x-(120*conf.size/200) + "px";
			}
			else
			{
				ground.style.left = conf.x + "px";
				ground.style.top = conf.y + "px";
			}
			ground.style.cursor = "crosshair";
			ground.style.cursor = "crosshair";
			ground.style.width = conf.maxSize + "px";
			if(ground.clientHeight < ground.scrollHeight)
			{
				ob.form.maxHeight = ground.scrollHeight;
			}
			else
			{
				ob.form.maxHeight = ground.clientHeight;
			}
			ob.form.maxHeight = ground.scrollHeight;
			ground.style.width = conf.size + "px";
			ground.style.zIndex = ob.form.zIndex;
			transform(ground, ob.form.rotate, ob.form.skewX, ob.form.skewY);
			var l = obj.length;
			obj.push(ob);
			addClass(ground, "object_" + l);
			if(conf.toggleOnClick)
			{
				add_event(ground, "click", handler);
			}
			if(typeof conf.ground == "string")
			{
				for(var i = 0, len = a.length; i < len; i++)
				{
					if(a[i].href && a[i].href.indexOf("#") >= 0)
					{
						var url = a[i].href.split("#");
						var ma = window.location.toString().split("#");
						ma = ma[0];
						if(url[0] == ma && url[url.length-1] == conf.ground)
						{
							addClass(a[i], "object_" + l);
							add_event(a[i], "click", handler);
						}
					}
				}
			}
		}
	};

	this.createCube = function(config){
		var c = {
			top: null,
			left: null,
			right: null,
			shadow: null,
			x: 400,
			y: 100,
			size: 200,
			offsetTop: 50,
			maxSize: 1000,
			animationSteps: 10,
			animationInterval: 10,
			toggleOnClick: true,
			onToggle: function(expanding){},
			onExpandStart: null,
			onExpandEnd: null,
			onShrinkStart: null,
			onShrinkEnd: null
		};
		//copying configuration
		for(var opt in config){
			c[opt]= config[opt];
		}
		var div = document.createElement("div");
		div.style.position = "absolute";
		div.style.top = c.y + "px";
		div.style.left = c.x + "px";
		div.style.width = "1px";
		div.style.height = "1px";
		div.style.overflow = "visible";
		document.body.appendChild(div);
		var createPane = function(id, top, left, rotate, skewX, skewY, zIndex){
			var pane = (typeof id == "string") ? document.getElementById(id) : id;
			var ob = {
				id: id,
				form:{
					rotate: rotate,
					skewX: skewX,
					skewY: skewY,
					width: c.size,
					height: c.size,
					maxWidth: c.maxSize,
					maxTop: c.offsetTop-c.y,
					maxHeight: 800,
					left: left,
					maxLeft: Math.round((vp.width-c.maxSize)/2)-c.x,
					top: top,
					zIndex: zIndex,
					offsetX: c.x,
					offsetY: c.y
				},
				cur:{
					rotate: rotate,
					skewX: skewX,
					skewY: skewY,
					width: c.size,
					left: left,
					top: top,
					step: 1
				},
				transformed: true,
				onToggle: c.onToggle,
				onExpandStart: c.onExpandStart,
				onExpandEnd: c.onExpandEnd,
				onShrinkStart: c.onShrinkStart,
				onShrinkEnd: c.onShrinkEnd,
				steps: c.animationSteps,
				interval: c.animationInterval
			};
			var pane = (typeof id == "string") ? document.getElementById(id) : id;
			pane.parentNode.removeChild(pane);
			div.appendChild(pane);
			pane.style.width = c.size + "px";
			pane.style.height = c.size + "px";
			pane.style.position = "absolute";
			pane.style.overflow = "scroll";
			pane.style.top = top + "px";
			pane.style.left = left + "px";
			pane.style.cursor = "crosshair";
			pane.style.cursor = "crosshair";
			pane.style.zIndex = 2;
			pane.style.width = c.maxSize + "px";
			if(pane.clientHeight < pane.scrollHeight)
			{
				ob.form.maxHeight = pane.scrollHeight;
			}
			else
			{
				ob.form.maxHeight = pane.clientHeight;
			}
			pane.style.width = c.size + "px";
			transform(pane, rotate, skewX, skewY);

			var l = obj.length;
			obj.push(ob);
			addClass(pane, "object_" + l);
			if(c.toggleOnClick)
			{
				add_event(pane, "click", handler);
			}
			if(typeof id == "string")
			{
				for(var i = 0, len = a.length; i < len; i++)
				{
					if(a[i].href && a[i].href.indexOf("#") >= 0)
					{
						var url = a[i].href.split("#");
						var ma = window.location.toString().split("#");
						ma = ma[0];
						if(url[0] == ma && url[url.length-1] == id)
						{
							addClass(a[i], "object_" + l);
							add_event(a[i], "click", handler);
						}
					}
				}
			}
		};

		var sp =c.size*Math.tan(deg2rad(15));
		var new_width = c.size+sp;

		var sps = sp*Math.sin(deg2rad(15));
		var spc = sp*Math.cos(deg2rad(15));

		var hh = sp*Math.sqrt(2);

		if(c.top)
		{
			if(isIE())
			{
				createPane(c.top, 51*c.size/200,hh-(90*c.size/200), -45, 15, 15, 4);
			}
			else
			{
				createPane(c.top, 0,hh, -45, 15, 15, 4);
			}
		}
		if(c.left)
		{
			createPane(c.left, 157/200*c.size,-sps, 15, 15, 15, 5);
		}
		if(c.right)
		{
			createPane(c.right, c.size*157/200, c.size*167/200, -15, -15, -15, 3);
		}
		if(c.shadow)
		{
			if(isIE())
			{
				createPane(c.shadow, (c.size*(314)/200)+(51*c.size/200), (c.size*(-105/200))-(90*c.size/200), -45, 15, 15, 2);
			}
			else
			{
				createPane(c.shadow, c.size*(314)/200, c.size*(-105/200), -45, 15, 15, 2);
			}
		}
	};

	this.animate = function(id){
		var pane = (typeof id == "string") ? document.getElementById(id) : id;
		var index = hasClass(pane);
		var elem = obj[index];
		animate(elem);
	};
	//apply crossbrowser CSS transform to element
	var transform = function(el, rotate, skewX, skewY){
		el.style.MsTransform = "rotate(" + rotate + "deg) skew( " + skewX + "deg, " + skewY + "deg)";
		el.style.MozTransform = "rotate(" + rotate + "deg) skew( " + skewX + "deg, " + skewY + "deg)";
		el.style.WebkitTransform = "rotate(" + rotate + "deg) skew( " + skewX + "deg, " + skewY + "deg)";
		el.style.OTransform = "rotate(" + rotate + "deg) skew( " + skewX + "deg, " + skewY + "deg)";
		el.style.transform = "rotate(" + rotate + "deg) skew( " + skewX + "deg, " + skewY + "deg)";
		var current = matrix(Math.cos(deg2rad(rotate)), -Math.sin(deg2rad(rotate)), Math.sin(deg2rad(rotate)), Math.cos(deg2rad(rotate)), 0, 0);
		var m = matrix(1, Math.tan(deg2rad(skewX)), Math.tan(deg2rad(skewY)), 1, 0, 0);
		current = multiply(m, current);
		el.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11='" + current.m11 + "', M12='" + current.m12 + "', M21='" + current.m21 + "', M22='" + current.m22 + "', Dx='" + current.dx + "', Dy='" + current.dy + "', sizingMethod='auto expand',);";
	};

	var animate = function(elem){
		var stop = true;
		if(elem.cur.step == 1)
		{
			if(elem.onToggle)
			{
				elem.onToggle(elem.transformed);
			}
			if(elem.transformed)
			{
				if(elem.onExpandStart)
				{
					elem.onExpandStart();
				}
			}
			else
			{
				if(elem.onShrinkStart)
				{
					elem.onShrinkStart();
				}
			}
		}
		if(elem.transformed)
		{
			if(elem.cur.rotate != 0)
			{
				stop = false;
				elem.cur.rotate = (((elem.steps-elem.cur.step)/elem.steps)*elem.form.rotate);
			}
			if(elem.cur.skewX != 0)
			{
				stop = false;
				elem.cur.skewX = (((elem.steps-elem.cur.step)/elem.steps)*elem.form.skewX);
			}
			if(elem.cur.skewY != 0)
			{
				stop = false;
				elem.cur.skewY = (((elem.steps-elem.cur.step)/elem.steps)*elem.form.skewY);
			}
			if(elem.cur.width != elem.form.maxWidth)
			{
				elem.cur.width = (((elem.cur.step)/elem.steps)*(elem.form.maxWidth-elem.form.width)+elem.form.width);
			}
			if(elem.cur.left != elem.form.maxLeft)
			{
				elem.cur.left = (((elem.cur.step)/elem.steps)*(elem.form.maxLeft-elem.form.left)+elem.form.left);
			}
			if(elem.cur.top != elem.form.maxTop)
			{
				elem.cur.top = (((elem.cur.step)/elem.steps)*(elem.form.maxTop-elem.form.top)+elem.form.top);
			}
			if(elem.form.maxHeight > 0 && elem.cur.height != elem.form.maxHeight)
			{
				elem.cur.height = (((elem.cur.step)/elem.steps)*(elem.form.maxHeight-elem.form.height)+elem.form.height);
			}
			if(!stop)
			{
				elem.cur.step++;
				var pane = (typeof elem.id == "string") ? document.getElementById(elem.id) : elem.id;
				pane.style.width = 720 + "px";
				pane.style.left = elem.cur.left - -140 + "px" ;
				pane.style.top = elem.cur.top + "px";
				pane.style.height = 650 + "px";
				pane.style.overflow = "scroll";
				transform(pane, elem.cur.rotate, elem.cur.skewX, elem.cur.skewY);
				setTimeout(function(){
					animate(elem);
				}, elem.interval);
			}
			else
			{
				elem.cur.step = 1;
				elem.transformed = false;
				if(elem.onExpandEnd)
				{
					elem.onExpandEnd();
				}
			}
		}
		else
		{
			if(elem.cur.rotate != elem.form.rotate)
			{
				stop = false;
				elem.cur.rotate = (((elem.cur.step)/elem.steps)*elem.form.rotate);
			}
			if(elem.cur.skewX != elem.form.skewX)
			{
				stop = false;
				elem.cur.skewX = (((elem.cur.step)/elem.steps)*elem.form.skewX);
			}
			if(elem.cur.skewY != elem.form.skewY)
			{
				stop = false;
				elem.cur.skewY = (((elem.cur.step)/elem.steps)*elem.form.skewY);
			}
			if(elem.cur.width != elem.form.width)
			{
				elem.cur.width = (((elem.steps-elem.cur.step)/elem.steps)*(elem.form.maxWidth-elem.form.width)+elem.form.width);
			}
			if(elem.cur.left != elem.form.left)
			{
				elem.cur.left = (((elem.steps-elem.cur.step)/elem.steps)*(elem.form.maxLeft-elem.form.left)+elem.form.left);
			}
			if(elem.cur.top != elem.form.top)
			{
				elem.cur.top = (((elem.steps-elem.cur.step)/elem.steps)*(elem.form.maxTop-elem.form.top)+elem.form.top);
			}
			if(elem.form.maxHeight > 0 && elem.cur.height != elem.form.height)
			{
				elem.cur.height = (((elem.steps-elem.cur.step)/elem.steps)*(elem.form.maxHeight-elem.form.height)+elem.form.height);
			}
			if(!stop)
			{
				elem.cur.step++;
				var pane = (typeof elem.id == "string") ? document.getElementById(elem.id) : elem.id;
				pane.style.width = elem.cur.width + "px";
				pane.style.left = elem.cur.left + "px";
				pane.style.top = elem.cur.top + "px";
				pane.style.height = elem.cur.height + "px";
				transform(pane, elem.cur.rotate, elem.cur.skewX, elem.cur.skewY);
				setTimeout(function(){
					animate(elem);
				}, elem.interval);
			}
			else
			{
				var pane = (typeof elem.id == "string") ? document.getElementById(elem.id) : elem.id;
				pane.style.zIndex = elem.form.zIndex;
				elem.cur.step = 1;
				elem.transformed = true;
				if(elem.onShrinkEnd)
				{
					elem.onShrinkEnd();
				}
			}
		}
	};

	$('.design-image').click(function(elem){
		$('#graphic-tag').show();
		$('#top1').animate({
			width: '150px',
			height: '150px',
			position: 'absolute',
			overflow: 'scroll',
			top: '0px',
			left: '56.8406px',
			cursor: 'crosshair',
			zIndex: 4,
		},400)
		.css("transform", 'rotate(-45deg) skew(15deg, 15deg)')


	})

	var handler = function(e){
		var target = get_event_target(e);
		var index = hasClass(target);
        if(index !== false && obj[index]){
            var elem = obj[index];
            var pane = (typeof elem.id == "string") ? document.getElementById(elem.id) : elem.id;
            pane.style.cursor = "crosshair";
            pane.style.zIndex = "10";
            animate(elem);
        }
	};

	//check browser for IE
	var isIE = function(){
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent))
		{
			return true;
		}
		else
		{
			return false;
		}
	};

	var viewport = function(){
		var viewport = new Object();
		viewport.width = 0;
		viewport.height = 0;
		// the more standards compliant browsers (mozilla/netscape/opera/IE7)
		//use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined')
		{
			viewport.width = window.innerWidth,
			viewport.height = window.innerHeight
		}
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0)
		{
			viewport.width = document.documentElement.clientWidth,
			viewport.height = document.documentElement.clientHeight
		}
		else
		{
			viewport.width = document.getElementsByTagName('body')[0].clientWidth,
			viewport.height = document.getElementsByTagName('body')[0].clientHeight
		}
		return viewport;
	};

	//add event
	var add_event = function(element, type, listener){
		if(element.addEventListener)
		{
			element.addEventListener(type, listener, false);
		}
		else
		{
			element.attachEvent('on' +  type, listener);
		}
	};

	var get_event_target = function(event){
		if(!event)
		{
			return window.event.srcElement;
		}
		else if(event.target)
		{
			return event.target;
		}
		else
		{
			return event.srcElement;
		}
	};

	var deg2rad = function(deg){
		return (deg*Math.PI)/180;
	};

	//format number
	var roundNumber = function(num, dec) {
		var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
		return result;
	};

	//create new matrix
	var matrix = function(m11, m12, m21, m22, dx, dy){
		var m = new Object();
		m.m11 = m11;
		m.m12 = m12;
		m.m21 = m21;
		m.m22 = m22;
		m.dx = dx;
		m.dy = dy;
		return m;
	};

	//multiply matrices
	var multiply = function(newMatrix, currentMatrix){
		//modify transformation matrix
		var m = new Object();
		m.m11 = roundNumber(newMatrix.m11*currentMatrix.m11 + newMatrix.m21*currentMatrix.m12, 10);
		m.m12 = roundNumber(newMatrix.m12*currentMatrix.m11 + newMatrix.m22*currentMatrix.m12, 10);
		m.m21 = roundNumber(newMatrix.m11*currentMatrix.m21 + newMatrix.m21*currentMatrix.m22, 10);
		m.m22 = roundNumber(newMatrix.m12*currentMatrix.m21 + newMatrix.m22*currentMatrix.m22, 10);
		m.dx = roundNumber(currentMatrix.dx + newMatrix.dx, 10);
		m.dy = roundNumber(currentMatrix.dy + newMatrix.dy, 10);
		//return new transformation matrix
		return m;
	};

	var hasClass = function(ele) {
		var reg = new RegExp('\s*object_(.*)\s*');
		var res = reg.exec(ele.className);
        if(res && res[1])
            return res[1];
        return false;
	};

	var addClass = function(ele,cls) {
		ele.className += " "+cls;
	};

	//prevent default event behavior
	var prevent_default = function(event){
		if(window.event)
		{
			window.event.returnValue = false;
		}
		else if(event.preventDefault)
		{
			event.preventDefault();
		}
		else
		{
			event.returnValue = false;
		}
	};

	this.construct();

}
