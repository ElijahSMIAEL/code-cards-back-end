import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  name: String,
  photo: { type: String },
  avatar: String,
  sets: [{type:mongoose.Schema.Types.ObjectId, ref:'Sets'}],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
