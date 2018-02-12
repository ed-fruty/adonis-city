'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route
    .get('/login', 'AuthController.form')
    .as('auth.form')
    .middleware('guest')

Route
    .post('/login', 'AuthController.login')
    .as('auth.login')
    .middleware('guest')
    .validator('App/Validators/LoginUserValidator')

Route
    .get('/logout', 'AuthController.logout')
    .as('auth.logout')
    .middleware('auth')    

Route
    .get('/profile/:id', 'ProfileController.index')
    .as('profile.index')
    .middleware('auth')
