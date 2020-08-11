import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bank", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(`Não foi possível conectar no MongoDB: ${error}`);
  }
};

export { connect };

