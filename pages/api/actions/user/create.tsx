import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../controller/UserController";
import userRequest from "@/request/userRequest";

export default async(req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != 'POST'){
        return res.status(403).json({message: "Method not Allowed."})
    }

    const {name, email, cpf, password} = req.body;
    
    // Verify request

    const checkRequest = userRequest(cpf, email, password, name);
    if (checkRequest.status == false) {
        return res.status(403).json({message: checkRequest.message})
    }

    // Create model
    const user = await createUser(cpf, email, password, name);

    if (user.message != undefined) {
        return res.status(403).json(user);
    }

    return res.status(200).json(user);
    
}