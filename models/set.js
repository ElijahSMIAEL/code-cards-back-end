import mongoose from 'mongoose'

const setSchema = new mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref:'profile'},
  title: String,
  category: {type:String, enum: [js, html, css, python]},
  cards: [{type:mongoose.Schema.Types.ObjectId, ref:'card'}]
},{
  timestamps: true,
})

const Set = mongoose.model('Set', setSchema)

export { Set }