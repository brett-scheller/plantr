const { db, Gardener, Plot, Vegetable } = require('./models')

const vegArr = [
    {name: 'lettuce', color: 'green'},
    {name: 'tomato', color: 'red'},
    {name: 'cucumber', color: 'green'},
    {name: 'squash', color: 'yellow'},
    {name: 'celery', color: 'green'}
]

// console.log(db);

db.sync({force: true})
.then(() => {
    return Promise.all(vegArr.map(veg => Vegetable.create(veg)))
})
.then(() => {
    console.log('Database synced!')
    db.close()
})
.catch(err => {
    console.log('Disastrt! Something went wrong!')
    console.log(err)
    db.close()
})
