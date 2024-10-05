import User from "../model/user.js";

export const create = async(req, res)=>{
    try{
        const newUser = new User(req.body);
        const { email } = newUser;

        const userExist = await User.findOne({ email });
        if(userExist){
            return res.status(400).json({ message: "User already exists." });
        }
        const savedData = await newUser.save();
        res.status(200).json(savedData); 

    } catch(error){
        res.status(500).json({errorMessage:error.message});
    }
};
 export const getAllusers = async(req, res)=>{
    try{
        const userData = await User.find();
        if(!userData || userData.length === 0){
            return res.status(404).json({ message: "User data not found."});        
        }
        res.status(200).json(userData); 
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
 }
 export const getUserById = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({ message: "User Data not found." });
        }
        res.status(200).json(userExist);
    }catch(error){
        res.status(500).json({ errorMessage: error.message });
    }
 };

 export const update = async (req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({ message: "User not Found: "});
        }
        await User.findByIdAndUpdate(id, req.body, {
            new:true
        })
        res.status(200).json(updateData);
    }catch(error){
        res.status(500).json({ errorMessage: error.message });
    }
 };

 export const deleteUser = async (req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({ message: "User not Found: "});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully." 
        });
        res.status(200).json(updateData);
    }catch(error){
        res.status(500).json({ errorMessage: error.message });
    }
 };