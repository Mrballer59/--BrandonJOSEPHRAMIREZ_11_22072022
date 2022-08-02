import "../style/Propos.css";
import bannerHeader from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Banner from "../components/Banner/Banner";
import DropdownList from "../components/DropdownList/DropdownList";

const Propos = () => {
  return (
    <div className="Propos">
      <Banner text="" img={bannerHeader} imgDescription="Views of mountains " />
      <section className="display_section">
        <DropdownList
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <DropdownList
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <DropdownList
          title="Service"
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <DropdownList
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </div>
  );
};

export default Propos;
