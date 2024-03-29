import './css/nosotros.css';
import Presentacion from './Presentacion';
import ale from '../images/ale.jpeg';
import moi from '../images/moi.jpeg';
import moia from '../images/moia.jpeg';
import apache from '../images/iconos/apache.svg';
import express from '../images/iconos/express.svg';
import css from '../images/iconos/css.svg';
import js from '../images/iconos/js.svg';
import mongo from '../images/iconos/mongo.svg';
import html from '../images/iconos/html.svg';
import mysql from '../images/iconos/mysql.svg';
import next from '../images/iconos/next.svg';
import node from '../images/iconos/node.svg';
import php from '../images/iconos/php.svg';
import react from '../images/iconos/react.svg';
import sass from '../images/iconos/sass.svg';
import webpack from '../images/iconos/webpack.svg';
import git from '../images/iconos/git.svg';

function Nosotros() {
  return (
    <section id="nosotros">
      <h2>¡Hola!</h2>
      <p>
        Somos una empresa uruguaya que busca instalarse en el mercado del
        software. Nos caracterizamos por asumir nuevos desafíos, contando con
        las herramientas y el conocimiento para convertir tus ideas en
        realidades.
        <br />
        <br />
        Nos apasiona el emprendedurismo, el trabajo en equipo, y ejecutar
        proyectos de calidad para cada uno de nuestros clientes. ¿La clave? Una
        buena comunicación y correcta apreciación del trabajo que quiere
        realizarse.
      </p>
      <h3>Nuestras tecnologías</h3>
      <section className="tecnologias">
        <img src={html} alt="Logo HTML"></img>
        <img src={js} alt="Logo Javascript"></img>
        <img src={react} alt="Logo React"></img>
        <img src={express} alt="Logo Express.js"></img>
        <img src={mysql} alt="Logo MySQL"></img>
        <img src={next} alt="Logo Next.js"></img>
        <img src={sass} alt="Logo SASS"></img>
        <img src={css} alt="Logo CSS"></img>
        <img src={php} alt="Logo PHP"></img>
        <img src={node} alt="Logo Node.js"></img>
        <img src={mongo} alt="Logo MongoDB"></img>
        <img src={webpack} alt="Logo Webpack"></img>
        <img src={git} alt="Logo Git"></img>
        <img src={apache} alt="Logo Apache"></img>
      </section>

      <h3>Sobre nosotros</h3>
      <section className="presentaciones">
        <Presentacion
          persona="Alejandro Pertusatti"
          bio="Soy Ale, tengo 23 años. Me recibí de Diseñador Gráfico en 2019, y soy un apasionado de la programación. Soy estudiante avanzado de Químico Farmacéutico en UdelaR. Además, trabajo actualmente en Fraud Prevention de Mercado Libre. Me gusta conocer lugares nuevos, y disfruto del tiempo de calidad con mi familia."
          perfil={moi}
        />
        <Presentacion
          persona="María Pía Machado"
          bio="Soy Pía, tengo 23 años. Me titulé como Analista en Programación en 2020. Actualmente soy estudiante avanzada de Ingeniería Química en UdelaR. Además de programar, trabajo en Customer Service de Mercado Libre. Disfruto de mis trabajos, de la música, de viajar, y de pasar buenos momentos en familia."
          perfil={moia}
        />
        <Presentacion
          persona="Alejandro Bustamante"
          bio="Soy Ale, tengo 25 años, me apasiona el mundo del emprendimiento, por lo que inicié mi primer proyecto en 2018, el cual cuenta hoy con más de 2mil usuarios, desde entonces me he dedicado al desarrollo y organización de diferentes empresas. Actualmente soy el director de la empresa Bustamante Gascue Group. Me encanta viajar y conocer las distintas formas en que puede vivir una persona en el mundo."
          perfil={ale}
        />
      </section>
    </section>
  );
}

export default Nosotros;
