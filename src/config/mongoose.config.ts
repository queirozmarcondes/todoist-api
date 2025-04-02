import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error("❌ Erro: MONGO_URI não está configurado no .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB conectado com sucesso");

    // Evento para quando o MongoDB se desconectar
    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB desconectado");
    });

  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
