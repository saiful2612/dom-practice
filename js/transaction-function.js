function getInputValue(inputId){

    //get new value
    const inputFieldValue =document.getElementById(inputId);
    const inputAmountText= inputFieldValue.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input value
    inputFieldValue.value='';

    return amountValue;
}


function updateValue( newID ,newDepositValue){
    // get deposit previous value
    const currentValue = document.getElementById(newID);
    const previousText= currentValue.innerText;
    const previousValue = parseFloat(previousText);

    // add new & previous Value
    const totalValue = previousValue + newDepositValue;

    // set the deposit value
    currentValue.innerText=totalValue;
}

function getBalance(balanceID, newValue){
    // get the balance value 
    const balanceCurrent =document.getElementById(balanceID);
    const previousBalanceText = balanceCurrent.innerText;
    const balanceValue= parseFloat(previousBalanceText);

    // add new value on Balance 
    const balanceTotal = balanceValue + newValue;

    // set the balance Value 
    balanceCurrent.innerText = balanceTotal;
}

function getCurrentBalance(){
    // get the balance value 
    const balanceCurrent =document.getElementById('balance-current');
    const previousBalanceText = balanceCurrent.innerText;
    const balanceValue= parseFloat(previousBalanceText);
    return balanceValue;
}

document.getElementById('deposit-button').addEventListener('click',function(){

    const newDepositValue= getInputValue('deposit-input');
    
    if(newDepositValue>0){
        updateValue('deposit-current',newDepositValue);
        getBalance('balance-current', newDepositValue);
    }

})


document.getElementById('withdraw-button').addEventListener('click',function(){

    const newWithdrawValue =getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();

    if(newWithdrawValue>0 && newWithdrawValue <= currentBalance){
        updateValue('withdraw-current', newWithdrawValue);
        getBalance('balance-current', -newWithdrawValue);
    }

})