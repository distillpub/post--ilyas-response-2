
<script>

function range(n){
  return Array(n).fill().map((_, i) => i);
}

var gammas = [0.21389947, 0.19385558, 0.12584902, 0.12580375, 0.14343988, 0.15444969, 0.17205828, 0.15493886, 0.23107068, 0.21226237]

</script>

<style>

.flex-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>

<div class="flex-container">

{#each range(10) as i}
<div>
  <div style="align:center; 
              width:80px;
              margin: 5x 5px;
              color: black;
              font-size: 10px;
              line-height: 7px"><center><d-math>γ_{i} = {gammas[i].toFixed(3)}</d-math></center></div >
  <div 
    style="background-image:url('https://storage.googleapis.com/clarity-public/ggoh/cifar_logistic/weights.png'); 
        background-position:0px {80*i}px;
        width: 80px;
        height:80px;
        background-size: 80px;
        margin: 5px 5px;
        box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
        border-radius: 1px;
        border: 0px solid black;
        image-rendering: pixelated;">
  </div>
</div>
{/each}

</div>

<center style="margin-top:10px">
  <figcaption>10 Features, $F_C$, of robust linear classifier $C$. Each feature is $\gamma_i$-robustly-useful with respect to label $i$. Visualized are the weights $w_i$ of features $f_i(x) = w_i^Tx$.</figcaption>
</center>