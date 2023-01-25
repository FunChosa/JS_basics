# HOW TO CONNECT TO SERVER WITH MONGO.
1. run dev cloud vpn; (password from computer)
2. run Remote Desctop Connection;  
Gulnaz  
Nazgul123!
3. Docker Desstop -> Containers -> Run;
4. Mongo DB Compas -> resent connection -> connect;
# MONGO
* **show datbase** - список имеющихся баз данных;
* **show collections** - посмотреть список имеющихся коллекций;
* **use [name]** - перейти (или перейти и создать) в бд;
* **db.createCollection("[name]")** - создать коллекцию внутри бд;
* **db.dropDatabase()** - удалить бд;
* **db.[collection_name].insert({  
    name: "Nazgul",  
    age: 25  
})** 
* **db.[collection_name].insertMany([   
    {name: "Sailor Moon", height: 150},  
    {name: "Sailor Mercury", height: 157},  
    {name: "Sailor Mars", height: 160},  
])** 
* **db.[collection_name].find()** - поиск всех записей
* **db.[collection_name].find({attribute: value})** - поиск по критерию
(например db.users.find({height: 157}))
(например db.users.find({name: "Sailor Mercury", height: 157}))
* **db.users.find({$or:[{name: "Sailor Mars"}, {height: 157}]})** - ИЛИ
* **db.users.find({height: {$lt: 155}})** - поиск по условию
    **( $lt / $lte / $gt / $ghe / $ne )**
* **db.users.find().sort({height:[sort_type])** - сортировка в прямом порядке sort_type === 1, сортировка в обратном порядке sort_type === -1;
* **db.users.find().limit(4)**
* **db.users.findOne({_id: ObjectId("63d0e53e1b5b1ba7f278a6e5")})** - поиск одной записи, например по id
* **db.users.distinct** - вернет только уникальные записи
*   **find  
    findOne   
    findOneAndDelete  
    findOneAndReplace  
    findOneAndUpdate**
* **db.users.updateOne(
    {name: "Sailor Mars"},
    {
        $set:{
            name: "Sailor Pluto",
            height: 170
        }
    }
)** - найти и заменить параметр
* **db.users.updateMany(  
    {},  
    {  
        $rename:{  
            name: "fullname",  
        }  
    }  
)** - найти и заменить название параметра  
* **db.users.deleteOne({height: 130})** - удаление
* **db.users.bulkWrite([    
    {  
        insertOne:{  
            document: {fullname: "Sailor Mars", height: 167}  
        }  
    },  
    {  
        deleteOne:{  
            filter: {fullname: "Sailor Pluto"}  
        }  
    }  
])** - добавление одного пользователя и удаление другого  
* db.users.update(
    {fullname: "Sailor Mars"},
    {
        $set: {
            posts: [
                {title: 'buttle roar', text: 'Mars Prism Power, Make Up!'},
                {title: 'buttle roar', text: 'Akuryou taisan!'},
            ]
        }
    }
) - добавление постов
* db.users.findOne(
    {fullname: "Sailor Mars"},
    {posts:1}
) - поиск постов
* db.users.find(
    {
        posts: {
            $elemMatch: {
                title: "buttle roar"
            }
        }
    }
) - поиск пользака с конкретным постом
* db.users.find({posts: {$exists: true}}) - выводит пользователей которые обладают каким-то конкетным полем

## Import mongo
### как связать СУБД с Node.js?
1. логинимся в mongo db сайт
2. + New project
3. Build Claster
4. Vs code -> index.js
npm init -y
npm i mongodb
5. 
const {MingoClient} = require('mongodb);  
const client = new MingoClient('[URL]');  
cons start = async () => {  
    try{
        await client.connect()
    } catch (e) {
        console.log(e)
    }
}
start()
6. возвращаемся в браузер, где приготовился кластер 
делаем: Add a connection IP Address
        Create a Database User
        => Choose connection method => Connect your application (Connect to Cluster) => скопировать [URL]
7. добавляем URL 
    const client = new MingoClient('[URL]');
    в самой ссылке пишем свой пароль и название бд (название проекта из п2)
8. теперь можно работать с ним

const {MingoClient} = require('mongodb);  
const client = new MingoClient('[URL]');  
cons start = async () => {  
    try{
        await client.connect()
        await client.db().createCollection('users');
        const users = client.db(). collection(name: 'users');
        await users.insertOne(doc {name: "Taksedo Mask", age: 17})
        // функции по взаимодействию в бд == ассинхронные
        const user = await users.findOne({name: "Taksedo Mask"})
        console.log(user)
    } catch (e) {
        console.log(e)
    }
}
start()