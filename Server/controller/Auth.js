import User from "../models/User.js";

//Login

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
        
    if (user) {
      const mypassword = user.password === password;
      if (mypassword) {
        return res.status(200).json({ user, status: true });
      } else {
        return res
          .status(400)
          .json({ message: "wrong password", status: false });
      }
    } else {
      return res.status(404).json({ message: "usernot found", status: false });
    }
  } catch (error) {
    console.log("Error in Login Controller", error);
  }
};

//Signup
export const signupUser = async (req, res) => {
  // console.log(req.body);

  try {
    const { fullname, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already exists" });

    } else {
      let newuser = await User({ fullname, email, password });
      await newuser.save();
      return res.json(newuser);
    }
  } catch (error) {
    console.log("Error in Signup Controller", error);
  }
};
