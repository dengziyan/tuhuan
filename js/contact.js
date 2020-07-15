var points = [{
		id: 1,
		lng: 118.096525,
		lat: 24.462602,
		title: "厦门中山公园",
		content: ["地址：北京市新建宫门路19号", "电话：010-62881144"]
	}, {
		id: 2,
		lng: 118.095231,
		lat: 24.461615,
		title: "厦门实验小学",
		content: ["地址：北京市后花园风景区", "电话：010-69768087"]
	}, {
		id: 3,
		lng: 118.092644,
		lat: 24.468522,
		title: "厦门光明大厦",
		content: ["地址：北京市东城区景山前街4号", "电话：010-65131892"]
	}, {
		id: 4,
		lng: 118.106586,
		lat: 24.467207,
		title: "厦门将军祠",
		content: ["地址：北京市东城区天坛东里甲1号", "电话：010-67013036"]
	}, {
		id: 5,
		lng: 118.108526,
		lat: 24.474245,
		title: "厦门古龙商城",
		content: ["地址：北京市西城区文津街1号(故宫北)", "电话：010-64040610"]
	}];

	new BaiduMap({
		id: "container1",
		level: 16,
		titleClass: "title",
		contentClass: "content",
		centerPoint: { // 地图中心点经纬度
			lng: 118.106586,
			lat: 24.467207
		},
		index: -1,
		points: points,
		showLabel: true
	});

	new BaiduMap({
		id: "container2",
		level: 16,
		type: ["地图", "卫星"],
		width: 320,
		height: 70,
		titleClass: "title",
		contentClass: "content",
		showMarkPanorama: true,
		mapStyle: "light",
		icon: {
			url: "../images/marker.png",
			width: 25,
			height: 96
		},
		centerPoint: { // 地图中心点经纬度
			lng: 118.106586,
			lat: 24.467207
		},
		index: 0,
		points: points
	});

	var map = new BaiduMap({
		id: "container3",
		level: 16, //  选填--地图级别--(默认15)
		zoom: true, // 选填--是否启用鼠标滚轮缩放功能--(默认false)
		type: ["地图", "卫星", "三维"], // 选填--显示地图类型--(默认不显示)
		width: 320, // 选填--信息窗口width--(默认自动调整)
		height: 70, // 选填--信息窗口height--(默认自动调整)
		titleClass: "title",
		contentClass: "content",
		showPanorama: true, // 是否显示全景控件(默认false)
		showMarkPanorama: true, // 是否显示标注点全景图(默认false)
		showLabel: false, // 是否显示文本标注(默认false)
		mapStyle: "normal", // 默认normal,可选dark,light
		icon: { // 选填--自定义icon图标
			url: "../images/marker2.png",
			width: 34,
			height: 94
		},
		centerPoint: { // 中心点经纬度
			lng: 118.106586,
			lat: 24.467207
		},
		index: 3, // 开启对应的信息窗口，默认-1不开启
		animate: true, // 是否开启坠落动画，默认false
		points: points, // 标注点--id(唯一标识)
		callback: function(id) {
			$(".list").find("li").eq(id - 1).addClass("active").siblings().removeClass("active");
		}
	});

	var data = map.getPosition();
	var $li = $(".list").find("li");

	$li.each(function(i) {
		$(this).data("id", i + 1);
	}).on("click", function() {
		map.openInfoWindow($(this).data("id"));
		$(this).addClass("active").siblings().removeClass("active");
	}).eq(data.id - 1).addClass("active");