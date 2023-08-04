import mongoose from 'mongoose';

// Define the User schema.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true, 
  }
});

// Create and export the User model.
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
