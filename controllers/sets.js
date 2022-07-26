import { Set } from '../models/set.js'
import { Profile } from '../models/profile.js'


function create(req, res) {
  req.body.owner = req.user.profile
  console.log("REQ BODY:", req.body)
  Set.create(req.body)
  .then(set => {
    Set.findById(set._id)
    .populate('owner')
    .then(populatedSet => res.json(populatedSet))
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function index(req, res) {
  Set.find({})
  .populate('owner')
  .then(sets => {
    res.json(sets)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function createCard(req, res) {
  Set.findById(req.params.id)
  .populate('owner')
  .then(set => {
    set.cards.push(req.body)
    set.save()
    .then(updatedSet => res.json(updatedSet))
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function show(req, res) {
  Set.findById(req.params.id)
  .populate('owner')
  .then(set => res.json(set))
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deleteSet(req,res ) {
  Set.findById(req.params.id)
  .then(set => {
    if(set.owner._id.equals(req.user.profile)) {
      Set.findByIdAndDelete(set._id)
      .then(deletedSet => {
        res.json(deletedSet)
      })
    } else {
      res.status(401).json({err:'Not Authorized'})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })

}

export {
  create,
  createCard,
  index,
  show,
  deleteSet as delete,
}
