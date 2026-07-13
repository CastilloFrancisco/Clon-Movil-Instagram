# Clon Movil Instagram

Una aplicación móvil clon de Instagram desarrollada con Expo y React Native. Incluye feed, perfil, historias, detalles de publicaciones y un diseño inspirado en Instagram.

## Características

- Feed con posts cargados desde una API de gatos.
- Navegación principal con pestañas: Home, Reels, Search, Mensajes y Perfil.
- Pantalla de perfil con mosaico de imágenes responsivo.
- Detalle de publicación con likes, comentarios y contador de compartidos.
- Manejo de safe area para dispositivos con bordes y barras de sistema.

## Tecnologías

- Expo
- React Native
- React Navigation
- Axios
- lucide-react-native
- react-native-safe-area-context

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd Clon-Movil-Instagram
   ```
3. Instala dependencias:
   ```bash
   npm install
   ```

## Ejecución

- Iniciar en modo desarrollo:
  ```bash
  npm start
  ```

- Abrir en Android:
  ```bash
  npm run android
  ```

- Abrir en iOS:
  ```bash
  npm run ios
  ```

- Abrir en web:
  ```bash
  npm run web
  ```

## Estructura del proyecto

- `App.js` - Punto de entrada principal de la app.
- `index.js` - Registro del componente raíz con Expo.
- `src/navegación` - Navegación del app.
- `src/pantallas` - Pantallas principales como Home, Profile y Post.
- `src/componentes` - Componentes reutilizables.
- `src/apis` - Lógica para llamadas a APIs.
- `assets` - Recursos estáticos.

## Notas

- Asegúrate de tener instalada una versión compatible de Expo y Node.js.
- Si usas un dispositivo físico, conecta el teléfono en la misma red que el servidor de desarrollo.
- El proyecto utiliza `react-native-safe-area-context`, por lo que se incluye `SafeAreaProvider` en `App.js`.
