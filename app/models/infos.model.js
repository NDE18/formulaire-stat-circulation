module.exports = (sequelize, Sequelize) => {
    const Infos = sequelize.define("infos", {
      refVehicule: {
        type: Sequelize.STRING
      },
      marqueVehicule: {
        type: Sequelize.STRING
      },
      assure:{
        type: Sequelize.BOOLEAN
      },
      ageConducteur: {
        type: Sequelize.INTEGER
      },
      sexeConducteur: {
        type: Sequelize.STRING
      },
      etatConducteur: {
        type: Sequelize.STRING
      },
      professionConducteur: {
        type: Sequelize.STRING
      },
      pv: {
          type: Sequelize.INTEGER
      },
      chauffeur: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Infos;
  };
  