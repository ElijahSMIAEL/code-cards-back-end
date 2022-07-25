import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema ({
  prompt: String,
  answer: String,
},{
  timestamps: true,
})

const setSchema = new mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref:'Profile'},
  title: String,
  category: {type:String, enum: ['JS', 'HTML', 'CSS', 'Python']},
  cards: [cardSchema]
},{
  timestamps: true,
})

const Set = mongoose.model('Set', setSchema)

export { Set }