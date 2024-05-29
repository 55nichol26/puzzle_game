let number = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div0"];
    // 左/上
    let div_location = [
        ["0px", "0px"], //1
        ["200px", "0px"],//2
        ["400px", "0px"],//3
        ["0px", "200px"],//4
        ["200px", "200px"],//5
        ["400px", "200px"],//6
        ["0px", "400px"],//7
        ["200px", "400px"],//8
        ["400px", "400px"],//9
    ];

    window.onload = create_view();

    function init() {
        // 我是分隔線
        var wrap = document.getElementById('main');
        var canvas = document.createElement("canvas");
        canvas.className = "canvas-puzzle";
        canvas.width = main.width;
        canvas.height = main.height;
        wrap.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        var image = document.createElement("img");
        image.setAttribute('src', `./img/number_1.png`);
        document.getElementById('main').appendChild(image);
        // this.option = option;
        // this.arr = [];
        // this.indexArr = [];
        // this.initArr = [];
        // this.initIndex = [];
        // this.Row = 3; /* 行 */
        // this.Column = 3; /* 列 */
        // this.IWidth;
        // this.IHeight;
        // this.PerCol;
        // this.PerRow;
        // this.CWidth = canvas.width;
        // this.CHeight = canvas.height;
        // this.block = 8;
        // this.isFinish = false;
    }

    function create_view() {
        for (let i = 0; i < 8; i++) {
            let y = document.createElement('div');
            // y.innerText = (i + 1);

            y.style.left = div_location[i][0];
            y.style.top = div_location[i][1];

            y.style.width = "200px";
            y.style.height = "200px";
            // y.style.border='5px solid black';
            y.style.position = "absolute";
            y.style.transition = " .3s";
            y.style.textAlign = 'center';

            // y.style.backgroundColor = "lightpink";
            y.setAttribute('id', number[i]);
            document.getElementById('main').appendChild(y);

            let x = document.createElement('img');
            x.setAttribute('src', `./img/number_${i + 1}.png`);
            x.style.width = "100%";
            // x.style.height = "50%";
            x.style.margin = "auto";
            x.style.display = "block";
            document.getElementById(number[i]).appendChild(x);

        }
    }

    for (let i = 0; i < 8; i++) {
        // console.log(number[i]);
        document.getElementById(number[i]).onclick = function () {
            // document.getElementById(number[i]).style.backgroundColor = "lightpink";
            // console.log(number.indexOf('div0') + 1);
            let choose_div = document.getElementById(this.id);
            let move_space = number.indexOf('div0');
            // let choose_space = number.indexOf[choose_div.id];
            // console.log(choose_space.style.left);
            console.log('1:' + move_space);
            console.log('1:' + choose_div.id);
            // console.log(div_location[move_space][0]);
            let ch_left = choose_div.style.left;
            let ch_top = choose_div.style.top;
            console.log('2:' + move_space);
            console.log('2:' + choose_div.id);
            // console.log(parseInt(ch_left) - parseInt(div_location[move_space][0]));
            //可移動
            if (ch_left == div_location[move_space][0] || ch_top == div_location[move_space][1]) {
                if (Math.abs((parseInt(ch_left) - parseInt(div_location[move_space][0]))) <= 200 && Math.abs((parseInt(ch_top) - parseInt(div_location[move_space][1]))) <= 200) {
                    console.log(Math.abs((parseInt(ch_left) - parseInt(div_location[move_space][0]) <= 200)));
                    console.log((parseInt(ch_top) - parseInt(div_location[move_space][1]) <= 200))
                    // 移動位子
                    let choose_space = number.indexOf(choose_div.id);
                    console.log(choose_space);
                    console.log(this.id)
                    console.log(number.toString())


                    // console.log(document.getElementById(number[choose_space]).style)

                    document.getElementById(number[choose_space]).style.left = div_location[move_space][0];
                    document.getElementById(number[choose_space]).style.top = div_location[move_space][1];

                    let temp = number.indexOf("div0");
                    //change id
                    // console.log(number[temp]);
                    // choose_div.id = number[temp];

                    number[temp] = this.id;
                    number[choose_space] = 'div0';
                    //create_view();
                    //  number.pop();
                    //  [number[choose_space], number[move_space]] = [number[move_space], number[choose_space]];

                    console.log(number.toString())
                    // console.log(div_location.toString())
                }

            }
        }
    }