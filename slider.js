$( function() {
    //по дефолту меняется задний фон
    var prop = "background-color";

    //Функция для установления меняемого свойства
    function setProp(val) {
        prop = val
    }

    //Реализация функций кнопок
    $("#text-color").click( function(event) {
        setProp("color")
        refreshColor()
    });

    $("#background-color").click( function(event) {
        setProp("background-color")
        refreshColor()
    });

    //Предотвращение перезагрузки страницы т.к. кнопки находятся внутри формы
    $( "button" ).click( function( event ) {
        event.preventDefault();
    });

    //Создание hex цвета
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }

    //Обновление цвета путем установления инлайн css
    function refreshColor() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#color_container" ).css( prop, "#" + hex );
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 255,
      slide: refreshColor,
      change: refreshColor
    });
    
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 255 );
    $( "#blue" ).slider( "value", 255 );
});
