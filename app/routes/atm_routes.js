module.exports = function(app){

    app.post('/atm' , (req,res) =>{
        var cash = Number(req.body.cash);
        if(cash > 500 ){
            res.status(400).send("Limit Exceded");
        }else if(cash%10!=0 || cash <=0){
            res.status(400).send("Cannot dispense this Amount, choose another amount" + cash);
        }else{

            var five_hundred = parseInt(cash/500);
            cash -= 500*five_hundred;
            var fifty = parseInt(cash/50);
            cash -= 50*fifty;
            var twenty = parseInt(cash/20);
            if(cash%20 === 10){
                if(fifty>1){
                    fifty -= 1;
                    twenty += 3;
                }else{
                    res.send("Cannot dispense this Amount, choose another amount");
                    return;
                }
            }
            const dispensed_cash = {
                '500$' : five_hundred,
                "50$" : fifty,
                '20$' : twenty
            }
            res.set('Content-type','application/json');
            res.send(dispensed_cash);
        }
    })
}