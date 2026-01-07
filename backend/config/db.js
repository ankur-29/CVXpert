import mongoose from 'mongoose';

export const connectDatabase = async () => {
    const MONGO_URI = process.env.MONGO_URI 
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}
