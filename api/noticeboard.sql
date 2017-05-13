-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 12, 2017 at 07:09 PM
-- Server version: 5.7.18
-- PHP Version: 7.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `noticeboard`
--
CREATE DATABASE IF NOT EXISTS `noticeboard` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `noticeboard`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'general'),
(2, 'sell/buy'),
(3, 'job'),
(4, 'gossip');

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `id` int(11) NOT NULL,
  `title` tinytext NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`id`, `title`, `user_id`, `content`, `date`, `category_id`) VALUES
(1, 'Продаю Cavalcade', 1, '4-door SUV\r\n5000$', '2017-04-26 21:00:00', 1),
(2, 'Куплю Sultan RS', 1, 'phone: \r\n555-0100', '2017-04-27 08:27:07', 1),
(52, 'Turismo', 1, 'Где найти туризму???', '2017-05-01 08:21:43', 1),
(55, 'эта прога говно', 3, 'валим отсюда', '2017-05-11 13:04:04', 4),
(56, 'Проект', 4, 'Продам рабочий проект. Всего 2000 рублей.', '2017-05-11 13:05:18', 2),
(57, 'ПАМАГИТЕ', 5, 'Ребят, кто-нибудь сделайте за меня сайт плиз', '2017-05-11 13:07:14', 3),
(59, 'Продам почку', 8, 'По причине болезни', '2017-05-11 16:33:06', 1),
(60, 'потеряла мозг', 9, 'еще год назад, вероятно, в корпусе БП60, нашедшему - вознаграждение ', '2017-05-11 17:28:06', 1),
(61, 'Добавить отображение авторизации', 1, 'не ясно, авторизован пользователь, нельзя выйти!!! добавьте иконки польователям', '2017-05-12 05:01:26', 4),
(62, 'qwe', 10, 'qweqweqweqwe', '2017-05-12 05:30:50', 1),
(63, 'доделать', 1, 'приделать предупреждение что браузер пользователя говно', '2017-05-12 05:30:57', 4),
(64, 'доделать', 10, 'добавлять упоминание что пароль набран неправильно. и то что в регистрационной форме можно авторизоваться', '2017-05-12 05:37:20', 4),
(65, 'доделать', 10, 'в навбаре должно быть имя авторизованного пользователя и его иконка, так же обязательно при регистрации просить email\n', '2017-05-12 05:38:36', 4),
(66, 'email', 10, 'в пыхе есть функция mail. С помощью нее надо реализовать возможность прямо с сайта отправлять электронные письма', '2017-05-12 05:57:11', 4),
(67, 'log out', 10, 'добавить возможность прям с сайта обнулять localstorage', '2017-05-12 05:57:48', 4),
(68, '', 10, '', '2017-05-12 06:35:57', 4),
(69, 'Перевод', 10, 'Перевести весь сайт на русский язык', '2017-05-12 06:36:58', 4),
(70, 'Сделать', 10, 'Сделать так чтобы кнопки удалить и отредактировать появлялись как только наводишь курсор на пост', '2017-05-12 06:38:05', 4),
(71, 'Пароль', 10, 'Когда набираешь вместо букв и цифр должны быть звездочки', '2017-05-12 09:02:38', 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` tinytext NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `login`, `password`) VALUES
(1, 'NicoBellic2468XX', '1234'),
(3, 'дебил', '1234'),
(4, '3-ий курс', '1234'),
(5, '2ая группа', '1234'),
(6, '', '1234'),
(7, 'test', ''),
(8, 'pasha', 'markov'),
(9, 'Rarity ', 'meow'),
(10, 'vadim', 'vadim');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `subcategory_id` (`category_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `notice`
--
ALTER TABLE `notice`
  ADD CONSTRAINT `notice_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `notice_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;