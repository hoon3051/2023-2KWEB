SELECT `id`, `c3`, `c5` FROM `crud` WHERE `c1` = 11 AND `c2` = 2; -- 1번 

SELECT * FROM `crud` WHERE `c1` > 18 OR `c2` < 2; -- 2번 

INSERT INTO `crud` (`c1`, `c2`, `c3`, `c5`) VALUES (7, 4, 'col101', 0); --3번 

INSERT INTO `crud` VALUES (103, 3, 3, 'col103', DEFAULT, 1); --4번 

SELECT * FROM `crud` WHERE `id` > 100; --5번

UPDATE `crud` SET `c3` = 'col0', `c5` = 0 WHERE `c1` > 4 AND `c1` < 9 AND `c2` = 1; --6번

SELECT * FROM `crud` WHERE `c1` > 4 AND `c1` < 9 AND `c2` = 1; --7번

DELETE FROM `crud` WHERE `c5` = 0; --8번

SELECT * FROM `crud` WHERE `c5` = 0; --9번