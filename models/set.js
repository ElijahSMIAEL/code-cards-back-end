import mongoose from 'mongoose'

const setSchema = new mongoose.Schema({
  onwer: {type: mongoose.Schema.Types.ObjectId, ref:'profile'},
  category: String,
  cards: [{type:mongoose.Schema.Types.ObjectId, ref:'card'}]
},{
  timestamps: true,
})

const Set = mongoose.model('Set', setSchema)

export { Set }