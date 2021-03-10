import React from "react";
import { Text } from "react-native";
import packages from "../packages"

function getParsedModule(code, moduleName, packages) {
    const _this = Object.create(packages);
    function require(name) {
        if (!(name in _this) && moduleName === name) {
            let module = { exports: {} };
            _this[name] = () => module;
            let wrapper = Function("require, exports, module", code);
            wrapper(require, module.exports, module);
        } else if (!(name in _this)) {
            throw `Module '${name}' not found`
        }
        return (_this[name]()).exports;
    }

    return require(moduleName);
}

export async function fetchComponent(id) {
    try {
        const text = await fetch(`http://10.0.2.2:8080/${id}.js?time=${Date.now()}`).then(a => {
            if (!a.ok) {
                throw new Error('Network response was not ok');
            }
            return a.text()
        });
        return { default: getParsedModule(text, id, packages) };
    } catch (error) {
        console.log(error)
        return { default() { return <Text>Failed to Render</Text> } }
    }
}