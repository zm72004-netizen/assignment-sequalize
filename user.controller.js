import { User } from '../models/index.js';


export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists.' });
        }
        const user = User.build({ name, email, password, role });
        await user.save();
        return res.status(201).json({ message: 'User added successfully.', user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


export const createOrUpdateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;

        let user = await User.findByPk(id);
        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            await user.save({ validate: false });
        } else {
            user = await User.create({ id, name, email, password, role }, { validate: false });
        }
        return res.status(200).json({ message: 'User created or updated successfully', user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


export const findUserByEmail = async (req, res) => {
    try {
        const { email } = req.query;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'no user found' });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id, {
            attributes: { exclude: ['role', 'password'] },
        });
        if (!user) {
            return res.status(404).json({ message: 'no user found' });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};