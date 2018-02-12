'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

 const Factory = use('Factory')
 const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
    
    return {
      username: faker.username(),
      email: faker.email(),
      password: await Hash.make('secret')
    }
})

Factory.blueprint('App/Models/Project', (faker) => {
    return {
      name: faker.name()
    }
})

Factory.blueprint('App/Models/ProjectMember', (faker) => {
    return {
      user_id: faker.integer(), // Factory.model('App/Models/User').create().id,
      project_id: faker.integer(), // Factory.model('App/Models/Project').create().id
    }
})

