const { Dosen } = require('../model');

const get = async (req, res) => {
  try {
    const id = req.query?.id;
    let data = [];
    let status = 200;
    let message = 'Success Get All Dosen';
    console.log('id', id);
    if (!id) {
      data = await Dosen.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
    } else {
      data = await Dosen.findOne({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });

      if (!data) {
        status = 404;
        message = 'Dosen not found';
      }
    }

    res.status(status).json({
      status,
      message,
      data,
    });
  } catch (error) {
    console.log('failed get', error);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      error,
    });
  }
};

const store = async (req, res) => {
  try {
    const payload = req.body;
    console.log('test', payload);
    const data = await Dosen.create(payload);

    res.status(201).json({
      status: 201,
      message: 'Success Save Dosen',
      data,
    });
  } catch (error) {
    console.log('failed store', error);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      error,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    console.log('test', payload);

    const getDosen = await Dosen.findOne({
      where: { id },
      attributes: ['id'],
    });

    if (!getDosen) {
      return res.status(404).json({
        status: 404,
        message: "Dosen Not Found, can't update.",
      });
    }

    await Dosen.update(payload, {
      where: { id },
    });

    res.status(200).json({
      status: 200,
      message: 'Success Update Dosen',
    });
  } catch (error) {
    console.log('failed store', error);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      error,
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const id = req.params.id;

    const resultDelete = await Dosen.destroy({
      where: { id },
    });

    if (!resultDelete) {
      return res.status(404).json({
        status: 404,
        message: 'Dosen Not Found!',
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Successfully Deleted Dosen!',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      error,
    });
    console.log(error);
  }
};

module.exports = { get, store, update, deleteData };
