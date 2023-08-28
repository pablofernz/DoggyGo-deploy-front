import style from "./Landing.module.css";
import Paseadores from "../../Components/Paseadores/Paseadores";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../Redux/actions";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const PaseadoresEstrella = [
    {
      img: "https://picsum.photos/203",
      price: "paseador1",
      addres: "paseador1",
      dogs: "paseador1",
      distance: "paseador1",
    },
    {
      img: "https://picsum.photos/210",
      price: "paseador2",
      addres: "paseador2",
      dogs: "paseador2",
      distance: "paseador2",
    },
    {
      img: "https://picsum.photos/200",
      price: "paseador3",
      addres: "paseador3",
      dogs: "paseador3",
      distance: "paseador3",
    },
  ];

  useEffect(() => {
    try {
      dispatch(getAll());
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className={style.Landing}>
      <nav className={style.nav}>
        <img
          className={style.img}
          src="https://i.ibb.co/HzjDZKZ/DoggyGo.png"
          alt="DoggyGoLogo"
        />

        <h1 className={style.Logo}> oggyGo</h1>

        <div className={style.secbtns1}>
          <button className={style.btnsnav} onClick={() => navigate("/home")}>
            Home
          </button>
          <button className={style.btnsnav}>Features</button>
          <button className={style.btnsnav}>Service</button>
          <button className={style.btnsnav}>Listed</button>
          <button className={style.btnsnav}>Contact</button>
        </div>
        <div className={style.sesionbtns}>
          <button className={style.SignIn} onClick={() => navigate("/login")}>
            Sign in
          </button>
          <button
            className={style.Register}
            onClick={() => navigate("/registro")}
          >
            {"Register".split("").map((letter, index) => (
              <span
                className={style.letter}
                style={{
                  animationDelay: `${(index + 1) * 60}ms`,
                }}
                key={index}
              >
                {letter}
              </span>
            ))}
          </button>
        </div>
      </nav>
      <section className={style.sec1}>
        <span >Bienvenido a Doggy</span>
        <h2>Pasea a tu perro</h2>
        <p>
          Imagina perros ansiosos por pasear, pero sin nadie que los lleve
          afuera. Sueñan con paseos y aventuras. Aquí entran los paseadores,
          convirtiendo sueños en realidad y siendo recompensados con ladridos
          alegres.
        </p>
        <button >More about us</button>
      </section>
      <section className={style.sec2}>
        <p className={style.sec2txP}>¿Cómo funciona?</p>
        <span className={style.sec2txS}>
          Lo que necesitas saber para contratar a un paseador
        </span>
        <div className={style.sec2indicatiosnContainer}>
          <div className={style.sec2_idication1}>
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-paseo-perro_114360-163.jpg?w=740&t=st=1693197400~exp=1693198000~hmac=8f8ae6fe31dcd373068e10f81f9182b0a01a40c93fd3b0dc6cafdb90bb7c50ea"
              alt=""
            />

            <p className={style.Textos}>Elige un paseador</p>
            {/* <button className={style.howButtons}>
              how to buy <img src="" alt="" />
            </button> */}
          </div>
          <div className={style.sec2_idication2}>
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-icono-calendario_53876-5588.jpg?w=740&t=st=1693197007~exp=1693197607~hmac=98bcc37ebd8ffbfef76a9a79c093c57e30426e14095e2601bfffebff431602f4"
              alt=""
            />

            <p className={style.Textos}>Agenda</p>
            {/* <button className={style.howButtons}>
              how to rent <img src="" alt="" />
            </button> */}
          </div>
          <div className={style.sec2_idication3}>
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-financiero_53876-5862.jpg?w=740&t=st=1693197493~exp=1693198093~hmac=8b00179e35381117c22f9dc1d439a61f7e1730470fccc6d2a5c846877a3723d9"
              alt=""
            />

            <p className={style.Textos}>Paga</p>
            {/* <button className={style.howButtons}>
              how to pay <img src="" alt="" />
            </button> */}
          </div>
        </div>
      </section>
      <section className={style.sec3}>
        <div className={style.sec3InfoC}>
          <h2 className={style.sec3tll}>paseadores estrella</h2>
          <div>
            <p className={style.sec3stx}>
              everything you need to when you're looking
            </p>
            <button className={style.sec3vwall}>
              Ver todos los paseadores
            </button>
          </div>
        </div>
        <div className={style.sec3PSContainer}>
          {PaseadoresEstrella.map((paseador, index) => {
            return <Paseadores key={index + "walker"} walker={paseador} />;
          })}
        </div>
      </section>

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&family=Varela+Round&display=swap');
      </style>
    </div>
  );
};

export default Landing;
