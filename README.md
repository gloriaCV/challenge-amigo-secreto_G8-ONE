# Amigo Secreto

Aplicación web para gestionar una lista de amigos y sortear uno de manera aleatoria, deshabilitando a los amigos ya seleccionados para futuros sorteos.



## Características principales ✨
- **Agregar amigos**: Ingresa nombres a través de un campo de texto.
- **Validación de entrada**: Evita nombres vacíos con alertas de error.
- **Lista interactiva**: Visualiza todos los amigos agregados en tiempo real.
- **Sorteo aleatorio**: Selecciona un amigo al azar usando `Math.random()`.
- **Deshabilitar amigos seleccionados**: Los amigos sorteados se marcan como no disponibles para próximos sorteos.

## Cómo usar 🚀

### Requisitos previos
- Navegador web moderno (Chrome, Firefox, Safari, etc.).

### Instalación
1. Clona el repositorio:
   ```
   git clone https://github.com/gloriaCV/challenge-amigo-secreto_G8-ONE.git
   ```
2. Abre el archivo index.html en tu navegador.

### Funcionalidades

- **Agregar Amigo:**
  - Escribe un nombre en el campo de texto y presiona <kbd>Enter</kbd> o haz clic en el botón "Agregar".
  
- **Realizar el Sorteo:**
  - Haz clic en el botón "Sortear" para seleccionar un amigo aleatoriamente.
  - El nombre del amigo sorteado se mostrará y se marcará como seleccionado en la lista.

- **Reiniciar la Lista:**
  - Recarga la página para limpiar todos los datos.

### Estructura del Proyecto 🧩

````plaintext
.
├── assets              # Imágenes y otros recursos multimedia
├── app.js              # Lógica principal en JavaScript (gestión de arrays, eventos, sorteos)
├── index.html          # Estructura principal HTML
├── style.css           # Estilos (CSS)
└── README.md           # Documentación del proyecto
````

### Tecnologías Utilizadas 💻

- **HTML5:** Define la estructura y semántica de la aplicación.
- **CSS3:** Proporciona la estilización básica y responsive.
- **JavaScript:** Implementa la manipulación del DOM y la lógica interactiva.

## Principales Funciones del Código

- `agregarAmigo()`: Gestiona la entrada de nombres y valida que no estén vacíos.
- `actualizarListaAmigos()`: Renderiza y actualiza dinámicamente la lista de amigos.
- `sortearAmigo()`: Ejecuta la lógica del sorteo y deshabilita a los amigos ya seleccionados.


## Ejemplo de Uso 📝

1. **Agrega Nombres:**
   - Ingresa: `"Ana"` y presiona [Agregar] o <kbd>Enter</kbd>.
   - Luego, ingresa `"Carlos"` de la misma forma y repite el proceso según sea necesario.

2. **Realiza un Sorteo:**
   - Haz clic en "Sortear".
   - Ejemplo de resultado: "El amigo sorteado es: Ana".
   - La lista se actualizará; una vez que se hayan seleccionado todos los amigos, aparecerá un aviso indicando que no quedan más amigos disponibles para sortear.

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si deseas colaborar:

1. Realiza un *fork* del repositorio.
2. Crea una rama para tu nueva funcionalidad:
   ```bash
   git checkout -b nueva-funcionalidad
   ````
3. Realiza tus cambios y haz commit:
   ````bash
   git commit -m "Agrega nueva funcionalidad"
   ````
4. Sube tus cambios a tu fork:
   ````bash
   git push origin nueva-funcionalidad
   ````
5. Abre un Pull Request para revisar e integrar tus aportes.

## Contacto ✉️

Para sugerencias, preguntas o cualquier consulta, puedes contactarme a través de [gloria.cisternas@gmail.com](mailto:gloria.cisternas@gmail.com).

---

Este proyecto es ideal para aprender y practicar conceptos básicos de manipulación del DOM, gestión de arrays en JavaScript y manejo de eventos interactivos. ¡Esperamos que disfrutes explorándolo y contribuyendo a su mejora!

