module.exports = (sequelize, Sequelize) => {
  const Pv = sequelize.define("pv", {
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
    horsAgglomeration:{
      type: Sequelize.BOOLEAN
    },
    agglomerationplus2000:{
      type: Sequelize.BOOLEAN
    },
    agglomerationMoins2000:{
      type: Sequelize.BOOLEAN
    },
    referenceAxe: {
      type: Sequelize.STRING
    },
    usagerImplique: {
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
    fauteConduite: {
      type: Sequelize.JSON
    },
    causeMateriel: {
      type: Sequelize.JSON
    },
    causeDiverse: {
      type: Sequelize.JSON
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
