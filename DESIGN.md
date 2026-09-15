---
name: "Gemini Notebook para administrativos CECAR"
description: "Un expediente institucional de capacitación construido con folios, tinta CECAR y controles documentales."
colors:
  institutional-green: "#0d5946"
  institutional-green-dark: "#173f35"
  institutional-green-soft: "#d9e9df"
  ink: "#14211d"
  muted-ink: "#50625b"
  paper: "#f7f3e8"
  paper-deep: "#ebe4d2"
  clean-paper: "#fffdf7"
  canvas: "#ced5cf"
  rule: "#b8b4a8"
  control-amber: "#d6942f"
  warning-red: "#a63c2f"
  warning-paper: "#f6e8e3"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.8rem)"
    lineHeight: 0.95
  body:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(0.8rem, 1.25vw, 1rem)"
    fontWeight: 700
    letterSpacing: "0.13em"
components:
  presenter-control:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.clean-paper}"
    padding: "0.75rem 1rem"
  presenter-control-hover:
    backgroundColor: "{colors.institutional-green}"
    textColor: "{colors.clean-paper}"
  document-sheet:
    backgroundColor: "{colors.clean-paper}"
    textColor: "{colors.ink}"
    padding: "1.5rem"
  verified-sheet:
    backgroundColor: "{colors.institutional-green-dark}"
    textColor: "{colors.clean-paper}"
    padding: "2rem"
  warning-strip:
    backgroundColor: "{colors.warning-red}"
    textColor: "{colors.clean-paper}"
    padding: "0.8rem 1rem"
---

# Design System: Gemini Notebook para administrativos CECAR

## Overview

**Creative North Star: "El Expediente Verificable"**

La interfaz adopta el lenguaje material de una carpeta de trámite: folios marfil, reglas finas, pestañas, sellos, códigos de archivo y hojas superpuestas. La composición se siente institucional y manual sin imitar software de oficina ni una presentación tecnológica genérica. Cada recurso visual refuerza control, trazabilidad y lectura de evidencia.

La presentación es el expediente abierto: una hoja principal ocupa el escenario, el riel lateral identifica el archivo y la barra inferior funciona como pestaña operativa. La guía prolonga ese mismo mundo como documento de consulta e impresión, con una cabecera institucional, hojas de prompts y registros de recursos.

**Key Characteristics:**

- Folios marfil sobre un escritorio gris verdoso.
- Jerarquía condensada, grande y directa junto a texto de lectura sereno.
- Bordes rectos, reglas de archivo y contraste por bloques antes que decoración.
- Verde CECAR como tinta institucional; rojo y ámbar como señales de control.
- Logotipo institucional sobre campo verde oscuro o integrado en cierres oscuros.

## Colors

La paleta combina verdes institucionales con papeles cálidos y tintas apagadas; los acentos de alerta se reservan para decisiones y estados que requieren atención.

### Primary

- **Verde institucional:** tinta de pestañas, enlaces, pasos, líneas de trazabilidad y estados activos.
- **Verde institucional oscuro:** cabeceras, folios seleccionados, cierres, barra de controles y grandes campos de contraste.
- **Verde institucional suave:** fondos de prompts, texto secundario sobre verde oscuro y apoyo tonal.

### Secondary

- **Ámbar de control:** foco visible y avance de la presentación. No funciona como color decorativo.
- **Rojo de advertencia:** sellos de detención y franjas de prohibición.
- **Papel de advertencia:** fondo cálido y tenue para avisos extensos sin competir con el rojo.

### Neutral

- **Tinta:** texto principal y barra operativa.
- **Tinta atenuada:** explicaciones, metadatos y letra pequeña.
- **Papel:** superficie base de diapositivas y guía.
- **Papel profundo:** variación de folio para advertencias y canales de desplazamiento.
- **Papel limpio:** hojas interiores, tarjetas documentales y texto sobre fondos oscuros.
- **Lienzo:** plano exterior gris verdoso que hace visible el folio.
- **Regla:** divisores, tablas y contornos documentales.

**The Control Color Rule.** El ámbar y el rojo solo aparecen para foco, progreso, tiempo o advertencia; nunca para ambientación.

**The Paper Before White Rule.** Las superficies extensas usan papel marfil. El papel limpio se reserva para hojas interiores y contraste puntual.

## Typography

**Display Font:** Barlow Condensed, con Arial Narrow y sans-serif como respaldo.

**Body Font:** Source Sans 3, con Arial y sans-serif como respaldo.

**Character:** Barlow Condensed aporta el tono de rótulo, sello y encabezado de expediente. Source Sans 3 sostiene párrafos, instrucciones y recursos con una voz administrativa clara y legible.

### Hierarchy

- **Display:** peso 800, línea muy compacta y ancho limitado; se usa en la portada y admite saltos contundentes.
- **Headline:** peso 700, línea compacta y ancho máximo aproximado de 17 caracteres; encabeza cada folio.
- **Title:** escala intermedia condensada para nombres de herramientas, salidas y secciones internas.
- **Body:** peso 400 con interlínea 1.45 en la presentación y 1.55 en la guía; la lectura larga se limita a 72 caracteres.
- **Label:** peso 700, mayúsculas y espaciado amplio; identifica secciones, tipos de documento, estados y metadatos.
- **Numeric controls:** la barra, los límites y los códigos usan cifras tabulares cuando el valor cambia.

**The Two-Voice Rule.** La tipografía condensada nombra y ordena; la tipografía de cuerpo explica. No se intercambian sus funciones.

## Layout

La presentación ocupa el viewport completo y contiene un folio centrado de hasta 92rem. El lienzo exterior deja margen variable, el riel de expediente se lee en vertical y la barra del presentador queda anclada abajo. Cada diapositiva es un folio absoluto con relleno fluido; el contenido puede desplazarse dentro de la hoja cuando la altura disponible es insuficiente.

Las composiciones internas traducen operaciones administrativas en estructuras reconocibles: registros de dos columnas, contratos divididos, líneas de tiempo, secuencias de cinco controles, borrador conectado con fuente, hojas de entrada y salida, pestañas de página y tickets de éxito. El sistema usa cuadrículas, reglas y alineación para mostrar relaciones; no acumula tarjetas intercambiables.

La guía usa una hoja central de hasta 72rem, cabecera en dos columnas y contenido con relleno fluido. Los prompts son hojas independientes; los recursos se presentan como registros de etiqueta y detalle.

A 820px o menos, la presentación pierde el margen de escritorio, el riel lateral y la sombra; las composiciones pasan a una columna, los flujos se apilan y las conexiones horizontales se vuelven verticales. La barra inferior se reorganiza en una cuadrícula de cuatro columnas y ocupa todo el ancho. A 700px o menos, la guía ocupa el ancho completo, apila cabecera, avisos y registros. En pantallas de escritorio con menos de 820px de alto se reducen rellenos, títulos y alturas mínimas para preservar el escenario.

**The Trámite Composition Rule.** Cada bloque debe expresar una relación documental concreta: secuencia, comparación, evidencia, transformación o control. Una cuadrícula sin esa función no pertenece al sistema.

## Elevation & Depth

La profundidad es híbrida y sobria. El folio principal se eleva del lienzo mediante una sombra ambiental amplia; las hojas de prompt reciben una sombra menor y una rotación mínima para sugerir papel manipulado. El resto de la jerarquía se consigue con campos tonales, reglas y solapamientos, no con sombras repetidas.

### Shadow Vocabulary

- **Folio principal** (`0 1.25rem 3rem rgba(20, 33, 29, 0.18)`): separa la presentación del escritorio.
- **Guía** (`0 1.25rem 3rem rgba(20, 33, 29, 0.16)`): eleva el documento de apoyo en pantalla.
- **Hoja de prompt** (`0 0.75rem 1.75rem rgba(20, 33, 29, 0.1)`): marca una pieza documental manipulable dentro del folio.

**The One Raised Folio Rule.** La sombra pertenece al documento completo y, de forma excepcional, a una hoja suelta. Los registros y paneles internos permanecen planos.

## Shapes

El lenguaje formal es ortogonal: esquinas rectas, bordes de un píxel, líneas divisorias y bloques de color. Una línea interior inset refuerza el perímetro del folio. Las pequeñas rotaciones de sellos, prompts y tickets introducen tactilidad sin romper el orden.

La única forma redondeada dominante es el sello circular de detención, construido con borde rojo doble y rotación. Los hitos del flujo usan pequeños cuadrados girados como conectores. No existe una escala general de radios ni cápsulas.

**The Square Archive Rule.** Contenedores, botones, hojas y pestañas mantienen esquinas rectas. La forma circular se reserva al sello de prohibición.

## Components

### Folio de presentación

- **Surface:** papel marfil con textura horizontal apenas visible, borde exterior e inset interior.
- **Composition:** encabezado condensado, pestaña subrayada y una estructura documental específica debajo.
- **Active state:** solo el folio activo se muestra; entra con un revelado lateral breve.

### Encabezado de folio

- **Title:** encabezado condensado de alto contraste y ancho deliberadamente corto.
- **Section tab:** etiqueta mayúscula verde con subrayado grueso que nombra fase, tiempo o propósito.

### Hojas y registros

- **Document sheets:** superficies de papel limpio con bordes finos y relleno entre 1.5rem y 2rem.
- **Verified sheets:** inversión a verde oscuro con texto claro para fuentes comprobadas, selección o criterio de éxito.
- **Ledgers:** filas divididas por reglas, con etiqueta condensada y detalle en tipografía de cuerpo.
- **Prompt sheets:** hoja limpia o verde suave; puede rotar un grado y, en la guía, usar borde verde discontinuo para aislar el texto reutilizable.

### Advertencias

- **Stop seal:** círculo rojo doble, sobredimensionado y rotado, acompañado por una instrucción textual completa.
- **Warning strip:** franja roja con texto blanco y peso alto para la regla no negociable.
- **Safety box:** papel de advertencia con borde rojo; en móvil pasa de etiqueta y mensaje en columnas a una sola columna.

### Buttons

- **Shape:** rectos, sin radio, con borde simple o separación por reglas.
- **Presenter controls:** texto claro sobre tinta; el hover cambia a verde institucional.
- **Print and notes controls:** botones transparentes con borde del color del texto; el hover invierte a papel limpio con texto verde oscuro.
- **Focus:** contorno ámbar de 0.2rem con separación de 0.2rem.
- **Disabled:** conserva el fondo y reduce el texto blanco a 40% de opacidad; elimina la expectativa de interacción mediante cursor no permitido.

### Presenter Navigation

- **Bar:** franja de tinta fija bajo el folio, dividida por reglas translúcidas.
- **Status:** índice actual, regla corta y total en tipografía condensada con cifras tabulares.
- **Progress:** línea ámbar de 0.2rem que escala desde el borde izquierdo con transición breve.
- **Mobile:** cuadrícula de controles a ancho completo, con segunda fila para reinicio, notas y pantalla completa.

### Links

- **Default:** verde oscuro en la presentación y verde institucional en la guía, siempre subrayados cuando viven en texto.
- **Focus:** comparte el contorno ámbar de los botones.
- **Closing action:** enlace sin subrayado, convertido en bloque de papel limpio sobre el cierre verde oscuro.

### Motion And States

- **Folio entry:** 420ms con curva `cubic-bezier(.16, 1, .3, 1)`; combina recorte desde la izquierda, desplazamiento de 1.25rem y recuperación suave de contraste.
- **Progress:** 260ms `ease-out` al cambiar de diapositiva.
- **Reduced motion:** elimina por completo la animación del folio y la transición del progreso.
- **Selection:** texto claro sobre verde institucional.

### Accessibility And Print

- **Keyboard:** enlaces y botones tienen foco visible ámbar; un enlace de salto aparece al recibir foco y lleva al contenido de la diapositiva.
- **Semantics:** el folio activo y los estados de navegación se anuncian mediante regiones vivas; el logotipo conserva texto alternativo y los trazos puramente visuales se ocultan a tecnologías de asistencia.
- **Legibility:** se mantiene un ancho mínimo de 20rem, tamaños fluidos, texto largo limitado y contraste fuerte entre tinta, papel y campos verdes.
- **Presentation print:** oculta riel, controles, progreso y salto; imprime todas las diapositivas como páginas consecutivas sin sombra ni marco exterior.
- **Guide print:** usa A4 con margen de 1.4cm, conserva colores de cabecera y avisos, evita cortes dentro de hojas de prompt y muestra la URL completa después de cada recurso.

## Do's and Don'ts

### Do:

- **Do** usar folios, reglas, pestañas, sellos y registros para hacer visible la trazabilidad documental.
- **Do** reservar el verde oscuro para campos institucionales, selección, evidencia y cierres.
- **Do** mantener la jerarquía condensada y de gran escala para lectura durante videollamada.
- **Do** transformar cuadrículas complejas en secuencias de una columna en móvil.
- **Do** ofrecer siempre estados de foco visibles, reducción de movimiento y una salida impresa legible.

### Don't:

- **Don't** redondear tarjetas y botones ni convertir la interfaz en una colección de cápsulas.
- **Don't** usar ámbar o rojo como decoración; comunican control, progreso, tiempo o riesgo.
- **Don't** añadir sombras a cada bloque interno; la profundidad se concentra en el folio y la hoja suelta.
- **Don't** reemplazar las composiciones de trámite por tarjetas tecnológicas genéricas.
- **Don't** ocultar URLs, avisos o evidencia cuando el documento se imprime.
