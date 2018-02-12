'use strict'

class AuthController {

    async form({view}) {

        return view.render('auth.form');
    }

    async login ({ request, auth, response}) {
        const { email, password } = request.all()

        const result = await auth.attempt(email, password)

        return response.route('profile', {'id' : auth.user.id});
    }

}

module.exports = AuthController
