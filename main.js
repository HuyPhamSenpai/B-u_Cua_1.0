var btn = document.querySelector('.btn');
var Play_img = document.querySelector('.play__image')
var btn_bet = document.querySelectorAll('.image div');
var plus = document.querySelectorAll('.plus');
console.log(plus);
var minus = document.querySelectorAll('.minus');
console.log(minus);
var Cur_money = +10000;
var Bet = [0, 0 , 0, 0, 0, 0];
var x,y,z;
var s = [ 'huou', 'bau', 'ga','ca', 'cua', 'tom'];
btn.addEventListener('click', function Play(){
        x = Math.floor(Math.random() * 6);
        y = Math.floor(Math.random() * 6);
        z = Math.floor(Math.random() * 6);
        // if( Cur_money > 0  ){
                Play_img.innerHTML =  `<img src="./Image_Practice/${s[x]}.png" id="img1" alt="">`+
                                `<img src="./Image_Practice/${s[y]}.png" id="img2" alt="">` +
                                `<img src="./Image_Practice/${s[z]}.png" id="img3" alt="">`;
                document.getElementById('img1').style.animation = "change 1s ease";
                document.getElementById('img2').style.animation = "change 1s ease";
                document.getElementById('img3').style.animation = "change 1s ease";
                console.log(x + ' ' + y + ' ' + z);
                console.log(s[x] + ' ' + s[y] + ' ' + s[z]);
                for( var i = 0; i < 6; i++ ){
                        //nếu đặt thì mới xét
                        if( Bet[i] > 0 ){
                                console.log(Cur_money + Bet[i]);
                                // đúng thì vào kiểm tra
                                if( s[i] == s[x] || s[i] == s[y] || s[i] == s[z]  ){ 
                                        if( s[i] == s[x] )
                                                Cur_money = Cur_money + Bet[i];
                                        if( s[i] == s[y] )
                                                Cur_money = Cur_money + Bet[i];
                                        if( s[i] == s[z] )
                                                Cur_money = Cur_money + Bet[i];
                                        Cur_money += Bet[i];
                                }
                                Bet[i] = 0;
                                document.getElementById('money').innerHTML = Cur_money;
                        }
                }
        // }
})
plus.forEach((item, index) =>{
        item.addEventListener('click', function(){
                if( Cur_money > 0 ){
                        Bet[index] += 2000;
                        Cur_money -=2000;
                        document.getElementById('money').innerHTML = Cur_money;
                }
        })
});
minus.forEach((item, index) =>{
        item.addEventListener('click', function(){
                if( Bet[index] > 0 ){
                        Cur_money +=2000;
                        document.getElementById('money').innerHTML = Cur_money;
                        Bet[index] -= 2000;
                }
        })
});