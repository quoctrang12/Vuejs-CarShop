const UserService = require("../services/user.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const userService = new UserService(MongoDB.client);
    const document = await userService.create(req.body);
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
};

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const userService = new UserService(MongoDB.client);
    documents = await userService.find({});
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
  return res.send(documents);
};
exports.login = async (req, res, next) => {
  try {
    const userService = new UserService(MongoDB.client);
    const document = await userService.login(req.body);
    console.log(document);
    if (!document) {
      return next(new ApiError(404, "Username or Password incorrect"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving contact with id=${req.params.id}`)
    );
  }
};
exports.findOne = async (req, res, next) => {
  try {
    const userService = new UserService(MongoDB.client);
    const document = await userService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving contact with id=${req.params.id}`)
    );
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }

  try {
    const userService = new UserService(MongoDB.client);
    const document = await userService.update(req.params.id, req.body);
    if (!document) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({ message: "Contact was updated successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Error updating contact with id=${req.params.id}`)
    );
  }
};
exports.delete = async (req, res, next) => {
  try {
    const userService = new UserService(MongoDB.client);
    const document = await userService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({ message: "Contact was deleted successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Could not delete contact with id=${req.params.id}`)
    );
  }
};
exports.deleteAll = async (_req, res, next) => {
  try {
    const userService = new UserService(MongoDB.client);
    const deletedCount = await userService.deleteAll();
    return res.send({
      message: `${deletedCount} contacts were deleted successfully`,
    });
  } catch (error) {
    return next(
      new ApiError(500, "An error while retrieving favorite contacts")
    );
  }
};


