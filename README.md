# MusicSurvey

MusicSurvey es una aplicación de encuesta sobre estilos musicales desarrollada con Angular y Spring Boot. Permite a los usuarios votar por su estilo musical favorito y ver los resultados en un gráfico de pastel.

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.1.2 y utiliza Spring Boot para el backend.

## Despliegue

Para desplegar la aplicación en un entorno local o en un servidor, sigue estos pasos:

### Backend (Spring Boot)

1. **Configura el Backend**:

- Asegúrate de que Java JDK 21 esté instalado.
- Navega al directorio del backend: `cd music-survey`
- Ejecuta el comando Maven para construir y ejecutar el backend: `mvn spring-boot:run`
- El backend estará disponible en `http://localhost:8088`.

2. **Configura la Base de Datos**:

- La aplicación usa una base de datos en memoria H2. Asegúrate de que la configuración en `application.properties` esté correcta para tu entorno.

### Frontend (Angular)

1. **Instala las Dependencias**:

- Navega al directorio del frontend: `cd frontend`
- Instala las dependencias necesarias: `npm install`

2. **Configura el Proxy** (si es necesario):

- Asegúrate de que el archivo `proxy.conf.json` esté configurado correctamente para redirigir las solicitudes API al backend.

3. **Ejecuta el Servidor de Desarrollo**:

- Inicia el servidor de desarrollo con: `ng serve`
- La aplicación estará disponible en `http://localhost:4200`.

## Uso de la Aplicación

- **Encuesta**: Navega a `/survey` para acceder al formulario de encuesta donde puedes ingresar tu correo electrónico y seleccionar tu estilo musical favorito.
- **Resultados**: Navega a `/results` para ver los resultados de la encuesta en una tabla y un gráfico de pastel.


### 1. Clonar el Repositorio backend


git clone https://github.com/tu-usuario/music-survey.git 

### 2. Clonar el Repositorio frontend

git clone https://github.com/BillyAlvarez/music-survey-frontend.git


