import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

export function generateToken(email) {
    return jwt.sign({email: email}, SECRET);
}

function readToken(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch (error) {
        throw new ('Invalid Token');
    }
}

export function checkToken(token) {
    return readToken(token);
}