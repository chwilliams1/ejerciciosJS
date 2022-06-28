# 6 Ejercicios Básicos de JS

## Ejercicio 1
#### 1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.

## Ejercicio 2
#### 2. Pide una nota (número). Muestra la calificación según la nota:

* 0-3: Muy deficiente
* 3-5: Insuficiente
* 5-6: Suficiente
* 6-7: Bien
* 7-9: Notable
* 9-10: Sobresaliente

## Ejercicio 3
#### 3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -

## Ejercicio 4
#### 4. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

##Ejercicio5
####Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).

##### El algoritmo para calcular la letra del dni es el siguiente :

* El número debe ser entre 0 y 99999999
* Debemos calcular el resto de la división entera entre el número y el número 23.
* Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, * A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
* Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
* Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

##Ejercicio6 (Similar al 5, pero en Chile)
####Realizar una página con un script que calcule el valor del digito verificador de un Rut.

Pasos para calcular el Digito Verificador:
1) Se toman todos los números del RUT (sin el digito verificador).
27.962.409

2) Se da vuelta esa cifra, es decir, reordenamos los números comenzando de derecha a izquierda.
9 0 4 2 6 9 7 2

3) Ahora multiplicaremos cada uno de estos números por la siguiente serie: 2, 3, 4, 5, 6, 7 y si se acaba la serie, volvemos a empezar 2, 3, 4...

9 × 2 = 18
0 × 3 = 0
4 × 4 = 16
2 × 5 = 10
6 × 6 = 36
9 × 7 = 63
7 × 2 = 14
2 × 3 = 6

4) Una vez hecho esto, sumamos todos los resultados:
18 + 0 + 16 + 10 + 36 + 73 + 14 + 6 = 163

5) El resultado obtenido lo dividimos por 11, para luego obter el Resto de esa división.
163 / 11 = 14,81818181818182
Tomamos el resultado sin decimales y sin aproximación. En este caso quedaría 14 y lo multimplicamos por 11
14 x 11 = 154

6) Posteriormente, al resultado del paso 4 le restamos los 154 obtenidos anteriormente.
163 - 154 = 9 (valor absoluto, sin signo)

7) Y para finalizar, a 11 le restamos el resultado anterior:
11 - 9 = 2

Y así hemos calculado que 2 es el digito verificador de nuestro Rut, tal cual lo indicamos al comienzo de este ejercicio.

Ahora bien, si como resultado final del digito verficador nos da el número 11, el dígito verificador será 0 y si es 10 el dígito será la letra K.

11 => 0
10 => K

No esperes más, haz la prueba con tu Rut y calcula el digito verificador.

