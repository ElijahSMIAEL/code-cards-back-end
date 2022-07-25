import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema ({
  owner: {type:mongoose.Schema.Types.ObjectId, ref:'profile'},
  prompt: String,
  answer: String,
},{
  timestamps: true,
})

const Card = mongoose.model('Card', cardSchema)

export { Card }