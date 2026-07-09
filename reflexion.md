Este proyecto fue desarrollado con asistencia de inteligencia artificial. Es un clon de la interfaz movil de Instagram construido con React Native y Expo. La aplicacion incluye un feed de publicaciones, pantalla de detalle de post, perfil de usuario, y navegacion con tabs y stack. Todo el codigo fue generado a partir de instrucciones en lenguaje natural.

La estructura comenzo con la configuracion base de Expo. Se instalo react-navigation y se armo un bottom tab navigator con cinco pestanas: Home, Busqueda, Reels, Mensajes y Perfil. Home contiene un stack con Landing y Post. El feed se puebla con imagenes de gatos desde la CatAPI, mostrando cuatro publicaciones con usuario, avatar, ubicacion y likes.

El logo de Instagram paso por multiples versiones. Inicialmente era texto plano. Luego se creo un SVG con gradiente imitando el icono oficial de la camara con colores naranja, rosa, morado y azul. Despues se simplifico a solo el contorno negro. Finalmente se elimino, dejando solo el texto con la tipografia Pacifico, la fuente de Google mas parecida al lettering original de Instagram.

Los iconos del header y footer se modificaron varias veces. En el header se quito el avion de papel y se agrego un signo mas a la izquierda, quedando el corazon a la derecha y el texto centrado. En el footer se reorganizaron: donde estaba la claqueta se puso el avion de papel, donde estaba la lupa se puso SquarePlay (cuadrado con play), y la lupa se movio a la cuarta pestana.

Para la tipografia se instalo @expo-google-fonts/pacifico y se configuro App.js para cargar Pacifico_400Regular antes de renderizar, mostrando un ActivityIndicator mientras tanto.

Componentes sin uso fueron eliminados, como el directorio InstagramLogo y sus estilos. Tambien se limpio el import de ChevronLeft en Post.js y el estilo backButton en Styles.js que ya no se usaban. El archivo cambios.md fue renombrado a reflexion.md para documentar el proceso completo.

Cada cambio fue solicitado por el usuario en conversacion y la IA lo implemento inmediatamente, permitiendo un flujo de trabajo iterativo y rapido sin necesidad de escribir codigo manualmente. Esto incluyo desde cambios esteticos como reemplazar iconos y ajustar espacios, hasta cambios estructurales como reorganizar la navegacion y eliminar archivos completos.

Este proyecto muestra como la inteligencia artificial puede asistir en el desarrollo de aplicaciones moviles completas, desde la configuracion inicial hasta los detalles finos de diseno, adaptandose a cambios solicitados sobre la marcha mediante instrucciones conversacionales en lenguaje natural.