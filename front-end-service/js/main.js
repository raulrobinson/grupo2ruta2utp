$(document).ready(function () {

  /**Boton ir Arriba */
  $('.ir-arriba').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });

});

$.getJSON("http://localhost:9000/api/v1/products/all", function (data) {
  console.log(data)
  $('#titulo-1').text(data[0].productName)
  $('#precio-1').text("$ "+humanizeNumber(data[0].productPrice))

  $('#titulo-2').text(data[1].productName)
  $('#precio-2').text("$ "+humanizeNumber(intlRound(data[1].productPrice)))

}, JSON)

function tituloModal(referencia) {

  $.getJSON("http://localhost:9000/api/v1/products/all", function (data) {
    console.log(data)
    $('#titulo-1').text(data[0].productName)

    if (referencia == 1) {
      $('#exampleModalLabel').text(data[0].productName);
      $('.modal-body').text(data[0].productDescription)
    }

    if (referencia == 2) {
      $('#exampleModalLabel').text(data[1].productName);
      $('.modal-body').text(data[1].productDescription)
    }

    if (referencia == 3) {
      $('#exampleModalLabel').text(GuaumorCachorros);
      $('.modal-body').text("Guaumor - Cachorros Razas Medianas Y Grandes, es libre de colorantes. Tiene proteína de alta calidad para un crecimiento y desarrollo saludable. Prebióticos que fortalecen el sistema inmune, aumentan las defensas y mejoran la salud intestinal. ")
    }
    if (referencia == 4) {
      $('#exampleModalLabel').text(PedigreeAlimentoParaPerro);
      $('.modal-body').text("Pedigree® Pedigree - Alimento Para Perro Adulto Raza Pequeña, contiene proteína de alta calidad para ayudar a su metabolismo mas acelerado, equilibrio ideal de aminoácidos para músculos fuertes. Granos texturizados que ayudan a reducir la formación de sarro y a mantener dientes y encías sanas, contiene omega 6 para una piel y pelo saludable, concentrado con fibras naturales para una digestión óptima y heces firmes. ")
    }
    if (referencia == 5) {
      $('#exampleModalLabel').text(alimento5);
      $('.modal-body').text("Nutrique F®- Perro Cachorro Talla Mediana, es ideal para los perros de talla mediana son naturalmente activos por lo que requieren desarrollar una masa muscular fuerte, el pavo aporta proteínas de gran calidad, DHA provenientes de aceite de raya esencial para el desarrollo cognitivo combinado con aceite de coco fuente de ácidos grasos de cadena media contribuyen aumentar la capacidad de aprendizaje y de memoria, antioxidantes naturales provenientes de arándanos azules ,zapallo y te verde colaboran en el buen funcionamiento del sistema inmune, prebióticos y probióticos promueven un sistema digestivo sano que mejora el aprovechamiento de nutrientes y aumenta la capacidad de defensa")
    }
    if (referencia == 6) {
      $('#exampleModalLabel').text(alimento6);
      $('.modal-body').text("F® Nutrique - Perro Cachorro Talla Grande, esta compuesto de coindroitin sulfato y la glucosamina son fundamentales para la salud osteoarticular del perro cachorro ya que promueve el desarrollo y protección del cartílago articular ayudando en su hidratación , mayor elasticidad y resistencia. DHA provenientes de aceite de raya esencial para el desarrollo cognitivo combinado con aceite de coco fuente de ácidos grasos de cadena media contribuyen aumentar la capacidad de aprendizaje y de memoria, antioxidantes naturales provenientes de arándanos azules ,zapallo y te verde colaboran en el buen funcionamiento del sistema inmune, prebióticos y probióticos promueven un sistema digestivo sano que mejora el aprovechamiento de nutrientes y aumenta la capacidad de defensa. ")
    }
    if (referencia == 7) {
      $('#exampleModalLabel').text(alimento7);
      $('.modal-body').text("F® Perro cachorro de talla pequeña y mini de 2 a 10 meses de edad. El pavo y el huevo como primera proteína en esta etapa de vida en la que el cachorro tiene altos requerimientos nutricionales DHA provenientes de aceite de raya esencial para el desarrollo cognitivo combinado con aceite de coco fuente de ácidos grasos de cadena media contribuyen aumentar la capacidad de aprendizaje y de memoria, antioxidantes naturales provenientes de arándanos azules ,zapallo y te verde colaboran en el buen funcionamiento del sistema inmune, prebióticos y probióticos promueven un sistema digestivo sano que mejora el aprovechamiento de nutrientes y aumenta la capacidad de defensa. ")
    }
    if (referencia == 8) {
      $('#exampleModalLabel').text(alimento8);
      $('.modal-body').text("F® Ganado Premium - Cachorro, tiene un sistema life advanced, Sistema integral de beneficios que cuida la calidad de vida durante todas las etapas de tu mejor amigo. Soporte inmunológico: contiene antioxidantes, que refuerzan sus defensas, promoviendo la eficiencia del sistema inmune. Salud intestinal: con prebióticos y probióticos, que estimulan el crecimiento de la flora intestinal benéfica, mejorando la absorción de nutrientes. Desarrollo óseo: con niveles adecuados de calcio y vitamina D, que promueven un sano desarrollo de dientes y huesos. Es un sistema integral de beneficios que cuida la calidad de vida durante todas las etapas de tu mejor amigo. Desarrollo cognitivo: Con neuro nutrientes y ácidos grasos Omega 3 (DHA + EPA) que estimulan el desarrollo neurológico, facilitando los procesos de memoria y aprendizaje. ")
    }
    if (referencia == 9) {
      $('#exampleModalLabel').text(alimento9);
      $('.modal-body').text("F® Ganador Premium - Adulto, tiene sistema life advanced, sistema integral de beneficios que cuida la calidad de vida durante todas las etapas de tu mejor amigo y proporciona: soporte inmunologico con antioxidantes que refuerzan sus defensas, promoviendo la eficiencia del sistema inmune. Sistema cardiovascular: Con DHA + EPA que favorecen el flujo sanguíneo para un adecuado funcionamiento del corazón. Pelaje brillante y sedoso con omegas 3 y 6 que promueven la salud de piel y pelo Salud intestinal con prebióticos y probióticos, que estimulan el crecimiento de la flora intestinal benéfica, mejorando la absorción de nutrientes. ")
    }
    if (referencia == 10) {
      $('#exampleModalLabel').text(alimento10);
      $('.modal-body').text("F® Ganador Premium - Adulto Razas Pequeñas, tiene sistema advanced, Sistema integral de beneficios que cuida la calidad de vida durante todas las etapas de tu mejor amigo. Soporte inmunológico con antioxidantes que refuerzan sus defensas, promoviendo la eficiencia del sistema inmune. Sistema cardiovascular que favorecen el flujo sanguíneo para un adecuado funcionamiento del corazón. Salud dental con microcristales de limpieza que disminuyen la formación de sarro. Salus intestinal con prebióticos y probióticos, que estimulan el crecimiento de la flora intestinal benéfica, mejorando la absorción de nutrientes.")
    }
    if (referencia == 11) {
      $('#exampleModalLabel').text(alimento11);
      $('.modal-body').text("F® LIFE DEFENSE: Es un sistema integral de beneficios que brinda vitalidad y protección a tu mejor amigo. CRECIMIENTO SALUDABLE: Con proteínas de alta digestibilidad que aportan aminoácidos esenciales para el desarrollo de los músculos y huesos. APRENDIZAJE ACTIVO: Con Omega 3 que promueve el óptimo desarrollo del cerebro estimulando el aprendizaje. FORTALECIMIENTO DE DEFENSAS: Con selenio y vitamina E que ayudan a fortalecer el sistema inmune. ÓPTIMA DIGESTIÓN: Con prebióticos y probióticos que mejoran la flora intestinal promoviendo una digestión saludable. ")
    }
    if (referencia == 12) {
      $('#exampleModalLabel').text(alimento12);
      $('.modal-body').text("F® LIFE DEFENSE: Es un sistema integral de beneficios que brinda vitalidad y protección a tu mejor amigo. CRECIMIENTO SALUDABLE: Con proteínas de alta digestibilidad que aportan aminoácidos esenciales para el desarrollo de los músculos y huesos. APRENDIZAJE ACTIVO: Con Omega 3 que promueve el óptimo desarrollo del cerebro estimulando el aprendizaje. FORTALECIMIENTO DE DEFENSAS: Con selenio y vitamina E que ayudan a fortalecer el sistema inmune. ÓPTIMA DIGESTIÓN: Con prebióticos y probióticos que mejoran la flora intestinal promoviendo una digestión saludable. ")
    }
    if (referencia == 13) {
      $('#exampleModalLabel').text(alimento13);
      $('.modal-body').text("F® Besties - Alimento Gatos Sabor Carne y Pollo, ofrece una fórmula diseñada para la óptima nutrición salud de tu gato con carbohidratos, proteínas, lípidos, minerales y vitaminas, Omegas que promueven una piel saludable y un pelaje brillante, fibra prebiótica que fortalecen la salud intestinal y el equilibrio de la flora")
    }
    if (referencia == 14) {
      $('#exampleModalLabel').text(alimento14);
      $('.modal-body').text("F® Equilibrio - F Gatos Adulto, está pensado para todas las razas de gatos a partir de los 12 meses de vida, contiene ingredientes especiales como, Omegas 3 y 6, que ayuda a un pelo suave y brillante, hexametafosfato de sodio, muy útil en la prevención de la formación del sarro, yucca Schidigera, que contribuye en la disminución del olor de las heces, total hairball control. ")
    }
    if (referencia == 15) {
      $('#exampleModalLabel').text(alimento15);
      $('.modal-body').text("F® El coindroitin sulfato y la glucosamina son fundamentales para la salud osteoarticular del gato adulto ya que promueve el desarrollo y proteccion del cartilago articular ayudando en su hidratacion , mayor elasticidad y resistencia. DHA provenientes de aceite de raya esencial para el desarrollo cognitivo combinado con aceite de cocofuente de acidos grasos de cadena media contribuyen aumentar la capacidad de aprendizaje y de memoria, antioxidantes naturales provenientes de arándanos azules ,zapallo y te verde colaboran en el buen funcionamiento del sistema inmune, prebióticos y probióticos promueven un sistema digestivo sano que mejora el aprovechamiento de nutrientes y aumenta la capacidad de defensa. ")
    }
    if (referencia == 16) {
      $('#exampleModalLabel').text(alimento16);
      $('.modal-body').text("F® El coindroitin sulfato y la glucosamina son fundamentales para la salud osteoarticular del gato adulto ya que promueve el desarrollo y protección del cartílago articular ayudando en su hidratacion , mayor elasticidad y resistencia. DHA provenientes de aceite de raya esencial para el desarrollo cognitivo combinado con aceite de coco fuente de ácidos grasos de cadena media contribuyen aumentar la capacidad de aprendizaje y de memoria, antioxidantes naturales provenientes de arándanos azules ,zapallo y te verde colaboran en el buen funcionamiento del sistema inmune, prebióticos y probióticos promueven un sistema digestivo sano que mejora el aprovechamiento de nutrientes y aumenta la capacidad de defensa. ")
    }
    if (referencia == 17) {
      $('#exampleModalLabel').text(alimento17);
      $('.modal-body').text("F® Max - Cat Adulto Pollo Y Arroz, es rico en proteína y vitaminas A, B12, C y D, este alimento ayuda directamente en el tracto urinario, en la visión y en el corazón de tu compañero. A tu hijo le va a encantar. ")
    }
    if (referencia == 18) {
      $('#exampleModalLabel').text(alimento18);
      $('.modal-body').text("F®El alimento aporta Energía, Salud, vitalidad, longevidad.Diseñadas por expertos veterinarios. Deliciosa Dieta con carnes y Verduras balanceada y completa Sin Conservantes ni preservantes 100% Natural. Beneficios: Las Verduras son seleccionadas y aportan un alto cotenido de Vitamina C, son antioxidantes y contienen pocas Calorías, fácil para la digestión, aporta vitaminas y minerales ")
    }
    if (referencia == 19) {
      $('#exampleModalLabel').text(alimento19);
      $('.modal-body').text("F® Br For Cat - Wild Kitten, mantiene el sistema inmunológico saludable, piel y pelaje sano, el porcentaje de ingredientes animales: >72%, porcentaje de proteína derivada de ingredientes animales: >84%, La energía metabólica del alimento es de 4.304kcal/kg, Libre de granos y gluten, Contiene 33% de Proteína. ")
    }
    if (referencia == 20) {
      $('#exampleModalLabel').text(alimento20);
      $('.modal-body').text("F® Br For Cat - Adulto Castrados, es un alimento contiene menos calorías, lo que puede ayudar a controlar el peso de tu mascota. A pesar de que las calorías se han reducido, se mantiene el mismo gran sabor. ")
    }
    if (referencia == 21) {
      $('#exampleModalLabel').text(alimento21);
      $('.modal-body').text("F® 100% proteína de pollo oceanico como primer ingrediente, aporte en hidratación por medio del caldo de pollo, mejorando la palatabilidad y elevando su aporte nutricional, tipo Pate fácil de digerir, zanahoria como fuente principal de fibra, 4 fuentes de proteína animal dentro de sus primeros 5 ingredientes, vitaminas y antioxidantes naturales, extracto de raíz de achicoria que favorece el proceso digestivo, sin colorantes, saborizantes, ni preservantes artificiales. ")
    }
    if (referencia == 22) {
      $('#exampleModalLabel').text(alimento22);
      $('.modal-body').text("F® Elaborado con nuestro sistema PRE BIOTICS. Ayuda a mantener el pelaje brillante, proteína de alta calidad, inclusión de inulina extraída de la alcachofa, contenido de taurina declarado 1500mg ")
    }
    if (referencia == 23) {
      $('#exampleModalLabel').text(alimento23);
      $('.modal-body').text("F®Chunky - Pollo Gatitos, es un alimento especialmente diseñado para gatitos para contribuir en su desarrollo y crecimiento posterior a la lactancia materna. Con niveles apropiados de vitaminas, minerales, proteínas, fibra, ácidos grasos, entre otros. Que favorecerán la salud del organismo en general, el desarrollo cerebral, la digestión y más. ")
    }
    if (referencia == 24) {
      $('#exampleModalLabel').text(alimento24);
      $('.modal-body').text("F®Gran fuente de proteínas para mantener una piel y un pelaje saludables. ")
    }
    if (referencia == 25) {
      $('#exampleModalLabel').text(farmacia25);
      $('.modal-body').text("F® El collar protector premium está diseñado para ayudar a los perros y gatos a curarse de cirugías, lesiones y erupciones. Cómodo de llevar mientras se recupera de cirugías, lesiones y erupciones cutáneas, sin interferir con la visión periférica o la capacidad de comer o beber. La fuerte correa que permite una amplia gama de ajustes en el cuello, por lo que puede garantizar un ajuste perfecto. Resistente a arañazos y mordeduras para acelerar el proceso de curación, además de que el tejido lavable a máquina le facilita la recuperación de su mascota. No marcará ni rayará sus pertenencias, para que pueda sentirse bien al usar esto en toda la casa. ")
    }
    if (referencia == 26) {
      $('#exampleModalLabel').text(farmacia26);
      $('.modal-body').text("F® Con acción bactericida, Quinotrat Tabs es indicado para el tratamiento de infecciones que padecen perros y gatos. Indicado para el tratamiento de infecciones bacterianas individuales o mixtas del aparato respiratorio, digestivo y urinario, otitis externa, infecciones de la piel y herida ")
    }
    if (referencia == 27) {
      $('#exampleModalLabel').text(farmacia27);
      $('.modal-body').text("F®Esta croqueta única es fácil de agarrar y estimula la masticación para ayudar a mantener la higiene bucal. Pelaje semi largo y sedoso Cuerpo grande, patas redondas y sólidas Ojos azules cautivadores Salud cardiaca Contiene nutrientes como taurina, EPA y DHA para ayudar a mantener una función cardíaca saludable. Salud de huesos y articulaciones. El gran tamaño de la muñeca de trapo puede ejercer presión sobre sus articulaciones. SALUD DE HUESOS Y ARTICULACIONES Formulado para apoyar huesos y articulaciones saludables. Contiene EPA y DHA. ")
    }
    if (referencia == 28) {
      $('#exampleModalLabel').text(farmacia28);
      $('.modal-body').text("F® Controla bacterias y hongos de la piel, exclusiva fragancia a bebé, aroma agradable, baño seco, especial uso entre baños, brinda sensación limpieza, sin parabenos. ")
    }
    if (referencia == 29) {
      $('#exampleModalLabel').text(farmacia29);
      $('.modal-body').text("F® Ideal para eliminas pulgas, garrapatas y piojos. Mediante su uso también aportará brillo y suavidad al pelaje. ")
    }
    if (referencia == 30) {
      $('#exampleModalLabel').text(farmacia30);
      $('.modal-body').text("F® ADAPTIL Calm On-the-go Collar es una excelente solución para ayudar a tu perro a estar calmado y relajado en casa y en el exterior. Clínicamente probado.")
    }
    if (referencia == 31) {
      $('#exampleModalLabel').text(farmacia31);
      $('.modal-body').text("F® Conveniencia: Una sola tableta de Simparica TRIO® hace el trabajo de 2 o 3 desparasitantes, con alta eficacia y seguridad. Protección integral: Brinda una amplia y efectiva protección contra la pulgas, garrapatas, dirofilariosis, nematodos y anquilostomas (adultos y fases larvarias de parásitos intestinales).")
    }
    if (referencia == 32) {
      $('#exampleModalLabel').text(farmacia32);
      $('.modal-body').text("F® Su acción está enfocada en el tratamiento de infecciones de piel como piodermas, dermatitis, heridas contaminadas, pielonefritis y pielitis. Combate otras patologías importantes como nefritis, vaginitis, gastroenteritis, estafilococia, cistitis, infecciones bacterianas secundarias, bronquitis y neumonías. ")
    }
    if (referencia == 33) {
      $('#exampleModalLabel').text(farmacia33);
      $('.modal-body').text("F® Total Full LC Antiparasitorio para perros es efectivo en tratamientos de prevención, control y eliminación de parásitos internos. Su suministro es apto para gatitos a partir de el día número 20 de vida. Puede ser utilizado en hembras preñadas a partir del día 41 de gestación. Protegerá el organismo de los gatos de parásitos internos como nematodes y cestodos. Muy fácil de suministrar gracias a su palatable sabor. Antiparasitario interno de liberación controlada. Ideal para gatos de todas las razas. ")
    }
    if (referencia == 34) {
      $('#exampleModalLabel').text(farmacia34);
      $('.modal-body').text("F® Advantix® de Bayer es un potente antiparasitario para perros de uso externo formulado para eliminar y prevenir el contagio con parásitos externos como pulgas")
    }
    if (referencia == 35) {
      $('#exampleModalLabel').text(farmacia35);
      $('.modal-body').text("F® Advantix® de Bayer es un potente antiparasitario para perros de uso externo formulado para eliminar y prevenir el contagio con parásitos externos como pulgas")
    }
    if (referencia == 36) {
      $('#exampleModalLabel').text(farmacia36);
      $('.modal-body').text("F® Canisan F® es un antihelmíntico para perros y gatos de suministro oral que actuará en contra de nematodos, cestodos y otros parásitos gastrointestinales que suelen afectar el aparato digestivo de los perros y los gatos. Canisan está formulado para el control de los parásitos más comunes como lo son: Ancylostoma caninum, Toxocara canis, Trichuris vulpis, Oxyuris spp, aenia pisiformis, Echinococcus granulosus, algunos protozoarios, entre otros.")
    }

  }, JSON)

}

function humanizeNumber(n){
  n = n.toString()
  while (true){
    var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1.$2$3')
    if (n == n2) break
      n = n2
  }
  return n
}

function intlRound(numero, decimales = 2, usarComa = false){
  var opciones = {
      maximumFractionDigits: decimales, 
      useGrouping: false
  };
  usarComa = usarComa ? "es" : "en";
  return new Intl.NumberFormat(usarComa, opciones).format(numero);
}