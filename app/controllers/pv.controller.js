const db = require("../models");
const Pv = db.pv;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.lieu || !req.body.pvNumero) {
    res.status(400).send({
      message: "Veillez entrer le lieu et/ou le numéro du pv!"
    });
    return;
  }
  if (!req.body.collecteur) {
    res.status(400).send({
      message: "Veillez entrer le nom du collecteur!"
    });
    return;
  }
  if (!req.body.heure) {
    res.status(400).send({
      message: "Veillez entrer l'heure!'"
    });
    return;
  }

  // Create a Tutorial
  var nowDate = new Date(); 
  var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();
  const pv = {
    lieu:req.body.lieu,pvNumero:req.body.pvNumero,annee:req.body.annee,mois:req.body.mois,
    jour:req.body.jour,heure:req.body.heure,region:req.body.region,
    departement:req.body.departement,arrondissement:req.body.arrondissement,
    localite:req.body.localite,axe:req.body.axe, troncon:req.body.troncon, 
    collecteur:req.body.collecteur,natureAccident:req.body.natureAccident,
    typeDegat:req.body.typeDegat, nombreBlesseLeger:req.body.nombreBlesseLeger, 
    nombreBlesseGrave:req.body.nombreBlesseGrave,nombreDeces:req.body.nombreDeces, 
    nombreDecesHomme:req.body.nombreDecesHomme, nombreDecesFemme:req.body.nombreDecesFemme, 
    ageDecesHomme:req.body.ageDecesHomme,ageDecesFemme:req.body.ageDecesFemme, 
    nombreBlessesHomme:req.body.nombreBlessesHomme, dateEnregistrement:date,
    nombreBlessesFemme:req.body.nombreBlessesFemme,
    ageBlessesHomme:req.body.ageBlessesHomme, ageBlessesFemme:req.body.ageBlessesFemme,
    causeAccident:req.body.causeAccident,chausse:req.body.chausse,
    nombreAnimal:req.body.nombreAnimal, nombrePieton:req.body.nombrePieton,
    nombreMoto:req.body.nombreMoto,nombreBus:req.body.nombreBus, 
    nombreCamion:req.body.nombreCamion, nombreVehicule:req.body.nombreVehicule,
    nombreEngin:req.body.nombreEngin, vehicule:req.body.vehicule
  };

  // Save Tutorial in the database
  Pv.create(pv)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
/*exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};*/
