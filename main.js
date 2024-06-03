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

// window.onload = create_view();
window.onload = init();




function init() {
    let wrap = document.getElementById('main');


    // for (let i = 1; i < 9; i++) {
    //     let img = document.createElement("img");
    //     img.style.width = "100px";
    //     img.style.height = "100px";
    //     img.style.display = "none";
    //     img.src = `./img/number_${i}.png`;
    //     wrap.appendChild(img);
    // }


    function getPosition(element) {
        var x = 0;
        var y = 0;
        // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
        while (element) {
            x += element.offsetLeft - element.scrollLeft + element.clientLeft;
            y += element.offsetTop - element.scrollLeft + element.clientTop;
            element = element.offsetParent;
        }

        return { x: x, y: y };
    }

    for (let i = 0; i < 9; i++) {
        let canvas = document.createElement("canvas");
        canvas.style.width = "200px";
        canvas.style.height = "200px";
        canvas.style.padding = "0px";
        canvas.style.border = "1px solid black"
        canvas.style.margin = "0px";
        canvas.style.boxSizing = "border-box";
        canvas.style.float = "left";
        canvas.id = number[i];

        // canvas.style.border = "1px solid grey";
        document.getElementById('main').appendChild(canvas);
    }

    let temp = 0;
    for (let i = 1; i < 3; i++) {

        let c = document.getElementById(`div${i}`);
        // console.log(c);
        let ctx = c.getContext("2d");
        let img = new Image();
        img.src = `./img/cat1.png`;
        let perCol = img.width / 3;
        let perRow = img.heightF / 3;
        // img.style.width = window.getComputedStyle(main).getPropertyValue('width');
        // img.style.width = "200px";
        // img.style.height="200px"
        // ctx.drawImage(img, 10, 10);
        // ctx.drawImage(img, 0, 0, 240, 200, 0, 0, 600, 600);
        let arr=[]
        for (let i = 0; i < this.Row; i++) {
            for (let j = 0; j < this.Column; j++) {
              this.arr.push([j, i]);
            //   this.initIndex.push(j + i * this.Row);
            }
          }
          console.log(arr)
        //ctx.drawImage(img, 0, 0, 600, 600);
        // ctx.drawImage(img, 0, 0, 600, 600, temp, 0, 600, 600);
        // ctx.drawImage(img, 0, 0, 400, 300);

    }

    // var imgData = ctx.getImageData(0, 0, 120, 100);
    // var data = imgData.data;
    // for (var i = 0; i < data.length; i += 4) {
    //     var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    //     data[i] = avg; // red
    //     data[i + 1] = avg; // green
    //     data[i + 2] = avg; // blue
    // }
    // ctx.putImageData(imgData, 0, 0);

    // let arr = [];
    // let x = 1;
    // for (let i = 0; i < 3; i++) {
    //     for (let j = 0; i < 0; j++) {
    //         let data = cxt.getImageData(j * 100, i * 100, 400, 100);
    //         let c = document.getElementById("div2");

    //         let newcxt = c.getContext("2d");
    //         // let img = new Image();
    //         // img.src = `./img/p.jpg`;
    //         arr.push(console.log(img.toDataURL(x + ".png")))
    //         newcxt.putImageData(data, 0, 0);
    //         newcxt.drawImage(img, 100, 100);
    //         x++;
    //         console.log(arr);
    //     }
    // }



    // for (let i = 1; i < 9; i++) {




    // var img = document.createElement("img");
    // //  let img = document.getElementById('pic');
    // img.src = "./img/number_1.png";
    // canvas.appendChild(img);

    // let image = new Image();
    // image.src = "./img/number_1.png";
    // ctx.drawImage(image, 0, 0)

    // ctx.fillStyle = "red";
    // ctx.fillRect(10, 10, 50, 50);

    // console.log(div_location[i][0]);
    // ctx.drawImage(img, div_location[i][0], div_location[i][1], 50, 50);
    // }


    // canvas.id = "puzzle";
    // canvas.width = main.width;
    // canvas.height = main.height;


    // ctx.fillStyle = "red";
    // ctx.fillRect(10, 10, 50, 50);
    // const ctx = canvas.getContext("2d");

    // canvas.width =100%


    // document.getElementById('main').appendChild(image);
    // image.style.width = "100%"

    // ctx.getImageData(0, 0, 200, 200);
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
        // y.style.left = 0;
        // y.style.top = 0;

        // y.style.width = window.getComputedStyle(main).getPropertyValue('width');
        // y.style.height = window.getComputedStyle(main).getPropertyValue('height');
        y.style.width = "200px";
        y.style.height = "200px";
        // y.style.border='5px solid black';
        y.style.position = "absolute";
        y.style.transition = " .3s";
        y.style.textAlign = 'center';
        // y.style.backgroundImage = `url("./img/cat1.png")`;
        // y.style.overflow = "visible";
        // y.style.backgroundRepeat="no-repeat";
        // y.style.backgroundColor = "lightpink";
        y.setAttribute('id', number[i]);
        document.getElementById('main').appendChild(y);

        let x = document.createElement('img');
        x.setAttribute('src', `./img/number_${i + 1}.png`);
        // x.setAttribute('src', `./img/number_${i + 1}.png`);
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