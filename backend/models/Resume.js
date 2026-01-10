import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    title: { 
      type: String, 
      default: 'My Resume' 
    },
    profileInfo: { 
      profilePreviewUrl: String, 
      fullName: String, 
      designation: String, 
      summary: String 
    },
    contactInfo: { 
      email: String,
      phone: String,
      address: String,
      linkedin: String,
      github: String,
      website: String
    },
    workExperience: [
      {
        jobTitle: String,
        company: String,
        location: String,
        startDate: Date,
        endDate: Date,
        description: String
      }
    ],
    education: [
      {
        degree: String,
        fieldOfStudy: String,
        institution: String,
        startDate: Date,
        endDate: Date,
        description: String
      }
    ],
    skills: [
      {
        name: String,
        progress: Number
      }
    ],
    projects: [
      {
        title: String,
        description: String,
        technologies: [String],
        link: String
      }
    ],
    certifications: [
      {
        title: String,
        authority: String,
        date: Date,
        credentialId: String,
        url: String
      }
    ],
    languages: [
      {
        name: String,
        progress: Number
      }
    ],
    template: { 
      type: String, 
      default: 'default', 
      theme: String, 
      colorPalette: [String] 
    },
    thumbnail: { 
      type: String, 
      default: '' 
    }
  },
  { 
    timestamps:  { createdAt: true, updatedAt: true }
  }
);

export default mongoose.model('Resume', ResumeSchema);
