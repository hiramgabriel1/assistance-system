import assistantModel from "../models/assistantModel.js";

class studentsAdminAssistant {
  // TODO: get all students assistant
  async getStudentsAssistants(req, res) {
    try {
      const data = await assistantModel.find();

      data
        ? res.status(200).json({ message: "success", dataUsers: data })
        : res.status(404).json({ message: "not found", dataUsers: data });
    } catch (error) {
      throw new Error(error);
    }
  }

  // TODO: register assistant to students
  async registerAssistantStudent(req, res) {
    try {
      const { username, isAssistant } = req.body;
      console.log(req.body);

      const data = {
        username: username,
        isAssistant: isAssistant,
      };

      // TODO: save in database
      const isSaveInDatabase = await assistantModel.create(data);

      // TODO: query
      isSaveInDatabase
        ? res.status(200).json({ message: "success!", isSaved: data })
        : res.status(500).json({
            message: "error",
            isDataSubmit: isSaveInDatabase,
            isDataGet: isAssistant,
          });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default studentsAdminAssistant;