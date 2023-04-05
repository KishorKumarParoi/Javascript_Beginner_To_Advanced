let a = document.getElementsByTagName("div")[0]
// a.innerHTML = '<h1><b>Heelooo Worrrrld</b></h1>' + a.innerHTML;

let div = document.createElement('div');   // bulk items adding
div.innerHTML = '<h2>Helllo Jonogon!</h2>'
// a.prepend(div)
// a.append(div)
// a.before(div)
// a.after(div)
a.replaceWith(div)


