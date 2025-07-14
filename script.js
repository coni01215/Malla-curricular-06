const ramos = [
  // PRIMER AÑO
  // SEMESTRE 1
  { id: 'ingles1', nombre: 'Inglés 1', requisitos: [] },
  { id: 'introKine', nombre: 'Introducción a la kinesiología', requisitos: [] },
  { id: 'morfo1', nombre: 'Morfología y función 1', requisitos: [] },
  { id: 'fisMat', nombre: 'Fund. físicos matemáticos', requisitos: [] },
  { id: 'bioCel', nombre: 'Fun. de biología celular e hi.', requisitos: [] },

  // SEMESTRE 2
  { id: 'ingles2', nombre: 'Inglés 2', requisitos: ['ingles1'] },
  { id: 'comCientifica', nombre: 'Com. científica en salud', requisitos: [] },
  { id: 'biofisica', nombre: 'Biofísica', requisitos: ['fisMat'] },
  { id: 'actFisica', nombre: 'Actividad física y salud', requisitos: [] },
  { id: 'morfo2', nombre: 'Morfología y función 2', requisitos: ['morfo1'] },
  { id: 'quimBio', nombre: 'Fun. de qui. y bio. área salud', requisitos: [] },

  // SEGUNDO AÑO
  // SEMESTRE 3
  { id: 'fisiologia', nombre: 'Fisiología general', requisitos: ['morfo2', 'biofisica'] },
  { id: 'movHum1', nombre: 'Bases del mov. humano 1', requisitos: ['actFisica'] },
  { id: 'comunidad1', nombre: 'Fund. del actuar comunitario', requisitos: [] },
  { id: 'vida1', nombre: 'Fund. físicos y psicológicos del curso de vida 1', requisitos: [] },
  { id: 'bioestad', nombre: 'Bioestadística', requisitos: [] },
  { id: 'kineEvidencia', nombre: 'Kine basada en la evidencia', requisitos: [] },

  // SEMESTRE 4
  { id: 'fisiopato', nombre: 'Fisiopatología', requisitos: ['fisiologia'] },
  { id: 'eticaCom', nombre: 'Fund. éticos act. comunitario', requisitos: ['comunidad1'] },
  { id: 'analisisMov', nombre: 'Análisis del movimiento', requisitos: ['movHum1'] },
  { id: 'vida2', nombre: 'Fund. físicos y psicológicos del curso de vida 2', requisitos: ['vida1'] },
  { id: 'aprendizajeMotor', nombre: 'Control y aprendizaje motor', requisitos: [] },
  { id: 'kineEjercicio', nombre: 'Kinesiología el ejercicio', requisitos: [] },

  // TERCER AÑO
  // SEMESTRE 5
  { id: 'cardioresp', nombre: 'Disfunción cardiorespiratoria', requisitos: [] },
  { id: 'practica1', nombre: 'Práctica integrada 1', requisitos: [] },
  { id: 'neuro1', nombre: 'Dis. neuromusculoesquelética', requisitos: [] },
  { id: 'saludPublica', nombre: 'Salud públ. y políticas públ.', requisitos: [] },
  { id: 'farmaco', nombre: 'Fund. farma. en kinesiología', requisitos: [] },
  { id: 'gestion', nombre: 'Gestión en salud', requisitos: [] },

  // SEMESTRE 6
  { id: 'metodologia', nombre: 'Metodología de la investigación', requisitos: [] },
  { id: 'ergonomia', nombre: 'Ergonomía', requisitos: [] },
  { id: 'evalNeuro', nombre: 'Eva. neuromusculoesquelética', requisitos: ['neuro1'] },
  { id: 'practica2', nombre: 'Práctica integrada 2', requisitos: ['practica1'] },
  { id: 'evalCardio', nombre: 'Evaluación kinésica cardiorespiratoria', requisitos: ['cardioresp'] },

  // CUARTO AÑO
  // SEMESTRE 7
  { id: 'practica3', nombre: 'Práctica integrada 3', requisitos: ['practica2'] },
  { id: 'fisioterapia', nombre: 'Fisioterapia', requisitos: [] },
  { id: 'resp1', nombre: 'Int. kinésica respiratoria 1', requisitos: ['cardioresp'] },
  { id: 'comun1', nombre: 'T. inter. comun. interdis. 1', requisitos: [] },
  { id: 'neuro2', nombre: 'Int. neuromusculoesquelética 1', requisitos: ['neuro1'] },
  { id: 'seminario1', nombre: 'Seminario de grado', requisitos: ['metodologia'] },

  // SEMESTRE 8
  { id: 'seminario2', nombre: 'Seminario de grado 2', requisitos: ['seminario1'] },
  { id: 'geronto', nombre: 'Intervención gerontogeriátrica', requisitos: [] },
  { id: 'neuro3', nombre: 'Int. neuromusculoesquelética 2', requisitos: ['neuro2'] },
  { id: 'cardio2', nombre: 'Interv. kinésica cardiometabólico', requisitos: ['resp1'] },
  { id: 'comun2', nombre: 'T. inter. comun. interdis. 2', requisitos: ['comun1'] },
  { id: 'practica4', nombre: 'Práctica integrada 4', requisitos: ['practica3'] },

  // QUINTO AÑO
  // SEMESTRE 9
  { id: 'pp1', nombre: 'Práctica profesional 1', requisitos: ['practica4'] },
  { id: 'pp2', nombre: 'Práctica profesional 2', requisitos: ['practica4'] },

  // SEMESTRE 10
  { id: 'pp3', nombre: 'Práctica profesional 3', requisitos: ['pp1'] },
  { id: 'pp4', nombre: 'Práctica profesional 4', requisitos: ['pp2'] },
];

const aprobados = new Set();

function puedeAprobarse(ramo) {
  return ramo.requisitos.every(req => aprobados.has(req));
}

function crearMalla() {
  const contenedor = document.getElementById('malla-container');

  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.classList.add('ramo');
    div.id = ramo.id;
    div.innerText = ramo.nombre;

    div.addEventListener('click', () => {
      if (aprobados.has(ramo.id)) return;
      if (puedeAprobarse(ramo)) {
        div.classList.add('aprobado');
        aprobados.add(ramo.id);
      } else {
        alert('Debes aprobar los requisitos previos.');
      }
    });

    contenedor.appendChild(div);
  });
}

crearMalla();

