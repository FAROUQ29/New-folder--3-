// lorem text
const text = [
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
    `Univerity of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the Univerity of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962,the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.`,
];

const form = document.querySelector("lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelectorAll(".lorem-text");

form.addEventListener("submit",function (e) {
    e.preventDefault();
    const value = amount.(value);
    const random = math.floor(Math.random() * text.length);   

    // empty
    // -1
    // > 9
    if(isNaN(value) || value < 0 || value > 9) {
        result.innerHTML= `<p class="result">${text[0]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText
        .map{function (item) {
            return `<p class="result">${item}</p>`;
        })
        .join ("");
        result.innerHTML = tempText;
    }
    })