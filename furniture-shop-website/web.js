
// button show more / show less

var status = "less";
function toggleText()
{
    if (status == "less") {
        document.getElementById("product-item").style.display="flex";
        document.getElementById("more").innerText = "See Less";
        status = "more";
    }
    
    else if (status == "more") {
        document.getElementById("product-item").style.display="none";
        document.getElementById("more").innerText = "See More";
        status = "less"
    }
}

// slider

new Splide("#one", {
      type: "loop",
      autoWidth: true,
      focus: 'center',
}).mount();
  
new Splide("#two", {
      type: "loop",
      autoWidth: true,
      focus: 'center',
      gap: '1.5rem',
}).mount();

new Splide("#three", {
      type: "loop",
      autoWidth: true,
      focus: 'center',
      gap: '1.5rem',
      pagination: false,
}).mount();