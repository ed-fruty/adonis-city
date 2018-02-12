'use strict'

const User = use('App/Models/User');

class ProfileController {

    async index({view, params}) {

        const user = await User.findOrFail(params.id);

        return view.render('profile.index', { 
            user: user,
            projects: await user.projects()
        })
    }
}

module.exports = ProfileController
