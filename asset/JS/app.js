function Hesab(){
  let crlimit=Number(document.getElementById('inp1').value);
  let crmonth =Number(document.getElementById('calc').value);
  let percent=Number(document.getElementById('inp2').value);
  let allpay=(crlimit*percent/100)+crlimit;
  let monthpay=allpay/crmonth;
  document.getElementById('inp3').value=`Ümumi : ${allpay}`;
  document.getElementById('inp4').value=`Aylıq: ${monthpay}`;
}