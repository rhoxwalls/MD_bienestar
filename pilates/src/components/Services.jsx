import React,{useState,useEffect} from "react";


  const servicios = [
    {
      titulo: "Fitness & Pilates",
      descripcion: "Localizada, Cardio, Body Jump y rutinas a medida.",
      beneficio: "Resultados visibles con entrenamiento inteligente.",
      color: "bg-pilates-sage/10",
      imagenes:["assets/fitnessypilates1.jpeg","assets/fitnessypilates2.jpeg"]
    },
    {
      titulo: "Estética Corporal",
      descripcion: "Maderoterapia, Electrodos y Tratamientos Reductores.",
      beneficio: "Reducí una talla y modelá tu figura.",
      color: "bg-pilates-beige",
      imagenes:["assets/esteticacorporal1.jpeg","assets/esteticacorporal2.jpeg"]
    },
    {
      titulo: "Masoterapia",
      descripcion: "Descontracturantes, Piedras Calientes y Drenaje Linfático.",
      beneficio: "Liberá el estrés y renová tu energía.",
      color: "bg-white",
      imagenes:["assets/masoterapia1.jpeg","assets/masoterapia2.jpeg"]
    },
  ];

export const ServiciosDetallados = () => {

const [indiceImagen, setIndiceImagen] = useState(0);
  useEffect(() => {
    // 40000ms = 40 segundos. 
    // Sugerencia: 5000ms (5s) para que el usuario llegue a ver el cambio.
    const intervalo = setInterval(() => {
      setIndiceImagen((prev) => (prev === 0 ? 1 : 0));
    }, 40000); 

    return () => clearInterval(intervalo);
  }, []);
  return (
    <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-pilates-dark mb-4">
          Experiencia MD Bienestar
        </h2>
        <div className="h-1 w-20 bg-pilates-sage mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((s, idx) => (
          <div
            key={idx}
            className={`${s.color} p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition`}
          >
            <h3 className="text-2xl font-normal mb-4">{s.titulo}</h3>

            {/* Contenedor de Imágenes */}
            <div className="relative h-64 w-full overflow-hidden">
              {s.imagenes.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
                    idx === indiceImagen ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
              <div />
              {/* Overlay sutil para elegancia */}
              <div className="absolute inset-0 bg-black/5" />{" "}
            </div>

            <div
              className={`${s.color} rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-500`}
            >
              <p className="text-pilates-dark/80 mb-6 leading-relaxed font-light">
                {s.descripcion}
              </p>
              <p className="text-sm font-medium text-pilates-sage uppercase tracking-wider">
                {s.beneficio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
