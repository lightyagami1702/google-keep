import bcrypt from "bcrypt";
export const hashPassword = async (password) => {
  try {
    const saltsRounds = 10;
    const hashed = await bcrypt.hash(password, saltsRounds);
    return hashed;
  } catch (error) {
    console.log(error);
  }
};
export const comparePassword = async (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
