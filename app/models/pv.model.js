module.exports = (sequelize, Sequelize) => {
  const Pv = sequelize.define("pv", {
    collecteur: {
      type: Sequelize.STRING
    },
    dateEnregistrement: {
      type: Sequelize.STRING
    },
    lieu: {
      type: Sequelize.STRING
    },
    pvNumero: {
      type: Sequelize.STRING
    },
    annee: {
      type: Sequelize.STRING
    },
    mois:{
      type: Sequelize.STRING
    },
    jour: {
      type: Sequelize.STRING
    },
    heure: {
      type: Sequelize.STRING
    },
    region: {
      type: Sequelize.STRING
    },
    departement:{
      type: Sequelize.STRING
    },
    arrondissement:{
      type: Sequelize.STRING
    },
    localite:{
      type: Sequelize.STRING
    },
    axe: {
      type: Sequelize.STRING
    },
    troncon: {
      type: Sequelize.STRING
    },
    natureAccident: {
      type: Sequelize.STRING
    },
    typeDegat: {
      type: Sequelize.JSON
    },
    nombreBlesseLeger: {
      type: Sequelize.INTEGER
    },
    nombreBlesseGrave: {
      type: Sequelize.INTEGER
    },
    nombreDeces: {
      type: Sequelize.INTEGER
    },
    usagerImplique: {
      type: Sequelize.STRING
    },
    nombreDecesHomme: {
      type: Sequelize.INTEGER
    },
    nombreDecesFemme: {
      type: Sequelize.INTEGER
    },
    ageDecesHomme: {
      type: Sequelize.STRING
    },
    ageDecesFemme: {
      type: Sequelize.STRING
    },
    nombreBlessesHomme: {
      type: Sequelize.INTEGER
    },
    nombreBlessesFemme: {
      type: Sequelize.INTEGER
    },
    ageBlessesHomme: {
      type: Sequelize.STRING
    },
    ageBlessesFemme: {
      type: Sequelize.STRING
    },
    causeAccident: {
      type: Sequelize.STRING
    },
    vehicule:{
      type: Sequelize.JSON
    },
    nombreAnimal: {
      type: Sequelize.INTEGER
    },
    nombrePieton: {
      type: Sequelize.INTEGER
    },
    nombreMoto: {
      type: Sequelize.INTEGER
    },
    nombreVehicule: {
      type: Sequelize.INTEGER
    },
    nombreCamion: {
      type: Sequelize.INTEGER
    },
    nombreBus: {
      type: Sequelize.INTEGER
    },
    nombreEngin: {
      type: Sequelize.INTEGER
    },
    chausse: {
      type: Sequelize.JSON
    },
    presumeResponsable: {
      type: Sequelize.STRING
    },
    adversaire: {
      type: Sequelize.STRING
    }
  });

  return Pv;
};
