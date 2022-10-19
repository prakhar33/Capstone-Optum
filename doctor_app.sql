-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2022 at 03:07 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `doctor_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appointment_id` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `doctor_id` int(11) NOT NULL,
  `hospital_name` varchar(255) DEFAULT NULL,
  `patient_id` int(11) NOT NULL,
  `slot` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctor_id` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `end_time` int(11) NOT NULL,
  `hospital_name` varchar(255) DEFAULT NULL,
  `mci_registration_number` int(11) NOT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `slot_1` int(11) NOT NULL,
  `slot_10` int(11) NOT NULL,
  `slot_11` int(11) NOT NULL,
  `slot_12` int(11) NOT NULL,
  `slot_13` int(11) NOT NULL,
  `slot_14` int(11) NOT NULL,
  `slot_15` int(11) NOT NULL,
  `slot_16` int(11) NOT NULL,
  `slot_17` int(11) NOT NULL,
  `slot_18` int(11) NOT NULL,
  `slot_19` int(11) NOT NULL,
  `slot_2` int(11) NOT NULL,
  `slot_20` int(11) NOT NULL,
  `slot_3` int(11) NOT NULL,
  `slot_4` int(11) NOT NULL,
  `slot_5` int(11) NOT NULL,
  `slot_6` int(11) NOT NULL,
  `slot_7` int(11) NOT NULL,
  `slot_8` int(11) NOT NULL,
  `slot_9` int(11) NOT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `start_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctor_id`, `city`, `end_time`, `hospital_name`, `mci_registration_number`, `mobile_number`, `name`, `password`, `slot_1`, `slot_10`, `slot_11`, `slot_12`, `slot_13`, `slot_14`, `slot_15`, `slot_16`, `slot_17`, `slot_18`, `slot_19`, `slot_2`, `slot_20`, `slot_3`, `slot_4`, `slot_5`, `slot_6`, `slot_7`, `slot_8`, `slot_9`, `specialization`, `start_time`) VALUES
(2, 'Hyderabad', 8, 'AIG', 111, '7777777771', 'Kiran', '$2a$10$.lMt29vkdnnF1R/EQgdEHu7Yc67YW1Yw/hKx.kDS5ry01sAdVBGjy', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 'Cardiologist', 2),
(3, 'Hyderabad', 17, 'AIG', 112, '7777777772', 'Rohan', '$2a$10$TWIBMh9fDdYdTH.qK.s/h.vF.5xkZx..mpgGWiK6XFRfxpj6dxEGK', 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 'Orthopedic', 8),
(4, 'Aurangabad', 16, 'Apex', 113, '7777777773', 'Dara', '$2a$10$XEps2SPLCisw7OE2O/vFoesJplPoa1z5g4ovBsj3lfu5geKeBZiIu', 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Orthopedic', 10),
(5, 'Aurangabad', 18, 'Apex', 114, '7777777774', 'Vinod', '$2a$10$sn.2bRr4CmS8gGcRA4YDhOwrtwjgTd25Wqj/TR7sctcIOPio2.CB.', 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 'Paediatrician', 4),
(6, 'Gurgaon', 13, 'Medanta', 115, '7777777775', 'Kamble', '$2a$10$4jCcZeGbjfK2Lnf7yYvEEufnw60dCxLSp1Qt44EJwRoeyfTzrL10C', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 'Neurosurgeon', 1),
(7, 'Gurgaon', 18, 'Medanta', 116, '7777777776', 'Shubham', '$2a$10$IRhlxe6otudQjQclb0y7GuYWbnlFQUSaOBD92OW35WjE3rjOb1BRq', 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 'Cardiologist', 9),
(8, 'Bangalore', 16, 'Tata', 117, '7777777777', 'Anuradha', '$2a$10$pbBawP7GFQqsA.wha0JKF.IY72AkmnxpaZxGgvZXRJCNS7lJax8UG', 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 'Gynecologist', 3),
(9, 'Bangalore', 21, 'Tata', 118, '7777777778', 'Shalini', '$2a$10$24N68je0wzeOvb916FxPH.VyaBUTKsRyDQfMiIvGCFNYoxBC7cLcq', 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 'Paediatrician', 17),
(10, 'Delhi', 18, 'Apollo', 119, '7777777779', 'Astha', '$2a$10$fyk646kjiKMgwlqmhCV7W.gczHkyJl194dBznPXM8gPZkfZDYCkA.', 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 'Gynecologist', 6),
(11, 'Delhi', 13, 'Apollo', 120, '7777777780', 'Mahesh', '$2a$10$JwfDGXK/NKU1Ju/2BDstlejdfZ/eBFqA2Y0mUKq8oggG3e.zC5K1a', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 'Neurosurgeon', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `hospital_id` bigint(20) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `hospital_name` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`hospital_id`, `city`, `hospital_name`, `mobile_number`, `password`) VALUES
(1, 'Aurangabad', 'Apex', '9999999991', '$2a$10$K7tjKTwNXK6txJje7cgduOLSzZ3oNI4kS/V.NGLV3NHQqkMB3olI2'),
(2, 'Delhi', 'Apollo', '9999999992', '$2a$10$AGSZrPDkLGTwW8VkYuwzNeTE6QuqdcIuztKiBRrhvZNMqErbtWSiG'),
(3, 'Hyderabad', 'AIG', '9999999993', '$2a$10$2a45v9VDxp4jHrxJrUO1hOEac9vNab9WL7JTaJa603PJatc0YLNs6'),
(4, 'Gurgaon', 'Medanta', '9999999994', '$2a$10$8kuiJu0.v7g/hK3UxLkzVuXRz6NZ/fgXhrwJcDRHVJ/kma68PBs7q'),
(5, 'Bangalore', 'Tata', '9999999995', '$2a$10$qllaG4Hf.LjVoI0vYJXLDOeN2i.Q6l6PvUgnmLjA5oM0mRcWwkh9q');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` bigint(20) NOT NULL,
  `age` int(11) NOT NULL,
  `blood_group` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `age`, `blood_group`, `city`, `gender`, `mobile_number`, `name`, `password`) VALUES
(1, 24, 'A+', 'Noida', 'Male', '8888888881', 'Satyam', '$2a$10$v0PW3wpdCHdpqKS5pLauX.Y8K9Wev8B8appbMTZSq5sf4qxyM/6om'),
(2, 24, 'B+', 'Aurangabad', 'Male', '8888888882', 'Pratik', '$2a$10$CJAj4cj9de3O66eXo8QmzunYJYw.ydQYpHBJuuMwxh4iWJzHopcX.'),
(3, 24, 'O+', 'Varanasi', 'Male', '8888888883', 'Prakhar', '$2a$10$ls6oU5IyT4nQmOg64ZxlduZ.qeZuwGOEnEmXMhT.7CC.cmtX3Ye7C'),
(4, 24, 'O-', 'Mumbai', 'Female', '8888888884', 'Vaishanavi', '$2a$10$gce0SQdSezxIyJdcIZMGzulFsIxAcgY/3JeXBMijqXn/E99mO4HLO'),
(5, 23, 'AB+', 'Chennai', 'Female', '8888888885', 'Haindhavi', '$2a$10$jFCfPUPVHVlecvvU1Lo/4eCD54pBAAaJAfXE4LtIqvlpwqvKBXmd2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appointment_id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctor_id`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`hospital_id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `hospital`
--
ALTER TABLE `hospital`
  MODIFY `hospital_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
