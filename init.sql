CREATE DATABASE IF NOT EXISTS `feedback_db`;
USE `feedback_db`;

-- Table structure for feedbacks
CREATE TABLE IF NOT EXISTS `feedbacks` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `fullName` VARCHAR(100) DEFAULT NULL,
  `email` VARCHAR(100) DEFAULT NULL,
  `mobile` VARCHAR(20) DEFAULT NULL,
  `college` VARCHAR(100) DEFAULT NULL,
  `branch` VARCHAR(50) DEFAULT NULL,
  `feedbackPoint` VARCHAR(100) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for syllabus_requests
CREATE TABLE IF NOT EXISTS `syllabus_requests` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `phone` VARCHAR(20) DEFAULT NULL,
  `email` VARCHAR(100) DEFAULT NULL,
  `course` VARCHAR(100) DEFAULT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for enrollments
CREATE TABLE IF NOT EXISTS `enrollments` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) DEFAULT NULL,
  `phone` VARCHAR(20) DEFAULT NULL,
  `email` VARCHAR(100) DEFAULT NULL,
  `course` VARCHAR(100) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Sample data for feedbacks
INSERT INTO `feedbacks` (`id`, `fullName`, `email`, `mobile`, `college`, `branch`, `feedbackPoint`, `message`, `createdAt`)
VALUES
  (1, 'Sonam', 'sonam@gmail.com', '9876543210', 'HLM', 'BCA', 'Website Design', 'Great platform', NOW())
ON DUPLICATE KEY UPDATE id=id;
