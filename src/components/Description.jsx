import styled from "styled-components";

import { Element } from "react-scroll";

// Global Components es mas que nada para darle estilo.
import { Title } from "./globalStyledComponents";
import { Button, Col, Container, Row } from "react-bootstrap";
import imagen from "../images/grafico.png";


export default function Description() {
  
  return (
    <Element name={"Description"} id="Description">
      <Container className="text-center">
         <Title>
            <h2>Description</h2>
            <div className="underline"></div>
          </Title>
          <p>Ejemplo de texto:</p>
          <p>La gráfica proporciona una representación visual de la relación entre el tiempo de estudio y el rendimiento académico de un grupo de estudiantes durante un período de tres meses. En el eje horizontal, encontramos el tiempo de estudio en horas por semana, mientras que en el eje vertical se muestra el rendimiento académico en forma de calificaciones promedio. La gráfica revela una tendencia clara: a medida que aumenta el tiempo dedicado al estudio, el rendimiento académico tiende a mejorar. Sin embargo, también se observa una variabilidad considerable en el rendimiento entre los estudiantes, lo que sugiere que otros factores, como la capacidad de aprendizaje individual o los métodos de estudio empleados, también pueden influir en los resultados. Este análisis visual proporciona información valiosa para comprender la relación entre el esfuerzo de estudio y el éxito académico, lo que puede ser útil para orientar estrategias educativas y motivar a los estudiantes a dedicar tiempo adicional al estudio para mejorar su desempeño.</p>
          <img
            src={imagen}   
            loading="lazy"
            className="mx-auto"
            style={{ width: "15rem", height: "15rem" }}
          />
      </Container>
    </Element>
  );
}
