
export default {
  state: {
    disquettes: [
      "Prochainement",
      "C’est dans notre roadmap",
      "Je suis trempé je rentre chez moi",
      "J’étais à la déchetterie",
      "Je suis coincé au portail",
      "Je dois aller chercher les enfants",
      "Je suis en EI",
      "On fait ça après un billard",
      "On fera ça pendant le creux du mois d’août",
      "APP > BO",
      "BO >> APP",
      "On sera loin le jour où ça arrivera",
      "On ne va pas commencer un truc maintenant",
      "Je possède des thunes ?", 
      "J’avais commencé à travailler dessus dans la douche",
      "Ca n’a pas fini de builder dans la voiture",
      "Hxb ?",
      "On ne met pas en prod un vendredi",
      "Je ne comprends pas, ça marche en local",
      "Vérifie ça sur l’outil de monitoring",
      "T’as fait un ticket SAW ?",
      "Je ne travaille pas sans JIRA",
      "Nico, tu nous fais la blague du petit cowboy ?",
      "Que dit l’étalon?",
      "Que dit le loup ?",
      "Tu vas devoir passer sur RadioMoquette",
      "Petit billard ?",
      "On est tous les mêmes !",
      "Heureusement que tu me demandes par curiosité",
      "Le moteur de ma voiture est mort"
      ]
  },
  getters: {
    getDisquette: (state) => (lastDisquette) => {

      let lenghtDisquettes = state.disquettes.length;
      lenghtDisquettes = lastDisquette ? lenghtDisquettes - 1 : lenghtDisquettes;

      const indexRandom = Math.floor(Math.random() * lenghtDisquettes);

      return state.disquettes.filter(disquette => disquette !== lastDisquette)[indexRandom];
    }
  }
};
