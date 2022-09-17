import mongoose from 'mongoose';

export async function startConnection() {
  await mongoose.connect(
    'mongodb+srv://EnriqueGmz:R9S7bCnnaRir2KUt@cluster0.qx8jumd.mongodb.net/photo-Gallery-db-Fazt'
  );
  console.log('Database is connected 👋');
}
