function check(that) {
            if (that.value === "other") {
                var textBox = document.createElement('input');
                textBox.setAttribute("type", "text");
                textBox.style.backgroundColor = "yellow";
                textBox.setAttribute("id", "newTextBox");
                document.getElementById('form1').appendChild(textBox);
            }

            else {
                var box = document.getElementById('newTextBox');
                if (box)
                    box.parentNode.removeChild(box);
            }
        }

function checkPensiones(that) {

            if (that.value === "si") {
                //TEXTO
                //<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                //var t = document.createTextNode("INTRODUCE COSAS");
                // t.setAttribute("id", "textoAAA");
                //t.style.backgroundColor = "blue";
                //textoPens.setAttribute("text", "INTRODUCE COSAS");
                
                //document.getElementById('pregunta1').insertBefore(textBox);

                //INPUT
                var textBox = document.createElement('input');
                textBox.setAttribute("type", "text");
                textBox.setAttribute("placeholder", " METE LOS EUROSSS");
                textBox.setAttribute("id", "newTextBox");
                document.getElementById('pregunta1').appendChild(textBox);

                

            }

            else {
               var box = document.getElementById('newTextBox');
               // var text1 = document.getElementById('textoAAA');
              

                if (box)
                    box.parentNode.removeChild(box);

               //if(text1)
                 //text1.parentNode.removeChild(text1);

            }
        }

function checkAnualidades(that) {
            if (that.value === "other") {
                var textBox = document.createElement('input');
                textBox.setAttribute("type", "text");
                textBox.setAttribute("id", "newTextBox");
                document.getElementById('form1').appendChild(textBox);
            }

            else {
                var box = document.getElementById('newTextBox');
                if (box)
                    box.parentNode.removeChild(box);
            }
}


function checkVivienda(that) {
            if (that.value === "other") {
                var textBox = document.createElement('input');
                textBox.setAttribute("type", "text");
                textBox.setAttribute("id", "newTextBox");
                document.getElementById('form1').appendChild(textBox);
            }

            else {
                var box = document.getElementById('newTextBox');
                if (box)
                    box.parentNode.removeChild(box);
            }
}