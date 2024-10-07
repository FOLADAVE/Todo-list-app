import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://folarinobajenihi:YCobM3ior6pZXPAg@cluster0.is0ztzn.mongodb.net/next-app');
    console.log("DB Connected");
}