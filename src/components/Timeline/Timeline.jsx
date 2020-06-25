import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import LogoTimeline from './lotties/LogoTimeline';

import './timeline.css';


const VALUES = ["2018-03-22", "2018-03-23"];

const EXAMPLE = [
  {
    data: "2018-03-10",
    status: "status",
    statusB: "Le suivi préventif pour un nouveau-né, qui impliquait la réalisation des 20 examens jusqu'à l'âge de 6 ans, est réparti désormais entre quatorze au cours des trois premières années, trois de la 4e à la 6e année, trois de la 7e à la 18e année" ,
    statusE: "In Progress"
  },
  {
    data: "2018-03-15",
    status: "status",
    statusB: "L'examen de prévention en santé (EPS) est une offre proposée aux assurés sociaux du régime général. Totalement pris en charge par l'Assurance Maladie, l’EPS s’appuie sur les recommandations médicales les plus récentes en matière de prévention et s'inscrit en complémentarité de l’action du médecin traitant." ,
    statusE: "In Progress"
  },
  {
    data: "2018-03-20",
    status: "status",
    statusB: "Il est recommandé à un adulte en bonne santé de visiter de temps en temps le médecin généraliste pour un examen usuel et le dentiste au moins une fois l’an. Mais selon l’âge, différents points sont à surveiller, voici notre guide des différents tests médicaux qui pourraient vous sauver à 30, 40 et 50 ans.",
    statusE: "Done"
  },
  {
    data: "2018-03-25",
    status: "status",
    statusB: "En 2018, les vaccinations contre la diphtérie, le tétanos, la poliomyélite, la coqueluche, l’Haemophilus influenzae b, l’hépatite B, le méningocoque C, le pneumocoque, la rougeole, les oreillons et la rubéole sont obligatoires avant l’âge de 2 ans pour les nourrissons nés à partir du 1er janvier 2018.",
    statusE: "Done"
  },
  {
    data: "2018-03-30",
    status: "status",
    statusB: "Quand nous atteignons l'âge de la sagesse, les examens à faire sont les suivants : test de la mémoire & de l'audition, le glaucome, examen dentaire, examen cardiovasculaire, examen de l'appareil digestif, examen du système osseux et dépistage de l'ostéoporose.",
    statusE: "Done"
  },
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,      
      prevIdx: -1
    };
  }

  render() {
   
    const {curIdx} = this.state;
    const curStatus = EXAMPLE[curIdx].statusB;

    return (
        <div>
            <div className="lotties-wrapper">
                <div className="logo-text">
                <h5>Le saviez-vous ?</h5>
                <LogoTimeline />
                
                </div>
            </div>

      <div className="timeline-wrapper">
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "60%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px",
            color: "white",
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#3771E2",
              outline: "#dfdfdf",
            }}
            getLabel={() => ('')}
            labelwidth={0}
            index={this.state.curIdx}
            indexClick={index => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, index: curIdx });
            }}            
            values={EXAMPLE.map(x => x.data)}
          />
        </div>
        <div className="text-center">
          {curStatus}
        </div>
      </div>
      </div>
    );
  }
}