import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, default: 'My Resume' },
    data: { type: Object, default: {} },
    template: { type: String, default: 'default' },
  },
  { timestamps: true }
);

export default mongoose.model('Resume', ResumeSchema);
