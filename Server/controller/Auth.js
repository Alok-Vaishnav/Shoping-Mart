import User from "../models/User.js";

// Login Controller
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password"
      });
    }

    // Find user and include password field
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: userResponse
    });

  } catch (error) {
    console.error("Error in Login Controller:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later."
    });
  }
}

// Signup Controller
export const signupUser = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    // Validation
    if (!fullname || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters"
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match"
      });
    }

    // Check email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email"
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered. Please use a different email or login."
      });
    }

    // Create new user
    const newUser = new User({
      fullname,
      email,
      password
    });

    await newUser.save();

    // Remove password from response
    const userResponse = newUser.toObject();
    delete userResponse.password;

    return res.status(201).json({
      success: true,
      message: "Account created successfully. Please login.",
      user: userResponse
    });

  } catch (error) {
    console.error("Error in Signup Controller:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later."
    });
  }
};

// Save address for a user
export const saveAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;

    if (!userId || !address) {
      return res.status(400).json({ success: false, message: 'userId and address are required' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    // Push address to addresses array
    user.addresses.push(address);
    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(200).json({ success: true, message: 'Address saved', user: userResponse });
  } catch (error) {
    console.error('Error saving address:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
