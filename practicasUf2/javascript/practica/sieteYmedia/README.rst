***************************
Contenido del siete y medio
***************************
.. Autores::

  Luis Edison Robalino Sanchez
  Daniel Gomez Ardil


Index.html
==========

Contiene los botones que se iran bloqueando y desbloqueando segun avance el juego.
Tambien contiene el canvas y la mension al creador de las cartas que utilizamos en el juego


Carta.js
========

Carta()
-------

Recibe como parametros dos numeros,
el primero sera el numero del palo al que pertenece.

    * 0 = Copas
    * 1 = Bastos
    * 2 = Oros
    * 3 = Espadas

getNumero()
-----------

Retorna el valor de la carta.
Si es mayor a 7 el valor sera 0.5

getRuta()
---------

Retorna la ruta en la que se encuentra la imagen de la carta
para posteriormente mostrarla en el canvas


Baralla.js
==========

Baraja()
--------

Tiene una propiedad que sera una coleccion de cartas.
De las cuales excluiremos las que tengan el numero 8 y 9

darCarta()
----------

Retorna una carta aleatoria de la coleccion
y la elimina para que no se pueda repetir

Jugador.js
==========

Jugador()
---------

Cosntructor de un jugador al que le pasaremos como parametro el nombre,
el limite de puntos que puede tener antes de decidir plantarse
y las monedas que tiene. Por defecto son 100

getNombre()
-----------

Retorna el nombre del Jugador

getPuntosPublicos()
-------------------

Retorna los puntos que los otros jugadores pueden ver.
Lo utilizamos para que los otros jugadores no sepan cuantos puntos tenemos de verdad

getPuntosPrivados()
-------------------

Retorna los puntos reales del jugador.
Lo utilizamos para saber cuando
planatarnos o nos pasamos de  7.5 o ganamos


getMonedas()
------------

Retorna la cantidad de monedas que tiene el jugador

cobrar()
--------

Recibe por parametro una cantidad la cual
sumaremos a las monedas del jugador

pagar()
-------

Descontamos de las monedas del jugador la cantidad que nos pasan como parametro.
Si el parametro es mayor a la catidad de monedas el atributo de jugando pasara a false
y el jugador no podra entrar en la partida

pedirCarta()
------------

Recibe como parametro una carta la cual guardaremos en el monton de cartas del Jugador.
Pediremos el valor de la carta y lo sumamos a los puntos del Jugador.
Tambien compara lo puntos con el limite admitido
y si su puntuacion es mayor o igual se plantara

plantarse()
-----------

Planta al jugador

perder()
--------

Cambia el atributo jugando a false para que el jugador ya no pueda seguir en el turno

volver()
--------

Resetea algunos atributos del jugador para que pueda continuar jugando

estaJugando()
-------------

Retorna true o false para saber si el jugador puede seguir en la partida o turno

estaPlantado()
--------------

Retorna true o false para saber si si el jugador recibe una carta o no en su turno

sePaso()
--------

Compara los puntos con 7.5 y retorna true o false depende de si te has pasado o no

setLimite()
-----------

Asigna un valor que le pasamos como parametro al atributo limite del Jugador

getCartas()
-----------

Retorna en forma de array el monton de cartas del jugador

Mano.js
=======

Mano()
------

Constructor de la mano.
Tambien crea una baraja

resetMano()
-----------

Pone el id a 1 porque lo utilizamos
para saber que numero de cartas tiene el jugador
y pintarlo en el canvas en la posicion correcta

turno()
-------

Depende si el jugador que recibe como parametro puede recibir una carta le dara una hasta que se plante o se pase

cartasAuser()
-------------

Da las cartas  al Usuario

Partida.js
==========

Partida()
---------

Constructor de la Partida

getNombreJugadores()
--------------------

Retorna en forma de array todos losnombres de los jugadores.
Si un jugador no tiene suficientes monedas para jugar mostrara nadie y 0 monedas

getMonedasJugadores()
---------------------
Retorna un array con las monedas de los jugadores

repartirPrimerasCartas()
------------------------

Dar un carta a cada jugador y que esa carta los otros
jugadores no sepan cual es

repartir()
----------

Dar cartas a los CPU hasta que se planten o se pasen

repartirUser()
--------------

Dar una carta al jugador

finTurnoUser()
--------------

Hace que la banca empiece a jugar cuando el jugador se ha plantado o pasado

conteo()
--------

Cuenta los puntos de los jugadores
y quien es el ganador o ganadores

continuar()
-----------

Vuelve a empezar la partida pero manteniendo las monedas de la anterior

mostrarCartasJugadores()
------------------------

Muestra las cartas que le dieron al jugadores

Main.js
=======

ponerNombres()
-------------

Mostrara en al camvas los nombres de los jugadores

ponerImagenes()
---------------

Mostrara en el canvas la carta que le pasamos como parametro
en el sitio del jugador que tambien se lo pasamos como parametro

nuevaPartida()
--------------

Crea una nueva partida y da las primeras cartas

pedirCarta()
------------

LLama a la funcion que da una carta al ususario

plantarse()
-----------

Sirve para plantar a el Usuario

continuar()
-----------

Llama a la funcion que continua con la partida

finDeJuego()
------------

Muestra el texto de GAME OVER y bloquea los botones
para que solo podamos hacer una nueva partida

Comentarios
===========

El juego lo ibamos probando el chrome, en  firefox también funciona.
Aunque no lo hace todo como en chrome  y en internet expolorer
no lo hemos probado
