'use strict'

class AuthController {

    async form({view}) {

        return view.render('auth.form');
    }

    async login ({ request, auth, response}) {

        const { email, password } = request.all()

        await auth.attempt(email, password)

        return response.route('profile.index', {'id' : auth.user.id});
    }

    async logout ({auth, response}) {

        await auth.logout();

        return response.route('auth.form');
    }

}

module.exports = AuthController
