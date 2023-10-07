import {mongoose, model} from "mongoose";

const modelStudent = mongoose.Schema(
    {
        // ? @username student
        username: {
            type: String,
            required: true,
        },

        // ? @asistió o no
        isAssistant: {
            type: Boolean,
            required: true
        }
    }
)

const assistantModel = new model("assistans", modelStudent)

export default assistantModel