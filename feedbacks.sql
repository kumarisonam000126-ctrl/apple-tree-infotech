CREATE DATABASE IF NOT EXISTS `feedback_db`;
USE `feedback_db`;

-- --------------------------------------------------------
-- Table structure for table `feedbacks`
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `feedbacks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `college` varchar(100) DEFAULT NULL,
  `branch` varchar(50) DEFAULT NULL,
  `feedbackPoint` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
-- Table structure for table `syllabus_requests`
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `syllabus_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `course` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
-- Table structure for table `enrollments`
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `enrollments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `course` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
-- Dumping data for table `feedbacks`
-- --------------------------------------------------------

INSERT INTO `feedbacks` (`id`, `fullName`, `email`, `mobile`, `college`, `branch`, `feedbackPoint`, `message`, `createdAt`) VALUES
(1, 'sonam', 'sonam@gmail.com', '6543217896', 'hlm,', 'bca', 'Website Design', 'hii', '2026-05-20 08:28:09'),
(2, 'sona', 'sona@gmail.com', '1234567895', 'hlm', 'bcom', 'Content Quality', 'hlo', '2026-05-28 07:05:04')
ON DUPLICATE KEY UPDATE id=id;
