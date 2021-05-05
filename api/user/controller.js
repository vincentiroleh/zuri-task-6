const User = require('./model');

const Controller = {
    // Create User
    async register(req, res) {
        try {
            let user = new User(req.body);
            user = await user.save();
            res.status(201).json({ success: true, message: 'Account created', data: user })
        } catch (error) {
            return res.status(500).json({ success: false, error })
        }
    },

    // Get User
    async getUser(req, res) {
        try {
            const user = await User.find();
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' })
            } return res.status(200).json({ success: true, data: user })
        } catch (error) {
            return res.status(500).json({ success: false, error })
        }
    },

    // Update user
    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' })
            } return res.status(200).json({ success: true,  message: 'Account updated', data: user })
        } catch (error) {
            return res.status(500).json({ success: false, error })
        }
    },

    // Delete User
    async deleteUser(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (user) {
                await User.findByIdAndDelete(user._id);
                return res.status(200).json({ success: true, message: 'User removed' });
            } return res.status(404).json({ success: false, message: 'User not found' });
        } catch (error) {
            return res.status(500).json({ success: false, error })
        }
    },

}

module.exports = Controller;