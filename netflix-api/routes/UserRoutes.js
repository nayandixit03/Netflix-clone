const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController");

const router=require("express").Router();

router.post("/add",addToLikedMovies);
router.get("/Liked/:email",getLikedMovies);
router.put("/delete",removeFromLikedMovies);
module.exports=router;
