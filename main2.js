


window.onload = start;

function init() {
    let wrap = document.getElementById('main');
    let canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.padding = "0px";
    canvas.style.border = "1px solid black"
    canvas.style.margin = "0px";
    canvas.style.boxSizing = "border-box";
    canvas.style.float = "left";
    canvas.style.transition = " .5s"
    canvas.style.bottom = "1vh";
    canvas.style.position = "absolute";
    canvas.style.pointerEvents = "none";
    canvas.id = 'canvas1';


    document.getElementById('main').appendChild(canvas);
    let c = document.getElementById(`canvas1`);
    let ctx = c.getContext("2d");
    let img = new Image();
    // var img_src=`./img/p.jpg`;
    // img.src = img_src;
    let perCol = img.width / 3;
    let perRow = img.height / 3;
    let arr = [];
    let initIndex = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr.push([j, i]);
            initIndex.push(j + i * 3);
        }
    }

    //init
    let blank = 8;
    const last = 8;
    let location_random = [...arr];
    // draw_view();
    // line();

}

function start() {
    let wrap = document.getElementById('main');
    for (let i = 1; i < 5; i++) {
        let img = document.createElement("img");
        // img.style.width = "100px";
        // img.style.height = "100px";
        img.style.display = "none";
        img.src = `./img/cat_${i}.jpg`;
        wrap.appendChild(img);
    }

    let canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.padding = "0px";
    canvas.style.border = "5px solid black"
    canvas.style.marginTop = "0px";
    canvas.style.boxSizing = "border-box";
    canvas.style.float = "left";
    canvas.style.transition = " .5s"
    canvas.style.bottom = "1vh";
    canvas.style.position = "absolute";
    canvas.style.backgroundColor = "rgba(211, 211, 211, 0.532)"
    canvas.id = 'canvas1';
    document.getElementById('main').appendChild(canvas);


    let c = document.getElementById(`canvas1`);
    let ctx = c.getContext("2d");
    let img = new Image();
    // img.src = `./img/cat1.png`;
    var img_src = `./img/p.jpg`;
    img.src = img_src;
    let perCol = img.width / 3;
    let perRow = img.height / 3;

    let arr = [];
    let initIndex = [];

    let stage = 1;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr.push([j, i]);
            initIndex.push(j + i * 3);
        }
    }

    //設定各格座標位置
    let initCoordinate = [];
    for (let value of arr) {
        initCoordinate.push([value[0] * canvas.width, value[1] * canvas.height])
    }

    //init
    let blank = 8;
    const last = 8;
    let location_random = [...arr];

    //計時
    let ms = 0, s = 0, m = 0
    let btn_start = document.getElementById('btn_start');

    let showpic_text = document.getElementById('showpic_text');
    let time_GO;
    btn_start.addEventListener("click", e => {
        if (btn_start.innerText == "遊戲開始") {
            img.src = img_src;
            perCol = img.width / 3;
            perRow = img.height / 3;
            wrap.style.pointerEvents = "auto";
            review();
            draw_view();
            line(ctx);
            ans_view();
            //time run
            time_GO = setInterval(function () {
                time_go()
            }, 10)

            showpic_text.innerText = "目標圖示:"
            btn_start.innerText = "重來";
        } else if (btn_start.innerText == "重來") {
            location_random = [...new Set(arr)]
            blank = 8;
            review();
            draw_view();
            line(ctx);
            ans_view();
            clearInterval(time_GO);
            ms = 0, s = 0, m = 0;
            time_GO = setInterval(function () {
                time_go()
            }, 10)
            wrap.style.pointerEvents = "auto";
        }
        else if (btn_start.innerText == "下一關") {
            img_src = `./img/cat_${stage}.jpg`;
            img.src = img_src;
            perCol = img.width / 3;
            perRow = img.height / 3;
            // init();
            review();
            draw_view();
            line(ctx);
            ans_view();
            //time run
            time_GO = setInterval(function () {
                time_go()
            }, 10)
            btn_start.innerText = "重來";
            stage++;
            wrap.style.pointerEvents = "auto";
        }
        // btn_reset.style.visibility="visible";
        // btn_finish.style.visibility="visible";
        // btn_start.style.display="none";

    });

    //點擊移動
    canvas.addEventListener("click", e => {
        // console.log('hihi')
        // if (this.isFinish) return;
        let ex = e.clientX,
            ey = e.clientY,
            rect = canvas.getBoundingClientRect(),
            tx = ex - rect.left - document.documentElement.clientLeft,
            ty = ey - rect.top - document.documentElement.clientTop;
        ex = (tx * canvas.width) / rect.width;
        ey = (ty * canvas.height) / rect.height;

        let clickIndex = getIndex(ex, ey);
        let blanckIndex = arr.indexOf(location_random[last]);
        console.log('blanckIndex' + blanckIndex)
        console.log('arr[last]' + arr[last])
        console.log('location_random' + location_random.toString())

        let dis = distance(clickIndex, blanckIndex);
        //can move
        if (dis == 1) {
            location_random[location_random.indexOf(arr[clickIndex])] = arr[blanckIndex];
            location_random[last] = arr[clickIndex];
            draw_view();
            line(ctx);
            isFinish();
        }

    });



    function isFinish() {
        let isFinish_tag = false;
        let count = 0;
        for (let i = 0; i < initIndex.length; i++) {
            if (location_random[i] === arr[i]) {
                count++;
            }
            if (count == initIndex.length - 1) {
                isFinish_tag = true;
            }
        }
        if (isFinish_tag) {
            clearInterval(time_GO);
            btn_start.innerText = "下一關";
            // img.src = canvas.toDataURL("image/jpg");
            wrap.style.pointerEvents = "none";
        }

    }




    function ans_view() {
        let canvas2 = document.createElement("canvas");
        canvas2.style.width = "15vw";
        canvas2.style.height = "20vh";
        canvas2.style.padding = "0px";
        canvas2.style.border = "1px solid black"
        canvas2.style.margin = "0px";
        canvas2.style.boxSizing = "border-box";
        canvas2.style.float = "left";
        canvas2.style.transition = " .5s"
        canvas2.style.top = "1vh";
        canvas2.style.position = "absolute";
        canvas2.id = 'canvas2';
        document.getElementById('second_cav').appendChild(canvas2);
        let c2 = document.getElementById(`canvas2`);
        let ctx2 = c2.getContext("2d");

        img = new Image();
        img.src = img_src;

        for (let i = 0; i < arr.length; i++) {
            ctx2.drawImage(
                img,
                perCol * arr[initIndex[i]][0],
                perRow * arr[initIndex[i]][1],
                perCol,
                perRow,
                (canvas.width / 3) * arr[i][0], //位子變化
                (canvas.height / 3) * arr[i][1], //位子變化
                canvas.width / 3,
                canvas.height / 3
            );

            line(ctx2);
        }

    }

    function distance(click, blanck) {

        let x = Math.abs(parseInt(arr[click][0] - parseInt(arr[blanck][0])));
        let y = Math.abs(parseInt(arr[click][1] - parseInt(arr[blanck][1])));

        if (arr[blanck][0] == arr[click][0] || arr[blanck][1] == arr[click][1]) {
            if (x < 2 && y < 2) {
                return 1;
            }
        }

    }


    function getIndex(x, y) {
        let Y = Math.floor(y / (canvas.height / 3));
        let X = Math.floor(x / (canvas.width / 3));
        let ind;

        for (const val of arr) {
            if (val[0] == X && val[1] == Y) {
                ind = arr.indexOf(val);
            }

        }
  
        return ind;
    }

    function review() {


        //random : 先預設3-5  for 迴圈 次數
        //出發點 2,2
        //if location_random[[initIndex[i]][0]] = arr[[initIndex[i]][0]]
        //if location_random[[initIndex[i]][1]] = arr[[initIndex[i]][1]]
        //相鄰 可以change location

        // //遞增難度
        // let level = Math.floor(Math.random() * 3) + 3;
        // let temp_arr = [];
        // let can_change = [];
        // let x = arr[blank][0];
        // let y = arr[blank][1];

        //遞增難度
        let level = Math.floor(Math.random() * 3) + 3;

        //等級 random  打亂畫面
        let blank_his = [];
        let blank_bk = blank;
        let k = 0;
        // blank_his.push(blank);

        //我在這!!
        for (let i = 0; i < 2; i++) {
            let temp_arr = [];
            let x = arr[blank][0];
            let y = arr[blank][1];
            //尋找可以調換的位子
            for (let val of arr) {

                if (((val[0] == x) || (val[1] == y)) && Math.abs((parseInt(val[1]) - y)) < 2 && Math.abs((parseInt(val[0]) - x)) < 2) {
                    temp_arr.push(val);
                }
                //所屬格子刪除
                if ((val[0] == x) && (val[1] == y)) {
                    temp_arr.splice(temp_arr.indexOf(val), 1);
                }
            }
            // console.log(temp_arr.toString())
            let ran = Math.floor(Math.random() * temp_arr.length);

            //arr.indexOf(temp_arr[ran]) 要去的位子
            blank_his.push(blank);
            blank_bk = blank;
            blank = arr.indexOf(temp_arr[ran]);

            if (blank == blank_his[blank_his.length - 2]) {
                if (temp_arr.length > 1) {
                    temp_arr.splice(temp_arr.indexOf(temp_arr[ran]), 1);
                    ran = Math.floor(Math.random() * temp_arr.length);
                    blank = arr.indexOf(temp_arr[ran]);
                    // console.log(temp_arr.toString())
                }
            }
            location_random[last] = arr[blank];
            location_random[blank] = arr[blank_bk];

        }

        let result = arr.filter((e) => {
            return location_random.indexOf(e) === -1
        })
        //重複
        var repeat = location_random.filter(function (element, index, arr) {
            return arr.indexOf(element) !== index;
        });

        let repeat_val;
        repeat.forEach(element => {
            // console.log('aaa' + );
            repeat_val = arr.indexOf(element);
        });
        //整理
        location_random = [...new Set(location_random)]
        result.forEach(element => {
            location_random.splice(repeat_val, 0, element)
        });
    }
    //繪製畫面
    function draw_view() {
        //arr.length-1 只畫八格 arr.length
        for (let i = 0; i < arr.length; i++) {

            // 畫八格
            ctx.drawImage(
                img,
                perCol * arr[initIndex[i]][0],
                perRow * arr[initIndex[i]][1],
                perCol,
                perRow,
                (canvas.width / 3) * location_random[i][0], //位子變化
                (canvas.height / 3) * location_random[i][1], //位子變化
                canvas.width / 3,
                canvas.height / 3
            );

            if (i == arr.length - 1) {
                ctx.fillStyle = "white";
                ctx.fillRect(
                    (canvas.width / 3) * location_random[initIndex[i]][0],
                    (canvas.height / 3) * location_random[initIndex[i]][1],
                    canvas.width / 3,
                    canvas.height / 3
                );
            }

            // console.log(`test${(canvas.width / 3) * location_random[i][0]}`)

        }
    }


    //計時部分
    function time_go() {

        ms += 1
        if (ms == 100) {
            ms = 0
            s += 1
        }
        if (s == 60) {
            s = 0
            m += 1
        }
        if (m == 60) {
            m = 0
        }
        let timetext = ""
        if (m <= 9) {
            timetext = "0" + m
        } else {
            timetext += ":" + m
        }
        if (s <= 9) {
            timetext += ":0" + s
        } else {
            timetext += ":" + s
        }
        if (ms <= 9) {
            timetext += ":0" + ms
        } else {
            timetext += ":" + ms
        }
        let times = document.getElementById("times")
        times.innerHTML = timetext
    }


    function line(ctx) {
        //畫線
        ctx.beginPath();
        ctx.moveTo((canvas.width / 3) * 2, 0);
        ctx.lineTo(200, 200);
        ctx.moveTo((canvas.width / 3) * 1, 0);
        ctx.lineTo(100, 200);
        ctx.moveTo(0, (canvas.height / 3) * 1);
        ctx.lineTo(600, (canvas.height / 3) * 1);
        ctx.moveTo(0, (canvas.height / 3) * 2);
        ctx.lineTo(600, (canvas.height / 3) * 2);
        ctx.stroke();
    }


}





