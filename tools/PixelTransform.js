// 公式：设计稿宽度 / 元素宽度 = 手机屏幕宽度 / 手机中的元素宽度
// Formula: design width(px) / element width(px) = phone screen width(dp) / phone element width(dp)
// 未知数(X): 手机中元素的宽度
// screen ： 手机的屏幕尺寸 The screen size of the phone
// window ： App 的可用尺寸 The available size of the App

/**
 * 可用窗口大小:
 *  W: 390
 *  H: 844 
 *  Scale: 3
 */

import { Dimensions } from "react-native";

/**
 * 窗口宽度 Window(available size of the App) Width
 */
export const screenWidth = Dimensions.get("window").width;

/**
 * 窗口高度 Window(available size of the App) Height
 */
export const screenHeight = Dimensions.get("window").height;

/**
 * 窗口像素比 Window pixel ratio
 */
export const screenScale = Dimensions.get("window").scale;

/**
 * 窗口宽高度像素比 
 */
 const {width, height, scale} = Dimensions.get("window")

/**
 * 我们没有带详细尺寸的设计图。如果有可以用这个。
 * 但是我是通过iphone13设计的，不同的手机宽高不同。
 * 有了下面的公式，任何手机都可以正常运行。
 * We don't have plans with detailed measurements. 
 * You can use this if you have one. 
 * But I designed it with the iphone13, and different phones are different in width and height.
 * With the following formula, any phone will work.
 * @param {*} elePx 
 * @returns 
 */
export const pxToDp_W = (elePx) => width * elePx / 390;
export const pxToDp_H = (elePx) => height * elePx / 844;