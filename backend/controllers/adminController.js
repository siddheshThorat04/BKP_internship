import Intern from "../models/internModel.js";


export const getInterns = async (req, res) => {
    try {
        const interns = await Intern.find();
        console.log(interns);
        res.status(200).json({interns:interns});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong", error });
    }
};

export const deleteIntern = async (req, res) => {
    try {
        const internId = req.params.id;
        await Intern.findByIdAndDelete(internId);
        res.status(200).json({ msg: "Intern deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong", error });
    }
};

export const profile= async(req,res) => {
    try {
        const internId=req.params.id;
        const intern=await Intern.findById(internId);
        res.status(200).json({intern:intern}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong", error });
    }
}