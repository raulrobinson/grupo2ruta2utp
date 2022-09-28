-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-09-2022 a las 21:29:35
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vetsystem`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `product_code` int NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_description` varchar(800) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_stock` int NOT NULL,
  `product_type` varchar(8) NOT NULL,
  `product_state` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `product_code`, `product_name`, `product_description`, `product_price`, `product_stock`, `product_type`, `product_state`) VALUES
(1, 1001, 'Besties - Alimento Perros Adultos Sabor Carne y Pollo', 'Besties - Alimento Perros Adultos Sabor Carne y Pollo, es una fórmula diseñada para la óptima nutrición salud de tu perro con Carbohidratos, proteínas, lípidos, minerales y vitaminas. Proteína de origen animal para desarrollar músculos en crecimiento, omegas que promueven una piel saludable y un pelaje brillante, fibra prebiótica que fortalecen la salud intestinal y el equilibrio de la flora intestinal, Vitaminas A, D3, E, K, B1, B2, Niacina, B5, B6, B12, B9, aminoácidos y minerales para fortalecer el sistema inmune, calcio y fósforo para huesos y dientes sanos además mejora la consistencia fecal.', '69993.00', 100, 'A', 1),
(2, 1002, 'Equilibrio - Todas Las Razas Adulto', 'Equilibrio - Todas Las Razas Adulto, tiene como beneficio la reducción del olor de las heces tras la acción de la Yucca schidigera. Mejor tránsito intestinal. Provee prebióticos y probióticos activos. Pelaje sedoso y brillante. Equilibrio perfecto de omega 3 y 6. Perfecto para una mejor nutrición para tu mejor amigo, sabor delicioso.', '351231.00', 50, 'A', 1),
(3, 1003, 'Guaumor - Cachorros Razas Medianas Y Grandes', 'Guaumor - Cachorros Razas Medianas Y Grandes, es libre de colorantes. Tiene proteína de alta calidad para un crecimiento y desarrollo saludable. Prebióticos que fortalecen el sistema inmune, aumentan las defensas y mejoran la salud intestinal.', '201020.00', 30, 'A', 1),
(4, 2001, 'Kong - Collar Isabelino', 'El collar protector premium está diseñado para ayudar a los perros y gatos a curarse de cirugías, lesiones y erupciones. Cómodo de llevar mientras se recupera de cirugías, lesiones y erupciones cutáneas, sin interferir con la visión periférica o la capacidad de comer o beber. La fuerte correa de \"gancho y bucle\" permite una amplia gama de ajustes en el cuello, por lo que puede garantizar un ajuste perfecto. Resistente a arañazos y mordeduras para acelerar el proceso de curación, además de que el tejido lavable a máquina le facilita la recuperación de su mascota. No marcará ni rayará sus pertenencias, para que pueda sentirse bien al usar esto en toda la casa.', '91485.00', 15, 'M', 1),
(5, 2002, 'Ourofino - Quinotrat', 'Con acción bactericida, Quinotrat Tabs es indicado para el tratamiento de infecciones que padecen perros y gatos. Indicado para el tratamiento de infecciones bacterianas individuales o mixtas del aparato respiratorio, digestivo y urinario, otitis externa, infecciones de la piel y herida', '41040.00', 25, 'M', 1);

-- --------------------------------------------------------

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
