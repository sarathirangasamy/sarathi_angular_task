-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 05, 2021 at 07:16 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sarathi_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `bfxdetails`
--

CREATE TABLE `bfxdetails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `commission_percentege` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activate_from` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `critical_account` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_option` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bfxdetails`
--

INSERT INTO `bfxdetails` (`id`, `name`, `email`, `phone`, `website`, `contact_name`, `contact_phone`, `contact_email`, `notes`, `type`, `category`, `commission_percentege`, `activate_from`, `critical_account`, `payment_option`, `created_at`, `updated_at`) VALUES
(1, 'Test', 'test@gmail.com', '1234567890', 'Test', 'Demo test', '0987654321', 'aa@gmail.com', 'Good', 'enterprise', 'Clothes', '1', '2021-10-05', '1', '', '2021-10-05 11:41:18', '2021-10-05 11:41:59'),
(2, 'Mega', 'mega@gmail.com', '1234567890', 'Test', 'mega test', '1232321123', 'bb@gmail.com', NULL, 'entrepreneur', 'Clothes,Toys', NULL, '2021-10-15', NULL, '', '2021-10-05 11:43:17', '2021-10-05 11:43:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bfxdetails`
--
ALTER TABLE `bfxdetails`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bfxdetails`
--
ALTER TABLE `bfxdetails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
