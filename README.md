# Aplicación Web Inmobiliaria Bonpland
> [!NOTE]
> Este proyecto aun está en desarrollo, el equipo de <a href="https://github.com/CodingFlashOR" target="_blank">CodingFlash</a>

<div>
    <a href="https://dev-inmobiliaria.netlify.app" target="_blank">
        <img src="/images/InmobiliariaBonplandBanner.png">
    </a>
</div>

En este repositorio encontrarás el código fuente del frontend para la plataforma de gestión de inmuebles de la Inmobiliaria Bonpland.

## 1. Descripción del proyecto
Este proyecto tiene como objetivo principal la creación de una plataforma web interactiva y amigable para el usuario, enfocada en mejorar la experiencia del cliente en línea y la eficiencia de los servicios de la inmobiliaria. Desde la perspectiva del frontend, se destacan las siguientes características y funcionalidades clave:

- **Diseño Responsivo:** El frontend estará diseñado con un enfoque totalmente responsive, asegurando una experiencia de usuario consistente y optimizada en todos los dispositivos, desde ordenadores de escritorio hasta dispositivos móviles.

- **Interfaz Intuitiva:** Se implementará una interfaz de usuario intuitiva y de fácil navegación. Los elementos visuales, como menús, botones y formularios, se diseñarán para ser claros y accesibles, facilitando así la interacción de los usuarios con la plataforma.

- **Búsqueda:** El frontend contará con herramientas de búsqueda que permitirán a los usuarios buscar propiedades de manera eficiente utilizando filtros como ubicación, tipo de propiedad, precio, tamaño, entre otros criterios relevantes.

- **Visualización de Propiedades:** Se incluirán galerías de imágenes de alta calidad y descripciones detalladas de las propiedades, asegurando que los usuarios puedan obtener toda la información necesaria antes de tomar decisiones importantes.

- **Funcionalidades Personalizadas:** Para los buscadores de propiedades, se ofrecerán funcionalidades personalizadas como la posibilidad de guardar propiedades favoritas, recibir notificaciones sobre nuevas propiedades que cumplan con sus criterios de búsqueda y acceder a historiales de búsqueda.

- **Gestión de Cuentas de Usuario:** El frontend permitirá a los usuarios registrarse fácilmente, iniciar sesión de manera segura, actualizar su información personal, restablecer contraseñas de forma segura y gestionar sus preferencias de comunicación.

- **Dashboard para Administradores:** Los administradores tendrán acceso a un dashboard completo y personalizable desde el cual podrán gestionar todas las actividades y aspectos del sistema, incluyendo:

    - **Gestión de propiedades:** Publicación, edición y eliminación de propiedades, gestión de imágenes y documentos asociados.

## 2. Tecnologías

<div>
    <img src="/images/TechnologiesFrontendIB.png">
</div>

## 3. Instalación del proyecto
> [!NOTE]
> Asegúrese que Node v20 esté instalado en su sistema operativo.

- **Paso 1 (clonar repositorio):** Para clonar este repositorio ejecuta los siguientes comandos.
    
    ```bash
    git clone https://github.com/CodingFlashOR/frontend-inmobiliaria.git
    cd frontend-inmobiliaria
    ```

- **Paso 2 (instalar dependencias):** Ejecute el siguiente comando para instalar todas las dependencias necesarias.

    ```bash
    npm install
    ```

- **Paso 3 (iniciar servidor):** Para levantar el servidor de desarrollo en local ejecuta el siguiente comando.

    ```bash
    npm run dev
    ```

## 4. Comandos disponibles
- `npm run dev`: Este comando inicia el servidor de desarrollo y compila los estilos CSS. Es la opción ideal durante la fase de desarrollo, ya que proporciona actualizaciones en tiempo real y facilita la depuración de código.
- `npm run build`: Utilice este comando para compilar el proyecto en una versión lista para producción. Este paso optimiza los recursos y prepara el proyecto para su despliegue en un entorno de producción.
- `npm run lint`: Ejecuta ESLint en el proyecto, lo que permite identificar y corregir errores de sintaxis y estilo en el código JavaScript en base a la reglas establecidas en el proyecto.
- `npm run preview`: Este comando proporciona una vista previa de la versión de producción del proyecto. Es útil para verificar el funcionamiento y la apariencia final antes de su despliegue definitivo.

## 5. Variables de entorno

Para ejecutar este proyecto, necesitas configurar las siguientes variables de entorno:

- `VITE_API_URL`: URL base de la API.
  - Ejemplo: `https://carlosandresaguirreariza.pythonanywhere.com`
- `VITE_API_URL_AUTH`: URL para la autenticación JWT.
  - Ejemplo: `https://carlosandresaguirreariza.pythonanywhere.com/api/v1/auth/jwt/`
- `VITE_API_URL_AUTH_REG`: URL para la búsqueda de usuarios.
  - Ejemplo: `https://carlosandresaguirreariza.pythonanywhere.com/api/v1/user/searcher/`
- `VITE_PORT`: Puerto en el que se ejecutará el servidor de desarrollo.
  - Ejemplo: `5403`

## 6. Contributores
Si está interesado en contribuir a este proyecto, consulte nuestra guía [CONTRIBUTING](CONTRIBUTING.md) para obtener información sobre cómo comenzar. Proporciona pautas sobre cómo configurar su entorno de desarrollo, proponer cambios y más. ¡Esperamos sus contribuciones!

## 7. Documentación
| Título | Descripción | 
|----------|----------|
| [Especifcación de requerimientos](https://writer.zoho.com/writer/open/gvaj1411213d7d4bb4c818860a3bea679ecbb) | Este documento detalla los requerimientos funcionales, no funcionales y el comportamiento de las diferentes interfaces del sistema. |
| [Base de datos](https://app.diagrams.net/?title=EsquemaDB.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1uJAsYcVnTEviwOq5JZ_q_2VWnpvgPfBd%26export%3Ddownload)   | Esquema de la base de datos del proyecto. |
| [Documentación de la API](https://carlosandresaguirreariza.pythonanywhere.com/) | Esta es la documentación para la API del proyecto, que incluye detalles sobre los endpoints disponibles y los datos que se pueden enviar y recibir. |

## 8. Repositorios relacionados
- [Repositorio Principal](https://github.com/CodingFlashOR#11-inmobiliaria-bonpland).
- [Repositorio Backend](https://github.com/CodingFlashOR/backend-inmobiliaria).

## 9. Colaboradores
Las siguientes personas son las encargadas de desarrollar este proyecto.

| Nombre | Enlaces | Roles |
|----------|:--------:|:--------:|
| Lucas A Bravi | [LinkedIn](https://www.linkedin.com/in/lucasandr%C3%A9sbravi/) - [Portafolio](https://lucasbravidi1062b1.myportfolio.com/) | Diseño UX/UI |
| Anabel García Lannes | [LinkedIn](https://www.linkedin.com/in/anabelgarc%C3%ADalannes/) - [GitHub](https://github.com/anabelgl) | Diseño UX/UI |
| Flor Rivas Luna | [LinkedIn](https://www.linkedin.com/in/floridesign/) - [GitHub](https://github.com/FlorRivas) - [Behance](https://www.behance.net/floridesign) | Diseño UX/UI |
| Leandro Emanuel Diaz | [GitHub]( https://github.com/leandiazz) - [LinkedIn](https://www.linkedin.com/in/leandiaz/) | Frontend |
| Ignacio Nicolas Basilio Buracco | [GitHub](https://github.com/NachoBasilio) - [LinkedIn](https://www.linkedin.com/in/ignacio-nicolas-basilio-buracco/) | Frontend |
| Carlos Andres Aguirre Ariza | [GitHub](https://github.com/The-Asintota) - [LinkedIn](https://www.linkedin.com/in/carlosaguirredev/) | Backend - Frontend |
| Nadia Mariana | [LinkedIn](https://www.linkedin.com/in/nadia-mariana-fridel-490ab263/) | QA |
| Yisell Coello Labrada | [LinkedIn](https://www.linkedin.com/in/yisell-coello-labrada-725668250/) | QA |
