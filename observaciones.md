# Observaciones

Gaby, felicitaciones por tu trabajo. Tu portfolio está muy hermoso, y se nota mucho el esfuerzo por lograr un trabajo con personalidad propia que a la vez cumpla las consignas y el diseño propuesto. El resultado es una web que te refleja y a la vez cumple a la perfección lo solicitado.

Tengo, lamentablmemente, pocos comentarios para hacerte, ya que el nivel de este trabajo es realmente muy alto. Pero siempre hay algo que comentar! :) Como dije en clase, este trabajo no se hace para que constates conocimientos, sino para que aprendas: en ese sentido, mi intencion es que estos comentarios te sirvan para aprender, mejorar tu codigo a futuro e ir apreciando mejor qué se espera de nosotras como desarrolladoras front end.

## Estructura correcta de documento HTML

Tu HTML esta realmente excelente. Claro, prolijo, muy bien comentado e identado.

Algo que me llama la atención es tu `header`, dado que allí repetís innecesariamente el link de google fonts. No es necesario escribilo dos veces

```html
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
```

Cada uno de esos links hace exactamente lo mismo - traerse el css de google fonts para poder usar los fonts en tu sitio. Quizá estés bajo la impresión de que por cada uno de los fonts de tu web es necesario traerse nuevamente el css, pero no, no es necesario agregarlo más de una vez. Agregar muchos de estos links innecesarios impacta negativamente en la velocidad de carga de tu web, ya que por cada uno de ellos se hace un llamado a un css externo y se lo carga. 

Tenés tendencia a agregar divs innecesarios. Considerá por ejemplo el div con la clase "footer". Ya esta adentro de un footer, y no agrega ningun estilo que no se pueda poner en el footer, asi que podrias borrarlo sin consecuencias. 

Veo mal tu tipografia, ya que la que estas importando de google fonts es "Montserrat Alternates" pero en tu css usas "Montserrat". 


## Respeta la consigna

- El portfolio cuenta con las secciones solicitadas

Cumplido. 

- Al clickear en los links de navegación, debe llevar a la sección correspondiente

Cumplido.

- Al clickear en los links de contacto, debe llevar a la página externa correspondiente

No cumplido. No es necesario que agregues tus propias redes si es algo que preferís no hacer, pero
cualquier link a una web externa hubiera servido para cumplir la consigna.

- El portfolio debe tener un diseño responsivo y verse correctamente en distintos dispositivos

Tu portfolio no se ve perfecto en todas las resoluciones, pero sí se ve bien en general así que considero esto mayormente cumplido. Prestá atención al texto de tu cita en las resoluciones de celulares más pequeñas: le diste un width de 400px, asi que en cualquier celular menor a 400 esta seccion va a rebalsar provocando un scroll horizontal. Por otro lado, "mis proyectos" se ven tirados hacia la izquierda en resolución tablet. 

- El portfolio debe estar deployado y ser accesible desde una URL

Cumplido

- El repositorio en GitHub debe tener un readme adecuado

Cumplido

### Respeta el diseño dado

Cumplido 

### Buena estructura de proyecto

Cumplido. 

### Código bien indentado

Tabulas muy bien en html, lo cual parece un detalle extra cuando una recien comienza pero ayuda un monton a su legibilidad, y que lo hayas logrado en esta etapa es un gran mérito. Tenés tendencia a dejar saltos de linea innecesarios en el html, lo que dificulta bastante su lectura. 

En tu CSS el tabulado está perfecto, pero no dejas el espaciado correcto en cada orden. En lugar de escribir por ejemplo `.name{`, deja un espacio entre el nombre de la clase y la llave: `.name {`

### Comentarios que permiten mejorar la legibilidad del código

Impecables en HTML, lamentablemente ausentes en CSS, donde vendrían bien para separar los estilos de casa cosa.

### Uso correcto de etiquetas semánticas

- Me llama la atención que hayas usado `div` para las tarjetas de Mis Conocimientos y Mis Proyectos: yo diría que deberían ser `article`. Pero es el único detalle a comentar aquí (y hay quien podría discutirme que deberían ser divs)

- Usas los h2 de manera confusa, deberian ser el titulo de segunda jerarquia, pero en el formulario (que es una sola seccion) tenes dos h2. Deberia haber uno solo, o los dos deberian ser h3. 

### Buenos nombres de clases

En general, cumplido. Noto algunas clases que tienen identidades confusas y problemas con lo que consideramos "descriptivo". Cuando decimos que un nombre de clase debe ser descriptivo, lo decimos en un sentido funcional: qué rol cumple este elemento en el código. Idealmente, debería poder leer el CSS sin ir a mirar el HTML, porque tus nombres de clases me indicarían claramente qué es cada cosa. 


### Código CSS bien estructurado

Cumplido a nivel formal. Noto algunos estilos innecesarios o confusos, como por ejemplo tener dos clases en la seccion de cita que no se usan en ningun otro lado - por que no es una sola?

### Reutilización de estilos

Cumplido en general. 

### Cumple con criterios básicos de accesibilidad

El lenguaje de tu documento de HTML está en inglés, por lo que un lector de pantalla va a tratar de leer todos tus textos en inglés. El efecto es muy feo y confuso: pronuncian en inglés las palabras en español, así que si ven "generador de memes" van a leer "yiniradour di mims". Siempre tratá de que el atributo `lang` de tu HTML refleje el idioma de los textos en tu página.

- Los colores tienen un contraste adecuado

Incumplido, el color de fondo #F50157 no es apropiado para ser usado con un texto blanco. Siempre chequea con herramientas del tipo https://webaim.org/resources/contrastchecker/

- Las imágenes tiene el atributo `alt` que corresponde

Incumplido, los alt en general dicen "imagen" lo que es inservible para quien depende de un lector de pantalla. 

- Los íconos y elementos que no presentan texto agregan la información correspondiente por otros medios (etiquetas aria, texto oculto)

No cumplido, por ejemplo en los links a redes sociales de tu footer. Necesitan un aria.

- Los íconos y elementos que no necesitan ser anunciados por un lector de pantalla tienen la etiqueta aria
  correspondiente

No cumplido. 

- Commits con mensajes adecuados

Cumplido, noto muchos y buenos commits en tu proyecto, lo que siempre se agradece.

- Cuenta con un favicon

Cumplido

### Nota: 8
