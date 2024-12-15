# P3.1 Maquetación con Vite y SASS

> S2DAW Diseño Web
> Autor: Lucas Hernández

## 1. Descripción

Esta es mi aplicación web hecha usando **Vite** para la programación, **SCSS** para los estilos y **GitHub** para el control de versiones y **Pages** para el despliegue de la propia web.
La estructura del proyecto es la siguiente:

![ruta](assets/Captura%20de%20pantalla%202024-12-04%20205657.png "")


El fondo de la página está hecho con el gradiente de 3 colores como en el diseño original de Figma usando el siguiente codigo:

```markdown

body {
  background: linear-gradient(
    to bottom,
    $color-grandiente-fondo-alto,
    $color-grandiente-fondo-medio,
    $color-grandiente-fondo-bajo
  );
}

```


El JavaScript ["titulos.js"](titulos.js) ha sido necesario para las Letras de colores del H1 del ["index.html"](index.html) porque con SCSS dejaba un margen entre cada letra aunque lo hiciera con la etiqueta span:

![ruta](assets/Captura%20de%20pantalla%202024-12-04%20210844.png "")

Al hacer click en el botón de Registrarse te redirecciona a el segundo HTML del proyecto, ["registrarse.html"](registrarse.html)

El fondo del primer div del main está hecho con un gradiente arcoiris diagonal:

```markdown
 div.arcoiris {
        border-radius: 100px;
        margin-left: 2rem;
        background: linear-gradient(
          to bottom right,
          $color-gradeinte1,
          $color-gradeinte2,
          $color-gradeinte3,
          $color-gradeinte4,
          $color-gradeinte5,
          $color-gradeinte6,
          $color-gradeinte7,
          $color-gradeinte8,
          $color-gradeinte9,
          $color-gradeinte1
        );
 }
```

La decoración azul de los div con texto está hecho usando posicion absoluta y before como en la práctica de Abogados

```markdown
    p {
          font-size: 1.7rem;
          margin-left: 3rem;
          margin-top: 2rem;
          font-family: $font-parrafos;
          &::before {
            content: "";
            position: absolute;
            bottom: 0px;
            top: 444px;
            left: 860px;
            width: 15px;
            height: 400px;
            background-color: $color-by;
          }
          }

```

El fondo con patrón de ajedrez del tercer div es una imagen que me dio problema al subirla al GitHub Pages porque en el nombre del png habia un espacio y también la ruta de la imagen daba error al desplegarla en GitHub Pages

## 3. Secciones del diseño


En ["_header.scss"](styles/_header.scss) el menú lo quise hacer estilando el html con clases pero la altura de los 3 segmentos internos no se más grande aunque lo cambie en:
```markdown
        .menu {
      width: 60px;               
      height: 50px;            
      background-color: $color-botones;
      display: flex;             
      flex-direction: column;    
      justify-content: space-around; 
      align-items: center;      
      border: 1px solid $color-border; 
      
  
      .line {
          width: 45px;          
          height: 9px;        
          background-color: $color-negro;
      }
  }

 ```
 En ["_layout.scss"](styles/_layout.scss) está la parte main de la página. No he tenido mucho problema en hacer el diseño.

En ["_footer.scss"](styles/_footer.scss) están los iconos de las redes sociales usando imagenes exportadas de Figma porque a los iconos de !fa no les he podido cambiar el color y usando posicion absoluta porque con display:flex no conseguia que quedaran como en el diseño

```markdown
        <div>
        <div class="uno"><img src="assets/face.png" alt=""></div>
        <div class="dos"><img src="assets/icon-instagram.png" alt=""></div>
        <div class="tres"><img src="assets/link.png" alt=""></div>
      </div>

 ```
![ruta](assets/Captura%20de%20pantalla%202024-12-05%20112530.png "")

 En ["_variables.scss"](styles/_variables.scss) están todas las variables que he usado, tanto como colores, fuentes y tamaños.

En ["_mixins.scss"](styles/_mixins.scss) están los tamaños para implementar las mediaquerys para el diseño movil, que he cambiado en cada etiqueta y clase lo imprescindible para que se vea bien tanto en mi portatil como en el iPhone 14 pro usando el plugin de Chrome Responsive Viewer.

## 4. Proyecto terminado

![ruta](assets/Captura%20de%20pantalla%202024-12-05%20114426.png "")
![ruta](assets/Captura%20de%20pantalla%202024-12-05%20114440.png "")
![ruta](assets/Captura%20de%20pantalla%202024-12-05%20114453.png "")
![ruta](assets/Captura%20de%20pantalla%202024-12-05%20114141.png "")
 
 <video width="640" height="360" controls>
  <source src="assets/Grabación de pantalla 2024-12-05 115342.mp4" type="video/mp4">
  Tu navegador no soporta la reproducción de videos.
</video>

## 4. Enlaces de interés

[Enlace a la página desplegada en GitHub Pages](https://luchernan.github.io/vite-project1/)
[Figma](https://www.figma.com/design/toTQn1HGnD1L4an5Ra3Lmr/ProyectoLucas?node-id=0-1&t=R4WPblua0uOVvPNL-1)
