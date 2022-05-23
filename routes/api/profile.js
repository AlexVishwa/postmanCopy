router.post('/', (req, res) => {
    //extract all fields from request sent
    const {

    } = req.body;
    //build profile object
    const profileFields = {};
    try {
        let profile = await Profile.findOne({ user: req.user.id });
        //UPdate
        if (profile) {
            profile = await Profile.findOneandUpdate({ user: req.user.id }, { $set: profileFields }, { new: true })
        }
        //Create
        profile = new Profile(profileFields);
        await profile.save();
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})