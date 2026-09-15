# Gemini Notebook para administrativos CECAR

Presentación web estática para una capacitación virtual sobre consulta documental verificable con Gemini Notebook.

## Abrir localmente

Desde la raíz del proyecto:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Abre `http://127.0.0.1:4173/`.

## Controles

- `←`, `Page Up`: diapositiva anterior.
- `→`, `Page Down`, `Espacio`: diapositiva siguiente.
- `Home`, `End`: primera o última diapositiva.
- `F`: activar o salir de pantalla completa.
- `N`: abrir las notas del facilitador en una ventana separada.

Los controles también están disponibles en pantalla. La URL conserva el número de diapositiva, por ejemplo `#8`.

## Materiales

- `index.html`: presentación principal.
- `guia.html`: guía imprimible con cinco prompts y recursos oficiales.
- `notes.html`: notas locales del facilitador sincronizadas por diapositiva.
- `docs/`: documentos institucionales usados en las demostraciones.

## Privacidad de las notas

Las notas están diseñadas para una segunda ventana y no para la pantalla compartida. No contienen credenciales ni datos personales, pero sí material de facilitación que no debe publicarse.

El flujo de GitHub Pages crea una lista explícita de archivos públicos y excluye `notes.html`, `PRODUCT.md` y `DESIGN.md`. Publica únicamente los tres PDF públicos utilizados en las demostraciones. En el sitio publicado, el control de notas se oculta. `notes.html` permanece únicamente en la copia local y está excluido del repositorio mediante `.gitignore`.

## Publicar en GitHub Pages

1. Crea un repositorio y usa `main` como rama principal.
2. En GitHub, abre **Settings → Pages**.
3. Selecciona **GitHub Actions** como fuente de despliegue.
4. Envía los archivos a `main` o ejecuta manualmente el flujo **Deploy public training site**.

El flujo `.github/workflows/pages.yml` publica únicamente la presentación, la guía y sus activos.

## Uso responsable

No cargues datos personales, calificaciones, historiales disciplinarios ni información institucional sensible. Usa documentos públicos, autorizados, anonimizados o ficticios y valida toda respuesta antes de emplearla en una comunicación o decisión oficial.
