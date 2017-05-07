http://host/posts - JSON всех постов

http://host/users - JSON всех пользователей

http://host/categories - JSON всех категорий

http://host/subcategories - JSON всех подкатегорий

http://host/posts?last=2 - JSON 2 последних постов

method="DELETE", url="http://host/posts", params="id=55" - удалить пост 55

method="POST", url="http://host/posts", params="title=Название поста&user_id=1&content=Содержание поста&subcategory_id=1" - добавить новый пост

method="PUT", url="http://host/posts", params="id=60&title=Новое название&content=новый контент" - редактирование постов

method="POST", url="http://host/users", params="type=0&login=Логин&password=12345678&email=supermail@gmail.com" - добавить нового пользователя
          
method="DELETE", url="http://host/users", params="id=55" - удалить пользователя 55
