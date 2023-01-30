//imports here
const User = require('../models/user')
const getPromise = require('../middlewares/getPromise')


/*exports.getProfile = getPromise(async (req, res, next) => {
	//const user = find(email);
	res.status(200).json({
		successs: true,
		user
	});
});
*/

exports.updateProfile = getPromise(async (req, res, next) =>  {
	 const user = {
		//user data here
		const first_name = req.body.first_name,
        const middle_name=req.body.middle_name,
        const last_name=req.body.last_name,
        const email=req.body.email,
        const contact_no=req.body.contact_no,

        const user_type=req.body.user_type,
        const resume_path=req.body.resume_path
     };

	//validation operations are here 


	if(!first_name || !middle_name || !last_name )
	{
        res.status(400).json({
	message : "please enter your name, its compulsory"
	})
    }

     if(!email)
     {
        res.status(400).json({
            message:"email is mandatory "
        })
     }
    

     if(!contact_no )
     {
        res.status(400).json({
            message:"Contact number is required "
        })
     }
   

     if(!user_type)
     {
        res.status(400).json({
            message:"Type of user should be mentioed "
        })
    }

    if(!resume_path)
    {
        res.status(400).json({
            message:"Please upload resume "
        })
    }

    res.json(user); // display of an user 

	//update the upser profile using mongoose

	console.log(user);
	res.status(200).json({
		success: true,
	})
});