require("dotenv").config();

const config = {
	JWT_SIGNATURE: process.env.JWT_SIGNATURE,
};

export const { JWT_SIGNATURE } = config;
