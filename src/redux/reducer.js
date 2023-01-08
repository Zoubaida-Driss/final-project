import { ADD_ASSOCIATION, DELETE_ASSOCIATION, EDIT_ASSOCIATION } from "./action-types";

const initialState = {
  data: [
    {
      id: Math.random(),
      img:"https://jamaity.org/wp-content/uploads/2022/12/avt-500x500.jpg",
      nomAssociation: "Association des Volontaires Tunisiens         ",
      description:
        "L’Association des Volontaires Tunisiens a été créée à l’initiative de la consolidation des valeurs et de la sensibilisation de la communauté à l’importance du volontariat.",
      contact: "11112223",
      adresse: "sfax",
      email: "contact.avt@gmail.com",
      datecreation: "01/01/2021",
      idtype: 1,
      idprojet: 2,
      nompresident: "taheni kotti",
    },
    {
      id: Math.random(),
      img:"https://jamaity.org/wp-content/uploads/2020/03/Logo-Weyouth.png",
      nomAssociation: "WeYouth Organization",
      description:
        "WeYouth est une organisation à but non lucratif établie le 28 mars 2013 par un groupe des jeunes Tunisiens âgés entre 16 et 24 ans. Ils ont été conduits par la motivation, la passion et la volonté pour conduire le développement et la participation des jeunes à différents niveaux. ",
      contact: "31402360",
      adresse: "Avenue des Martyrs, Imm. Slim, 1er etage, Sfax, Tunisia",
      email: "contact.wyt@gmail.com",
      datecreation: "28/03/2013",
      idtype: 2,
      idprojet: 1,
      nompresident: "nahla hamdeni",
    },
    {
      id: Math.random(),
      img:"https://jamaity.org/wp-content/uploads/2022/05/beb-diwan-500x442.png",
      nomAssociation: "Association Bab Diwan",
      description:
        "L'association Bab El-Diwan a été créée dans le but de protéger le patrimoine patrimonial culturel et artisanal de la ville de Sfax et de le faire connaître aux niveaux national,arabe et international.",
      contact: "26737978",
      adresse: "110, chiekh tijani, sfax 3047",
      email: "contact.abd@gmail.com",
      datecreation: "01/01/2011",
      idtype: 3,
      idprojet: 3,
      nompresident: "fatma elloumi",
    },
  ],
  typeAssociation: [
    {
      idtype: 1,
      nomtype: "a",
    },
    {
      idtype: 2,
      nomtype: "b",
    },
    {
      idtype: 3,
      nomtype: "c",
    },
  ],
  projets: [
    {
      idprojet: 1,
      nomprojet: "x",
      // idassociation:""
    },
    {
      idprojet: 2,
      nomprojet: "y",
      // idassociation:""
    },
    {
      idprojet: 3,
      nomprojet: "z",
      // idassociation:""
    },
  ],
};
//reducer function
const reducer = (state = initialState, action) => {
     switch (action.type) {
      case ADD_ASSOCIATION :
        return {
          data: [...state.data, action.payload],
        };
        case EDIT_ASSOCIATION:
          return {
            //{...el,...action.payload}:modifier les changement
            data:state.data.map(el=>el.id===action.payload.id?{...el,...action.payload}:el),
          };
          case DELETE_ASSOCIATION:
            return {
              data: state.data.filter((el) => el.id !== action.payload),
            };
      default:
        return state;
     }
};
export default reducer;
