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
  console.log("hit route")
}

export {
  create,
  createCard,
  index,
}
