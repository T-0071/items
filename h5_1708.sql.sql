/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1708.sql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:03:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '商品名',
  `img` varchar(255) NOT NULL,
  `price` varchar(10) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `reg_data` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '52度 全兴大曲 绕龄', '../img/v1.jpg', '109元', 'subj', '2018-02-07 16:03:28');
INSERT INTO `list` VALUES ('2', '52度五粮迎宾酒上.....', '../img/v2.jpg', '380元', 'subj', '2018-02-07 16:03:35');
INSERT INTO `list` VALUES ('3', '买一享二澳大利亚....', '../img/v3.jpg', '199元', 'subj', '2018-02-07 16:03:40');
INSERT INTO `list` VALUES ('4', '52度 洋河梦之蓝手...', '../img/v4.jpg', '1699元', 'subj', '2018-02-07 16:03:44');
INSERT INTO `list` VALUES ('5', '53度习酒绕藏1998...', '../img/v5.jpg', '458元', 'subj', '2018-02-07 16:03:48');
INSERT INTO `list` VALUES ('6', '整箱钜惠 澳大利亚....', '../img/v6.jpg', '259元', 'subj', '2018-02-07 16:03:53');
INSERT INTO `list` VALUES ('7', '52度五粮液股份 六....', '../img/v7.jpg', '239元', 'subj', '2018-02-07 16:03:56');
INSERT INTO `list` VALUES ('9', '51度茅台汉酱酒500ml', '../img/h2.jpg', '358元', 'maotai', '2018-02-07 16:11:57');
INSERT INTO `list` VALUES ('10', '53度茅台赖茅酒（传承）5...', '../img/h3.jpg', '399元', 'maotai', '2018-02-07 16:12:10');
INSERT INTO `list` VALUES ('11', '53度茅台贵州大曲丁酉鸡...', '../img/h4.jpg', '1199元', 'maotai', '2018-02-07 16:14:41');
INSERT INTO `list` VALUES ('12', '53度茅台水立方酒纪念版...', '../img/h5.jpg', '399元', 'maotai', '2018-02-07 16:15:48');
INSERT INTO `list` VALUES ('13', '', '../img/h6.jpg', '', 'maotai', '2018-02-09 00:06:17');
INSERT INTO `list` VALUES ('8', ' ', '../img/h1.jpg', '', 'maotai', '2018-02-09 11:57:15');
INSERT INTO `list` VALUES ('14', '53度茅台迎宾（中国红）...', '../img/h7.jpg', '128元', 'maotai', '2018-02-07 16:28:42');
INSERT INTO `list` VALUES ('15', '53度茅台水立方北京国际...', '../img/h8.jpg', '980元', 'maotai', '2018-02-07 16:28:45');
INSERT INTO `list` VALUES ('16', '53度茅台迎宾酒嘉宾级（2...', '../img/h9.jpg', '168元', 'maotai', '2018-02-07 16:28:49');
INSERT INTO `list` VALUES ('17', '53度茅台贵州大曲80年代...', '../img/h10.jpg', '159元', 'maotai', '2018-02-07 16:31:28');
INSERT INTO `list` VALUES ('18', '  ', '../img/x1.jpg', '  ', 'nian', '2018-02-07 20:11:10');
INSERT INTO `list` VALUES ('19', '53度茅台水立方（2013...', '../img/x2.jpg', '498元', 'nian', '2018-02-07 16:31:40');
INSERT INTO `list` VALUES ('20', '39度五粮液股份自园春（1...', '../img/x3.jpg', '99元', 'nian ', '2018-02-08 10:32:00');
INSERT INTO `list` VALUES ('21', '52度伊力特（雪柔壹号）（...', '../img/x4.jpg', '129元', 'nian', '2018-02-07 16:35:09');
INSERT INTO `list` VALUES ('22', '53度五粮液股份 永福酱酒...', '../img/x5.jpg', '429元', 'nian', '2018-02-07 16:36:21');
INSERT INTO `list` VALUES ('23', '', '../img/x6.jpg', '', 'nian', '2018-02-07 16:39:27');
INSERT INTO `list` VALUES ('24', '50度古井青海大曲（99-00...', '../img/x7.jpg', '138元', 'nian', '2018-02-07 16:39:15');
INSERT INTO `list` VALUES ('25', '52度五粮液六和液盛典装...', '../img/x8.jpg', '159元', 'nian', '2018-02-07 16:40:26');
INSERT INTO `list` VALUES ('26', '53度郎酒紫砂郎（2011-2...', '../img/x9.jpg', '208元', 'nian', '2018-02-07 16:42:02');
INSERT INTO `list` VALUES ('27', '42度扳倒井福樽（2012年...', '../img/x10.jpg', '68元', 'nian', '2018-02-07 16:43:58');
INSERT INTO `list` VALUES ('28', ' ', '../img/m1.jpg', '', 'bai', '2018-02-08 10:33:29');
INSERT INTO `list` VALUES ('30', '52度红坛酒鬼酒（高度...', '../img/m2.jpg', '328元', 'bai', '2018-02-09 10:02:03');
INSERT INTO `list` VALUES ('31', '52度水井坊往事500ml', '../img/m3.jpg', '268元', 'bai', '2018-02-07 16:51:37');
INSERT INTO `list` VALUES ('32', '52度五粮液金色土豪金色...', '../img/m4.jpg', '1199元', 'bai ', '2018-02-07 16:52:28');
INSERT INTO `list` VALUES ('33', '53度习酒古韵酱香珍藏级...', '../img/m5.jpg', '3999元', 'bai', '2018-02-07 16:53:28');
INSERT INTO `list` VALUES ('34', ' ', '../img/m6.jpg', '', 'bai', '2018-02-09 10:01:26');
INSERT INTO `list` VALUES ('35', '50度五粮液10年份酒 玻璃...', '../img/m7.jpg', '1099元', 'bai', '2018-02-07 16:55:42');
INSERT INTO `list` VALUES ('36', '52度泸州老绕特曲古法酿...', '../img/m8.jpg', '188元', 'bai', '2018-02-07 16:57:06');
INSERT INTO `list` VALUES ('37', '52度全兴大曲青花瓷15年...', '../img/m9.jpg', '399元', 'bai ', '2018-02-07 16:58:16');
INSERT INTO `list` VALUES ('38', '52度水井坊国际商务装50...', '../img/m10.jpg', '528元', 'bai', '2018-02-07 16:59:18');
INSERT INTO `list` VALUES ('39', '   ', '../img/u1.jpg', ' ', 'yang', '2018-02-07 21:22:53');
INSERT INTO `list` VALUES ('40', '意大利帝力上帝之手莫斯...', '../img/u2.jpg', '65元', 'yang', '2018-02-07 17:02:04');
INSERT INTO `list` VALUES ('41', '法国拉菲珍藏颇尔多干红...', '../img/u3.jpg', '399元', 'yang', '2018-02-07 17:02:13');
INSERT INTO `list` VALUES ('42', '法国香奈鸽笼白长相思白葡...', '../img/u4.jpg', '99元', 'yang', '2018-02-07 17:03:28');
INSERT INTO `list` VALUES ('43', '长城华夏92木盒珍藏级葡...', '../img/u5.jpg', '155元', 'yang', '2018-02-07 17:04:22');
INSERT INTO `list` VALUES ('44', '   ', '../img/u6.jpg', ' ', 'yang', '2018-02-07 21:22:54');
INSERT INTO `list` VALUES ('45', '法国酩悦香槟750ml', '../img/u7.jpg', '368元', 'yang', '2018-02-07 17:05:55');
INSERT INTO `list` VALUES ('46', '澳大利亚奔富BIN2西拉子...', '../img/u8.jpg', '165元', 'yang', '2018-02-07 17:06:53');
INSERT INTO `list` VALUES ('47', '澳大利亚奔富寇兰尚西拉...', '../img/u9.jpg', '89元', 'yang ', '2018-02-08 10:32:25');
INSERT INTO `list` VALUES ('48', '智利甘露红魔鬼卡本呢赤...', '../img/u10.jpg', '299元', 'yang ', '2018-02-07 17:09:15');
INSERT INTO `list` VALUES ('49', '   ', '../img/y1.jpg', ' ', 'pu', '2018-02-07 21:22:55');
INSERT INTO `list` VALUES ('50', '大摩12年苏格兰单一麦芽...', '../img/y2.jpg', '388元', 'pu', '2018-02-07 17:12:01');
INSERT INTO `list` VALUES ('51', '杰克丹呢田纳西州威士忌7...', '../img/y3.jpg', '145元', 'pu', '2018-02-07 17:13:57');
INSERT INTO `list` VALUES ('52', '芝华士12年威士忌700ml...', '../img/y4.jpg', '208元', 'pu', '2018-02-07 17:14:21');
INSERT INTO `list` VALUES ('53', '人头马俱乐部干邑白兰地7...', '../img/y5.jpg', '599元', 'pu', '2018-02-07 17:15:14');
INSERT INTO `list` VALUES ('54', '52度剑南春500ml', '../img/p1.jpg', '399元', 'dian', '2018-02-07 17:16:45');
INSERT INTO `list` VALUES ('55', '52度剑南春500ml', '../img/p2.jpg', '309元', 'dian', '2018-02-07 17:18:45');
INSERT INTO `list` VALUES ('56', '52度剑南春500ml', '../img/p3.jpg', '288元', 'dian', '2018-02-07 17:19:38');
INSERT INTO `list` VALUES ('57', '52度剑南春500ml', '../img/p4.jpg', '628元', 'dian', '2018-02-07 17:19:55');
INSERT INTO `list` VALUES ('58', '52度剑南春500ml', '../img/p5.jpg', '198元', 'dian', '2018-02-07 17:20:47');
INSERT INTO `list` VALUES ('59', '芝华士12年威士忌70...|', '../img/f1.jpg', '339元', 'repin', '2018-02-07 17:24:03');
INSERT INTO `list` VALUES ('60', '芝华士12年威士忌70...|', '../img/f2.jpg', '208元', 'repin', '2018-02-07 17:25:39');
INSERT INTO `list` VALUES ('61', '芝华士12年威士忌70...|', '../img/f3.jpg', '199元', 'repin', '2018-02-07 17:25:50');
INSERT INTO `list` VALUES ('62', '芝华士12年威士忌70...|', '../img/f4.jpg', '165元', 'repin', '2018-02-07 17:26:03');
INSERT INTO `list` VALUES ('63', '购酒网（上海）供应链管理总部简介', '../img/s1.jpg', ' ', 'shi', '2018-02-08 10:33:16');
INSERT INTO `list` VALUES ('64', '五粮迎宾酒城迎天下客', '../img/s2.jpg', ' ', 'shi', '2018-02-08 10:33:16');
INSERT INTO `list` VALUES ('65', '茅台镇舒心酱酒微电影', '../img/s3.jpg', ' ', 'shi', '2018-02-08 10:33:17');
INSERT INTO `list` VALUES ('66', '一分钟教你如何把茶调成高调逼格鸡尾酒', '../img/s4.jpg', ' ', 'shi', '2018-02-08 10:33:18');

-- ----------------------------
-- Table structure for listb
-- ----------------------------
DROP TABLE IF EXISTS `listb`;
CREATE TABLE `listb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '商品名',
  `img` varchar(255) NOT NULL,
  `price` varchar(10) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `reg_data` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listb
-- ----------------------------
INSERT INTO `listb` VALUES ('1', '53度茅台赖茅酒（传承）5...', '../img/l1.jpg', '￥239', '评论：52条', '2018-02-07 22:19:21');
INSERT INTO `listb` VALUES ('2', '52度水井坊往事500ml', '../img/l2.jpg', '￥358', '评论：23条', '2018-02-07 22:19:55');
INSERT INTO `listb` VALUES ('3', '53度茅台赖茅酒（传承）5...', '../img/l3.jpg', '￥399', '评论：25条', '2018-02-07 22:20:02');
INSERT INTO `listb` VALUES ('4', '53度茅台水立方酒纪念版..', '../img/l4.jpg', '￥1199', '评论：29条', '2018-02-07 22:20:05');
INSERT INTO `listb` VALUES ('5', '52度泸州老绕特曲古法酿...', '../img/l5.jpg', '￥399', '评论：13条', '2018-02-07 22:20:09');
INSERT INTO `listb` VALUES ('6', '53度茅台水立方酒纪念版...', '../img/l6.jpg', '￥128', '评论：13条', '2018-02-07 22:20:13');
INSERT INTO `listb` VALUES ('7', '53度茅台迎宾（中国红）...', '../img/l7.jpg', '￥980', '评论：23条', '2018-02-07 22:20:17');
INSERT INTO `listb` VALUES ('8', '53度茅台水立方北京国际...', '../img/l8.jpg', '￥168', '评论：20条', '2018-02-07 22:20:23');
INSERT INTO `listb` VALUES ('9', '53度茅台贵州大曲80年代...', '../img/l9.jpg', '￥159', '评论：53条', '2018-02-07 22:20:27');
INSERT INTO `listb` VALUES ('10', '53度茅台贵州大曲80年代...', '../img/l10.jpg', '￥328', '评论：23条', '2018-02-07 22:20:31');
INSERT INTO `listb` VALUES ('11', '53度茅台水立方酒纪念版...', '../img/l11.jpg', '￥309', '评论：230条', '2018-02-07 22:20:46');
INSERT INTO `listb` VALUES ('12', '52度红坛酒鬼酒（高度柔和...', '../img/l12.jpg', '￥1199', '评论：236条', '2018-02-07 22:20:53');
INSERT INTO `listb` VALUES ('13', '52度红坛酒鬼酒（高度柔和...', '../img/l13.jpg', '￥3999', '评论：233条', '2018-02-07 22:20:57');
INSERT INTO `listb` VALUES ('14', '50度五粮液10年份酒 玻璃...', '../img/l14.jpg', '￥1099', '评论：263条', '2018-02-07 22:21:02');
INSERT INTO `listb` VALUES ('15', '53度茅台水立方酒纪念版...', '../img/l15.jpg', '￥188', '评论：3条', '2018-02-07 22:21:06');
INSERT INTO `listb` VALUES ('16', '53度习酒古韵酱香珍藏级...', '../img/l16.jpg', '￥399', '评论：23条', '2018-02-07 22:21:09');
INSERT INTO `listb` VALUES ('17', '53度茅台水立方酒纪念版...', '../img/l15.jpg', '￥188', '评论：3条', '2018-02-07 22:21:15');
INSERT INTO `listb` VALUES ('18', '52度全兴大曲青花瓷15年...', '../img/l18.jpg', '￥65', '评论：23条', '2018-02-07 22:21:20');
INSERT INTO `listb` VALUES ('20', '53度红坛酒鬼（高度柔和...', '../img/l1.jpg', '￥65', '评论：236条', '2018-02-07 22:24:56');
INSERT INTO `listb` VALUES ('19', '52度红坛酒鬼酒（高度柔和...', '../img/l12.jpg', '￥1199', '评论：236条', '2018-02-07 22:21:25');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL COMMENT '性别',
  `reg_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'LILI', '12345612', '18775623444', '15', null, null, '2018-02-06 21:30:20');
INSERT INTO `user` VALUES ('2', '张三', '342434323', '13467344556', '20', null, null, '2018-02-06 21:30:22');
INSERT INTO `user` VALUES ('3', '李四', '23412322', '18745667891', '23', null, null, '2018-02-06 21:30:23');
INSERT INTO `user` VALUES ('4', 'lenmo', '34523212', '13499234553', '25', null, null, '2018-02-06 21:30:25');
SET FOREIGN_KEY_CHECKS=1;
