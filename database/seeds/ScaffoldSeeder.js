'use strict'

/*
|--------------------------------------------------------------------------
| ScaffoldSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const User = use('App/Models/User');
const Project = use('App/Models/Project');
const ProjectMember = use('App/Models/ProjectMember');

class ScaffoldSeeder {
  async run () {

    await User.query().truncate()
    await Project.query().truncate()
    await ProjectMember.query().truncate()

    const users = await Factory
        .model('App/Models/User')
        .createMany(2)
 
    const projects = await Factory
        .model('App/Models/Project')
        .createMany(3)


    projects.forEach(project => {
        users.forEach(async function (user) {
            const member = new ProjectMember()
                
            member.user_id = user.id
            member.project_id = project.id
            
            await member.save()
        })
    }) 


  }
}

module.exports = ScaffoldSeeder
