'use strict'

class RedirectIfAuthenticated {
  async handle ({ request, response, auth }, next) {
    // call next to advance the request
    
    try {
        await auth.check();

        return response.route('profile.index', {id : auth.user.id})
    } catch (error) {
        await next()
    }
  }
}

module.exports = RedirectIfAuthenticated
