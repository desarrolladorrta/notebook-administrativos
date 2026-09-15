# **Documento de Diseño: Capacitación NotebookLM para Personal Administrativo CECAR**

---

Este documento consolida la estrategia, estructura y contenido para la capacitación virtual de 90 minutos dirigida al personal administrativo de la Corporación Universitaria del Caribe (CECAR). El objetivo es demostrar la aplicabilidad de Gemini Notebook (anteriormente NotebookLM) en la optimización de procesos y mejora de la productividad administrativa.

## **1\. Parámetros Generales de la Sesión**

> * **Duración:** 90 minutos (1 hora y media).  
> * **Modalidad:** Virtual (a través de Google Meet).  
> * **Audiencia:** Personal administrativo de diversas dependencias de CECAR (Registro y Control, Talento Humano, Decanaturas, Biblioteca, etc.).  
> * **Enfoque Principal:** Gestión del conocimiento, consulta documental profunda, síntesis de información institucional y ahorro de tiempo en procesos normativos.  
> * **Restricción Crítica:** Énfasis absoluto en la política de privacidad (No subir datos personales, calificaciones, ni historiales disciplinarios de estudiantes).

## **2\. Adaptación de Conceptos (De la versión para estudiantes)**

Los siguientes conceptos de la presentación original ([https://osber00.github.io/notebook/\#1](https://osber00.github.io/notebook/#1)) deben ser refactorizados para el contexto administrativo:

| Concepto Original (Estudiantes) | Adaptación Administrativa&nbsp;&nbsp; |
| :---- | :---- |
| "Tres herramientas, tres contratos" | **Google:** Da enlaces (pérdida de tiempo). **ChatGPT/Gemini:** Da respuestas, pero puede alucinar políticas. **NotebookLM:** Da respuestas *verificables* basadas exclusivamente en los reglamentos de CECAR, citando la página exacta. |
| El Método de 6 Pasos (Estudio) | **El Flujo de Trabajo Documental:** 1\. Definir el proceso. 2\. Reunir la normativa vigente. 3\. Estructurar índices de consulta. 4\. Consultar para la atención diaria o sintetizar. |
| Formatos: Resumen en audio (Podcast) | Transformar informes institucionales densos (ej. 80 páginas) o manuales de inducción en podcasts para consumo eficiente por parte de directivos o nuevos empleados. |

## **3\. Estructura de la Agenda (90 Minutos)**

La sesión en Meet debe seguir este cronograma para mantener la atención e interactividad:

> 1. **(Min 00 \- 15\) El Contexto y el "Contrato":** Introducción a NotebookLM, la diferencia de anclaje de datos vs ChatGPT, y la advertencia estricta sobre protección de datos personales.  
> 2. **(Min 15 \- 40\) Demostración en vivo 1 (El Oráculo Normativo):** Uso del Reglamento Estudiantil para resolver un caso de atención al usuario (ver Casos de Uso).  
> 3. **(Min 40 \- 60\) Demostración en vivo 2 (Gestión de Reuniones e Inducción):** Extracción de actas a partir de transcripciones o creación de FAQ de inducción usando el Reglamento Docente.  
> 4. **(Min 60 \- 75\) Transformación de Formatos:** Demostración de generación de Guías rápidas y la función de "Resumen en Audio" (Audio Overview).  
> 5. **(Min 75 \- 90\) Reto y Cierre:** Reto de 15 minutos donde los asistentes usan un PDF propio. Entrega de material de apoyo y sesión de Q\&A.

## **4\. Casos de Uso y Demostraciones en Vivo (Con Documentos CECAR)**

Descargar los siguientes documentos previamente para evitar demoras durante la sesión en vivo.

### **Demostración 1: Atención Normativa (Registro y Control / Bienestar)**

> * **Documento:** Reglamento Estudiantil (Acuerdo No. 12).  
> * **Contexto:** Respuesta rápida a un estudiante sobre habilitaciones en posgrado.  
> * **Prompt Maestro:**  
>   `"Actúa como un asistente jurídico de la universidad. Un estudiante de Especialización sacó 3.4 en una asignatura y está pidiendo habilitar la materia. Basado estrictamente en este Reglamento Estudiantil, redacta un correo formal, empático pero firme, dirigido al estudiante. En el correo debes explicarle si tiene derecho o no a la habilitación, mencionar la nota mínima aprobatoria para su nivel, y citar los artículos exactos que justifican la decisión."`  
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### **Demostración 2: Asistente de Talento Humano / Decanaturas**

> * **Documento:** Reglamento Docente (Acuerdo No. 13 de 2018).  
> * **Contexto:** Generación de material de inducción (FAQ) para nuevos docentes.  
> * **Prompt Maestro:**  
>   `"Necesito crear un insumo para el proceso de inducción de nuevos profesores. Extrae de este documento un listado de 'Preguntas Frecuentes' (FAQ) enfocado en: 1) Cuáles son los requisitos de vinculación, y 2) Cómo funciona el sistema de evaluación docente. Entrégame el resultado en formato de viñetas, con un lenguaje claro y directo."`  
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### **Demostración 3: Apoyo a Biblioteca / Investigación**

> * **Documento:** Instructivo Normas APA Institucional de CECAR.  
> * **Contexto:** Asesoría automatizada sobre formatos de citación y demostración de conversión a formato Podcast.  
> * **Prompt Maestro:**  
>   `"Eres el asesor virtual de la biblioteca de CECAR. Un estudiante te pregunta cómo debe citar un documento si la cita tiene más de 40 palabras y cómo debe poner la sangría. Explícaselo paso a paso según lo que dice este instructivo."`  
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## **5\. Entregables y Siguientes Pasos**

Al finalizar la capacitación, se sugiere entregar un documento anexo titulado **"Hoja de Trucos: 5 Prompts Maestros para Administrativos"**, el cual consolidará las instrucciones mostradas en las demostraciones para que el personal pueda implementarlas inmediatamente en sus flujos de trabajo con herramientas como su entorno VPS, n8n y otros sistemas de automatización que gestionen a futuro.