import express from "express"
import getAnnouncement from "../Controllers/OtherControllers/getAnnouncement.mjs";
import getBranchDetail from "../Controllers/OtherControllers/getBranchDetail.mjs";
import getBranch from "../Controllers/OtherControllers/getBranch.mjs";
import getContact from "../Controllers/OtherControllers/getContact.mjs";
const router = express.Router()

router.get("/getAnnouncements", getAnnouncement)
router.get("/getBranchDetails", getBranchDetail)
router.get("/getBranch", getBranch)
router.post("/contact",getContact)

export { router };