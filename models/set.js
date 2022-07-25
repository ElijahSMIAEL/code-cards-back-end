import mongoose from 'mongoose'

const setSchema = new mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref:'profile'},
  title: String,
  category: {type:String, enum: ['JS', 'HTML', 'CSS', 'Python']},
  cards: [{type:mongoose.Schema.Types.ObjectId, ref:'card'}]
},{
  timestamps: true,
})

const Set = mongoose.model('Set', setSchema)

export { Set }