# Доска объявлений с категориями

**Типа документация:**

Как пользоваться apiшкой?
1) Надо иметь установленный docker и docker-compose
2) Необходимо cd в api и заbuildить

![Imgur](http://i.imgur.com/OF6QaHm.png)

3) Ждем 100 лет
4) Запускаем api

![Imgur](http://i.imgur.com/srThnYG.png)

5) Ждем ещё 100 лет
6) набираем 
```
docker exec database.dev bash /tmp/import.sh
```
7) Profit?

http://localhost:8000/posts - JSON всех постов

http://localhost:8000/users - JSON всех пользователей

http://localhost:8000/categories - JSON всех категорий

http://localhost:8000/subcategories - JSON всех подкатегорий

http://localhost:8000/posts?last=2 - JSON 2 последних постов
