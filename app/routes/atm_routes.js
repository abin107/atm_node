module.exports = function(app){

    app.post('/atm' , (req,res) =>{
        
        var cash = Number(req.body.cash);
        console.log('cash---------------------------------',cash)
        if(cash > 500 ){
            res.send("Limit Exceded");
        }else if(cash%20!=0 && cash%50!=0){
            res.send("Cannot dispense this Amount, choose another amount");
        }else{
            var five_hundred = parseInt(cash/500);
            var fifty = parseInt((cash%500) / 50);
            var twenty = parseInt((cash%50) / 20);
            
            const dispensed_cash = {
                '500$' : five_hundred,
                "50$" : fifty,
                '20$' : twenty
            }
            
            res.send(dispensed_cash);
        }
    })
}