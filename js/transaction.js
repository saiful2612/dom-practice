document.getElementById('deposit-button').addEventListener('click',function(){

    // get new deposit value
    const depositInputField =document.getElementById('deposit-input');
    const depositText= depositInputField.value;
    const newDepositValue = parseFloat(depositText);
    
    // get deposit previous value
    const depositCurrent = document.getElementById('deposit-current');
    const previousDepositText= depositCurrent.innerText;
    const previousValue = parseFloat(previousDepositText);

    // add new & previous Value
    const depositTotal = previousValue + newDepositValue;

    // set the deposit value
    depositCurrent.innerText=depositTotal;

    //clear deposit input value
    depositInputField.value='';


    // get the balance value 
    const balanceCurrent =document.getElementById('balance-current');
    const previousBalanceText = balanceCurrent.innerText;
    const balanceValue= parseFloat(previousBalanceText);

    // add new value on Balance 
    const balanceTotal = balanceValue + newDepositValue;

    // set the balance Value 
    balanceCurrent.innerText = balanceTotal;

})


document.getElementById('withdraw-button').addEventListener('click',function(){

    // get new withdraw value
    const withdrawInputField =document.getElementById('withdraw-input');
    const withdrawText= withdrawInputField.value;
    const newWithdrawValue = parseFloat(withdrawText);

    // get withdraw previous value
    const withdrawCurrent = document.getElementById('withdraw-current');
    const previousWithdrawText= withdrawCurrent.innerText;
    const previousWithdrawValue = parseFloat(previousWithdrawText);

    // add new & previous Value
    const withdrawTotal = previousWithdrawValue + newWithdrawValue;

    // set the deposit value
    withdrawCurrent.innerText= withdrawTotal;

    //clear deposit input value
    withdrawInputField.value='';

    // get the balance value 
    const balanceCurrent =document.getElementById('balance-current');
    const previousBalanceText = balanceCurrent.innerText;
    const balanceValue= parseFloat(previousBalanceText);

    // add new value on Balance 
    const balanceTotal = balanceValue - newWithdrawValue;

    // set the balance Value 
    balanceCurrent.innerText = balanceTotal;

    if(withdrawInputField.value == ''){
        console.log('Empty')
    }
})