# Crítica de la Falla - Web Angular 21

Web sencilla para publicar la crítica de una falla, desarrollada con Angular 21 usando standalone components.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

### Build para Producción

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/critica-falla`

## 📝 Cómo Cambiar el Texto de la Crítica

Para modificar el contenido de la crítica, edita el archivo `src/app/translations.ts`:

```typescript
export const translations: Record<Language, Translations> = {
  val: {
    title: 'Tu título aquí',
    content: [
      'Tu primer párrafo...',
      'Tu segundo párrafo...',
      // Añade más párrafos según necesites
    ]
  },
  // ... otros idiomas
};
```

## 🎨 Personalización

### Cambiar el Logo

Reemplaza el SVG en `src/app/app.component.html` dentro de la sección `.logo-placeholder`, o añade una imagen:

```html
<div class="logo-placeholder">
  <img src="assets/logo-falla.png" alt="Logo Falla" />
</div>
```

### Colores

Los colores principales están definidos en `src/app/app.component.css`:
- Naranja principal: `#FF6B35`
- Naranja secundario: `#F7931E`
- Amarillo: `#FFD23F`

## 🌐 Idiomas

La aplicación incluye soporte para:
- **Valenciano** (por defecto)
- **Español**
- **Inglés**

El idioma seleccionado se guarda automáticamente en `localStorage`.

## 📱 Responsive

La web está optimizada para:
- Móviles (mobile-first)
- Tablets
- Escritorio

## 🚢 Despliegue

### Netlify

1. Build del proyecto: `npm run build`
2. Arrastra la carpeta `dist/critica-falla` a Netlify
3. O conecta tu repositorio Git para despliegue automático

### Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

## 🛠️ Tecnologías

- Angular 21
- Standalone Components
- Signals
- Angular Animations
- TypeScript 5.6
- CSS3 (Gradientes, Animaciones)

## 📄 Estructura del Proyecto

```
src/
├── app/
│   ├── app.component.ts      # Componente principal
│   ├── app.component.html    # Template HTML
│   ├── app.component.css     # Estilos del componente
│   └── translations.ts       # Traducciones
├── main.ts                    # Bootstrap de la aplicación
├── index.html                 # HTML principal
└── styles.css                 # Estilos globales
```
