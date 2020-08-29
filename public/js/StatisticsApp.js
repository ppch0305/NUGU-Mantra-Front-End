class StatisticsApp {

    constructor(){

        this.canvas = document.querySelector("#stat_canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = $(window).width();
        this.height = this.canvas.height;
        this.canvas.width = this.width;

        this.init();
    }

    init(){
        this.addEvent();
        this.render();
    }

    render(){

        this.ctx.strokeStyle = '#000';
        this.ctx.strokeRect(0,0,this.width,this.height);

        let arr = [20,30,40,60,70,20,30];
        let dotList = [];

        document.querySelectorAll("#bottom > .bottom_icon")[1].classList.add("bottom_active");

        let today = new Date();
        for(let i = 0; i < 7; i++){
            // 0 => 6
            // 1 => 5
            // 2 => 4
            // 3 => 3
            // 4 => 2
            // 5 => 1
            // 6 => 0
            // n => Math.abs(n-6);
            let dayCalcNum = Math.abs(i-6);
            let day = new Date( today - 24 * 60 * 60 * 1000 * dayCalcNum );
            let date = day.getDate();
            let horizonSize = 15;
            let fontSize = 15;
            let horizonMargin = ( this.width - ( horizonSize * 7 ) ) / 8;
            let bottomLinePositionCtrl = 35;
            let textX = ( horizonMargin * (i + 1) ) + ( horizonSize * i );
            let textY = this.height - fontSize;
            let score = arr[i];
            let circleRadius = 8;
            let graphHeight = this.height - bottomLinePositionCtrl;
            let circleY = graphHeight - ( graphHeight * score * 0.01 ) + circleRadius / 2;
            dotList.push( [ textX , circleY ] );

            if(i === 6){ // 오늘날짜 하이라이팅
                this.ctx.fillStyle = "#5685ff";
                this.ctx.beginPath();
                this.ctx.moveTo(textX + fontSize / 2,textY);
                this.ctx.arc(textX + fontSize / 2 + 1, textY - 1, 13, -Math.PI / 2, 3 / 2 * Math.PI);
                this.ctx.closePath();
                this.ctx.fill();
            }
            
            this.ctx.fillStyle = i === 6 ? "#fff" : '#333';
            this.ctx.textBaseline = "middle";
            this.ctx.textAlign = "left";
            this.ctx.font = `bold ${fontSize}px Arial`;
            this.ctx.fillText(date,textX,textY);

            this.ctx.beginPath();
            this.ctx.strokeStyle = "#dfdfdf";
            this.ctx.lineWidth = 1;
            this.ctx.moveTo( 0 , this.height - bottomLinePositionCtrl );
            this.ctx.lineTo( this.width ,this.height - bottomLinePositionCtrl );
            this.ctx.stroke();
            this.ctx.closePath();

            this.ctx.fillStyle = '#5685ff';
            this.ctx.beginPath();
            this.ctx.moveTo( textX , circleY );
            this.ctx.arc( textX , circleY , circleRadius , -Math.PI / 2 , 3 / 2 * Math.PI );
            this.ctx.fill();
            this.ctx.closePath();

            if( i !== 6){
                this.ctx.fillStyle = '#fff';
                this.ctx.beginPath();
                this.ctx.moveTo( textX , circleY );
                this.ctx.arc( textX , circleY , circleRadius - 3 , -Math.PI / 2 , 3 / 2 * Math.PI );
                this.ctx.fill();
                this.ctx.closePath();
            }

        }

        for(let i = 0; i < dotList.length; i++){

            

        }

    }

    addEvent(){
        
    }

    getScore(){

    }

}

window.addEventListener("load",(e)=>{
    let statisticsApp = new StatisticsApp();
});

