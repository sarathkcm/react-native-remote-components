import React from "react";
import ReactNative from "react-native";
import * as ReactRedux from "react-redux";
import ReactNativeElements from "react-native-elements";
const Packages = {
    "react": () => React,
    "react-native": () => ReactNative,
    "react-redux": () => ReactRedux,
    "react-native-elements": () => ReactNativeElements
}


const fromPairs = (pairs) => Object.assign({}, ...pairs.map(([k, v]) => ({ [k]: v })));
const AllPackages = fromPairs(
    Object.keys(Packages).map(k => [k, () => ({ exports: Packages[k]() })])
);

export default AllPackages