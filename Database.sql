-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 11, 2020 at 09:03 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `jetpack_joyride`
--
CREATE DATABASE `jetpack_joyride`;
USE `jetpack_joyride`;
-- --------------------------------------------------------

--
-- Table structure for table `GADGET`
--

CREATE TABLE `GADGET` (
  `Nome` varchar(50) NOT NULL,
  `Costo` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `GADGET`
--

INSERT INTO `GADGET` (`Nome`, `Costo`) VALUES
('CascoNero', 600),
('CascoRosso', 800),
('Goku', 200),
('GokuSS', 400),
('Mario', 1000),
('Ninja', 100);

-- --------------------------------------------------------

--
-- Table structure for table `POSSIEDE`
--

CREATE TABLE `POSSIEDE` (
  `NomeUtente` varchar(50) NOT NULL,
  `NomeGadget` varchar(50) NOT NULL,
  `Selezionato` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `POSSIEDE`
--

INSERT INTO `POSSIEDE` (`NomeUtente`, `NomeGadget`, `Selezionato`) VALUES
('Edo35', 'Ninja', 0);

-- --------------------------------------------------------

--
-- Table structure for table `utente`
--

CREATE TABLE `utente` (
  `Username` varchar(50) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `Record` int(11) NOT NULL DEFAULT '0',
  `Monete` int(11) NOT NULL DEFAULT '0',
  `Sensibilita` int(11) NOT NULL DEFAULT '3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `utente`
--

INSERT INTO `utente` (`Username`, `Email`, `Password`, `Record`, `Monete`, `Sensibilita`) VALUES
('Alice', 'alice@gmail.com', '$2y$10$aFhkYXkMYkoWjqfkJeOpmuNefItgwDmRTcw9MSf3T9pWpqizBEfye', 452, 300, 3),
('Andrea', 'andrea@gmail.com', '$2y$10$FK1vtapyV6KmhEvGffsGu.Qdpro4yQTujn4WfiFOT4T/JWfXI4cUu', 521, 928, 3),
('Annunziata', 'annunziata@gmail.com', '$2y$10$is6TWO.dQyzvVmCPUjSAdOwyl3oUg.n5clSC93EACQI3sgAVrRYMy', 620, 78, 3),
('Chiara5ds', 'chiara@gmail.com', '$2y$10$p.9l7GsfaM5anC1GE.1A9Oi995gAaVy.goYz5AbdS05e2oOD5Chni', 258, 230, 3),
('Edo35', 'edoardo@gmail.com', '$2y$10$64q4yugILCxvyk4gz5WzPOHOqpBYXqtym6VYtRjqqd2dPWiV7pgK6', 670, 138, 4),
('Gabriele', 'gabriele@gmail.com', '$2y$10$ZnX2C7lqBvpHJWKl4brjle2dgIueSE5x.4RHMCRPLbYaezWWbQWum', 42, 34, 3),
('Marco', 'marco@gmail.com', '$2y$10$OUJ3iz0LoujnpgdXeHd9/ec8cKwEZdeOVqyLXXh9egF7Zk.K7XW86', 740, 259, 3),
('Matteo', 'matteo@gmail.com', '$2y$10$pcG9uX2C86DXj.WLnEkba.97zFEVwkAfK1YraWail6LDIlLcNC6ju', 430, 23, 3),
('pippo', 'pippo@gmail.com', '$2y$10$EKENuT2fDH1UBtJJOXjEMuNEmqo1x21QdoOz11bFLXtj6W6g5/FoC', 300, 4000, 3),
('Rita67', 'rita@gmail.com', '$2y$10$jF1exSIvOXijjvJOIjebu.5PqwInOXH.229dJRq6AFt5zTeLEuQr2', 96, 571, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `GADGET`
--
ALTER TABLE `GADGET`
  ADD PRIMARY KEY (`Nome`);

--
-- Indexes for table `POSSIEDE`
--
ALTER TABLE `POSSIEDE`
  ADD PRIMARY KEY (`NomeUtente`,`NomeGadget`),
  ADD KEY `NomeGadget` (`NomeGadget`);

--
-- Indexes for table `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`Username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `POSSIEDE`
--
ALTER TABLE `POSSIEDE`
  ADD CONSTRAINT `NomeGadget` FOREIGN KEY (`NomeGadget`) REFERENCES `GADGET` (`Nome`),
  ADD CONSTRAINT `NomeUtente` FOREIGN KEY (`NomeUtente`) REFERENCES `UTENTE` (`Username`);
