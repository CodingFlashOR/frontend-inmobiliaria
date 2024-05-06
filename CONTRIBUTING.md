# 1. Contribuyendo a nuestro proyecto

¡Saludos y bienvenidos a nuestro proyecto! Estamos encantados con su interés en contribuir. Este documento sirve como una guía completa, brindándole información sobre cómo configurar su entorno de desarrollo y describiendo las pautas a seguir al modificar archivos o realizar contribuciones.

## 1.1. Estándares de codificación

Para el desarrollo de este proyecto, utilizamos la biblioteca [ESLint](https://eslint.org/) junto con una configuración especial para formatear código TypeScript. Además, utilizamos Husky para administrar hooks de Git personalizados. Estas herramientas nos ayudan a mantener un estilo de código coherente en todos los archivos TypeScript del proyecto y a mantener el historial de commits en línea con el estándar [ConventionalCommits](https://www.conventionalcommits.org/en/v1.0.0/). Estas bibliotecas ya están configuradas en el proyecto; sin embargo, para que funcionen correctamente, se deben seguir los siguientes pasos:

- **Paso 1 (Instalación de los hooks):** Un hook de Git es un script que Git ejecuta antes o después de eventos como **commit**, **push** o **merge**. Estos enlaces se utilizan para automatizar tareas en el flujo de trabajo de desarrollo, como aplicar un formato de mensaje de confirmación, ejecutar pruebas antes de realizar una confirmación o incluso verificar el estilo del código. Este proyecto incluye dos hooks personalizados que garantizan que el código tenga el formato correcto y que el mensaje de confirmación cumpla con el estándar **ConventionalCommits**. Para inicializar estas validaciones, debes ejecutar los siguientes comandos.

    > [!NOTE]
    > Ignora el mensaje **install command is deprecated** que se muestra por consola.

    ```bash
    npx husky install
    ```

    Este comando inicializará la configuración de los hooks del proyecto en su repositorio local; estos hooks se encargarán de validar que se siga el estándar para commits y el formato de estilo de código establecido en el proyecto cada vez que quieras realizar un commit.

## 1.2. Directrices para los commits

Para realizar un commit con éxito, el código debe tener el formato de estilo correcto y el mensaje del commit debe seguir el estándar ConventionalCommits. Observa los siguientes casos de uso:

- **Un archivo o varios con formato de estilo incorrecto:** Si durante el proceso de confirmación falla debido a que un archivo no tiene el formato de estilo de código correcto, el hook de Git encargado de esta validación realizará los cambios necesarios en el archivo y lo preparará para su confirmación; luego de esto, podrás intentar la confirmación nuevamente.

    > [!NOTE]
    > Para evitar este problema, debes tener instalada en tu vscode la extensión de ESLint, esta extensión utilizara la configuración del proyecto.

- **Mensaje de confirmación inválido:** Si el mensaje de confirmación no sigue el estándar ConventionalCommits, se cancelará el proceso; luego de esto, tendrás que modificar tu mensaje de tal forma que siga todas las reglas del estándar antes mencionado.

# 2. Principios de la Comunidad

Por favor, sé respetuoso y considerado con los demás. Seguimos el [Código de conducta del Pacto del colaborador](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).