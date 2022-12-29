const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
];

let usersOnlineNames = []

users.forEach((item) => {
    if(item.status === 'online'){
        usersOnlineNames.push(item.username)
    }
});
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)