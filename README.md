# expo360portafolio

Portafolio web de una sola página para la feria **EXPO 360°** del IUT READIC UNIR.
Mobile-first, un solo archivo `index.html` autocontenido (sin dependencias ni CDNs externos).

**URL activa:** https://zerogravityclone.github.io/expo360portafolio/

## Estructura

| Archivo | Descripción |
|---|---|
| `index.html` | Sitio final publicado (generado) |
| `index.template.html` | Plantilla con placeholders `{{VAR}}` |
| `.dev.vars` | Datos de contacto y enlaces — **no se commitea** (ver `.gitignore`) |
| `build.mjs` | Genera `index.html` inyectando `.dev.vars` en la plantilla |

## Desarrollo

1. Editar datos en `.dev.vars` o textos en `index.template.html`
2. Regenerar el sitio:

```powershell
node build.mjs
```

## Publicación

GitHub Pages desde la rama `main`, raíz `/`.
