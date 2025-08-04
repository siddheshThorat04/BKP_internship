const express=require('express');
const adminController=require('../controllers/adminController');
const router=express.Router();
router.get('/interns',adminController.getInterns);
router.delete('/delete/:id',adminController.deleteIntern);
router.get('/profile/:id',adminController.profile);
module.exports=router;
