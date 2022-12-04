const slider = document.getElementById("range");
const sliderOutput = document.querySelector(".views");
sliderOutput.innerHTML = "100k";
const price = document.querySelector(".price-value");
let priceValue = parseInt(price.innerHTML);
let pageViews = 0;
const billingPeriod = document.getElementById("checkbox");

slider.oninput = function () {
  if (this.value == 0) {
    pageViews = "10K";
    priceValue = 8;
  } else if (this.value == 25) {
    pageViews = "50K";
    priceValue = 12;
  } else if (this.value == 50) {
    pageViews = "100K";
    priceValue = 16;
  } else if (this.value == 75) {
    pageViews = "500K";
    priceValue = 24;
  } else {
    pageViews = "1M";
    priceValue = 36;
  }

  if (billingPeriod.checked) {
    price.innerHTML = (0.75 * priceValue).toFixed(2);
  } else {
    price.innerHTML = `${priceValue.toFixed(2)}`;
  }

  sliderOutput.innerHTML = pageViews;

  // range style before thumb
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
    value +
    "%,hsl(224, 65%, 95%) " +
    value +
    "%, hsl(224, 65%, 95%) 100%)";
};

let reducedPrice = 0;
billingPeriod.onchange = function () {
  if (billingPeriod.checked) {
    reducedPrice = 0.75 * priceValue;
    price.innerHTML = `${reducedPrice.toFixed(2)}`;
  } else {
    price.innerHTML = `${priceValue.toFixed(2)}`;
  }
};
